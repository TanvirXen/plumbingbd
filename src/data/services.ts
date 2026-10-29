// Every service lives on exactly ONE site (no duplicate pages across the two domains).
// `pairs` = "Often booked together" links to the SISTER site's service slugs.
// No prices are shown anywhere — every service has a WhatsApp button instead.

import type { SiteKey } from "./sites";

export type Group = "residential" | "home" | "commercial";

export interface Faq { q: string; a: string }

export interface Service {
  slug: string;
  site: SiteKey;
  group: Group;
  name: string;
  nameBn: string;
  summary: string;
  summaryBn: string;
  includes: string[];
  includesBn: string[];
  faqs: Faq[];
  faqsBn: Faq[];
  images: string[];
  pairs: string[];
}

export const services: Service[] = [
  // ───────────── ELECTRIC · residential ─────────────
  {
    slug: "electrical-checkup-inspection", site: "electric", group: "residential",
    name: "Electrical Checkup & Inspection", nameBn: "ইলেকট্রিক্যাল চেকআপ ও ইন্সপেকশন",
    summary: "A full safety check of your flat's wiring, DB box, breakers, earthing, sockets and heavy appliance lines, with a clear list of problems before any work starts.",
    summaryBn: "বাসার ওয়্যারিং, ডিবি বক্স, ব্রেকার, আর্থিং, সকেট ও ভারী যন্ত্রের লাইনের পূর্ণ নিরাপত্তা চেক — কাজ শুরুর আগে সমস্যার স্পষ্ট তালিকা দেওয়া হয়।",
    includes: ["DB box and breaker test", "Earthing and leakage check", "Socket, switch and plug-point check", "Load check for AC, geyser and IPS lines", "Written list of problems found"],
    includesBn: ["ডিবি বক্স ও ব্রেকার টেস্ট", "আর্থিং ও লিকেজ চেক", "সকেট, সুইচ ও প্লাগ পয়েন্ট চেক", "এসি, গিজার ও আইপিএস লাইনের লোড চেক", "পাওয়া সমস্যার লিখিত তালিকা"],
    faqs: [
      { q: "How long does an electrical inspection take?", a: "Most flats take 45–90 minutes. Larger duplexes or older buildings can take longer." },
      { q: "Do I have to do the repairs with you?", a: "No. You get the problem list and decide. If you want us to fix them, we can usually do it in the same visit." },
    ],
    faqsBn: [
      { q: "ইলেকট্রিক্যাল ইন্সপেকশনে কত সময় লাগে?", a: "বেশিরভাগ ফ্ল্যাটে ৪৫–৯০ মিনিট। বড় ডুপ্লেক্স বা পুরোনো বিল্ডিংয়ে একটু বেশি সময় লাগতে পারে।" },
      { q: "মেরামত কি আপনাদের দিয়েই করাতে হবে?", a: "না। সমস্যার তালিকা পেয়ে আপনি সিদ্ধান্ত নেবেন। চাইলে সাধারণত একই ভিজিটে আমরা ঠিক করে দিই।" },
    ],
    images: ["project-visit", "socket-1", "panel-2"], pairs: ["plumbing-checkup-inspection"],
  },
  {
    slug: "ceiling-fan-installation", site: "electric", group: "residential",
    name: "Ceiling Fan Installation & Uninstallation", nameBn: "সিলিং ফ্যান লাগানো ও খোলা",
    summary: "We install new ceiling fans and remove old ones safely: hook strength check, rod and canopy fitting, wiring, regulator connection and a balance test.",
    summaryBn: "নতুন সিলিং ফ্যান লাগানো ও পুরোনো ফ্যান খোলা — হুক চেক, রড ও ক্যানোপি ফিটিং, ওয়্যারিং, রেগুলেটর সংযোগ ও ব্যালান্স টেস্ট সহ।",
    includes: ["Ceiling hook strength check", "Fan, rod and canopy fitting", "Wiring and regulator connection", "Balance and wobble test", "Old fan removal on request"],
    includesBn: ["সিলিং হুকের শক্তি চেক", "ফ্যান, রড ও ক্যানোপি ফিটিং", "ওয়্যারিং ও রেগুলেটর সংযোগ", "ব্যালান্স ও কাঁপুনি টেস্ট", "চাইলে পুরোনো ফ্যান খোলা"],
    faqs: [
      { q: "Can you install a fan where there is no hook?", a: "Yes. We fit a new hook or anchor after checking the ceiling slab." },
      { q: "Do you bring the fan?", a: "Usually you buy the fan. We can also buy it for you on request and bring the shop receipt." },
    ],
    faqsBn: [
      { q: "হুক না থাকলে কি ফ্যান লাগানো যাবে?", a: "হ্যাঁ। সিলিং স্ল্যাব দেখে আমরা নতুন হুক বা অ্যাংকর লাগিয়ে দিই।" },
      { q: "ফ্যান কি আপনারা নিয়ে আসেন?", a: "সাধারণত ফ্যান আপনি কেনেন। চাইলে আমরা কিনে এনে দোকানের রসিদ সহ দিই।" },
    ],
    images: ["fan-install-1", "fan-install-2", "fan-install-3"], pairs: [],
  },
  {
    slug: "ceiling-fan-servicing-repair", site: "electric", group: "residential",
    name: "Ceiling Fan Servicing & Repair", nameBn: "সিলিং ফ্যান সার্ভিসিং ও মেরামত",
    summary: "Slow, noisy or wobbling fan? We clean, oil and balance the fan, replace capacitors and bearings, and fix regulator and wiring faults.",
    summaryBn: "ফ্যান আস্তে ঘোরে, শব্দ করে বা কাঁপে? আমরা পরিষ্কার, অয়েলিং, ব্যালান্স, ক্যাপাসিটর ও বেয়ারিং বদল এবং রেগুলেটর-ওয়্যারিং মেরামত করি।",
    includes: ["Full cleaning and oiling", "Capacitor test and replacement", "Bearing check", "Blade balancing", "Regulator and wiring fix"],
    includesBn: ["সম্পূর্ণ পরিষ্কার ও অয়েলিং", "ক্যাপাসিটর টেস্ট ও বদল", "বেয়ারিং চেক", "ব্লেড ব্যালান্সিং", "রেগুলেটর ও ওয়্যারিং মেরামত"],
    faqs: [
      { q: "Why is my fan running slowly?", a: "The most common cause is a weak capacitor. It is a quick replacement." },
      { q: "Do you show the old parts?", a: "Yes. We show you any part we replace and tell you before replacing it." },
    ],
    faqsBn: [
      { q: "ফ্যান আস্তে ঘোরে কেন?", a: "সবচেয়ে সাধারণ কারণ দুর্বল ক্যাপাসিটর। এটি দ্রুত বদলানো যায়।" },
      { q: "পুরোনো পার্টস কি দেখান?", a: "হ্যাঁ। যে পার্টস বদলাই তা আপনাকে দেখাই এবং বদলানোর আগে জানিয়ে নিই।" },
    ],
    images: ["fan-install-3", "fan-install-2"], pairs: [],
  },
  {
    slug: "light-installation-repair", site: "electric", group: "residential",
    name: "Light Installation & Repair", nameBn: "লাইট লাগানো ও মেরামত",
    summary: "Installation and repair of LED lights, tube lights, chandeliers, wall lamps and outdoor lights, including new switch points and safe wiring.",
    summaryBn: "এলইডি লাইট, টিউব লাইট, ঝাড়বাতি, ওয়াল ল্যাম্প ও বাইরের লাইট লাগানো ও মেরামত — নতুন সুইচ পয়েন্ট ও নিরাপদ ওয়্যারিং সহ।",
    includes: ["LED panel, tube and bulb fitting", "Chandelier installation", "Wall and outdoor lights", "Flickering and fault repair", "New switch point if needed"],
    includesBn: ["এলইডি প্যানেল, টিউব ও বাল্ব ফিটিং", "ঝাড়বাতি লাগানো", "ওয়াল ও বাইরের লাইট", "লাইট মিটমিট করা ও ত্রুটি মেরামত", "প্রয়োজনে নতুন সুইচ পয়েন্ট"],
    faqs: [
      { q: "Do you install heavy chandeliers?", a: "Yes. We check the ceiling and use a proper hook or bracket, with two people when needed." },
      { q: "My lights flicker. What causes it?", a: "Usually a loose connection, a weak driver or a faulty switch. We find and fix the cause." },
    ],
    faqsBn: [
      { q: "ভারী ঝাড়বাতি কি লাগান?", a: "হ্যাঁ। সিলিং চেক করে সঠিক হুক বা ব্র্যাকেট দিয়ে, প্রয়োজনে দুজন মিলে লাগাই।" },
      { q: "লাইট মিটমিট করে কেন?", a: "সাধারণত ঢিলা সংযোগ, দুর্বল ড্রাইভার বা নষ্ট সুইচের কারণে। আমরা কারণ খুঁজে ঠিক করি।" },
    ],
    images: ["chandelier-1", "chandelier-2", "light-1"], pairs: ["bathroom-kitchen-plumbing"],
  },
  {
    slug: "mcb-installation", site: "electric", group: "residential",
    name: "Main Circuit Breaker (MCB) Installation", nameBn: "মেইন সার্কিট ব্রেকার (এমসিবি) লাগানো",
    summary: "Correctly rated MCBs for your flat and heavy appliances, so a fault trips the breaker instead of burning wires — for AC, geyser, pump and kitchen lines.",
    summaryBn: "ফ্ল্যাট ও ভারী যন্ত্রের জন্য সঠিক রেটিংয়ের এমসিবি — এসি, গিজার, পাম্প ও কিচেন লাইনের জন্য, যাতে সমস্যায় তার না পুড়ে ব্রেকার ট্রিপ করে।",
    includes: ["Load check to choose the right rating", "MCB fitting (brand of your choice)", "Tight, labelled connections", "Trip test", "Advice on RCCB / earth leakage protection"],
    includesBn: ["সঠিক রেটিং বাছতে লোড চেক", "পছন্দের ব্র্যান্ডের এমসিবি ফিটিং", "টাইট ও লেবেল করা সংযোগ", "ট্রিপ টেস্ট", "আরসিসিবি / আর্থ লিকেজ সুরক্ষার পরামর্শ"],
    faqs: [
      { q: "My MCB keeps tripping. Should I replace it?", a: "Not always. Tripping often means overload or a fault in the line. We find the cause first so the new breaker doesn't trip too." },
      { q: "Which MCB rating do I need for a 1.5 ton AC?", a: "It depends on the AC and cable size. Usually 16–20A with a suitable cable; we confirm on site." },
    ],
    faqsBn: [
      { q: "এমসিবি বারবার ট্রিপ করে, বদলাতে হবে?", a: "সবসময় না। ট্রিপ করা মানে প্রায়ই ওভারলোড বা লাইনে সমস্যা। আগে কারণ খুঁজি, যাতে নতুন ব্রেকারও ট্রিপ না করে।" },
      { q: "১.৫ টন এসির জন্য কত অ্যাম্পিয়ারের এমসিবি লাগে?", a: "এসি ও তারের সাইজের উপর নির্ভর করে। সাধারণত উপযুক্ত তারের সাথে ১৬–২০A; সরেজমিনে নিশ্চিত করি।" },
    ],
    images: ["panel-5", "panel-7"], pairs: ["water-pump-installation"],
  },
  {
    slug: "mdb-servicing", site: "electric", group: "residential",
    name: "Main Distribution Board (MDB) Servicing", nameBn: "মেইন ডিস্ট্রিবিউশন বোর্ড (এমডিবি) সার্ভিসিং",
    summary: "Servicing of apartment-building MDBs: cleaning, tightening, checking busbars and breakers, replacing burnt parts and balancing load between phases.",
    summaryBn: "অ্যাপার্টমেন্ট বিল্ডিংয়ের এমডিবি সার্ভিসিং — পরিষ্কার, টাইটনিং, বাসবার ও ব্রেকার চেক, পোড়া পার্টস বদল এবং ফেজ লোড ব্যালান্স।",
    includes: ["Dust cleaning", "Terminal and busbar tightening", "Burnt cable and breaker replacement", "Phase load balancing", "Service report for the building committee"],
    includesBn: ["ধুলা পরিষ্কার", "টার্মিনাল ও বাসবার টাইটনিং", "পোড়া তার ও ব্রেকার বদল", "ফেজ লোড ব্যালান্সিং", "বিল্ডিং কমিটির জন্য সার্ভিস রিপোর্ট"],
    faqs: [
      { q: "How often should a building MDB be serviced?", a: "At least once a year, and before summer when AC load is highest." },
      { q: "Will power be cut during servicing?", a: "A short shutdown is needed. We schedule it with the building committee, usually in the morning." },
    ],
    faqsBn: [
      { q: "বিল্ডিংয়ের এমডিবি কতদিন পরপর সার্ভিস করা উচিত?", a: "অন্তত বছরে একবার, আর গরমের আগে যখন এসির লোড সবচেয়ে বেশি থাকে।" },
      { q: "সার্ভিসিংয়ের সময় কি বিদ্যুৎ বন্ধ থাকবে?", a: "অল্প সময়ের জন্য বন্ধ রাখতে হয়। বিল্ডিং কমিটির সাথে মিলিয়ে সাধারণত সকালে করি।" },
    ],
    images: ["panel-room-2", "panel-1", "panel-3"], pairs: [],
  },
  {
    slug: "switch-socket-installation", site: "electric", group: "residential",
    name: "Switch, Socket & Power Point Installation", nameBn: "সুইচ, সকেট ও পাওয়ার পয়েন্ট লাগানো",
    summary: "New or replacement switches, switch boards, 2-pin/3-pin sockets and dedicated power points for fridge, washing machine, AC and microwave.",
    summaryBn: "নতুন বা পরিবর্তন — সুইচ, সুইচ বোর্ড, ২-পিন/৩-পিন সকেট এবং ফ্রিজ, ওয়াশিং মেশিন, এসি ও মাইক্রোওয়েভের জন্য আলাদা পাওয়ার পয়েন্ট।",
    includes: ["Switch and socket replacement", "New switch board fitting", "Dedicated power points", "Burnt socket repair", "Earth connection check"],
    includesBn: ["সুইচ ও সকেট বদল", "নতুন সুইচ বোর্ড ফিটিং", "আলাদা পাওয়ার পয়েন্ট", "পোড়া সকেট মেরামত", "আর্থ সংযোগ চেক"],
    faqs: [
      { q: "Can you add a new socket without breaking the wall?", a: "Often yes, using surface conduit. For a hidden (concealed) line some wall cutting is needed." },
      { q: "My socket is burnt. Is it dangerous?", a: "Yes. Stop using it and switch off that line's breaker. A burnt socket usually means a loose connection or overload." },
    ],
    faqsBn: [
      { q: "দেয়াল না ভেঙে কি নতুন সকেট লাগানো যায়?", a: "অনেক সময় যায়, সারফেস কন্ডুইট দিয়ে। লুকানো (কনসিল্ড) লাইনের জন্য দেয়াল কিছুটা কাটতে হয়।" },
      { q: "সকেট পুড়ে গেছে, এটা কি বিপজ্জনক?", a: "হ্যাঁ। ব্যবহার বন্ধ করুন এবং ওই লাইনের ব্রেকার বন্ধ করুন। সকেট পোড়া মানে সাধারণত ঢিলা সংযোগ বা ওভারলোড।" },
    ],
    images: ["socket-1", "socket-2", "socket-3"], pairs: ["washing-machine-installation"],
  },
  {
    slug: "short-circuit-repair", site: "electric", group: "residential",
    name: "Short Circuit Repair", nameBn: "শর্ট সার্কিট মেরামত",
    summary: "Emergency short-circuit finding and repair: we trace the faulty line, replace burnt cables, sockets and breakers, and make the circuit safe again.",
    summaryBn: "জরুরি শর্ট সার্কিট খুঁজে বের করা ও মেরামত — ত্রুটিপূর্ণ লাইন খুঁজে পোড়া তার, সকেট ও ব্রেকার বদল করে লাইন নিরাপদ করা হয়।",
    includes: ["Fault tracing line by line", "Burnt cable replacement", "Socket and breaker replacement", "Insulation test", "Safety advice"],
    includesBn: ["লাইন ধরে ধরে ত্রুটি খোঁজা", "পোড়া তার বদল", "সকেট ও ব্রেকার বদল", "ইনসুলেশন টেস্ট", "নিরাপত্তা পরামর্শ"],
    faqs: [
      { q: "What should I do right after a short circuit?", a: "Switch off the main breaker, unplug appliances and don't touch burnt points. Then message us on WhatsApp." },
      { q: "Can water leakage cause a short circuit?", a: "Yes. Seepage into walls or ceilings is a common cause. Our plumbing team can fix the leak in the same visit." },
    ],
    faqsBn: [
      { q: "শর্ট সার্কিটের পরপরই কী করব?", a: "মেইন ব্রেকার বন্ধ করুন, যন্ত্রের প্লাগ খুলুন এবং পোড়া জায়গা ছোঁবেন না। তারপর হোয়াটসঅ্যাপে আমাদের জানান।" },
      { q: "পানি চুইয়ে পড়লে কি শর্ট সার্কিট হতে পারে?", a: "হ্যাঁ। দেয়াল বা সিলিংয়ে পানি ঢোকা একটি সাধারণ কারণ। আমাদের প্লাম্বিং টিম একই ভিজিটে লিক ঠিক করতে পারে।" },
    ],
    images: ["electrical-fault", "panel-8", "panel-9"], pairs: ["water-leakage-detection-repair"],
  },
  {
    slug: "ac-geyser-electrical-connection", site: "electric", group: "residential",
    name: "AC & Geyser Electrical Connection Checkup", nameBn: "এসি ও গিজারের ইলেকট্রিক্যাল কানেকশন চেকআপ",
    summary: "Safe power lines for AC and geyser: correct cable size, dedicated breaker, earthing and socket check, so heavy appliances don't overheat wires.",
    summaryBn: "এসি ও গিজারের নিরাপদ পাওয়ার লাইন — সঠিক তারের সাইজ, আলাদা ব্রেকার, আর্থিং ও সকেট চেক, যাতে ভারী যন্ত্রে তার গরম না হয়।",
    includes: ["Cable size check", "Dedicated breaker fitting", "Earthing test", "Socket / isolator check", "New line on request"],
    includesBn: ["তারের সাইজ চেক", "আলাদা ব্রেকার ফিটিং", "আর্থিং টেস্ট", "সকেট / আইসোলেটর চেক", "চাইলে নতুন লাইন"],
    faqs: [
      { q: "Does a geyser need its own breaker?", a: "Yes. A geyser draws high current; a dedicated breaker and earthing are essential for safety." },
      { q: "Do you install the geyser itself?", a: "Our plumbing division installs the geyser and water lines; we handle the electrical side in the same visit." },
    ],
    faqsBn: [
      { q: "গিজারের কি আলাদা ব্রেকার লাগে?", a: "হ্যাঁ। গিজার বেশি কারেন্ট টানে; নিরাপত্তার জন্য আলাদা ব্রেকার ও আর্থিং জরুরি।" },
      { q: "গিজার নিজে কি আপনারা লাগান?", a: "আমাদের প্লাম্বিং বিভাগ গিজার ও পানির লাইন লাগায়; একই ভিজিটে আমরা ইলেকট্রিক্যাল অংশ করি।" },
    ],
    images: ["ac-outdoor-wall", "water-heater", "panel-6"], pairs: ["geyser-installation"],
  },
  {
    slug: "ac-installation-servicing", site: "electric", group: "residential",
    name: "AC Installation & Servicing", nameBn: "এসি লাগানো ও সার্ভিসিং",
    summary: "Split AC installation, shifting and servicing: indoor and outdoor unit mounting, copper piping, gas check and refill, cleaning, and a safe power line with its own breaker.",
    summaryBn: "স্প্লিট এসি লাগানো, স্থানান্তর ও সার্ভিসিং — ইনডোর ও আউটডোর ইউনিট লাগানো, কপার পাইপিং, গ্যাস চেক ও রিফিল, পরিষ্কার এবং আলাদা ব্রেকার সহ নিরাপদ পাওয়ার লাইন।",
    includes: ["Indoor and outdoor unit mounting", "Copper pipe, drain pipe and insulation", "Gas pressure check and refill", "Filter, coil and drain cleaning", "Dedicated breaker and cable check", "Old AC removal and shifting"],
    includesBn: ["ইনডোর ও আউটডোর ইউনিট লাগানো", "কপার পাইপ, ড্রেন পাইপ ও ইনসুলেশন", "গ্যাস প্রেশার চেক ও রিফিল", "ফিল্টার, কয়েল ও ড্রেন পরিষ্কার", "আলাদা ব্রেকার ও তার চেক", "পুরোনো এসি খোলা ও স্থানান্তর"],
    faqs: [
      { q: "How often should an AC be serviced?", a: "At least once a year, ideally before summer. In dusty areas or heavy use, every 4–6 months keeps cooling strong and bills lower." },
      { q: "My AC is not cooling. Does it need gas?", a: "Not always. Dirty filters, a blocked coil or a weak capacitor are common causes. We check gas pressure first and only refill if it is low." },
      { q: "Can you install the outdoor unit on an outside wall of a high floor?", a: "Yes. We use a proper wall bracket and safety harness, and check the wall before drilling." },
    ],
    faqsBn: [
      { q: "এসি কতদিন পরপর সার্ভিস করা উচিত?", a: "অন্তত বছরে একবার, ভালো হয় গরমের আগে। ধুলাবালির এলাকায় বা বেশি ব্যবহারে ৪–৬ মাস পরপর করলে ঠান্ডা ভালো হয় ও বিল কম আসে।" },
      { q: "এসি ঠান্ডা করছে না, গ্যাস লাগবে?", a: "সবসময় না। ময়লা ফিল্টার, বন্ধ কয়েল বা দুর্বল ক্যাপাসিটর সাধারণ কারণ। আগে গ্যাস প্রেশার চেক করি, কম থাকলে তবেই রিফিল করি।" },
      { q: "উঁচু তলার বাইরের দেয়ালে কি আউটডোর ইউনিট লাগাতে পারেন?", a: "হ্যাঁ। সঠিক ওয়াল ব্র্যাকেট ও সেফটি হার্নেস ব্যবহার করি, এবং ড্রিল করার আগে দেয়াল চেক করি।" },
    ],
    images: ["ac-indoor", "ac-outdoor-wall", "ac-outdoor-gas"], pairs: ["water-line-installation-repair"],
  },
  {
    slug: "electrical-wiring-rewiring", site: "electric", group: "residential",
    name: "Electrical Wiring & Rewiring", nameBn: "ইলেকট্রিক্যাল ওয়্যারিং ও রিওয়্যারিং",
    summary: "New wiring for flats under construction and full or partial rewiring of old flats with quality cable, conduit, DB box and proper earthing.",
    summaryBn: "নির্মাণাধীন ফ্ল্যাটে নতুন ওয়্যারিং এবং পুরোনো ফ্ল্যাটে পূর্ণ বা আংশিক রিওয়্যারিং — মানসম্মত তার, কন্ডুইট, ডিবি বক্স ও সঠিক আর্থিং সহ।",
    includes: ["Site visit and written estimate", "Concealed or surface conduit", "Quality cable of your chosen brand", "DB box and breaker layout", "Earthing and final testing"],
    includesBn: ["সাইট ভিজিট ও লিখিত এস্টিমেট", "কনসিল্ড বা সারফেস কন্ডুইট", "পছন্দের ব্র্যান্ডের মানসম্মত তার", "ডিবি বক্স ও ব্রেকার লেআউট", "আর্থিং ও চূড়ান্ত টেস্ট"],
    faqs: [
      { q: "How is a rewiring job estimated?", a: "By flat size, number of points and cable brand. Send photos on WhatsApp or book a site visit for a written estimate." },
      { q: "When does a flat need rewiring?", a: "If wiring is 20+ years old, cables heat up, breakers trip often, or you see burnt sockets." },
    ],
    faqsBn: [
      { q: "রিওয়্যারিংয়ের এস্টিমেট কীভাবে হয়?", a: "ফ্ল্যাটের আকার, পয়েন্ট সংখ্যা ও তারের ব্র্যান্ড অনুযায়ী। হোয়াটসঅ্যাপে ছবি পাঠান বা সাইট ভিজিট বুক করুন, লিখিত এস্টিমেট দেব।" },
      { q: "কখন ফ্ল্যাটে রিওয়্যারিং দরকার?", a: "ওয়্যারিং ২০ বছরের বেশি পুরোনো হলে, তার গরম হলে, ঘন ঘন ব্রেকার ট্রিপ করলে বা সকেট পুড়ে গেলে।" },
    ],
    images: ["concealed-wiring", "panel-10", "drilling-1"], pairs: ["water-pump-installation"],
  },
  {
    slug: "ips-installation", site: "electric", group: "residential",
    name: "IPS Installation & Uninstallation", nameBn: "আইপিএস লাগানো ও খোলা",
    summary: "IPS installation with a separate backup line for chosen fans and lights, battery connection and testing — plus safe removal when you shift house.",
    summaryBn: "আইপিএস লাগানো, নির্বাচিত ফ্যান-লাইটের জন্য আলাদা ব্যাকআপ লাইন, ব্যাটারি সংযোগ ও টেস্ট — বাসা বদলের সময় নিরাপদে খোলাও করা হয়।",
    includes: ["Backup line for selected points", "Battery connection", "Changeover wiring", "Load test", "Removal and re-installation on shifting"],
    includesBn: ["নির্বাচিত পয়েন্টে ব্যাকআপ লাইন", "ব্যাটারি সংযোগ", "চেঞ্জওভার ওয়্যারিং", "লোড টেস্ট", "বাসা বদলে খোলা ও আবার লাগানো"],
    faqs: [
      { q: "What size IPS do I need?", a: "Add up the watts of the fans and lights you want on backup. Use our IPS calculator, or we check on site." },
      { q: "Can you move my IPS to a new flat?", a: "Yes. We uninstall, and re-install at the new flat with a new backup line if needed." },
    ],
    faqsBn: [
      { q: "কত সাইজের আইপিএস লাগবে?", a: "ব্যাকআপে যে ফ্যান-লাইট চালাবেন তাদের ওয়াট যোগ করুন। আমাদের আইপিএস ক্যালকুলেটর ব্যবহার করুন, বা আমরা সরেজমিনে দেখে দেব।" },
      { q: "নতুন ফ্ল্যাটে কি আইপিএস সরিয়ে নেওয়া যাবে?", a: "হ্যাঁ। আমরা খুলে নতুন ফ্ল্যাটে লাগিয়ে দিই, প্রয়োজনে নতুন ব্যাকআপ লাইন সহ।" },
    ],
    images: ["panel-4", "socket-3"], pairs: ["water-purifier-installation-servicing"],
  },
  {
    slug: "db-servicing", site: "electric", group: "residential",
    name: "Distribution Board (DB) Servicing", nameBn: "ডিস্ট্রিবিউশন বোর্ড (ডিবি) সার্ভিসিং",
    summary: "Servicing of your flat's DB box: cleaning, tightening loose terminals, replacing faulty breakers, labelling circuits and testing earth leakage protection.",
    summaryBn: "ফ্ল্যাটের ডিবি বক্স সার্ভিসিং — পরিষ্কার, ঢিলা টার্মিনাল টাইট, নষ্ট ব্রেকার বদল, সার্কিট লেবেলিং ও আর্থ লিকেজ প্রোটেকশন টেস্ট।",
    includes: ["Cleaning", "Terminal tightening", "Faulty breaker replacement", "Circuit labelling", "RCCB test"],
    includesBn: ["পরিষ্কার", "টার্মিনাল টাইটনিং", "নষ্ট ব্রেকার বদল", "সার্কিট লেবেলিং", "আরসিসিবি টেস্ট"],
    faqs: [
      { q: "Why does my DB box get hot?", a: "Loose terminals or overloaded breakers. This is a fire risk — get it serviced quickly." },
      { q: "Do you label the breakers?", a: "Yes, every breaker is labelled (AC, kitchen, bedroom…) so you can switch off the right line." },
    ],
    faqsBn: [
      { q: "ডিবি বক্স গরম হয় কেন?", a: "ঢিলা টার্মিনাল বা ওভারলোড ব্রেকারের কারণে। এটি আগুনের ঝুঁকি — দ্রুত সার্ভিস করান।" },
      { q: "ব্রেকারগুলো কি লেবেল করে দেন?", a: "হ্যাঁ, প্রতিটি ব্রেকারে লেবেল (এসি, কিচেন, বেডরুম…) দিই, যাতে সঠিক লাইন বন্ধ করতে পারেন।" },
    ],
    images: ["panel-2", "panel-7"], pairs: [],
  },
  {
    slug: "profile-light-installation", site: "electric", group: "residential",
    name: "Profile Light Installation", nameBn: "প্রোফাইল লাইট লাগানো",
    summary: "Modern aluminium profile and LED strip lighting for ceilings, walls, kitchens and wardrobes, with hidden drivers and neat finishing.",
    summaryBn: "সিলিং, দেয়াল, কিচেন ও ওয়ার্ডরোবে আধুনিক অ্যালুমিনিয়াম প্রোফাইল ও এলইডি স্ট্রিপ লাইট — লুকানো ড্রাইভার ও পরিষ্কার ফিনিশিং সহ।",
    includes: ["Layout planning", "Profile channel fitting", "LED strip and driver", "Switch / dimmer connection", "Neat finishing"],
    includesBn: ["লেআউট পরিকল্পনা", "প্রোফাইল চ্যানেল ফিটিং", "এলইডি স্ট্রিপ ও ড্রাইভার", "সুইচ / ডিমার সংযোগ", "পরিষ্কার ফিনিশিং"],
    faqs: [
      { q: "How do I get an estimate for profile lighting?", a: "Send a photo of the room and the length you want on WhatsApp, and we'll reply with an estimate." },
      { q: "Can profile lights be added to an existing ceiling?", a: "Yes, surface profiles work without cutting the ceiling. Recessed profiles need a false ceiling or groove." },
    ],
    faqsBn: [
      { q: "প্রোফাইল লাইটের এস্টিমেট কীভাবে পাব?", a: "রুমের ছবি ও কত ফুট লাগাতে চান হোয়াটসঅ্যাপে পাঠান, আমরা এস্টিমেট জানিয়ে দেব।" },
      { q: "বর্তমান সিলিংয়ে কি প্রোফাইল লাইট লাগানো যায়?", a: "হ্যাঁ, সারফেস প্রোফাইল সিলিং না কেটেই লাগে। রিসেসড প্রোফাইলের জন্য ফলস সিলিং বা খাঁজ লাগে।" },
    ],
    images: ["light-1", "chandelier-3"], pairs: [],
  },

  // ───────────── ELECTRIC · home services ─────────────
  {
    slug: "tv-wall-mount-installation", site: "electric", group: "home",
    name: "TV Wall Mount Installation", nameBn: "টিভি ওয়াল মাউন্ট লাগানো",
    summary: "Secure TV wall mounting for all sizes, with level fitting, neat cable routing and a power point behind the TV if needed.",
    summaryBn: "সব সাইজের টিভি নিরাপদে দেয়ালে লাগানো — সমান লেভেল, গোছানো তার এবং প্রয়োজনে টিভির পেছনে পাওয়ার পয়েন্ট।",
    includes: ["Wall type check", "Bracket fitting with proper anchors", "Level alignment", "Cable management", "Power point behind TV on request"],
    includesBn: ["দেয়ালের ধরন চেক", "সঠিক অ্যাংকর দিয়ে ব্র্যাকেট ফিটিং", "সমান লেভেলে বসানো", "তার গোছানো", "চাইলে টিভির পেছনে পাওয়ার পয়েন্ট"],
    faqs: [
      { q: "Do you bring the bracket?", a: "Most TVs come with a bracket. If not, we can bring a fixed or tilt bracket." },
      { q: "Can you mount a TV on a partition wall?", a: "Brick walls are fine. For board/partition walls we check strength and use special anchors." },
    ],
    faqsBn: [
      { q: "ব্র্যাকেট কি আপনারা আনেন?", a: "বেশিরভাগ টিভির সাথে ব্র্যাকেট থাকে। না থাকলে আমরা ফিক্সড বা টিল্ট ব্র্যাকেট এনে দিতে পারি।" },
      { q: "পার্টিশন দেয়ালে কি টিভি লাগানো যায়?", a: "ইটের দেয়ালে সমস্যা নেই। বোর্ড/পার্টিশন দেয়ালে শক্তি চেক করে বিশেষ অ্যাংকর ব্যবহার করি।" },
    ],
    images: ["tv-wall-mount", "drilling-2", "drilling-3"], pairs: ["wall-mirror-installation"],
  },
  {
    slug: "kitchen-hood-installation-cleaning", site: "electric", group: "home",
    name: "Kitchen Hood Installation & Cleaning", nameBn: "কিচেন হুড লাগানো ও পরিষ্কার",
    summary: "Kitchen hood fitting with duct, wall cut-out and power connection, plus deep cleaning of grease filters and motor for better suction.",
    summaryBn: "ডাক্ট, দেয়াল কাটিং ও পাওয়ার সংযোগ সহ কিচেন হুড লাগানো এবং ভালো সাকশনের জন্য গ্রিজ ফিল্টার ও মোটর পরিষ্কার।",
    includes: ["Hood fitting at correct height", "Duct and wall outlet", "Power point connection", "Filter and motor cleaning", "Suction test"],
    includesBn: ["সঠিক উচ্চতায় হুড ফিটিং", "ডাক্ট ও দেয়ালের আউটলেট", "পাওয়ার পয়েন্ট সংযোগ", "ফিল্টার ও মোটর পরিষ্কার", "সাকশন টেস্ট"],
    faqs: [
      { q: "How often should a kitchen hood be cleaned?", a: "Every 2–3 months for daily Bangladeshi cooking with lots of oil." },
      { q: "Can you also install the gas stove?", a: "Yes — our plumbing division installs gas stoves and can come together." },
    ],
    faqsBn: [
      { q: "কিচেন হুড কতদিন পরপর পরিষ্কার করা উচিত?", a: "তেল-মসলার প্রতিদিনের রান্নায় প্রতি ২–৩ মাসে একবার।" },
      { q: "গ্যাসের চুলাও কি লাগাতে পারবেন?", a: "হ্যাঁ — আমাদের প্লাম্বিং বিভাগ গ্যাসের চুলা লাগায়, একসাথে আসতে পারে।" },
    ],
    images: ["drilling-1"], pairs: ["gas-stove-installation-repair"],
  },
  {
    slug: "wall-shelf-installation", site: "electric", group: "home",
    name: "Wall Shelf Installation", nameBn: "ওয়াল শেলফ লাগানো",
    summary: "Strong, level wall shelves for books, kitchen and decor — correct drill bits and anchors for brick, concrete and tiles.",
    summaryBn: "বই, কিচেন ও সাজসজ্জার জন্য শক্ত ও সমান ওয়াল শেলফ — ইট, কংক্রিট ও টাইলসের জন্য সঠিক ড্রিল ও অ্যাংকর।",
    includes: ["Position marking with level", "Drilling (brick, concrete, tile)", "Anchors and screws", "Load check", "Clean-up"],
    includesBn: ["লেভেল দিয়ে জায়গা মার্ক করা", "ড্রিলিং (ইট, কংক্রিট, টাইলস)", "অ্যাংকর ও স্ক্রু", "ভার বহন চেক", "কাজ শেষে পরিষ্কার"],
    faqs: [
      { q: "Can you drill into tiles without cracking them?", a: "Yes, we use tile bits and low-speed drilling." },
      { q: "Do you check for hidden wires before drilling?", a: "Yes. As electricians we check wire routes so we don't drill into a live line." },
    ],
    faqsBn: [
      { q: "টাইলস না ফাটিয়ে কি ড্রিল করা যায়?", a: "হ্যাঁ, টাইল বিট ও ধীর গতিতে ড্রিল করি।" },
      { q: "ড্রিলের আগে কি লুকানো তার চেক করেন?", a: "হ্যাঁ। ইলেকট্রিশিয়ান হিসেবে তারের পথ চেক করি, যাতে চালু লাইনে ড্রিল না লাগে।" },
    ],
    images: ["drilling-3", "drilling-2"], pairs: ["bathroom-accessories-installation"],
  },
  {
    slug: "picture-frame-installation", site: "electric", group: "home",
    name: "Picture Frame Installation", nameBn: "ছবির ফ্রেম লাগানো",
    summary: "Neat hanging of picture frames, wall clocks and calligraphy at the right height, level and secure.",
    summaryBn: "ছবির ফ্রেম, ওয়াল ক্লক ও ক্যালিগ্রাফি সঠিক উচ্চতায়, সমানভাবে ও শক্ত করে লাগানো।",
    includes: ["Height and layout advice", "Level marking", "Drilling and anchors", "Gallery wall layouts", "Clean-up"],
    includesBn: ["উচ্চতা ও সাজানোর পরামর্শ", "লেভেল মার্কিং", "ড্রিলিং ও অ্যাংকর", "গ্যালারি ওয়াল সাজানো", "কাজ শেষে পরিষ্কার"],
    faqs: [
      { q: "Can you hang several frames in one visit?", a: "Yes — send us the list on WhatsApp and we'll do them all in one visit." },
      { q: "Can you hang heavy calligraphy frames?", a: "Yes, we use heavy-duty anchors for large frames." },
    ],
    faqsBn: [
      { q: "এক ভিজিটে কি অনেকগুলো ফ্রেম লাগানো যায়?", a: "হ্যাঁ — হোয়াটসঅ্যাপে তালিকা পাঠান, এক ভিজিটেই সব লাগিয়ে দেব।" },
      { q: "ভারী ক্যালিগ্রাফি ফ্রেম কি লাগান?", a: "হ্যাঁ, বড় ফ্রেমের জন্য হেভি-ডিউটি অ্যাংকর ব্যবহার করি।" },
    ],
    images: ["wall-clock-1", "wall-clock-2"], pairs: ["wall-mirror-installation"],
  },
  {
    slug: "furniture-assembly", site: "electric", group: "home",
    name: "Furniture Assembly & Installation", nameBn: "ফার্নিচার অ্যাসেম্বলি ও লাগানো",
    summary: "Assembly of flat-pack beds, wardrobes, tables and cabinets, and wall-fixing of tall furniture so it can't tip over.",
    summaryBn: "ফ্ল্যাট-প্যাক খাট, আলমারি, টেবিল ও কেবিনেট অ্যাসেম্বলি এবং উঁচু ফার্নিচার দেয়ালে আটকানো যাতে পড়ে না যায়।",
    includes: ["Assembly by manual", "Wall anchoring of tall units", "Door and drawer alignment", "Packing waste collection", "Disassembly for shifting"],
    includesBn: ["নির্দেশনা অনুযায়ী অ্যাসেম্বলি", "উঁচু ফার্নিচার দেয়ালে আটকানো", "দরজা ও ড্রয়ার ঠিক করা", "প্যাকিংয়ের ময়লা সরানো", "বাসা বদলে খোলা"],
    faqs: [
      { q: "Do you assemble furniture bought online?", a: "Yes, from any shop or online seller." },
      { q: "Can you dismantle furniture before shifting?", a: "Yes, and re-assemble at your new flat." },
    ],
    faqsBn: [
      { q: "অনলাইনে কেনা ফার্নিচার কি অ্যাসেম্বল করেন?", a: "হ্যাঁ, যেকোনো দোকান বা অনলাইন বিক্রেতার।" },
      { q: "বাসা বদলের আগে কি ফার্নিচার খুলে দেন?", a: "হ্যাঁ, এবং নতুন ফ্ল্যাটে আবার জোড়া লাগিয়ে দিই।" },
    ],
    images: ["drilling-2"], pairs: [],
  },
  {
    slug: "door-lock-installation", site: "electric", group: "home",
    name: "Door Lock Installation & Replacement", nameBn: "দরজার লক লাগানো ও বদল",
    summary: "Installation and replacement of mortise locks, door handles, cylinder locks, tower bolts and door closers on wooden and steel doors.",
    summaryBn: "কাঠ ও স্টিলের দরজায় মর্টিস লক, হ্যান্ডেল, সিলিন্ডার লক, টাওয়ার বোল্ট ও ডোর ক্লোজার লাগানো ও বদল।",
    includes: ["Old lock removal", "New lock fitting", "Door alignment", "Key test", "Tower bolt / closer fitting"],
    includesBn: ["পুরোনো লক খোলা", "নতুন লক ফিটিং", "দরজা ঠিকমতো বসানো", "চাবি টেস্ট", "টাওয়ার বোল্ট / ক্লোজার ফিটিং"],
    faqs: [
      { q: "Can you change only the cylinder after losing keys?", a: "Yes, for most cylinder locks we replace just the cylinder." },
      { q: "Do you supply locks?", a: "You can buy your preferred brand, or we can bring one." },
    ],
    faqsBn: [
      { q: "চাবি হারালে কি শুধু সিলিন্ডার বদলানো যায়?", a: "হ্যাঁ, বেশিরভাগ সিলিন্ডার লকে শুধু সিলিন্ডার বদলাই।" },
      { q: "লক কি আপনারা আনেন?", a: "পছন্দের ব্র্যান্ড আপনি কিনতে পারেন, অথবা আমরা এনে দিতে পারি।" },
    ],
    images: ["door-lock"], pairs: [],
  },
  {
    slug: "thai-glass-lock-installation-repair", site: "electric", group: "home",
    name: "Thai Glass Lock Installation & Repair", nameBn: "থাই গ্লাস লক লাগানো ও মেরামত",
    summary: "Repair and replacement of Thai aluminium window and sliding door locks, handles and rollers so windows close and lock properly.",
    summaryBn: "থাই অ্যালুমিনিয়াম জানালা ও স্লাইডিং দরজার লক, হ্যান্ডেল ও রোলার মেরামত ও বদল — যাতে ঠিকমতো বন্ধ ও লক হয়।",
    includes: ["Lock and handle replacement", "Roller check", "Track cleaning", "Alignment", "Smooth sliding test"],
    includesBn: ["লক ও হ্যান্ডেল বদল", "রোলার চেক", "ট্র্যাক পরিষ্কার", "সঠিকভাবে বসানো", "মসৃণ স্লাইডিং টেস্ট"],
    faqs: [
      { q: "My Thai window won't lock. Can it be fixed?", a: "Usually yes — it's often a broken lock, worn roller or misaligned frame." },
      { q: "Do you replace Thai glass panels?", a: "We handle locks, handles and rollers. Ask us on WhatsApp about glass replacement." },
    ],
    faqsBn: [
      { q: "থাই জানালা লক হচ্ছে না, ঠিক করা যাবে?", a: "সাধারণত যায় — প্রায়ই ভাঙা লক, ক্ষয়ে যাওয়া রোলার বা ফ্রেম সরে যাওয়ার কারণে হয়।" },
      { q: "থাই গ্লাস কি বদলে দেন?", a: "আমরা লক, হ্যান্ডেল ও রোলারের কাজ করি। গ্লাস বদলের জন্য হোয়াটসঅ্যাপে জিজ্ঞেস করুন।" },
    ],
    images: ["thai-glass"], pairs: [],
  },

  // ───────────── ELECTRIC · commercial ─────────────
  {
    slug: "commercial-electrical-checkup", site: "electric", group: "commercial",
    name: "Commercial Electrical Check-up", nameBn: "কমার্শিয়াল ইলেকট্রিক্যাল চেকআপ",
    summary: "Electrical safety audit for offices, shops, restaurants and buildings: panels, cables, breakers, earthing and load, with a prioritised report.",
    summaryBn: "অফিস, দোকান, রেস্টুরেন্ট ও বিল্ডিংয়ের ইলেকট্রিক্যাল সেফটি অডিট — প্যানেল, তার, ব্রেকার, আর্থিং ও লোড চেক এবং অগ্রাধিকারসহ রিপোর্ট।",
    includes: ["Panel and DB inspection", "Loose-connection and heat check", "Earthing test", "Load and phase balance check", "Written report with priorities"],
    includesBn: ["প্যানেল ও ডিবি পরিদর্শন", "ঢিলা সংযোগ ও গরম হওয়া চেক", "আর্থিং টেস্ট", "লোড ও ফেজ ব্যালান্স চেক", "অগ্রাধিকারসহ লিখিত রিপোর্ট"],
    faqs: [
      { q: "Can you check electrical and plumbing together?", a: "Yes. Our plumbing division can audit water lines and drains in the same visit." },
      { q: "Do you work outside business hours?", a: "Yes, we can work early morning or after closing so your business isn't disturbed." },
    ],
    faqsBn: [
      { q: "ইলেকট্রিক্যাল ও প্লাম্বিং কি একসাথে চেক করেন?", a: "হ্যাঁ। আমাদের প্লাম্বিং বিভাগ একই ভিজিটে পানির লাইন ও ড্রেন অডিট করতে পারে।" },
      { q: "অফিস সময়ের বাইরে কি কাজ করেন?", a: "হ্যাঁ, সকালে বা বন্ধের পর কাজ করি, যাতে ব্যবসায় ব্যাঘাত না হয়।" },
    ],
    images: ["project-visit", "panel-room-1", "panel-3"], pairs: ["commercial-plumbing-checkup"],
  },
  {
    slug: "office-electrical-wiring", site: "electric", group: "commercial",
    name: "Office Electrical Wiring & Rewiring", nameBn: "অফিস ইলেকট্রিক্যাল ওয়্যারিং ও রিওয়্যারিং",
    summary: "Complete office wiring: workstation power, lighting circuits, AC lines, UPS/IPS lines, tidy cable routing and DB layout.",
    summaryBn: "সম্পূর্ণ অফিস ওয়্যারিং — ওয়ার্কস্টেশন পাওয়ার, লাইটিং সার্কিট, এসি লাইন, ইউপিএস/আইপিএস লাইন, গোছানো তার ও ডিবি লেআউট।",
    includes: ["Site survey and written proposal", "Workstation power points", "Lighting and AC circuits", "UPS / IPS backup lines", "Testing and handover drawing"],
    includesBn: ["সাইট সার্ভে ও লিখিত প্রস্তাব", "ওয়ার্কস্টেশন পাওয়ার পয়েন্ট", "লাইটিং ও এসি সার্কিট", "ইউপিএস / আইপিএস ব্যাকআপ লাইন", "টেস্টিং ও হস্তান্তর ড্রয়িং"],
    faqs: [
      { q: "Can you work on a running office?", a: "Yes, in phases or after hours to avoid disturbing work." },
      { q: "Do you provide a wiring diagram?", a: "Yes, a simple circuit and DB layout is handed over at the end." },
    ],
    faqsBn: [
      { q: "চালু অফিসে কি কাজ করতে পারবেন?", a: "হ্যাঁ, ধাপে ধাপে বা অফিস সময়ের পরে, যাতে কাজে ব্যাঘাত না হয়।" },
      { q: "ওয়্যারিং ডায়াগ্রাম কি দেন?", a: "হ্যাঁ, শেষে সহজ সার্কিট ও ডিবি লেআউট হস্তান্তর করি।" },
    ],
    images: ["electrical-drawing", "concealed-wiring", "panel-10"], pairs: ["commercial-plumbing-installation-repair"],
  },
  {
    slug: "commercial-lighting-installation", site: "electric", group: "commercial",
    name: "Commercial Lighting Installation", nameBn: "কমার্শিয়াল লাইটিং লাগানো",
    summary: "Bright, energy-saving LED lighting for offices, showrooms, super shops and restaurants — panel lights, track lights, signboard and outdoor lighting.",
    summaryBn: "অফিস, শোরুম, সুপার শপ ও রেস্টুরেন্টের জন্য উজ্জ্বল ও বিদ্যুৎ-সাশ্রয়ী এলইডি লাইটিং — প্যানেল, ট্র্যাক, সাইনবোর্ড ও বাইরের লাইট।",
    includes: ["Lighting layout", "LED panel and track lights", "Signboard lighting", "Separate lighting circuits", "Timer / switching setup"],
    includesBn: ["লাইটিং লেআউট", "এলইডি প্যানেল ও ট্র্যাক লাইট", "সাইনবোর্ড লাইটিং", "আলাদা লাইটিং সার্কিট", "টাইমার / সুইচিং সেটআপ"],
    faqs: [
      { q: "Will LED lights reduce my electricity bill?", a: "Yes, replacing tube lights and halogens with LEDs cuts lighting power use substantially." },
      { q: "Can you light a super shop?", a: "Yes, we have worked on super shops in Uttara — shelf, ceiling and signboard lighting." },
    ],
    faqsBn: [
      { q: "এলইডি লাইটে কি বিদ্যুৎ বিল কমবে?", a: "হ্যাঁ, টিউব লাইট ও হ্যালোজেনের বদলে এলইডি লাগালে লাইটিংয়ের বিদ্যুৎ খরচ অনেক কমে।" },
      { q: "সুপার শপের লাইটিং কি করেন?", a: "হ্যাঁ, উত্তরার সুপার শপে কাজ করেছি — শেলফ, সিলিং ও সাইনবোর্ড লাইটিং।" },
    ],
    images: ["restaurant-electrical", "supershop-2", "light-1"], pairs: [],
  },
  {
    slug: "mdb-db-sdb-installation-servicing", site: "electric", group: "commercial",
    name: "MDB, DB & SDB Installation and Servicing", nameBn: "এমডিবি, ডিবি ও এসডিবি লাগানো ও সার্ভিসিং",
    summary: "Design, installation and servicing of main, distribution and sub-distribution boards for commercial buildings, offices, shops and light industry.",
    summaryBn: "কমার্শিয়াল বিল্ডিং, অফিস, দোকান ও ছোট কারখানার জন্য মেইন, ডিস্ট্রিবিউশন ও সাব-ডিস্ট্রিবিউশন বোর্ড ডিজাইন, লাগানো ও সার্ভিসিং।",
    includes: ["Panel design to load", "MCCB / MCB / busbar fitting", "Cable dressing and labelling", "Phase balancing", "Preventive servicing plan"],
    includesBn: ["লোড অনুযায়ী প্যানেল ডিজাইন", "এমসিসিবি / এমসিবি / বাসবার ফিটিং", "কেবল ড্রেসিং ও লেবেলিং", "ফেজ ব্যালান্সিং", "নিয়মিত সার্ভিসিং পরিকল্পনা"],
    faqs: [
      { q: "Do you build new panels or only service them?", a: "Both — new MDB/DB/SDB installation and servicing of existing boards." },
      { q: "Can you take over an existing building's panel maintenance?", a: "Yes, under a monthly or yearly maintenance contract." },
    ],
    faqsBn: [
      { q: "নতুন প্যানেল বানান নাকি শুধু সার্ভিস করেন?", a: "দুটোই — নতুন এমডিবি/ডিবি/এসডিবি লাগানো এবং পুরোনো বোর্ড সার্ভিসিং।" },
      { q: "বিল্ডিংয়ের প্যানেল রক্ষণাবেক্ষণের দায়িত্ব কি নেন?", a: "হ্যাঁ, মাসিক বা বার্ষিক রক্ষণাবেক্ষণ চুক্তিতে।" },
    ],
    images: ["panel-room-3", "panel-1", "panel-3", "panel-4"], pairs: [],
  },
  {
    slug: "mcb-mccb-circuit-breaker-installation", site: "electric", group: "commercial",
    name: "MCB, MCCB & Circuit Breaker Installation", nameBn: "এমসিবি, এমসিসিবি ও সার্কিট ব্রেকার লাগানো",
    summary: "Selection and installation of MCBs, MCCBs, RCCBs and changeover switches rated for your commercial load.",
    summaryBn: "কমার্শিয়াল লোড অনুযায়ী এমসিবি, এমসিসিবি, আরসিসিবি ও চেঞ্জওভার সুইচ নির্বাচন ও লাগানো।",
    includes: ["Load calculation", "MCCB / MCB / RCCB fitting", "Changeover switch", "Termination with lugs", "Trip testing"],
    includesBn: ["লোড হিসাব", "এমসিসিবি / এমসিবি / আরসিসিবি ফিটিং", "চেঞ্জওভার সুইচ", "লাগ দিয়ে টার্মিনেশন", "ট্রিপ টেস্ট"],
    faqs: [
      { q: "What is the difference between MCB and MCCB?", a: "MCBs are for smaller currents (up to about 63–100A); MCCBs handle higher currents and are used on main and sub-main lines." },
      { q: "Do you supply breakers?", a: "Yes, from reputable brands, or we fit breakers you provide." },
    ],
    faqsBn: [
      { q: "এমসিবি আর এমসিসিবির পার্থক্য কী?", a: "এমসিবি কম কারেন্টের জন্য (প্রায় ৬৩–১০০A পর্যন্ত); এমসিসিবি বেশি কারেন্টের জন্য, মেইন ও সাব-মেইন লাইনে ব্যবহার হয়।" },
      { q: "ব্রেকার কি আপনারা সরবরাহ করেন?", a: "হ্যাঁ, ভালো ব্র্যান্ডের; অথবা আপনার দেওয়া ব্রেকার লাগিয়ে দিই।" },
    ],
    images: ["panel-6", "panel-5"], pairs: [],
  },
  {
    slug: "commercial-electrical-fault-repair", site: "electric", group: "commercial",
    name: "Commercial Electrical Fault Finding & Repair", nameBn: "কমার্শিয়াল ইলেকট্রিক্যাল ফল্ট খোঁজা ও মেরামত",
    summary: "Fast fault finding for power cuts, tripping, burnt cables and phase problems in offices, shops and buildings — to get you running again quickly.",
    summaryBn: "অফিস, দোকান ও বিল্ডিংয়ে বিদ্যুৎ বন্ধ, ট্রিপিং, পোড়া তার ও ফেজ সমস্যা দ্রুত খুঁজে মেরামত — যাতে ব্যবসা দ্রুত চালু হয়।",
    includes: ["Emergency response", "Systematic fault tracing", "Burnt cable / breaker replacement", "Phase failure repair", "Root-cause report"],
    includesBn: ["জরুরি সাড়া", "পরিকল্পিতভাবে ত্রুটি খোঁজা", "পোড়া তার / ব্রেকার বদল", "ফেজ ফেইলিওর মেরামত", "মূল কারণের রিপোর্ট"],
    faqs: [
      { q: "Do you handle emergencies for shops?", a: "Yes. Message us on WhatsApp and mark it urgent — we prioritise businesses without power." },
      { q: "Can you find intermittent faults?", a: "Yes, with testing over time and load checks." },
    ],
    faqsBn: [
      { q: "দোকানের জরুরি কাজ কি করেন?", a: "হ্যাঁ। হোয়াটসঅ্যাপে জরুরি লিখে জানান — বিদ্যুৎহীন ব্যবসাকে আমরা অগ্রাধিকার দিই।" },
      { q: "মাঝে মাঝে হওয়া সমস্যা কি খুঁজে পান?", a: "হ্যাঁ, সময় নিয়ে টেস্ট ও লোড চেক করে।" },
    ],
    images: ["electrical-fault", "panel-8", "panel-9"], pairs: [],
  },
  {
    slug: "power-distribution-cable-management", site: "electric", group: "commercial",
    name: "Power Distribution & Cable Management", nameBn: "পাওয়ার ডিস্ট্রিবিউশন ও কেবল ম্যানেজমেন্ট",
    summary: "Planned power distribution and tidy cable management — trays, trunking, labelling and dressing — for safe, easy-to-maintain commercial installations.",
    summaryBn: "পরিকল্পিত পাওয়ার ডিস্ট্রিবিউশন ও গোছানো কেবল ম্যানেজমেন্ট — ট্রে, ট্রাংকিং, লেবেলিং ও ড্রেসিং।",
    includes: ["Distribution planning", "Cable tray and trunking", "Cable dressing", "Labelling", "As-built documentation"],
    includesBn: ["ডিস্ট্রিবিউশন পরিকল্পনা", "কেবল ট্রে ও ট্রাংকিং", "কেবল ড্রেসিং", "লেবেলিং", "কাজের পর ডকুমেন্টেশন"],
    faqs: [
      { q: "Why does cable dressing matter?", a: "Tidy, labelled cables run cooler, are safer and make future repairs much faster." },
      { q: "Can you tidy an existing messy panel?", a: "Yes — re-dressing and labelling old panels is a common job for us." },
    ],
    faqsBn: [
      { q: "কেবল ড্রেসিং কেন জরুরি?", a: "গোছানো ও লেবেল করা তার কম গরম হয়, বেশি নিরাপদ এবং পরে মেরামত অনেক দ্রুত হয়।" },
      { q: "এলোমেলো পুরোনো প্যানেল কি গুছিয়ে দেন?", a: "হ্যাঁ — পুরোনো প্যানেল নতুন করে ড্রেসিং ও লেবেলিং আমাদের নিয়মিত কাজ।" },
    ],
    images: ["panel-10", "panel-2"], pairs: [],
  },
  {
    slug: "office-shop-lighting-maintenance", site: "electric", group: "commercial",
    name: "Office & Shop Lighting Maintenance", nameBn: "অফিস ও দোকানের লাইটিং রক্ষণাবেক্ষণ",
    summary: "Scheduled checks and replacement of faulty lights, drivers and switches in offices and shops, so your space always looks bright.",
    summaryBn: "অফিস ও দোকানে নিয়মিত চেক এবং নষ্ট লাইট, ড্রাইভার ও সুইচ বদল — যাতে জায়গা সবসময় উজ্জ্বল থাকে।",
    includes: ["Monthly or on-call visits", "Light and driver replacement", "Switch repair", "Signboard light checks", "Simple maintenance log"],
    includesBn: ["মাসিক বা প্রয়োজনমতো ভিজিট", "লাইট ও ড্রাইভার বদল", "সুইচ মেরামত", "সাইনবোর্ড লাইট চেক", "সহজ রক্ষণাবেক্ষণ লগ"],
    faqs: [
      { q: "Do you offer monthly plans?", a: "Yes, monthly maintenance plans are available for shops and offices." },
      { q: "Do you keep spare lights?", a: "We can keep matching spares so replacements look the same." },
    ],
    faqsBn: [
      { q: "মাসিক প্ল্যান কি আছে?", a: "হ্যাঁ, দোকান ও অফিসের জন্য মাসিক রক্ষণাবেক্ষণ প্ল্যান আছে।" },
      { q: "অতিরিক্ত লাইট কি রাখেন?", a: "একই রকম অতিরিক্ত লাইট রাখতে পারি, যাতে বদলালেও দেখতে একই রকম হয়।" },
    ],
    images: ["restaurant-electrical", "supershop-3", "chandelier-3"], pairs: [],
  },
  {
    slug: "ac-power-wiring", site: "electric", group: "commercial",
    name: "AC Electrical Connection & Power Wiring", nameBn: "এসি ইলেকট্রিক্যাল কানেকশন ও পাওয়ার ওয়্যারিং",
    summary: "Dedicated AC power lines for offices, shops and homes: correct cable, breaker, isolator and earthing for split and cassette ACs.",
    summaryBn: "অফিস, দোকান ও বাসার জন্য এসির আলাদা পাওয়ার লাইন — স্প্লিট ও ক্যাসেট এসির জন্য সঠিক তার, ব্রেকার, আইসোলেটর ও আর্থিং।",
    includes: ["Cable size by AC capacity", "Dedicated breaker", "Isolator fitting", "Earthing", "Load balance across phases"],
    includesBn: ["এসির ক্ষমতা অনুযায়ী তারের সাইজ", "আলাদা ব্রেকার", "আইসোলেটর ফিটিং", "আর্থিং", "ফেজে লোড ব্যালান্স"],
    faqs: [
      { q: "Can several ACs share one line?", a: "Not safely. Each AC should have its own correctly rated line and breaker." },
      { q: "Do you install the AC unit itself?", a: "We do the electrical side; AC fitting is done by your AC installer, and we coordinate with them." },
    ],
    faqsBn: [
      { q: "কয়েকটি এসি কি এক লাইনে চলতে পারে?", a: "নিরাপদ নয়। প্রতিটি এসির নিজস্ব সঠিক রেটিংয়ের লাইন ও ব্রেকার থাকা উচিত।" },
      { q: "এসি ইউনিট কি আপনারা লাগান?", a: "আমরা ইলেকট্রিক্যাল অংশ করি; এসি ফিটিং করেন আপনার এসি ইনস্টলার, আমরা তাদের সাথে সমন্বয় করি।" },
    ],
    images: ["ac-outdoor-wall", "ac-indoor", "ac-outdoor-gas", "panel-6"], pairs: [],
  },
  {
    slug: "electrical-load-assessment", site: "electric", group: "commercial",
    name: "Electrical Load Assessment & Distribution", nameBn: "ইলেকট্রিক্যাল লোড অ্যাসেসমেন্ট ও ডিস্ট্রিবিউশন",
    summary: "We measure and calculate your total load, balance it across phases and recommend breaker, cable and meter upgrades before you add ACs or machines.",
    summaryBn: "মোট লোড মাপা ও হিসাব, ফেজে ব্যালান্স এবং এসি বা মেশিন যোগের আগে ব্রেকার, তার ও মিটার আপগ্রেডের পরামর্শ।",
    includes: ["Load measurement", "Phase balance", "Cable and breaker sizing", "Upgrade recommendations", "Report for the utility or landlord"],
    includesBn: ["লোড মাপা", "ফেজ ব্যালান্স", "তার ও ব্রেকারের সাইজ নির্ধারণ", "আপগ্রেডের সুপারিশ", "বিদ্যুৎ অফিস বা বাড়িওয়ালার জন্য রিপোর্ট"],
    faqs: [
      { q: "When do I need a load assessment?", a: "Before adding ACs, machines or a new floor, or if breakers trip often." },
      { q: "Can you help with a meter load increase application?", a: "We provide the load calculation you need for the application." },
    ],
    faqsBn: [
      { q: "কখন লোড অ্যাসেসমেন্ট দরকার?", a: "এসি, মেশিন বা নতুন ফ্লোর যোগের আগে, অথবা ঘন ঘন ব্রেকার ট্রিপ করলে।" },
      { q: "মিটারের লোড বাড়ানোর আবেদনে কি সাহায্য করেন?", a: "আবেদনের জন্য প্রয়োজনীয় লোড হিসাব আমরা করে দিই।" },
    ],
    images: ["electrical-drawing", "panel-7", "panel-room-4"], pairs: [],
  },
  {
    slug: "office-building-maintenance", site: "electric", group: "commercial",
    name: "Office & Commercial Building Maintenance", nameBn: "অফিস ও কমার্শিয়াল বিল্ডিং রক্ষণাবেক্ষণ",
    summary: "One team for your building's electrical and plumbing maintenance — scheduled checks, emergency call-outs and a maintenance log.",
    summaryBn: "বিল্ডিংয়ের ইলেকট্রিক্যাল ও প্লাম্বিং রক্ষণাবেক্ষণে এক টিম — নির্ধারিত চেক, জরুরি কল ও মেইনটেন্যান্স লগ।",
    includes: ["Scheduled monthly checks", "Priority emergency response", "Electrical + plumbing in one contract", "Maintenance log", "Fixed monthly fee"],
    includesBn: ["নির্ধারিত মাসিক চেক", "জরুরি কলে অগ্রাধিকার", "এক চুক্তিতে ইলেকট্রিক্যাল + প্লাম্বিং", "রক্ষণাবেক্ষণ লগ", "নির্দিষ্ট মাসিক ফি"],
    faqs: [
      { q: "Do you cover plumbing too?", a: "Yes. Our plumbing division covers water lines, pumps and drains under the same contract." },
      { q: "How is the monthly fee set?", a: "By building size and number of visits. Message us on WhatsApp to book a survey and get a written proposal." },
    ],
    faqsBn: [
      { q: "প্লাম্বিংও কি এর মধ্যে আছে?", a: "হ্যাঁ। একই চুক্তিতে আমাদের প্লাম্বিং বিভাগ পানির লাইন, পাম্প ও ড্রেন দেখে।" },
      { q: "মাসিক ফি কীভাবে ঠিক হয়?", a: "বিল্ডিংয়ের আকার ও ভিজিট সংখ্যা অনুযায়ী। হোয়াটসঅ্যাপে সার্ভে বুক করুন, লিখিত প্রস্তাব দেব।" },
    ],
    images: ["panel-room-4", "supershop-2"], pairs: ["shop-restaurant-supershop-maintenance"],
  },

  // ───────────── PLUMBING · residential ─────────────
  {
    slug: "plumbing-checkup-inspection", site: "plumbing", group: "residential",
    name: "Plumbing Checkup & Inspection", nameBn: "প্লাম্বিং চেকআপ ও ইন্সপেকশন",
    summary: "A full check of your flat's taps, pipes, commodes, drains, water pressure and hidden leaks, with a written list of problems.",
    summaryBn: "ফ্ল্যাটের ট্যাপ, পাইপ, কমোড, ড্রেন, পানির প্রেশার ও লুকানো লিকের পূর্ণ চেক — সমস্যার লিখিত তালিকা সহ।",
    includes: ["Tap, valve and pipe check", "Commode and flush check", "Drain flow test", "Hidden leak signs", "Written list of problems"],
    includesBn: ["ট্যাপ, ভালভ ও পাইপ চেক", "কমোড ও ফ্লাশ চেক", "ড্রেনের পানি যাওয়ার টেস্ট", "লুকানো লিকের লক্ষণ", "সমস্যার লিখিত তালিকা"],
    faqs: [
      { q: "When should I get a plumbing check?", a: "Before buying or renting a flat, before monsoon, or when your tank empties faster than usual." },
      { q: "Can repairs be done in the same visit?", a: "Usually yes, for common fittings. Bigger jobs are scheduled after you agree." },
    ],
    faqsBn: [
      { q: "কখন প্লাম্বিং চেক করানো উচিত?", a: "ফ্ল্যাট কেনা বা ভাড়ার আগে, বর্ষার আগে, অথবা ট্যাংক স্বাভাবিকের চেয়ে দ্রুত খালি হলে।" },
      { q: "একই ভিজিটে কি মেরামত হয়?", a: "সাধারণ ফিটিংয়ে সাধারণত হয়। বড় কাজ আপনার সম্মতির পর সময় ঠিক করে করি।" },
    ],
    images: ["kitchen-sink", "pipe-1"], pairs: ["electrical-checkup-inspection"],
  },
  {
    slug: "water-leakage-detection-repair", site: "plumbing", group: "residential",
    name: "Water Leakage Detection and Repair", nameBn: "পানি লিকেজ শনাক্ত ও মেরামত",
    summary: "We find hidden leaks behind walls, under floors and in ceilings (seepage from the flat above) and repair them with minimal breaking.",
    summaryBn: "দেয়ালের ভেতর, মেঝের নিচে ও সিলিংয়ে (উপরের ফ্ল্যাট থেকে চুইয়ে পড়া) লুকানো লিক খুঁজে কম ভাঙচুরে মেরামত।",
    includes: ["Leak source tracing", "Pressure test of lines", "Minimal wall/tile opening", "Pipe or joint repair", "Re-test and finishing advice"],
    includesBn: ["লিকের উৎস খোঁজা", "লাইনের প্রেশার টেস্ট", "যতটুকু দরকার ততটুকু দেয়াল/টাইলস খোলা", "পাইপ বা জয়েন্ট মেরামত", "পুনরায় টেস্ট ও ফিনিশিং পরামর্শ"],
    faqs: [
      { q: "Water is dripping from my bathroom ceiling. Whose problem is it?", a: "Usually the bathroom pipes or floor trap of the flat above. We find the exact source so both owners know what to fix." },
      { q: "Can damp walls cause electrical problems?", a: "Yes — seepage can reach wiring and cause short circuits. Our electrical division can check the wiring too." },
    ],
    faqsBn: [
      { q: "বাথরুমের সিলিং থেকে পানি পড়ছে, সমস্যাটা কার?", a: "সাধারণত উপরের ফ্ল্যাটের বাথরুমের পাইপ বা ফ্লোর ট্র্যাপের। আমরা সঠিক উৎস খুঁজে দিই, যাতে দুই মালিকই জানেন কী ঠিক করতে হবে।" },
      { q: "স্যাঁতসেঁতে দেয়ালে কি ইলেকট্রিক সমস্যা হয়?", a: "হ্যাঁ — পানি তারে পৌঁছে শর্ট সার্কিট হতে পারে। আমাদের ইলেকট্রিক্যাল বিভাগ ওয়্যারিংও চেক করতে পারে।" },
    ],
    images: ["pipe-1", "kitchen-sink"], pairs: ["short-circuit-repair"],
  },
  {
    slug: "water-tap-installation", site: "plumbing", group: "residential",
    name: "Water Tap Installation & Replacement", nameBn: "পানির ট্যাপ লাগানো ও বদল",
    summary: "New and replacement taps for basin, kitchen, bathroom and balcony — leak-free fitting with proper thread seal.",
    summaryBn: "বেসিন, কিচেন, বাথরুম ও বারান্দার জন্য নতুন বা পরিবর্তন ট্যাপ — সঠিক থ্রেড সিল দিয়ে লিক-মুক্ত ফিটিং।",
    includes: ["Old tap removal", "New tap fitting", "Thread sealing", "Leak test", "Washer / cartridge replacement"],
    includesBn: ["পুরোনো ট্যাপ খোলা", "নতুন ট্যাপ ফিটিং", "থ্রেড সিলিং", "লিক টেস্ট", "ওয়াশার / কার্ট্রিজ বদল"],
    faqs: [
      { q: "My tap drips. Do I need a new one?", a: "Often just a washer or cartridge needs replacing." },
      { q: "Do you bring taps?", a: "You can buy your preferred brand, or we can bring one." },
    ],
    faqsBn: [
      { q: "ট্যাপ দিয়ে ফোঁটা ফোঁটা পানি পড়ে, নতুন লাগবে?", a: "অনেক সময় শুধু ওয়াশার বা কার্ট্রিজ বদলালেই হয়।" },
      { q: "ট্যাপ কি আপনারা আনেন?", a: "পছন্দের ব্র্যান্ড আপনি কিনতে পারেন, অথবা আমরা এনে দিতে পারি।" },
    ],
    images: ["sink-mixer", "tap-1", "basin-mixer-drip"], pairs: [],
  },
  {
    slug: "basin-installation-repair", site: "plumbing", group: "residential",
    name: "Basin Installation & Repair", nameBn: "বেসিন লাগানো ও মেরামত",
    summary: "Wall-hung, pedestal and counter basin installation, with tap, waste pipe and bottle trap — plus fixing loose or leaking basins.",
    summaryBn: "ওয়াল-হ্যাং, পেডেস্টাল ও কাউন্টার বেসিন লাগানো — ট্যাপ, ওয়েস্ট পাইপ ও বোতল ট্র্যাপ সহ; ঢিলা বা লিক বেসিন মেরামত।",
    includes: ["Basin and bracket fitting", "Tap and angle valve", "Waste pipe and trap", "Silicone sealing", "Leak test"],
    includesBn: ["বেসিন ও ব্র্যাকেট ফিটিং", "ট্যাপ ও অ্যাঙ্গেল ভালভ", "ওয়েস্ট পাইপ ও ট্র্যাপ", "সিলিকন সিলিং", "লিক টেস্ট"],
    faqs: [
      { q: "Can you move a basin to a different wall?", a: "Yes, with new water and drain lines. Send a photo on WhatsApp and we'll advise." },
      { q: "My basin is shaking. Is that dangerous?", a: "It can crack or fall. We re-fix it with proper brackets." },
    ],
    faqsBn: [
      { q: "বেসিন কি অন্য দেয়ালে সরানো যায়?", a: "হ্যাঁ, নতুন পানি ও ড্রেন লাইন দিয়ে। হোয়াটসঅ্যাপে ছবি পাঠান, পরামর্শ দেব।" },
      { q: "বেসিন নড়ছে, এটা কি বিপজ্জনক?", a: "ফেটে যেতে বা পড়ে যেতে পারে। সঠিক ব্র্যাকেট দিয়ে আবার শক্ত করে লাগাই।" },
    ],
    images: ["basin-install", "tap-1"], pairs: [],
  },
  {
    slug: "commode-installation-repair", site: "plumbing", group: "residential",
    name: "Commode Installation & Repair", nameBn: "কমোড লাগানো ও মেরামত",
    summary: "Installation of floor-mounted and wall-hung commodes, flush tank repair, seat replacement and fixing leaks at the base.",
    summaryBn: "ফ্লোর ও ওয়াল-হ্যাং কমোড লাগানো, ফ্লাশ ট্যাংক মেরামত, সিট বদল এবং গোড়ার লিক ঠিক করা।",
    includes: ["Old commode removal", "New commode fitting and sealing", "Flush tank and inlet", "Seat fitting", "Flush and leak test"],
    includesBn: ["পুরোনো কমোড খোলা", "নতুন কমোড ফিটিং ও সিলিং", "ফ্লাশ ট্যাংক ও ইনলেট", "সিট ফিটিং", "ফ্লাশ ও লিক টেস্ট"],
    faqs: [
      { q: "My commode keeps running water. Can you fix it?", a: "Yes — usually the flush valve or float needs adjusting or replacing." },
      { q: "Can you replace a squat pan with a commode?", a: "Yes. It needs some floor work; send a photo on WhatsApp and we'll advise." },
    ],
    faqsBn: [
      { q: "কমোডে সারাক্ষণ পানি চলে, ঠিক করা যাবে?", a: "হ্যাঁ — সাধারণত ফ্লাশ ভালভ বা ফ্লোট ঠিক বা বদল করতে হয়।" },
      { q: "প্যানের জায়গায় কি কমোড বসানো যায়?", a: "হ্যাঁ। কিছুটা মেঝের কাজ লাগে; হোয়াটসঅ্যাপে ছবি পাঠান, পরামর্শ দেব।" },
    ],
    images: ["commode-1", "commode-2", "commode-blockage"], pairs: [],
  },
  {
    slug: "bathroom-kitchen-plumbing", site: "plumbing", group: "residential",
    name: "Bathroom & Kitchen Plumbing", nameBn: "বাথরুম ও কিচেন প্লাম্বিং",
    summary: "Complete bathroom and kitchen plumbing — new fittings, sink and basin lines, floor traps, renovations and leak repairs.",
    summaryBn: "সম্পূর্ণ বাথরুম ও কিচেন প্লাম্বিং — নতুন ফিটিং, সিংক ও বেসিন লাইন, ফ্লোর ট্র্যাপ, রেনোভেশন ও লিক মেরামত।",
    includes: ["Site visit and written estimate", "Water and drain line layout", "Sink, basin and shower fitting", "Floor trap work", "Testing before tiling"],
    includesBn: ["সাইট ভিজিট ও লিখিত এস্টিমেট", "পানি ও ড্রেন লাইনের লেআউট", "সিংক, বেসিন ও শাওয়ার ফিটিং", "ফ্লোর ট্র্যাপের কাজ", "টাইলসের আগে টেস্ট"],
    faqs: [
      { q: "Do you work with tile and renovation contractors?", a: "Yes. We do the plumbing before tiling and test the lines so nothing leaks later." },
      { q: "Do you do bathroom electrical work too?", a: "Our electrical division handles bathroom lights, exhaust fan and geyser lines." },
    ],
    faqsBn: [
      { q: "টাইলস ও রেনোভেশন কন্ট্রাক্টরের সাথে কি কাজ করেন?", a: "হ্যাঁ। টাইলসের আগে প্লাম্বিং করে লাইন টেস্ট করি, যাতে পরে লিক না হয়।" },
      { q: "বাথরুমের ইলেকট্রিক কাজও কি করেন?", a: "আমাদের ইলেকট্রিক্যাল বিভাগ বাথরুমের লাইট, এগজস্ট ফ্যান ও গিজার লাইন করে।" },
    ],
    images: ["sink-mixer", "basin-install", "kitchen-sink", "commode-1"], pairs: ["light-installation-repair"],
  },
  {
    slug: "shower-installation-repair", site: "plumbing", group: "residential",
    name: "Shower Installation & Repair", nameBn: "শাওয়ার লাগানো ও মেরামত",
    summary: "Overhead, hand and rain shower installation, mixer connection and repair of low pressure or leaking showers.",
    summaryBn: "ওভারহেড, হ্যান্ড ও রেইন শাওয়ার লাগানো, মিক্সার সংযোগ এবং কম প্রেশার বা লিক শাওয়ার মেরামত।",
    includes: ["Shower arm and head fitting", "Mixer connection", "Hand shower fitting", "Pressure check", "Leak test"],
    includesBn: ["শাওয়ার আর্ম ও হেড ফিটিং", "মিক্সার সংযোগ", "হ্যান্ড শাওয়ার ফিটিং", "প্রেশার চেক", "লিক টেস্ট"],
    faqs: [
      { q: "Why is my shower pressure low?", a: "Common causes are a clogged shower head, a partly closed valve, or low tank height. We find the cause." },
      { q: "Can you connect a shower to a geyser?", a: "Yes, with hot and cold lines through a mixer." },
    ],
    faqsBn: [
      { q: "শাওয়ারে পানির চাপ কম কেন?", a: "সাধারণ কারণ — শাওয়ার হেড আটকে যাওয়া, ভালভ আধা বন্ধ, বা ট্যাংক কম উঁচু। আমরা কারণ খুঁজে বের করি।" },
      { q: "শাওয়ার কি গিজারের সাথে যুক্ত করা যায়?", a: "হ্যাঁ, মিক্সারের মাধ্যমে গরম ও ঠান্ডা লাইন দিয়ে।" },
    ],
    images: ["panel-shower", "tap-1"], pairs: ["ac-geyser-electrical-connection"],
  },
  {
    slug: "mixer-bib-cock-installation", site: "plumbing", group: "residential",
    name: "Mixer & Bib Cock Installation", nameBn: "মিক্সার ও বিব কক লাগানো",
    summary: "Installation and replacement of wall mixers, basin mixers, bib cocks and two-way taps with leak-free connections.",
    summaryBn: "ওয়াল মিক্সার, বেসিন মিক্সার, বিব কক ও টু-ওয়ে ট্যাপ লাগানো ও বদল — লিক-মুক্ত সংযোগ সহ।",
    includes: ["Old fitting removal", "Mixer / bib cock fitting", "Hot & cold line check", "Thread sealing", "Leak test"],
    includesBn: ["পুরোনো ফিটিং খোলা", "মিক্সার / বিব কক ফিটিং", "গরম ও ঠান্ডা লাইন চেক", "থ্রেড সিলিং", "লিক টেস্ট"],
    faqs: [
      { q: "Can a mixer be fitted on old lines?", a: "Usually yes, if hot and cold lines are at the right spacing. We adjust if needed." },
      { q: "What's a bib cock?", a: "A simple wall tap, usually for buckets, washing areas and balconies." },
    ],
    faqsBn: [
      { q: "পুরোনো লাইনে কি মিক্সার লাগানো যায়?", a: "সাধারণত যায়, যদি গরম ও ঠান্ডা লাইনের দূরত্ব ঠিক থাকে। প্রয়োজনে ঠিক করে নিই।" },
      { q: "বিব কক কী?", a: "সাধারণ দেয়াল ট্যাপ, সাধারণত বালতি, ধোয়ার জায়গা ও বারান্দার জন্য।" },
    ],
    images: ["basin-mixer-drip", "sink-mixer", "tap-1"], pairs: [],
  },
  {
    slug: "water-line-installation-repair", site: "plumbing", group: "residential",
    name: "New Water Line Installation & Repair", nameBn: "নতুন পানির লাইন লাগানো ও মেরামত",
    summary: "New water lines with quality PPR or uPVC pipes for flats, kitchens, bathrooms and rooftops, plus repair of old and rusted lines.",
    summaryBn: "ফ্ল্যাট, কিচেন, বাথরুম ও ছাদের জন্য মানসম্মত পিপিআর বা ইউপিভিসি পাইপে নতুন পানির লাইন এবং পুরোনো-মরিচা ধরা লাইন মেরামত।",
    includes: ["Site visit and written estimate", "PPR / uPVC pipe work", "Concealed or open lines", "Valves at key points", "Pressure test"],
    includesBn: ["সাইট ভিজিট ও লিখিত এস্টিমেট", "পিপিআর / ইউপিভিসি পাইপের কাজ", "কনসিল্ড বা খোলা লাইন", "গুরুত্বপূর্ণ জায়গায় ভালভ", "প্রেশার টেস্ট"],
    faqs: [
      { q: "Which pipe is better, PPR or GI?", a: "PPR doesn't rust and is the common choice for new lines; old GI lines rust and reduce pressure over time." },
      { q: "Can you replace lines without breaking all the tiles?", a: "Often we run new lines on a new route to minimise breaking. We explain options first." },
    ],
    faqsBn: [
      { q: "পিপিআর না জিআই — কোন পাইপ ভালো?", a: "পিপিআরে মরিচা ধরে না, নতুন লাইনে এটিই বেশি ব্যবহৃত; পুরোনো জিআই লাইনে মরিচা ধরে সময়ের সাথে প্রেশার কমে।" },
      { q: "সব টাইলস না ভেঙে কি লাইন বদলানো যায়?", a: "অনেক সময় নতুন পথে লাইন নিয়ে ভাঙচুর কমাই। আগে বিকল্পগুলো বুঝিয়ে বলি।" },
    ],
    images: ["pipe-1"], pairs: [],
  },
  {
    slug: "water-pipe-leakage-repair", site: "plumbing", group: "residential",
    name: "Water Pipe Leakage Repair", nameBn: "পানির পাইপ লিকেজ মেরামত",
    summary: "Fast repair of visible pipe leaks, burst pipes, leaking joints and valves — under sinks, in bathrooms, on rooftops and in pump rooms.",
    summaryBn: "দৃশ্যমান পাইপ লিক, ফাটা পাইপ, জয়েন্ট ও ভালভ লিক দ্রুত মেরামত — সিংকের নিচে, বাথরুমে, ছাদে ও পাম্প রুমে।",
    includes: ["Emergency response", "Joint and fitting replacement", "Burst section replacement", "Valve repair", "Leak test"],
    includesBn: ["জরুরি সাড়া", "জয়েন্ট ও ফিটিং বদল", "ফাটা অংশ বদল", "ভালভ মেরামত", "লিক টেস্ট"],
    faqs: [
      { q: "A pipe burst. What should I do first?", a: "Close the main valve or switch off the pump, then message us on WhatsApp marked urgent." },
      { q: "Is this different from leak detection?", a: "Yes — this is for leaks you can see. For hidden leaks in walls or ceilings, see Water Leakage Detection." },
    ],
    faqsBn: [
      { q: "পাইপ ফেটে গেছে, প্রথমে কী করব?", a: "মেইন ভালভ বন্ধ করুন বা পাম্প বন্ধ করুন, তারপর হোয়াটসঅ্যাপে জরুরি লিখে জানান।" },
      { q: "এটা কি লিক শনাক্তকরণ থেকে আলাদা?", a: "হ্যাঁ — এটা চোখে দেখা যায় এমন লিকের জন্য। দেয়াল বা সিলিংয়ের লুকানো লিকের জন্য 'পানি লিকেজ শনাক্ত' দেখুন।" },
    ],
    images: ["pipe-1"], pairs: [],
  },
  {
    slug: "drain-blockage-removal", site: "plumbing", group: "residential",
    name: "Drain / Pipe Blockage Removal", nameBn: "ড্রেন / পাইপ ব্লকেজ পরিষ্কার",
    summary: "Clearing blocked floor traps, commode lines, bathroom drains and main sewer pipes with proper tools — no harsh chemicals.",
    summaryBn: "ফ্লোর ট্র্যাপ, কমোড লাইন, বাথরুম ড্রেন ও মেইন স্যুয়ার পাইপের ব্লকেজ সঠিক যন্ত্রে পরিষ্কার — কড়া কেমিক্যাল ছাড়া।",
    includes: ["Blockage location", "Spring / machine cleaning", "Floor trap cleaning", "Flow test", "Prevention tips"],
    includesBn: ["ব্লকেজের জায়গা খোঁজা", "স্প্রিং / মেশিন দিয়ে পরিষ্কার", "ফ্লোর ট্র্যাপ পরিষ্কার", "পানি যাওয়ার টেস্ট", "আবার আটকানো রোধের টিপস"],
    faqs: [
      { q: "Should I pour acid or chemicals into a blocked drain?", a: "No. Chemicals damage pipes and are dangerous. Mechanical cleaning is safer and lasts longer." },
      { q: "Is this for basins and sinks too?", a: "For basins and kitchen sinks only, see Basin & Sink Drain Cleaning." },
    ],
    faqsBn: [
      { q: "আটকানো ড্রেনে কি অ্যাসিড বা কেমিক্যাল ঢালব?", a: "না। কেমিক্যাল পাইপ নষ্ট করে এবং বিপজ্জনক। যন্ত্র দিয়ে পরিষ্কার বেশি নিরাপদ ও টেকসই।" },
      { q: "বেসিন ও সিংকের জন্যও কি এটা?", a: "শুধু বেসিন ও কিচেন সিংকের জন্য 'বেসিন ও সিংক ড্রেন পরিষ্কার' দেখুন।" },
    ],
    images: ["commode-blockage", "kitchen-sink"], pairs: [],
  },
  {
    slug: "basin-sink-drain-cleaning", site: "plumbing", group: "residential",
    name: "Basin & Sink Drain Cleaning", nameBn: "বেসিন ও সিংক ড্রেন পরিষ্কার",
    summary: "Slow or blocked basin and kitchen sink? We clean the trap and waste pipe, remove grease and hair build-up, and fix leaks under the sink.",
    summaryBn: "বেসিন বা কিচেন সিংক আটকে গেছে? ট্র্যাপ ও ওয়েস্ট পাইপ পরিষ্কার, তেল-চুল জমা দূর এবং সিংকের নিচের লিক মেরামত।",
    includes: ["Trap removal and cleaning", "Waste pipe cleaning", "Grease build-up removal", "Leak fix under sink", "Flow test"],
    includesBn: ["ট্র্যাপ খুলে পরিষ্কার", "ওয়েস্ট পাইপ পরিষ্কার", "জমে থাকা তেল-ময়লা দূর", "সিংকের নিচের লিক মেরামত", "পানি যাওয়ার টেস্ট"],
    faqs: [
      { q: "Why does my kitchen sink block so often?", a: "Cooking oil and food scraps harden inside the pipe. A sink strainer and hot water flushes help." },
      { q: "Do you replace sink waste pipes?", a: "Yes, if old pipes are cracked or leaking." },
    ],
    faqsBn: [
      { q: "কিচেন সিংক বারবার আটকায় কেন?", a: "রান্নার তেল ও খাবারের টুকরো পাইপের ভেতরে জমে শক্ত হয়ে যায়। সিংক ছাঁকনি ও মাঝে মাঝে গরম পানি ঢাললে উপকার হয়।" },
      { q: "সিংকের ওয়েস্ট পাইপ কি বদলে দেন?", a: "হ্যাঁ, পুরোনো পাইপ ফাটা বা লিক হলে।" },
    ],
    images: ["kitchen-sink", "sink-mixer"], pairs: [],
  },
  {
    slug: "geyser-installation", site: "plumbing", group: "residential",
    name: "Geyser Installation & Water Line Connection", nameBn: "গিজার লাগানো ও পানির লাইন সংযোগ",
    summary: "Safe geyser installation with strong wall mounting, hot and cold water lines, safety valve and connection to shower and basin.",
    summaryBn: "নিরাপদ গিজার লাগানো — শক্ত দেয়াল মাউন্টিং, গরম-ঠান্ডা পানির লাইন, সেফটি ভালভ এবং শাওয়ার ও বেসিনে সংযোগ সহ।",
    includes: ["Wall mounting", "Hot and cold line connection", "Safety / pressure valve", "Connection to shower and basin", "Leak test"],
    includesBn: ["দেয়ালে মাউন্টিং", "গরম ও ঠান্ডা লাইন সংযোগ", "সেফটি / প্রেশার ভালভ", "শাওয়ার ও বেসিনে সংযোগ", "লিক টেস্ট"],
    faqs: [
      { q: "Is the electrical connection included?", a: "Our electrical division checks the cable, breaker and earthing in the same visit — strongly recommended for safety." },
      { q: "Can you move my geyser when I shift?", a: "Yes, we uninstall and re-install at your new flat." },
    ],
    faqsBn: [
      { q: "ইলেকট্রিক সংযোগ কি এর মধ্যে আছে?", a: "একই ভিজিটে আমাদের ইলেকট্রিক্যাল বিভাগ তার, ব্রেকার ও আর্থিং চেক করে — নিরাপত্তার জন্য খুব জরুরি।" },
      { q: "বাসা বদলালে কি গিজার সরিয়ে দেন?", a: "হ্যাঁ, খুলে নতুন ফ্ল্যাটে আবার লাগিয়ে দিই।" },
    ],
    images: ["water-heater", "pipe-1"], pairs: ["ac-geyser-electrical-connection"],
  },
  {
    slug: "water-pump-installation", site: "plumbing", group: "residential",
    name: "Water Pump Installation & Connection", nameBn: "পানির পাম্প লাগানো ও সংযোগ",
    summary: "Water pump installation and replacement for houses and buildings — suction and delivery lines, foot valve, auto switch and tank connection.",
    summaryBn: "বাসা ও বিল্ডিংয়ে পানির পাম্প লাগানো ও বদল — সাকশন ও ডেলিভারি লাইন, ফুট ভালভ, অটো সুইচ ও ট্যাংক সংযোগ।",
    includes: ["Pump size advice", "Suction and delivery piping", "Foot valve and non-return valve", "Auto level switch (optional)", "Run test"],
    includesBn: ["পাম্পের সাইজ পরামর্শ", "সাকশন ও ডেলিভারি পাইপিং", "ফুট ভালভ ও নন-রিটার্ন ভালভ", "অটো লেভেল সুইচ (ঐচ্ছিক)", "চালিয়ে টেস্ট"],
    faqs: [
      { q: "Which pump size do I need?", a: "It depends on building height and daily water use. Try our pump calculator or ask us." },
      { q: "Who does the pump's wiring and breaker?", a: "Our electrical division installs the breaker and power line for the pump." },
    ],
    faqsBn: [
      { q: "কত সাইজের পাম্প লাগবে?", a: "বিল্ডিংয়ের উচ্চতা ও দৈনিক পানি ব্যবহারের উপর নির্ভর করে। আমাদের পাম্প ক্যালকুলেটর দেখুন বা জিজ্ঞেস করুন।" },
      { q: "পাম্পের ওয়্যারিং ও ব্রেকার কে করে?", a: "আমাদের ইলেকট্রিক্যাল বিভাগ পাম্পের ব্রেকার ও পাওয়ার লাইন লাগায়।" },
    ],
    images: ["pipe-1"], pairs: ["mcb-installation", "electrical-wiring-rewiring"],
  },
  {
    slug: "angle-valve-installation", site: "plumbing", group: "residential",
    name: "Angle Valve Installation", nameBn: "অ্যাঙ্গেল ভালভ লাগানো",
    summary: "Angle valve fitting and replacement for basins, commodes, geysers and kitchen sinks, so each fixture can be shut off separately.",
    summaryBn: "বেসিন, কমোড, গিজার ও কিচেন সিংকে অ্যাঙ্গেল ভালভ লাগানো ও বদল — যাতে প্রতিটি ফিক্সচার আলাদাভাবে বন্ধ করা যায়।",
    includes: ["Old valve removal", "New angle valve fitting", "Connection pipe", "Thread sealing", "Leak test"],
    includesBn: ["পুরোনো ভালভ খোলা", "নতুন অ্যাঙ্গেল ভালভ ফিটিং", "কানেকশন পাইপ", "থ্রেড সিলিং", "লিক টেস্ট"],
    faqs: [
      { q: "Why do I need angle valves?", a: "They let you shut water to one fixture for repairs without cutting water to the whole flat." },
      { q: "My angle valve leaks when opened. Fix or replace?", a: "Usually replace — old valves often seize." },
    ],
    faqsBn: [
      { q: "অ্যাঙ্গেল ভালভ কেন দরকার?", a: "পুরো ফ্ল্যাটের পানি বন্ধ না করে শুধু একটি ফিক্সচারের পানি বন্ধ করে মেরামত করা যায়।" },
      { q: "অ্যাঙ্গেল ভালভ খুললে লিক করে, মেরামত না বদল?", a: "সাধারণত বদলানোই ভালো — পুরোনো ভালভ প্রায়ই আটকে যায়।" },
    ],
    images: ["tap-1"], pairs: [],
  },

  // ───────────── PLUMBING · home services ─────────────
  {
    slug: "washing-machine-installation", site: "plumbing", group: "home",
    name: "Washing Machine Installation", nameBn: "ওয়াশিং মেশিন লাগানো",
    summary: "Washing machine installation with inlet tap, hose, drain connection and leveling — for front-load and top-load machines.",
    summaryBn: "ফ্রন্ট-লোড ও টপ-লোড ওয়াশিং মেশিন লাগানো — ইনলেট ট্যাপ, হোস, ড্রেন সংযোগ ও লেভেলিং সহ।",
    includes: ["Inlet tap fitting", "Hose connection", "Drain line connection", "Leveling", "Test wash"],
    includesBn: ["ইনলেট ট্যাপ ফিটিং", "হোস সংযোগ", "ড্রেন লাইন সংযোগ", "লেভেলিং", "টেস্ট ওয়াশ"],
    faqs: [
      { q: "Do I need a separate socket?", a: "A dedicated earthed socket is recommended. Our electrical division can add one in the same visit." },
      { q: "Can you install where there's no water point?", a: "Yes, we extend a water line and drain to the location." },
    ],
    faqsBn: [
      { q: "আলাদা সকেট কি লাগবে?", a: "আর্থিংসহ আলাদা সকেট ভালো। আমাদের ইলেকট্রিক্যাল বিভাগ একই ভিজিটে লাগিয়ে দিতে পারে।" },
      { q: "পানির পয়েন্ট না থাকলে কি লাগানো যাবে?", a: "হ্যাঁ, পানির লাইন ও ড্রেন বাড়িয়ে সেখানে নিয়ে যাই।" },
    ],
    images: ["washing-machine"], pairs: ["switch-socket-installation"],
  },
  {
    slug: "water-purifier-installation-servicing", site: "plumbing", group: "home",
    name: "Water Purifier Installation & Servicing", nameBn: "ওয়াটার পিউরিফায়ার লাগানো ও সার্ভিসিং",
    summary: "RO and filter-type water purifier installation, filter replacement and servicing for clean drinking water at home and office.",
    summaryBn: "আরও ও ফিল্টার-টাইপ ওয়াটার পিউরিফায়ার লাগানো, ফিল্টার বদল ও সার্ভিসিং — বাসা ও অফিসে বিশুদ্ধ খাবার পানির জন্য।",
    includes: ["Wall mounting", "Inlet and drain connection", "Filter replacement", "TDS / taste check", "Leak test"],
    includesBn: ["দেয়ালে মাউন্টিং", "ইনলেট ও ড্রেন সংযোগ", "ফিল্টার বদল", "টিডিএস / স্বাদ চেক", "লিক টেস্ট"],
    faqs: [
      { q: "How often should RO filters be changed?", a: "Pre-filters every 3–6 months and membranes every 1–2 years, depending on water quality." },
      { q: "Does an RO purifier need power?", a: "Yes. Our electrical division can add a socket near the purifier." },
    ],
    faqsBn: [
      { q: "আরও ফিল্টার কতদিন পরপর বদলাতে হয়?", a: "পানির মান অনুযায়ী প্রি-ফিল্টার ৩–৬ মাসে এবং মেমব্রেন ১–২ বছরে।" },
      { q: "আরও পিউরিফায়ারে কি বিদ্যুৎ লাগে?", a: "হ্যাঁ। আমাদের ইলেকট্রিক্যাল বিভাগ পিউরিফায়ারের কাছে সকেট লাগিয়ে দিতে পারে।" },
    ],
    images: ["water-filter", "kitchen-sink"], pairs: ["ips-installation"],
  },
  {
    slug: "gas-stove-installation-repair", site: "plumbing", group: "home",
    name: "Gas Stove Installation & Repair", nameBn: "গ্যাসের চুলা লাগানো ও মেরামত",
    summary: "Gas stove installation, burner and knob repair, gas pipe and regulator connection, and leak checks for line gas and cylinders.",
    summaryBn: "গ্যাসের চুলা লাগানো, বার্নার ও নব মেরামত, গ্যাস পাইপ ও রেগুলেটর সংযোগ এবং লাইন গ্যাস ও সিলিন্ডারের লিক চেক।",
    includes: ["Stove fitting", "Pipe and regulator connection", "Burner and knob repair", "Soap-bubble leak test", "Safety advice"],
    includesBn: ["চুলা ফিটিং", "পাইপ ও রেগুলেটর সংযোগ", "বার্নার ও নব মেরামত", "সাবান-ফেনা দিয়ে লিক টেস্ট", "নিরাপত্তা পরামর্শ"],
    faqs: [
      { q: "I smell gas. What should I do?", a: "Turn off the stove and cylinder/regulator, open windows, don't switch lights on or off, and get help immediately." },
      { q: "Do you install kitchen hoods too?", a: "Yes — our electrical division installs and cleans kitchen hoods." },
    ],
    faqsBn: [
      { q: "গ্যাসের গন্ধ পাচ্ছি, কী করব?", a: "চুলা ও সিলিন্ডার/রেগুলেটর বন্ধ করুন, জানালা খুলে দিন, লাইটের সুইচ চালু-বন্ধ করবেন না, এবং দ্রুত সাহায্য নিন।" },
      { q: "কিচেন হুডও কি লাগান?", a: "হ্যাঁ — আমাদের ইলেকট্রিক্যাল বিভাগ কিচেন হুড লাগায় ও পরিষ্কার করে।" },
    ],
    images: ["gas-stove", "kitchen-sink"], pairs: ["kitchen-hood-installation-cleaning"],
  },
  {
    slug: "wall-mirror-installation", site: "plumbing", group: "home",
    name: "Wall Mirror Installation", nameBn: "দেয়ালে আয়না লাগানো",
    summary: "Bathroom and dressing mirror installation with safe brackets or clips, at the right height above the basin.",
    summaryBn: "বাথরুম ও ড্রেসিং আয়না নিরাপদ ব্র্যাকেট বা ক্লিপ দিয়ে বেসিনের উপর সঠিক উচ্চতায় লাগানো।",
    includes: ["Height marking", "Tile-safe drilling", "Clips or brackets", "Level alignment", "Clean-up"],
    includesBn: ["উচ্চতা মার্কিং", "টাইলস-নিরাপদ ড্রিলিং", "ক্লিপ বা ব্র্যাকেট", "সমান লেভেলে বসানো", "কাজ শেষে পরিষ্কার"],
    faqs: [
      { q: "Can you fix a mirror on tiles?", a: "Yes, using tile drill bits so tiles don't crack." },
      { q: "Do you install mirror cabinets?", a: "Yes, bathroom cabinets and mirror cabinets too." },
    ],
    faqsBn: [
      { q: "টাইলসের উপর কি আয়না লাগানো যায়?", a: "হ্যাঁ, টাইল ড্রিল বিট দিয়ে, যাতে টাইলস না ফাটে।" },
      { q: "আয়নাসহ কেবিনেট কি লাগান?", a: "হ্যাঁ, বাথরুম কেবিনেট ও মিরর কেবিনেটও লাগাই।" },
    ],
    images: ["tap-1"], pairs: ["tv-wall-mount-installation", "picture-frame-installation"],
  },
  {
    slug: "bathroom-accessories-installation", site: "plumbing", group: "home",
    name: "Bathroom Accessories Installation (Towel Rack & Soap Holder)", nameBn: "বাথরুম অ্যাক্সেসরিজ লাগানো (টাওয়েল র‍্যাক ও সোপ হোল্ডার)",
    summary: "Installation of towel racks, soap holders, tissue holders, shelves, hooks and grab bars — neatly fitted on tiles without cracks.",
    summaryBn: "টাওয়েল র‍্যাক, সোপ হোল্ডার, টিস্যু হোল্ডার, শেলফ, হুক ও গ্র্যাব বার লাগানো — টাইলস না ফাটিয়ে গোছানোভাবে।",
    includes: ["Towel rack and rail", "Soap and tissue holders", "Corner shelves and hooks", "Grab bars for elderly", "Tile-safe drilling"],
    includesBn: ["টাওয়েল র‍্যাক ও রেল", "সোপ ও টিস্যু হোল্ডার", "কর্নার শেলফ ও হুক", "বয়স্কদের জন্য গ্র্যাব বার", "টাইলস-নিরাপদ ড্রিলিং"],
    faqs: [
      { q: "Can you fit a full bathroom accessory set in one visit?", a: "Yes, most sets take 1–2 hours." },
      { q: "Do you fit grab bars for elderly family members?", a: "Yes, with strong anchors suitable for body weight." },
    ],
    faqsBn: [
      { q: "এক ভিজিটে কি পুরো বাথরুম অ্যাক্সেসরিজ সেট লাগানো যায়?", a: "হ্যাঁ, বেশিরভাগ সেটে ১–২ ঘণ্টা লাগে।" },
      { q: "বয়স্কদের জন্য গ্র্যাব বার কি লাগান?", a: "হ্যাঁ, শরীরের ভার বহনের উপযোগী শক্ত অ্যাংকর দিয়ে।" },
    ],
    images: ["commode-2"], pairs: ["wall-shelf-installation"],
  },
  {
    slug: "minor-home-maintenance-repair", site: "plumbing", group: "home",
    name: "Minor Home Maintenance & Repair", nameBn: "ছোটখাটো ঘরোয়া রক্ষণাবেক্ষণ ও মেরামত",
    summary: "One visit for the small jobs list — dripping taps, loose fittings, door issues, small leaks and odd jobs around the flat.",
    summaryBn: "ছোট কাজের তালিকা এক ভিজিটে — টপকানো ট্যাপ, ঢিলা ফিটিং, দরজার সমস্যা, ছোট লিক ও ঘরের টুকটাক কাজ।",
    includes: ["Small plumbing fixes", "Loose fittings", "Minor leaks", "Odd jobs list", "Electrical items via our electricians"],
    includesBn: ["ছোট প্লাম্বিং মেরামত", "ঢিলা ফিটিং", "ছোট লিক", "টুকটাক কাজের তালিকা", "ইলেকট্রিক কাজ আমাদের ইলেকট্রিশিয়ান দিয়ে"],
    faqs: [
      { q: "Can I send a list of small jobs?", a: "Yes — send the list on WhatsApp and we'll plan one visit." },
      { q: "What if the list includes electrical jobs?", a: "We send a technician who can do both, or bring an electrician along." },
    ],
    faqsBn: [
      { q: "ছোট কাজের তালিকা কি পাঠাতে পারি?", a: "হ্যাঁ — হোয়াটসঅ্যাপে তালিকা পাঠান, এক ভিজিটে সব করার পরিকল্পনা করব।" },
      { q: "তালিকায় ইলেকট্রিক কাজ থাকলে?", a: "দুই কাজ জানেন এমন টেকনিশিয়ান পাঠাই, অথবা ইলেকট্রিশিয়ান সাথে নিয়ে আসি।" },
    ],
    images: ["kitchen-sink", "tap-1"], pairs: ["electrical-checkup-inspection"],
  },

  // ───────────── PLUMBING · commercial ─────────────
  {
    slug: "commercial-plumbing-checkup", site: "plumbing", group: "commercial",
    name: "Commercial Plumbing Check-up", nameBn: "কমার্শিয়াল প্লাম্বিং চেকআপ",
    summary: "Plumbing audit for offices, shops, restaurants and buildings: water supply, pumps, tanks, drains, washrooms and leaks, with a prioritised report.",
    summaryBn: "অফিস, দোকান, রেস্টুরেন্ট ও বিল্ডিংয়ের প্লাম্বিং অডিট — পানি সরবরাহ, পাম্প, ট্যাংক, ড্রেন, ওয়াশরুম ও লিক চেক এবং রিপোর্ট।",
    includes: ["Water supply and pressure check", "Pump and tank inspection", "Drain and sewer flow check", "Washroom fittings", "Written report"],
    includesBn: ["পানি সরবরাহ ও প্রেশার চেক", "পাম্প ও ট্যাংক পরিদর্শন", "ড্রেন ও স্যুয়ার প্রবাহ চেক", "ওয়াশরুম ফিটিং", "লিখিত রিপোর্ট"],
    faqs: [
      { q: "Can you check electrical systems in the same visit?", a: "Yes, our electrical division can audit panels and wiring together." },
      { q: "Do you work at night for restaurants?", a: "Yes, we schedule around your opening hours." },
    ],
    faqsBn: [
      { q: "একই ভিজিটে কি ইলেকট্রিক্যালও চেক করেন?", a: "হ্যাঁ, আমাদের ইলেকট্রিক্যাল বিভাগ একসাথে প্যানেল ও ওয়্যারিং অডিট করতে পারে।" },
      { q: "রেস্টুরেন্টের জন্য কি রাতে কাজ করেন?", a: "হ্যাঁ, আপনার খোলার সময় মিলিয়ে কাজের সময় ঠিক করি।" },
    ],
    images: ["supershop-1", "pipe-1"], pairs: ["commercial-electrical-checkup"],
  },
  {
    slug: "commercial-plumbing-installation-repair", site: "plumbing", group: "commercial",
    name: "Commercial Plumbing Installation & Repair", nameBn: "কমার্শিয়াল প্লাম্বিং লাগানো ও মেরামত",
    summary: "Plumbing for offices, showrooms, restaurants and buildings — washrooms, pantries, kitchen lines, pumps and repairs.",
    summaryBn: "অফিস, শোরুম, রেস্টুরেন্ট ও বিল্ডিংয়ের প্লাম্বিং — ওয়াশরুম, প্যান্ট্রি, কিচেন লাইন, পাম্প ও মেরামত।",
    includes: ["Site survey and written proposal", "Washroom and pantry plumbing", "Commercial kitchen lines", "Pump and tank systems", "Testing and handover"],
    includesBn: ["সাইট সার্ভে ও লিখিত প্রস্তাব", "ওয়াশরুম ও প্যান্ট্রি প্লাম্বিং", "কমার্শিয়াল কিচেন লাইন", "পাম্প ও ট্যাংক সিস্টেম", "টেস্টিং ও হস্তান্তর"],
    faqs: [
      { q: "Do you handle office fit-outs?", a: "Yes, we work alongside interior contractors on new office plumbing." },
      { q: "Can electrical work be included?", a: "Our electrical division handles office wiring in the same project." },
    ],
    faqsBn: [
      { q: "অফিস ফিট-আউটের কাজ কি করেন?", a: "হ্যাঁ, নতুন অফিসের প্লাম্বিংয়ে ইন্টেরিয়র কন্ট্রাক্টরের সাথে কাজ করি।" },
      { q: "ইলেকট্রিক কাজও কি একসাথে হবে?", a: "একই প্রজেক্টে আমাদের ইলেকট্রিক্যাল বিভাগ অফিস ওয়্যারিং করে।" },
    ],
    images: ["supershop-1"], pairs: ["office-electrical-wiring"],
  },
  {
    slug: "water-supply-line-installation", site: "plumbing", group: "commercial",
    name: "Water Supply Line Installation & Repair", nameBn: "পানি সরবরাহ লাইন লাগানো ও মেরামত",
    summary: "Main water supply lines, riser pipes, overhead and underground tank connections for buildings, with valves for easy maintenance.",
    summaryBn: "বিল্ডিংয়ের মেইন পানি সরবরাহ লাইন, রাইজার পাইপ, ছাদ ও মাটির নিচের ট্যাংক সংযোগ — সহজ রক্ষণাবেক্ষণের জন্য ভালভ সহ।",
    includes: ["Line route planning", "Riser and main lines", "Tank connections", "Isolation valves", "Pressure test"],
    includesBn: ["লাইনের পথ পরিকল্পনা", "রাইজার ও মেইন লাইন", "ট্যাংক সংযোগ", "আইসোলেশন ভালভ", "প্রেশার টেস্ট"],
    faqs: [
      { q: "Can you replace a building's old GI riser?", a: "Yes, floor by floor to keep water running for residents as much as possible." },
      { q: "Do you clean water tanks?", a: "Ask us on WhatsApp — we can arrange tank cleaning with line work." },
    ],
    faqsBn: [
      { q: "বিল্ডিংয়ের পুরোনো জিআই রাইজার কি বদলাতে পারবেন?", a: "হ্যাঁ, তলা ধরে ধরে, যাতে বাসিন্দাদের পানি যতটা সম্ভব চালু থাকে।" },
      { q: "পানির ট্যাংক কি পরিষ্কার করেন?", a: "হোয়াটসঅ্যাপে জিজ্ঞেস করুন — লাইনের কাজের সাথে ট্যাংক পরিষ্কারের ব্যবস্থা করতে পারি।" },
    ],
    images: ["pipe-1"], pairs: [],
  },
  {
    slug: "commercial-drainage-blockage-removal", site: "plumbing", group: "commercial",
    name: "Commercial Drainage & Blockage Removal", nameBn: "কমার্শিয়াল ড্রেনেজ ও ব্লকেজ পরিষ্কার",
    summary: "Clearing blocked drains, sewer lines and grease-heavy restaurant kitchen drains for shops, restaurants and buildings.",
    summaryBn: "দোকান, রেস্টুরেন্ট ও বিল্ডিংয়ের আটকে যাওয়া ড্রেন, স্যুয়ার লাইন ও তেলযুক্ত রেস্টুরেন্ট কিচেন ড্রেন পরিষ্কার।",
    includes: ["Emergency response", "Machine cleaning", "Grease trap cleaning", "Sewer line clearing", "Preventive schedule"],
    includesBn: ["জরুরি সাড়া", "মেশিন দিয়ে পরিষ্কার", "গ্রিজ ট্র্যাপ পরিষ্কার", "স্যুয়ার লাইন পরিষ্কার", "নিয়মিত প্রতিরোধমূলক সূচি"],
    faqs: [
      { q: "How often should a restaurant clean its grease trap?", a: "Typically every 2–4 weeks, depending on cooking volume." },
      { q: "Can you come after closing?", a: "Yes, night work is available for restaurants and shops." },
    ],
    faqsBn: [
      { q: "রেস্টুরেন্টের গ্রিজ ট্র্যাপ কতদিন পরপর পরিষ্কার করা উচিত?", a: "রান্নার পরিমাণ অনুযায়ী সাধারণত প্রতি ২–৪ সপ্তাহে।" },
      { q: "বন্ধের পরে কি আসতে পারবেন?", a: "হ্যাঁ, রেস্টুরেন্ট ও দোকানের জন্য রাতে কাজ করি।" },
    ],
    images: ["commode-blockage", "supershop-1"], pairs: [],
  },
  {
    slug: "shop-restaurant-supershop-maintenance", site: "plumbing", group: "commercial",
    name: "Shop, Restaurant & Super Shop Maintenance", nameBn: "দোকান, রেস্টুরেন্ট ও সুপার শপ রক্ষণাবেক্ষণ",
    summary: "Monthly maintenance for shops, restaurants and super shops — plumbing, drains, washrooms and electrical — from one trusted team.",
    summaryBn: "দোকান, রেস্টুরেন্ট ও সুপার শপের মাসিক রক্ষণাবেক্ষণ — প্লাম্বিং, ড্রেন, ওয়াশরুম ও ইলেকট্রিক্যাল — এক বিশ্বস্ত টিমে।",
    includes: ["Scheduled monthly visits", "Drain and grease trap care", "Washroom upkeep", "Electrical checks by our electricians", "Priority emergency response"],
    includesBn: ["নির্ধারিত মাসিক ভিজিট", "ড্রেন ও গ্রিজ ট্র্যাপ যত্ন", "ওয়াশরুম রক্ষণাবেক্ষণ", "আমাদের ইলেকট্রিশিয়ান দিয়ে ইলেকট্রিক চেক", "জরুরি কলে অগ্রাধিকার"],
    faqs: [
      { q: "Have you worked with super shops?", a: "Yes, including super shops in Uttara (see our work photos)." },
      { q: "Is electrical maintenance included?", a: "Yes, combined electrical + plumbing contracts are available." },
    ],
    faqsBn: [
      { q: "সুপার শপে কি কাজ করেছেন?", a: "হ্যাঁ, উত্তরার সুপার শপেও (আমাদের কাজের ছবি দেখুন)।" },
      { q: "ইলেকট্রিক রক্ষণাবেক্ষণও কি আছে?", a: "হ্যাঁ, ইলেকট্রিক্যাল + প্লাম্বিং একসাথে চুক্তি করা যায়।" },
    ],
    images: ["supershop-1", "supershop-3", "supershop-2"], pairs: ["office-building-maintenance"],
  },
];

export const servicePath = (s: Service) =>
  s.group === "commercial" ? `/commercial/${s.slug}/` : `/services/${s.slug}/`;

export const servicesFor = (siteKey: SiteKey) => services.filter((s) => s.site === siteKey);
export const findService = (slug: string) => services.find((s) => s.slug === slug);

// Shown as "Last updated" on service pages. Change when content is revised.
export const contentUpdated = "2026-10-25";

// Build-time checks
for (const s of services) {
  for (const p of s.pairs) {
    const target = services.find((x) => x.slug === p);
    if (!target) throw new Error(`services.ts: "${s.slug}" pairs with unknown slug "${p}"`);
    if (target.site === s.site) throw new Error(`services.ts: "${s.slug}" pairs with "${p}" on the same site`);
  }
  if (s.includes.length !== s.includesBn.length || s.faqs.length !== s.faqsBn.length)
    throw new Error(`services.ts: "${s.slug}" English and Bangla lists differ in length`);
}
if (new Set(services.map((s) => s.slug)).size !== services.length) throw new Error("services.ts: duplicate slug");
