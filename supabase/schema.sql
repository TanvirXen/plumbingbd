-- Orders database for emergencyeps.com, electricservicebd.com and plumbingservicebd.com (one Supabase project for all three).
-- Run once: Supabase dashboard → SQL Editor → New query → paste this whole file → Run. Safe to run again.
--
-- How it works (no backend server):
--   • The websites call create_order() with the public anon key. It saves the order and returns the Order ID
--     (ES-301026-1 = letters - job date ddmmyy - number for that day). Visitors can't read or change any order.
--   • The /admin/ page signs in with Supabase Auth. Only users listed in public.admins can see and update orders.

-- ── Tables ───────────────────────────────────────────────────────────────────
create table if not exists public.orders (
  id             bigint generated always as identity primary key,
  order_id       text not null unique,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now(),
  status         text not null default 'New'
                 check (status in ('New', 'Confirmed', 'In progress', 'Done', 'Cancelled')),
  service        text,
  order_type     text,
  work           text,
  issue          text,
  name           text,
  contact        text,
  address        text,
  location       text,
  preferred_date date,
  preferred_time text,
  urgent         boolean not null default false,
  language       text,
  website        text,
  owner_notes    text
);
create index if not exists orders_created_at_idx on public.orders (created_at desc);

-- Last number used per "LETTERS-ddmmyy"
create table if not exists public.order_counters (
  prefix text primary key,
  last   int  not null default 0
);

-- Who may use /admin/. Add people with the insert at the bottom of this file.
create table if not exists public.admins (
  user_id uuid primary key references auth.users (id) on delete cascade,
  email   text
);

alter table public.orders         enable row level security;
alter table public.order_counters enable row level security;
alter table public.admins         enable row level security;

-- ── Admin access ─────────────────────────────────────────────────────────────
create or replace function public.is_admin()
returns boolean
language sql stable security definer set search_path = public
as $$ select exists (select 1 from public.admins where user_id = auth.uid()) $$;

drop policy if exists "admins read orders"   on public.orders;
drop policy if exists "admins update orders" on public.orders;
drop policy if exists "admins delete orders" on public.orders;
drop policy if exists "see own admin row"    on public.admins;
create policy "admins read orders"   on public.orders for select to authenticated using (public.is_admin());
create policy "admins update orders" on public.orders for update to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "admins delete orders" on public.orders for delete to authenticated using (public.is_admin());
create policy "see own admin row"    on public.admins for select to authenticated using (user_id = auth.uid());

-- Admins may only change status and notes; the order itself stays as the customer sent it.
revoke update on public.orders from authenticated;
grant  update (status, owner_notes) on public.orders to authenticated;

create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$ begin new.updated_at := now(); return new; end $$;
drop trigger if exists orders_touch on public.orders;
create trigger orders_touch before update on public.orders for each row execute function public.touch_updated_at();

-- ── New order (called by the websites) ───────────────────────────────────────
create or replace function public.create_order(o jsonb)
returns text
language plpgsql security definer set search_path = public
as $$
declare
  v_letters text := upper(coalesce(nullif(o ->> 'letters', ''), 'GS'));
  v_site    text := lower(regexp_replace(coalesce(o ->> 'website', ''), '^(https?://)?(www\.)?([^/]+).*$', '\3'));
  v_urgent  boolean := coalesce((o ->> 'urgent')::boolean, false);
  v_day     date;
  v_pick    date;
  v_prefix  text;
  v_n       int;
  v_oid     text;
begin
  -- GS Order now · ES Electric · PS Plumbing · AS AC · HS Home · CS Commercial
  if v_letters !~ '^(GS|ES|PS|AS|HS|CS)$' then raise exception 'bad letters'; end if;
  if v_site not in ('emergencyeps.com', 'electricservicebd.com', 'plumbingservicebd.com') then
    raise exception 'unknown website';
  end if;
  -- Simple flood guard: at most 30 new orders a minute across all sites
  if (select count(*) from public.orders where created_at > now() - interval '1 minute') >= 30 then
    raise exception 'too many orders, try again in a minute';
  end if;

  -- Job date: the picked date; Urgent or no date = today in Dhaka
  v_day := (now() at time zone 'Asia/Dhaka')::date;
  begin
    if coalesce(o ->> 'date', '') ~ '^\d{4}-\d{2}-\d{2}$' then v_pick := (o ->> 'date')::date; end if;
  exception when others then v_pick := null;
  end;
  if v_pick is not null and (v_pick < v_day - 1 or v_pick > v_day + 60) then v_pick := null; end if;

  v_prefix := v_letters || '-' || to_char(case when v_urgent or v_pick is null then v_day else v_pick end, 'DDMMYY');
  insert into public.order_counters as c (prefix, last) values (v_prefix, 1)
    on conflict (prefix) do update set last = c.last + 1
    returning c.last into v_n;
  v_oid := v_prefix || '-' || v_n;

  insert into public.orders (order_id, service, order_type, work, issue, name, contact, address, location,
                             preferred_date, preferred_time, urgent, language, website)
  values (v_oid,
          left(nullif(trim(o ->> 'service'), ''), 200),
          left(nullif(trim(o ->> 'orderType'), ''), 60),
          left(nullif(trim(o ->> 'work'), ''), 400),
          left(nullif(trim(o ->> 'issue'), ''), 2000),
          left(nullif(trim(o ->> 'name'), ''), 120),
          left(nullif(regexp_replace(coalesce(o ->> 'contact', ''), '[^0-9+]', '', 'g'), ''), 20),
          left(nullif(trim(o ->> 'address'), ''), 400),
          left(nullif(trim(o ->> 'location'), ''), 300),
          case when v_urgent then null else v_pick end,
          left(nullif(trim(o ->> 'time'), ''), 60),
          v_urgent,
          left(nullif(trim(o ->> 'language'), ''), 20),
          v_site);
  return v_oid;
end
$$;

revoke all     on function public.create_order(jsonb) from public;
grant  execute on function public.create_order(jsonb) to anon, authenticated;

-- Live updates in /admin/ (new orders appear without refreshing). Realtime respects the policies above.
do $$ begin
  alter publication supabase_realtime add table public.orders;
exception when duplicate_object or undefined_object then null;
end $$;

-- ── Add an admin ─────────────────────────────────────────────────────────────
-- 1. Authentication → Users → Add user → "Create new user" (email + password, tick Auto Confirm).
-- 2. Put that email below and run just this statement:
-- insert into public.admins (user_id, email) select id, email from auth.users where email = 'owner@example.com' on conflict do nothing;
