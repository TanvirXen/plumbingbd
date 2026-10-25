// Service areas shared by both sites.
// `note` / `noteBn` = unique local description shown on the area page.
// TODO: fill empty notes with real local details (landmarks, building types, jobs done there).
// Empty notes are hidden, but every area page should get one before launch to avoid thin pages.
// `nearby` = links to nearby area pages. Grouping is approximate — please verify.

export interface Area {
  slug: string;
  name: string;
  nameBn: string;
  note: string;
  noteBn: string;
  nearby: string[];
  sectors?: number;
}

const U = ["uttara", "diabari", "abdullahpur"];
const E = ["uttarkhan", "dakkhinkhan", "ashkona"];

export const areas: Area[] = [
  {
    slug: "uttara", name: "Uttara", nameBn: "উত্তরা", sectors: 18,
    note: "Uttara is a planned residential model town in north Dhaka with Sectors 1–18, full of high-rise apartment buildings, offices, shops and restaurants. It is our home base, so this is where we reach customers fastest.",
    noteBn: "উত্তরা ঢাকার উত্তরে সেক্টর ১–১৮ নিয়ে গড়া একটি পরিকল্পিত আবাসিক মডেল টাউন — এখানে অনেক উঁচু অ্যাপার্টমেন্ট, অফিস, দোকান ও রেস্টুরেন্ট। এটি আমাদের মূল কেন্দ্র, তাই এখানে আমরা সবচেয়ে দ্রুত পৌঁছাই।",
    nearby: ["diabari", "abdullahpur", "uttarkhan", "dakkhinkhan"],
  },
  { slug: "priyanka-city", name: "Priyanka City", nameBn: "প্রিয়াঙ্কা সিটি", note: "", noteBn: "", nearby: ["uttara", "priyanka-runway-city", "rupayan-city"] },
  { slug: "priyanka-runway-city", name: "Priyanka Runway City", nameBn: "প্রিয়াঙ্কা রানওয়ে সিটি", note: "", noteBn: "", nearby: ["uttara", "priyanka-city", "rupayan-city"] },
  {
    slug: "rupayan-city", name: "Rupayan City", nameBn: "রূপায়ণ সিটি",
    note: "Rupayan City is a large gated apartment complex with many towers. We help owners and the building management with flat repairs as well as common-area pumps, panels and lighting.",
    noteBn: "রূপায়ণ সিটি অনেকগুলো টাওয়ার নিয়ে একটি বড় গেটেড অ্যাপার্টমেন্ট কমপ্লেক্স। আমরা ফ্ল্যাট মালিকদের মেরামত এবং বিল্ডিং ম্যানেজমেন্টের পাম্প, প্যানেল ও লাইটিংয়ের কাজ করি।",
    nearby: ["uttara", "priyanka-city", "priyanka-runway-city"],
  },
  { slug: "khalpar", name: "Khalpar", nameBn: "খালপাড়", note: "", noteBn: "", nearby: E },
  {
    slug: "uttarkhan", name: "Uttarkhan", nameBn: "উত্তরখান",
    note: "Uttarkhan has a mix of older family houses and new apartment buildings. Old wiring, pump problems and water-line repairs are common jobs here.",
    noteBn: "উত্তরখানে পুরোনো পারিবারিক বাড়ি ও নতুন অ্যাপার্টমেন্ট দুটোই আছে। এখানে পুরোনো ওয়্যারিং, পাম্পের সমস্যা ও পানির লাইন মেরামত বেশি হয়।",
    nearby: ["dakkhinkhan", "uttara", "khalpar"],
  },
  {
    slug: "dakkhinkhan", name: "Dakkhinkhan", nameBn: "দক্ষিণখান",
    note: "Dakkhinkhan is a busy, fast-growing residential area next to Uttara and the airport, with many new buildings that need wiring, plumbing and fittings.",
    noteBn: "দক্ষিণখান উত্তরা ও বিমানবন্দরের পাশে একটি ব্যস্ত ও দ্রুত বাড়তে থাকা আবাসিক এলাকা — এখানে নতুন অনেক বিল্ডিংয়ে ওয়্যারিং, প্লাম্বিং ও ফিটিংয়ের কাজ লাগে।",
    nearby: ["uttarkhan", "ashkona", "uttara"],
  },
  { slug: "kamarpara", name: "Kamarpara", nameBn: "কামারপাড়া", note: "", noteBn: "", nearby: U },
  { slug: "baunia", name: "Baunia", nameBn: "বাউনিয়া", note: "", noteBn: "", nearby: U },
  { slug: "batulia", name: "Batulia", nameBn: "বাটুলিয়া", note: "", noteBn: "", nearby: U },
  { slug: "ranavola", name: "Ranavola", nameBn: "রানাভোলা", note: "", noteBn: "", nearby: U },
  { slug: "fulbaria", name: "Fulbaria", nameBn: "ফুলবাড়িয়া", note: "", noteBn: "", nearby: U },
  {
    slug: "abdullahpur", name: "Abdullahpur", nameBn: "আব্দুল্লাহপুর",
    note: "Abdullahpur sits at the northern edge of Uttara on the main highway, with shops, markets and residential buildings — we handle both shop and home jobs here.",
    noteBn: "আব্দুল্লাহপুর উত্তরার উত্তর প্রান্তে মহাসড়কের পাশে — এখানে দোকান, মার্কেট ও আবাসিক বিল্ডিং আছে, আমরা দোকান ও বাসা দুই ধরনের কাজই করি।",
    nearby: ["uttara", "kamarpara", "dhour"],
  },
  {
    slug: "diabari", name: "Diabari", nameBn: "দিয়াবাড়ি",
    note: "Diabari, on the western side of Uttara, has many newer apartment buildings. New flat fittings — fans, lights, geysers, taps and commodes — are our most common jobs here.",
    noteBn: "উত্তরার পশ্চিম পাশের দিয়াবাড়িতে অনেক নতুন অ্যাপার্টমেন্ট। এখানে নতুন ফ্ল্যাটের ফিটিং — ফ্যান, লাইট, গিজার, ট্যাপ ও কমোড — সবচেয়ে বেশি হয়।",
    nearby: ["uttara", "bamnartek", "nalbhog"],
  },
  {
    slug: "ashkona", name: "Ashkona", nameBn: "আশকোনা",
    note: "Ashkona is a dense residential area beside the airport with many rented flats and small buildings — quick repairs like leaks, sockets and fans are frequent here.",
    noteBn: "আশকোনা বিমানবন্দরের পাশে ঘনবসতিপূর্ণ আবাসিক এলাকা, অনেক ভাড়া ফ্ল্যাট ও ছোট বিল্ডিং — এখানে লিক, সকেট ও ফ্যানের দ্রুত মেরামত বেশি লাগে।",
    nearby: ["dakkhinkhan", "uttara", "uttarkhan"],
  },
  { slug: "dhour", name: "Dhour", nameBn: "ধউর", note: "", noteBn: "", nearby: ["abdullahpur", "uttara", "kamarpara"] },
  {
    slug: "bashundhara-residential-area", name: "Bashundhara Residential Area", nameBn: "বসুন্ধরা আবাসিক এলাকা",
    note: "Bashundhara R/A is a large private residential area with blocks of apartment towers, offices, hospitals and universities. We serve both flats and commercial buildings here.",
    noteBn: "বসুন্ধরা আবাসিক এলাকা অনেক ব্লকের অ্যাপার্টমেন্ট টাওয়ার, অফিস, হাসপাতাল ও বিশ্ববিদ্যালয় নিয়ে একটি বড় প্রাইভেট আবাসিক এলাকা। এখানে আমরা ফ্ল্যাট ও কমার্শিয়াল বিল্ডিং দুটোতেই কাজ করি।",
    nearby: ["uttara", "dakkhinkhan", "ashkona"],
  },
  { slug: "bamnartek", name: "Bamnartek", nameBn: "বামনারটেক", note: "", noteBn: "", nearby: ["diabari", "uttara", "nalbhog"] },
  { slug: "nalbhog", name: "Nalbhog", nameBn: "নলভোগ", note: "", noteBn: "", nearby: ["diabari", "bamnartek", "noanagar"] },
  { slug: "noanagar", name: "Noanagar", nameBn: "নোয়ানগর", note: "", noteBn: "", nearby: ["nalbhog", "diabari", "uttara"] },
  { slug: "ahalia", name: "Ahalia", nameBn: "আহালিয়া", note: "", noteBn: "", nearby: E },
  { slug: "tarartek", name: "Tarartek", nameBn: "তারারটেক", note: "", noteBn: "", nearby: E },
  { slug: "pakuria", name: "Pakuria", nameBn: "পাকুরিয়া", note: "", noteBn: "", nearby: E },
  { slug: "khantek", name: "Khantek", nameBn: "খানটেক", note: "", noteBn: "", nearby: E },
  { slug: "dharangartek", name: "Dharangartek", nameBn: "ধরঙ্গারটেক", note: "", noteBn: "", nearby: E },
];

export const findArea = (slug: string) => areas.find((a) => a.slug === slug);
// Areas featured on home pages and in short lists
export const topAreas = ["uttara", "bashundhara-residential-area", "diabari", "uttarkhan", "dakkhinkhan", "ashkona", "abdullahpur", "rupayan-city"];
