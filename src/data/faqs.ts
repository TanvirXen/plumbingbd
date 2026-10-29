// FAQ page (/faq/): what customers in Dhaka actually ask before booking, in English and Bangla.
// Written for people and for search / AI answers (FAQPage schema + llms.txt use the same text).
// PLACEHOLDER: answers marked "policy" below describe how you work — check they match your real rules.

import { company } from "./company";
import type { Faq } from "./services";
import type { SiteKey } from "./sites";
import type { Lang } from "../i18n";

export interface FaqGroup { key: string; title: string; items: Faq[] }
type Group = { key: string; title: Record<Lang, string>; en: Faq[]; bn: Faq[] };

const m = company.responseMinutes;
const pay = company.payments.join(", ");
const payBn = company.paymentsBn.join(", ");

const booking: Group = {
  key: "booking",
  title: { en: "Booking and timing", bn: "বুকিং ও সময়" },
  en: [
    { q: "How do I book an electrician or plumber?", a: `Three ways: tap "Order now" to send a WhatsApp message, fill in the short order form (work, address, date and time), or call ${company.phone}. You don't need an account or an app.` },
    { q: "What is the Order ID in my WhatsApp message?", a: "Every order gets an ID like ES-301026-1 (service letters, job date, number). Keep it — quote it when you message us about that job, for a follow-up visit or a bill." },
    { q: "Are you really open 24 hours, including Friday and holidays?", a: "Yes, we take orders 24 hours a day, every day, including Fridays and government holidays. At night we go first to urgent jobs: no power, sparking, short circuit, water leaking or overflowing. During Eid holidays please message first so we can confirm a time." },
    { q: "How fast can a technician reach me?", a: `For urgent jobs in most of Uttara we usually arrive in about ${m} minutes. Bashundhara and other areas can take longer depending on traffic. Booked jobs come at the time you choose.` },
    { q: "Can I book for a specific date and time?", a: "Yes. In the order form pick a day (up to a week ahead) and a 2-hour time slot, or choose Urgent. We confirm the time on WhatsApp." },
    { q: "Which areas do you cover?", a: "All sectors of Uttara, all blocks of Bashundhara R/A, and nearby north Dhaka areas such as Uttarkhan, Dakkhinkhan, Diabari and Abdullahpur. The Areas page has the full list. Outside these areas, message us — we often still come." },
    { q: "Does someone need to be at home?", a: "Yes, please keep an adult at home (or a contact person at the office or shop) to show us the problem and check the work before we leave." },
  ],
  bn: [
    { q: "কীভাবে ইলেকট্রিশিয়ান বা প্লাম্বার বুক করব?", a: `তিনভাবে: "এখনই অর্ডার করুন" চেপে হোয়াটসঅ্যাপে মেসেজ পাঠান, ছোট অর্ডার ফর্ম পূরণ করুন (কাজ, ঠিকানা, তারিখ ও সময়), অথবা ${company.phone} নম্বরে কল করুন। কোনো অ্যাকাউন্ট বা অ্যাপ লাগবে না।` },
    { q: "হোয়াটসঅ্যাপ মেসেজে অর্ডার আইডি কী?", a: "প্রতিটি অর্ডারের একটি আইডি থাকে, যেমন ES-301026-1 (সার্ভিসের অক্ষর, কাজের তারিখ, নম্বর)। এটি রেখে দিন — ওই কাজ নিয়ে মেসেজ, পরের ভিজিট বা বিলের সময় আইডিটি বলবেন।" },
    { q: "আপনারা কি সত্যিই ২৪ ঘণ্টা খোলা, শুক্রবার ও ছুটির দিনেও?", a: "হ্যাঁ, শুক্রবার ও সরকারি ছুটির দিনসহ প্রতিদিন ২৪ ঘণ্টা অর্ডার নিই। রাতে আগে জরুরি কাজে যাই: বিদ্যুৎ নেই, স্পার্ক, শর্ট সার্কিট, পানি লিক বা উপচে পড়া। ঈদের ছুটিতে আগে মেসেজ দিন, সময় নিশ্চিত করে জানাব।" },
    { q: "টেকনিশিয়ান কত দ্রুত আসতে পারবে?", a: `উত্তরার বেশিরভাগ জায়গায় জরুরি কাজে সাধারণত প্রায় ${m} মিনিটে পৌঁছাই। বসুন্ধরা ও অন্য এলাকায় যানজট অনুযায়ী একটু বেশি সময় লাগতে পারে। আগে বুক করা কাজে আপনার বেছে নেওয়া সময়ে আসি।` },
    { q: "নির্দিষ্ট তারিখ ও সময়ে কি বুক করা যায়?", a: "হ্যাঁ। অর্ডার ফর্মে দিন (এক সপ্তাহ পর্যন্ত) ও ২ ঘণ্টার একটি সময় বেছে নিন, অথবা জরুরি বেছে নিন। হোয়াটসঅ্যাপে সময় নিশ্চিত করি।" },
    { q: "কোন কোন এলাকায় সার্ভিস দেন?", a: "উত্তরার সব সেক্টর, বসুন্ধরা আবাসিক এলাকার সব ব্লক, এবং আশেপাশের উত্তরখান, দক্ষিণখান, দিয়াবাড়ি ও আব্দুল্লাহপুর। পুরো তালিকা এলাকা পেজে আছে। এর বাইরে হলে মেসেজ দিন — অনেক সময় আসতে পারি।" },
    { q: "কাজের সময় কি বাসায় কাউকে থাকতে হবে?", a: "হ্যাঁ, একজন প্রাপ্তবয়স্ক বাসায় থাকুন (অফিস বা দোকানে একজন দায়িত্বশীল ব্যক্তি), যিনি সমস্যা দেখাবেন এবং কাজ শেষে চেক করে নেবেন।" },
  ],
};

const cost: Group = {
  key: "cost",
  title: { en: "Cost and payment", bn: "খরচ ও পেমেন্ট" },
  en: [
    { q: "Will I know the cost before work starts?", a: "Yes. We look at the problem (on WhatsApp photos or on site), tell you the cost and agree it with you before starting. Nothing extra is added without asking you first." },
    // policy
    { q: "Is there a visit or checkup charge?", a: "A small checkup charge may apply for a visit. We tell you the exact amount on WhatsApp before we come. If you go ahead with the work, we tell you how it's counted in the bill." },
    { q: "Why are there no prices on the website?", a: "Every job is different — cable length, pipe type, wall, height, parts. Send a photo or short video on WhatsApp and we give you a clear estimate first." },
    { q: "How do I pay — is bKash or Nagad accepted?", a: `You pay after the work is done and checked, by ${pay}.` },
    { q: "Do I get a bill or memo?", a: "Yes, on request we give a memo for home jobs. Offices and companies get a written quotation before work and a bill with the Order ID after." },
  ],
  bn: [
    { q: "কাজ শুরুর আগে কি খরচ জানতে পারব?", a: "হ্যাঁ। সমস্যা দেখে (হোয়াটসঅ্যাপের ছবিতে বা সরেজমিনে) খরচ জানাই এবং আপনার সম্মতি নিয়ে তারপর কাজ শুরু করি। আপনাকে না জানিয়ে কিছু যোগ হয় না।" },
    // policy
    { q: "ভিজিট বা চেকআপ চার্জ আছে কি?", a: "ভিজিটে সামান্য চেকআপ চার্জ লাগতে পারে। আসার আগে হোয়াটসঅ্যাপে সঠিক পরিমাণ জানিয়ে দিই। কাজ করালে বিলে সেটি কীভাবে ধরা হবে তাও জানাই।" },
    { q: "ওয়েবসাইটে দাম দেওয়া নেই কেন?", a: "প্রতিটি কাজ আলাদা — তারের দৈর্ঘ্য, পাইপের ধরন, দেয়াল, উচ্চতা, পার্টস। হোয়াটসঅ্যাপে একটি ছবি বা ছোট ভিডিও পাঠান, আগে পরিষ্কার একটি আনুমানিক খরচ জানিয়ে দেব।" },
    { q: "পেমেন্ট কীভাবে — বিকাশ বা নগদে কি দেওয়া যায়?", a: `কাজ শেষ করে চেক করার পর ${payBn} — যেকোনোভাবে পেমেন্ট করতে পারেন।` },
    { q: "বিল বা মেমো পাব কি?", a: "হ্যাঁ, চাইলে বাসার কাজে মেমো দিই। অফিস ও প্রতিষ্ঠান কাজের আগে লিখিত কোটেশন এবং কাজের পরে অর্ডার আইডিসহ বিল পায়।" },
  ],
};

const trust: Group = {
  key: "trust",
  title: { en: "Parts, safety and trust", bn: "পার্টস, নিরাপত্তা ও বিশ্বাস" },
  en: [
    { q: "Do you bring the parts, or should I buy them?", a: "We bring common parts and can buy anything else nearby. You can also buy your own parts — we'll tell you exactly what to get. We use branded parts and show you the receipt." },
    // policy
    { q: "Is there a warranty on your work?", a: "Parts carry the maker's warranty. If the same problem comes back from our work, message us with your Order ID and we'll come and check it again." },
    { q: "Are your technicians our own staff? Is it safe to let them in?", a: "Yes — our own trained team, in company uniform. We send the technician's name and phone number before the visit, and you can call our main number any time to check." },
    { q: "Can I talk to you in Bangla?", a: "Of course. Message or call in Bangla or English — whatever is easier for you." },
    { q: "Do you do both electrical and plumbing work?", a: "Yes. Emergency Electric and Plumbing Service has an Electrical Division (electricservicebd.com) and a Plumbing Division (plumbingservicebd.com), plus AC and home services. One message, one team." },
  ],
  bn: [
    { q: "পার্টস কি আপনারা আনবেন, নাকি আমাকে কিনতে হবে?", a: "সাধারণ পার্টস আমরা সাথে আনি, অন্য কিছু লাগলে কাছ থেকে কিনে আনি। চাইলে আপনি নিজেও কিনতে পারেন — ঠিক কী কিনবেন বলে দেব। ব্র্যান্ডের পার্টস ব্যবহার করি এবং রসিদ দেখাই।" },
    // policy
    { q: "কাজের কি ওয়ারেন্টি আছে?", a: "পার্টসে কোম্পানির ওয়ারেন্টি থাকে। আমাদের কাজের কারণে একই সমস্যা আবার হলে অর্ডার আইডিসহ মেসেজ দিন, আবার এসে দেখে দেব।" },
    { q: "টেকনিশিয়ানরা কি আপনাদের নিজস্ব লোক? বাসায় ঢুকতে দেওয়া কি নিরাপদ?", a: "হ্যাঁ — আমাদের নিজস্ব প্রশিক্ষিত টিম, কোম্পানির ইউনিফর্মে আসে। ভিজিটের আগে টেকনিশিয়ানের নাম ও ফোন নম্বর পাঠিয়ে দিই, আর যেকোনো সময় আমাদের মূল নম্বরে কল করে নিশ্চিত হতে পারেন।" },
    { q: "বাংলায় কথা বলা যাবে?", a: "অবশ্যই। বাংলা বা ইংরেজি — যেটা সুবিধা, সেভাবেই মেসেজ বা কল করুন।" },
    { q: "আপনারা কি ইলেকট্রিক ও প্লাম্বিং দুটো কাজই করেন?", a: "হ্যাঁ। ইমার্জেন্সি ইলেকট্রিক অ্যান্ড প্লাম্বিং সার্ভিসের ইলেকট্রিক্যাল বিভাগ (electricservicebd.com) ও প্লাম্বিং বিভাগ (plumbingservicebd.com) আছে, সাথে এসি ও হোম সার্ভিস। এক মেসেজে, এক টিম।" },
  ],
};

const electric: Group = {
  key: "electrical",
  title: { en: "Electrical problems", bn: "ইলেকট্রিক সমস্যা" },
  en: [
    { q: "I smell burning or see sparks — what should I do?", a: "Switch off the main breaker (MCB) at once, keep away from water and don't touch the burnt switch or wire. Then tap Order now and mark it Urgent, or call us — this is a priority job." },
    { q: "Why does my breaker (MCB) keep tripping?", a: "Usually an overloaded line (AC, geyser or iron on the same circuit), a short circuit, a loose connection or moisture. We find the cause and fix it — never just fit a bigger breaker." },
    { q: "What size IPS do I need for load shedding?", a: "It depends on the fans, lights, router and TV you want to run and for how long. Use the IPS load calculator on this site, or send us the list on WhatsApp and we'll suggest a size." },
    { q: "There's a problem with the electricity meter or the line outside — can you fix it?", a: "The meter and the line up to it belong to the electricity company (DESCO in Uttara and Bashundhara) — contact them for those. We handle everything after the meter: the main board, breakers, wiring, sockets and appliances." },
    { q: "Do you do full wiring for a new flat or an old building?", a: "Yes. We plan the load, use branded cables of the right size, separate lines for AC and geyser, proper earthing and a labelled distribution board." },
    { q: "Are your electricians trained for safe work?", a: "Yes. The team is led by an electrical engineer. We switch off and test lines before working, use correctly rated cables and breakers, and check earthing." },
  ],
  bn: [
    { q: "পোড়া গন্ধ পাচ্ছি বা স্পার্ক দেখছি — কী করব?", a: "সাথে সাথে মেইন ব্রেকার (এমসিবি) বন্ধ করুন, পানি থেকে দূরে থাকুন এবং পোড়া সুইচ বা তার ধরবেন না। তারপর এখনই অর্ডার করুন চেপে জরুরি বেছে নিন, অথবা কল করুন — এটি অগ্রাধিকারের কাজ।" },
    { q: "ব্রেকার (এমসিবি) বারবার ট্রিপ করে কেন?", a: "সাধারণত লাইনে বেশি লোড (একই সার্কিটে এসি, গিজার বা আয়রন), শর্ট সার্কিট, ঢিলা কানেকশন বা আর্দ্রতা। আমরা আসল কারণ খুঁজে ঠিক করি — শুধু বড় ব্রেকার লাগিয়ে দিই না।" },
    { q: "লোডশেডিংয়ের জন্য কত সাইজের আইপিএস লাগবে?", a: "কয়টি ফ্যান, লাইট, রাউটার ও টিভি কতক্ষণ চালাতে চান তার ওপর নির্ভর করে। এই সাইটের আইপিএস লোড ক্যালকুলেটর ব্যবহার করুন, অথবা হোয়াটসঅ্যাপে তালিকা পাঠান, সাইজ বলে দেব।" },
    { q: "মিটার বা বাইরের লাইনে সমস্যা — আপনারা কি ঠিক করবেন?", a: "মিটার ও মিটার পর্যন্ত লাইন বিদ্যুৎ কোম্পানির (উত্তরা ও বসুন্ধরায় ডেসকো) — সেগুলোর জন্য তাদের সাথে যোগাযোগ করুন। মিটারের পরের সবকিছু আমরা করি: মেইন বোর্ড, ব্রেকার, ওয়্যারিং, সকেট ও যন্ত্রপাতি।" },
    { q: "নতুন ফ্ল্যাট বা পুরনো বিল্ডিংয়ের পুরো ওয়্যারিং কি করেন?", a: "হ্যাঁ। লোড হিসাব করে প্ল্যান করি, সঠিক সাইজের ব্র্যান্ডের তার, এসি ও গিজারের আলাদা লাইন, ঠিকমতো আর্থিং এবং লেবেল করা ডিস্ট্রিবিউশন বোর্ড।" },
    { q: "আপনাদের ইলেকট্রিশিয়ানরা কি নিরাপদ কাজে প্রশিক্ষিত?", a: "হ্যাঁ। টিম একজন ইলেকট্রিক্যাল ইঞ্জিনিয়ারের নেতৃত্বে কাজ করে। কাজের আগে লাইন বন্ধ করে টেস্ট করি, সঠিক রেটিংয়ের তার ও ব্রেকার ব্যবহার করি এবং আর্থিং চেক করি।" },
  ],
};

const plumbing: Group = {
  key: "plumbing",
  title: { en: "Plumbing problems", bn: "প্লাম্বিং সমস্যা" },
  en: [
    { q: "Water is leaking into the flat downstairs — what do you do?", a: "We find the exact source first — bathroom floor, pipe joint, commode or drain — then open only what's needed and fix it. We explain the options before any breaking." },
    { q: "My water pressure is low or the pump isn't lifting water — can you help?", a: "Yes. We check the pump (motor), valves, pipes and tank line, then repair or install the right pump. The water pump calculator on this site helps you pick a size." },
    { q: "My commode, basin or kitchen drain is blocked — can you clear it without damage?", a: "Yes. We clear blockages with the right tools, without breaking fittings, and tell you what caused it so it doesn't come back." },
    { q: "Do you install geysers and connect the water line?", a: "Yes — geyser mounting, hot and cold water line connection and a leak check. Our electricians can also do the separate power line the geyser needs." },
    { q: "Do you fix leaks without breaking the whole bathroom?", a: "We first find the exact leak point, then open only what's needed. We explain the options before any breaking." },
    { q: "Can you replace taps, showers, commodes and basins?", a: "Yes — we install and replace all bathroom and kitchen fittings, including mixers, angle valves, washing machine and water purifier lines." },
  ],
  bn: [
    { q: "নিচের ফ্ল্যাটে পানি চুইয়ে পড়ছে — আপনারা কী করেন?", a: "আগে আসল উৎস খুঁজি — বাথরুমের ফ্লোর, পাইপের জোড়া, কমোড বা ড্রেন — তারপর যতটুকু দরকার শুধু ততটুকু খুলে ঠিক করি। ভাঙার আগে বিকল্পগুলো বুঝিয়ে বলি।" },
    { q: "পানির চাপ কম বা পাম্প পানি তুলছে না — সাহায্য করবেন?", a: "হ্যাঁ। পাম্প (মোটর), ভালভ, পাইপ ও ট্যাংকের লাইন চেক করে মেরামত করি বা সঠিক পাম্প লাগাই। সাইজ বাছতে এই সাইটের ওয়াটার পাম্প ক্যালকুলেটর ব্যবহার করতে পারেন।" },
    { q: "কমোড, বেসিন বা কিচেনের ড্রেন জ্যাম — ক্ষতি না করে কি খোলা যায়?", a: "হ্যাঁ। সঠিক যন্ত্র দিয়ে ফিটিংস না ভেঙে জ্যাম খুলি, আর কেন হয়েছে তা বলে দিই যাতে আবার না হয়।" },
    { q: "গিজার লাগানো ও পানির লাইন সংযোগ কি করেন?", a: "হ্যাঁ — গিজার লাগানো, গরম ও ঠান্ডা পানির লাইন সংযোগ এবং লিক চেক। গিজারের আলাদা বিদ্যুৎ লাইনও আমাদের ইলেকট্রিশিয়ানরা করে দেন।" },
    { q: "পুরো বাথরুম না ভেঙে কি লিক ঠিক করা যায়?", a: "আমরা আগে লিকের সঠিক জায়গা খুঁজে বের করি, তারপর যতটুকু দরকার শুধু ততটুকু খুলি। ভাঙার আগে বিকল্পগুলো বুঝিয়ে বলি।" },
    { q: "ট্যাপ, শাওয়ার, কমোড ও বেসিন বদলে দেন?", a: "হ্যাঁ — বাথরুম ও কিচেনের সব ফিটিংস লাগাই ও বদলাই, মিক্সার, অ্যাঙ্গেল ভালভ, ওয়াশিং মেশিন ও ওয়াটার পিউরিফায়ারের লাইনসহ।" },
  ],
};

const business: Group = {
  key: "business",
  title: { en: "Offices and businesses", bn: "অফিস ও প্রতিষ্ঠান" },
  en: [
    { q: "Do you work for offices, shops and companies?", a: "Yes — offices, shops, restaurants, super shops, clinics, schools and apartment buildings, from one-off repairs to full installations." },
    { q: "Can you work at night or on Friday so our business isn't disturbed?", a: "Yes. We regularly work early morning, at night and on weekends so shops and offices keep running." },
    { q: "Do you offer a monthly maintenance contract?", a: "Yes. Regular checks of boards, wiring, lighting and plumbing, priority response for faults and a monthly report. See the maintenance contract page or ask for a site survey." },
    { q: "Do you give a written quotation and bill for companies?", a: "Yes. After a site survey we send a written quotation with the scope of work, and a bill after the job." },
  ],
  bn: [
    { q: "অফিস, দোকান ও কোম্পানির কাজ করেন?", a: "হ্যাঁ — অফিস, দোকান, রেস্টুরেন্ট, সুপার শপ, ক্লিনিক, স্কুল ও অ্যাপার্টমেন্ট বিল্ডিং; ছোট মেরামত থেকে পুরো ইনস্টলেশন পর্যন্ত।" },
    { q: "ব্যবসা যাতে বন্ধ না হয়, রাতে বা শুক্রবারে কাজ করবেন?", a: "হ্যাঁ। দোকান ও অফিস চালু রাখতে আমরা নিয়মিত ভোরে, রাতে ও ছুটির দিনে কাজ করি।" },
    { q: "মাসিক রক্ষণাবেক্ষণ চুক্তি আছে কি?", a: "হ্যাঁ। বোর্ড, ওয়্যারিং, লাইটিং ও প্লাম্বিংয়ের নিয়মিত চেক, সমস্যায় অগ্রাধিকার এবং মাসিক রিপোর্ট। রক্ষণাবেক্ষণ চুক্তি পেজ দেখুন বা সাইট সার্ভে চান।" },
    { q: "প্রতিষ্ঠানের জন্য লিখিত কোটেশন ও বিল দেন?", a: "হ্যাঁ। সাইট সার্ভের পর কাজের বিবরণসহ লিখিত কোটেশন পাঠাই, কাজ শেষে বিল দিই।" },
  ],
};

const pickGroup = (g: Group, lang: Lang): FaqGroup => ({ key: g.key, title: g.title[lang], items: g[lang] });

/** All FAQ groups for this site: its own trade's questions come right after booking. */
export const faqGroups = (siteKey: SiteKey, lang: Lang): FaqGroup[] =>
  (siteKey === "electric"
    ? [booking, electric, cost, trust, plumbing, business]
    : [booking, plumbing, cost, trust, electric, business]
  ).map((g) => pickGroup(g, lang));

export const allFaqs = (siteKey: SiteKey, lang: Lang): Faq[] => faqGroups(siteKey, lang).flatMap((g) => g.items);
