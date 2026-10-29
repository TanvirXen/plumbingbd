// Corporate / business focus. Each industry gets a page on BOTH sites,
// written from that site's trade angle (electrical vs plumbing) so the pages are different.
// `services` lists slugs from either site; each page shows the ones its own site owns
// and links to the rest on the sister site.

export interface Industry {
  slug: string;
  icon: string;
  name: string;
  nameBn: string;
  intro: string;
  introBn: string;
  needs: { electric: string[]; electricBn: string[]; plumbing: string[]; plumbingBn: string[] };
  services: string[];
  image: { electric: string; plumbing: string };
}

export const industries: Industry[] = [
  {
    slug: "offices-corporate", icon: "🏢",
    name: "Offices & Corporate", nameBn: "অফিস ও কর্পোরেট",
    intro: "Corporate offices, co-working spaces and head offices need power, lighting, washrooms and pantries that simply work — without disturbing staff.",
    introBn: "কর্পোরেট অফিস, কো-ওয়ার্কিং স্পেস ও হেড অফিসে বিদ্যুৎ, লাইটিং, ওয়াশরুম ও প্যান্ট্রি সবসময় ঠিক থাকা দরকার — কর্মীদের কাজে ব্যাঘাত ছাড়াই।",
    needs: {
      electric: ["Workstation power and UPS/IPS lines", "Energy-saving LED office lighting", "AC power lines and load balancing", "DB/SDB servicing and labelling", "After-hours fault repair"],
      electricBn: ["ওয়ার্কস্টেশন পাওয়ার ও ইউপিএস/আইপিএস লাইন", "বিদ্যুৎ-সাশ্রয়ী এলইডি অফিস লাইটিং", "এসি পাওয়ার লাইন ও লোড ব্যালান্সিং", "ডিবি/এসডিবি সার্ভিসিং ও লেবেলিং", "অফিস সময়ের পরে ত্রুটি মেরামত"],
      plumbing: ["Washroom fittings and leak repair", "Pantry sink and water purifier lines", "Water pump and tank checks", "Drain blockage removal", "Monthly washroom maintenance"],
      plumbingBn: ["ওয়াশরুম ফিটিং ও লিক মেরামত", "প্যান্ট্রি সিংক ও ওয়াটার পিউরিফায়ার লাইন", "পানির পাম্প ও ট্যাংক চেক", "ড্রেন ব্লকেজ পরিষ্কার", "মাসিক ওয়াশরুম রক্ষণাবেক্ষণ"],
    },
    services: ["office-electrical-wiring", "commercial-lighting-installation", "ac-power-wiring", "office-building-maintenance", "commercial-plumbing-installation-repair", "commercial-plumbing-checkup", "water-purifier-installation-servicing"],
    image: { electric: "panel-room-1", plumbing: "supershop-1" },
  },
  {
    slug: "shops-showrooms", icon: "🏬",
    name: "Shops & Showrooms", nameBn: "দোকান ও শোরুম",
    intro: "Showrooms and shops live on good lighting and zero downtime. We keep your lights bright, your power safe and your washrooms working.",
    introBn: "শোরুম ও দোকান চলে ভালো আলো আর নিরবচ্ছিন্ন সেবায়। আমরা আপনার লাইট উজ্জ্বল, বিদ্যুৎ নিরাপদ আর ওয়াশরুম সচল রাখি।",
    needs: {
      electric: ["Display, track and signboard lighting", "Safe DB and breaker setup", "AC and power wiring", "Emergency fault repair", "Monthly lighting maintenance"],
      electricBn: ["ডিসপ্লে, ট্র্যাক ও সাইনবোর্ড লাইটিং", "নিরাপদ ডিবি ও ব্রেকার সেটআপ", "এসি ও পাওয়ার ওয়্যারিং", "জরুরি ত্রুটি মেরামত", "মাসিক লাইটিং রক্ষণাবেক্ষণ"],
      plumbing: ["Staff washroom plumbing", "Water line and tap repair", "Drain cleaning", "Water purifier for staff", "Scheduled maintenance visits"],
      plumbingBn: ["কর্মীদের ওয়াশরুম প্লাম্বিং", "পানির লাইন ও ট্যাপ মেরামত", "ড্রেন পরিষ্কার", "কর্মীদের জন্য ওয়াটার পিউরিফায়ার", "নির্ধারিত রক্ষণাবেক্ষণ ভিজিট"],
    },
    services: ["commercial-lighting-installation", "office-shop-lighting-maintenance", "commercial-electrical-fault-repair", "shop-restaurant-supershop-maintenance", "commercial-plumbing-installation-repair"],
    image: { electric: "supershop-2", plumbing: "supershop-3" },
  },
  {
    slug: "restaurants-hotels", icon: "🍽️",
    name: "Restaurants, Cafés & Hotels", nameBn: "রেস্টুরেন্ট, ক্যাফে ও হোটেল",
    intro: "Kitchens run hot and busy. Grease-blocked drains, tripping breakers or a dead exhaust fan can shut service down — we fix them fast, even after closing.",
    introBn: "রেস্টুরেন্টের কিচেন সবসময় ব্যস্ত। তেলে আটকানো ড্রেন, ট্রিপ করা ব্রেকার বা বন্ধ এগজস্ট ফ্যানে সার্ভিস বন্ধ হয়ে যেতে পারে — আমরা দ্রুত ঠিক করি, বন্ধের পরেও।",
    needs: {
      electric: ["Kitchen equipment power lines", "Exhaust fan and hood connections", "Breaker sizing for heavy loads", "Dining and signboard lighting", "Night-time emergency repair"],
      electricBn: ["কিচেন যন্ত্রপাতির পাওয়ার লাইন", "এগজস্ট ফ্যান ও হুড সংযোগ", "ভারী লোডের জন্য সঠিক ব্রেকার", "ডাইনিং ও সাইনবোর্ড লাইটিং", "রাতে জরুরি মেরামত"],
      plumbing: ["Grease trap cleaning", "Kitchen drain and sewer clearing", "Gas line and stove checks", "Hot water and geyser lines", "Washroom upkeep for guests"],
      plumbingBn: ["গ্রিজ ট্র্যাপ পরিষ্কার", "কিচেন ড্রেন ও স্যুয়ার পরিষ্কার", "গ্যাস লাইন ও চুলা চেক", "গরম পানি ও গিজার লাইন", "অতিথিদের ওয়াশরুম রক্ষণাবেক্ষণ"],
    },
    services: ["commercial-electrical-fault-repair", "mcb-mccb-circuit-breaker-installation", "kitchen-hood-installation-cleaning", "commercial-drainage-blockage-removal", "shop-restaurant-supershop-maintenance", "gas-stove-installation-repair"],
    image: { electric: "restaurant-electrical", plumbing: "kitchen-sink" },
  },
  {
    slug: "super-shops-retail", icon: "🛒",
    name: "Super Shops & Retail Chains", nameBn: "সুপার শপ ও রিটেইল চেইন",
    intro: "Super shops need fridges, freezers, lighting and POS running all day. We have worked on super shop panels and lighting in Uttara.",
    introBn: "সুপার শপে সারাদিন ফ্রিজ, ফ্রিজার, লাইটিং ও পিওএস চালু রাখতে হয়। উত্তরার সুপার শপে প্যানেল ও লাইটিংয়ের কাজ আমরা করেছি।",
    needs: {
      electric: ["DB/SDB panels for freezers and chillers", "Shelf and ceiling lighting", "Phase balancing and load checks", "Backup lines for POS", "Priority emergency response"],
      electricBn: ["ফ্রিজার ও চিলারের জন্য ডিবি/এসডিবি প্যানেল", "শেলফ ও সিলিং লাইটিং", "ফেজ ব্যালান্সিং ও লোড চেক", "পিওএসের জন্য ব্যাকআপ লাইন", "জরুরি কলে অগ্রাধিকার"],
      plumbing: ["Washroom and staff area plumbing", "Fish/meat section drains", "Water supply and pump checks", "Leak repair", "Monthly maintenance contract"],
      plumbingBn: ["ওয়াশরুম ও কর্মীদের জায়গার প্লাম্বিং", "মাছ/মাংস সেকশনের ড্রেন", "পানি সরবরাহ ও পাম্প চেক", "লিক মেরামত", "মাসিক রক্ষণাবেক্ষণ চুক্তি"],
    },
    services: ["mdb-db-sdb-installation-servicing", "commercial-lighting-installation", "electrical-load-assessment", "shop-restaurant-supershop-maintenance", "commercial-drainage-blockage-removal"],
    image: { electric: "supershop-2", plumbing: "supershop-1" },
  },
  {
    slug: "apartment-buildings", icon: "🏘️",
    name: "Apartment Buildings & Housing Societies", nameBn: "অ্যাপার্টমেন্ট বিল্ডিং ও হাউজিং সোসাইটি",
    intro: "Building committees and facility managers trust us with MDB rooms, pumps, risers, common-area lighting and residents' emergencies — under one contract.",
    introBn: "বিল্ডিং কমিটি ও ফ্যাসিলিটি ম্যানেজাররা এমডিবি রুম, পাম্প, রাইজার, কমন এরিয়ার লাইটিং ও বাসিন্দাদের জরুরি কাজ এক চুক্তিতে আমাদের দেন।",
    needs: {
      electric: ["MDB room servicing and phase balance", "Common-area and parking lighting", "Lift and pump power lines", "Generator changeover checks", "Service reports for the committee"],
      electricBn: ["এমডিবি রুম সার্ভিসিং ও ফেজ ব্যালান্স", "কমন এরিয়া ও পার্কিং লাইটিং", "লিফট ও পাম্পের পাওয়ার লাইন", "জেনারেটর চেঞ্জওভার চেক", "কমিটির জন্য সার্ভিস রিপোর্ট"],
      plumbing: ["Water pump installation and service", "Riser and supply line repair", "Underground/overhead tank connections", "Main drain and sewer clearing", "Residents' leak complaints"],
      plumbingBn: ["পানির পাম্প লাগানো ও সার্ভিস", "রাইজার ও সাপ্লাই লাইন মেরামত", "মাটির নিচের/ছাদের ট্যাংক সংযোগ", "মেইন ড্রেন ও স্যুয়ার পরিষ্কার", "বাসিন্দাদের লিকের অভিযোগ সমাধান"],
    },
    services: ["mdb-servicing", "mdb-db-sdb-installation-servicing", "office-building-maintenance", "water-pump-installation", "water-supply-line-installation", "commercial-drainage-blockage-removal"],
    image: { electric: "panel-room-2", plumbing: "pipe-1" },
  },
  {
    slug: "hospitals-clinics-schools", icon: "🏥",
    name: "Clinics, Diagnostic Centres & Schools", nameBn: "ক্লিনিক, ডায়াগনস্টিক সেন্টার ও স্কুল",
    intro: "Places that care for people can't afford unsafe wiring or broken washrooms. We plan work around your schedule and keep safety first.",
    introBn: "যেখানে মানুষের সেবা হয়, সেখানে অনিরাপদ ওয়্যারিং বা নষ্ট ওয়াশরুম চলে না। আপনার সময়সূচি মিলিয়ে, নিরাপত্তাকে প্রাধান্য দিয়ে কাজ করি।",
    needs: {
      electric: ["Electrical safety audit", "Earthing and leakage protection", "Backup lines for critical equipment", "Classroom and corridor lighting", "Scheduled preventive maintenance"],
      electricBn: ["ইলেকট্রিক্যাল সেফটি অডিট", "আর্থিং ও লিকেজ সুরক্ষা", "গুরুত্বপূর্ণ যন্ত্রের ব্যাকআপ লাইন", "ক্লাসরুম ও করিডোরের লাইটিং", "নির্ধারিত প্রতিরোধমূলক রক্ষণাবেক্ষণ"],
      plumbing: ["Hygienic washroom fittings", "Clean drinking water lines and purifiers", "Leak-free water supply", "Drain maintenance", "Holiday-time renovation work"],
      plumbingBn: ["স্বাস্থ্যসম্মত ওয়াশরুম ফিটিং", "বিশুদ্ধ খাবার পানির লাইন ও পিউরিফায়ার", "লিক-মুক্ত পানি সরবরাহ", "ড্রেন রক্ষণাবেক্ষণ", "ছুটির সময় সংস্কার কাজ"],
    },
    services: ["commercial-electrical-checkup", "electrical-load-assessment", "office-building-maintenance", "commercial-plumbing-checkup", "water-purifier-installation-servicing", "water-supply-line-installation"],
    image: { electric: "panel-room-3", plumbing: "commode-1" },
  },
];

// Why businesses choose us. PLACEHOLDER: confirm each promise is true for your company.
export const businessBenefits = [
  { icon: "🤝", en: "One team for electrical + plumbing", bn: "ইলেকট্রিক্যাল + প্লাম্বিংয়ে এক টিম", enD: "One contact person, one visit, one invoice for both trades.", bnD: "দুই কাজের জন্য একজন যোগাযোগকারী, এক ভিজিট, এক ইনভয়েস।" },
  { icon: "🌙", en: "Work after business hours", bn: "অফিস সময়ের পরে কাজ", enD: "Early morning, night or weekend work so your business keeps running.", bnD: "সকালে, রাতে বা ছুটির দিনে কাজ — যাতে আপনার ব্যবসা চালু থাকে।" },
  { icon: "📋", en: "Written survey & proposal", bn: "লিখিত সার্ভে ও প্রস্তাব", enD: "Site survey, clear scope of work and a written proposal before starting.", bnD: "কাজের আগে সাইট সার্ভে, স্পষ্ট কাজের পরিধি ও লিখিত প্রস্তাব।" },
  { icon: "🔧", en: "Monthly maintenance contracts", bn: "মাসিক রক্ষণাবেক্ষণ চুক্তি", enD: "Scheduled checks and a service log every visit — fewer breakdowns.", bnD: "নির্ধারিত চেক ও প্রতি ভিজিটে সার্ভিস লগ — কম বিকল।" },
  { icon: "⚡", en: "Priority emergency response", bn: "জরুরি কলে অগ্রাধিকার", enD: "Contract clients are attended first when something breaks.", bnD: "কিছু নষ্ট হলে চুক্তিবদ্ধ ক্লায়েন্টদের আগে সেবা দেওয়া হয়।" },
  { icon: "👷", en: "Engineer-led, uniformed team", bn: "ইঞ্জিনিয়ারের নেতৃত্বে ইউনিফর্মধারী টিম", enD: "Supervised technicians, safe materials and tidy work.", bnD: "তত্ত্বাবধানে টেকনিশিয়ান, নিরাপদ উপকরণ ও পরিচ্ছন্ন কাজ।" },
];

export const findIndustry = (slug: string) => industries.find((i) => i.slug === slug);
