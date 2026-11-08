// Order flow – exactly the emergencyeps.com flow (WhatsApp-Order-Flowchart-3):
//   "Order now" (direct WhatsApp) + 5 services → /order/<service>/ → A: one tap on WhatsApp, or B: order form.
// Texts, services, options and messages are copied from emergencyeps.com (src/content.ts there).
// letters = first part of the Order ID in the Google Sheet (ES-301026-1).
import type { Group, Service } from "./services";
import type { SiteKey } from "./sites";
import { lp, type Lang } from "../i18n";

type Text = { en: string; bn: string };
export interface OrderCategory {
  key: "electric" | "plumbing" | "ac" | "home" | "commercial" | "trending" | "checkup";
  letters: string;
  icon: "bolt" | "tap" | "snow" | "house" | "building" | "trend" | "check";
  name: Text;
  short: Text;
  message: Text; // "Order on WhatsApp" (A) message
  options: Text[]; // form chips, most popular first; "Checkup" first and "Others" are added automatically
  tail?: Text[]; // big jobs shown near the end (just before "Others")
  others: Text; // the last chip: "Others or any kind of … service"
  noCheckup?: boolean; // don't add the automatic "Checkup" chip first
  fullList: string[]; // "All work we do" on the service's order page
}

/* Button 1 – "Order now" (direct WhatsApp) */
export const orderNow = {
  letters: "GS",
  message: { en: "Hi, I want to order a service", bn: "হ্যালো, আমি একটি সার্ভিস অর্ডার করতে চাই" },
};

export const orderCategories: OrderCategory[] = [
  {
    key: "electric", letters: "ES", icon: "bolt",
    name: { en: "Electric Service", bn: "ইলেকট্রিক সার্ভিস" },
    short: { en: "Wiring, board, lights, fans", bn: "ওয়্যারিং, বোর্ড, লাইট, ফ্যান" },
    message: { en: "Hi I need Electric Service", bn: "হ্যালো, আমার ইলেকট্রিক সার্ভিস প্রয়োজন" },
    others: { en: "Others or any kind of electrical service", bn: "অন্যান্য বা যেকোনো ইলেকট্রিক্যাল সার্ভিস" },
    options: [
      { en: "Fans", bn: "ফ্যান" },
      { en: "Lights", bn: "লাইট" },
      { en: "Switch & Socket", bn: "সুইচ ও সকেট" },
      { en: "No Power / Short Circuit", bn: "বিদ্যুৎ নেই / শর্ট সার্কিট" },
      { en: "IPS", bn: "আইপিএস" },
      { en: "AC / Geyser Line", bn: "এসি / গিজার লাইন" },
    ],
    // the bigger jobs: near the end, just before "Others"
    tail: [
      { en: "Wiring", bn: "ওয়্যারিং" },
      { en: "DB Board", bn: "ডিবি বোর্ড" },
      { en: "Breaker (MCB)", bn: "ব্রেকার (MCB)" },
    ],
    fullList: [
      "Electrical Checkup & Inspection",
      "Ceiling Fan Installation & Uninstallation",
      "Ceiling Fan Servicing & Repair",
      "Light Installation & Repair",
      "Switch, Socket & Power Point Installation",
      "Short Circuit Repair",
      "IPS Installation & Uninstallation",
      "AC & Geyser Electrical Connection Checkup",
      "Profile Light Installation",
      "Electrical Wiring & Rewiring",
      "Distribution Board (DB) Servicing",
      "Main Distribution Board (MDB) Servicing",
      "Main Circuit Breaker (MCB) Installation",
    ],
  },
  {
    key: "plumbing", letters: "PS", icon: "tap",
    name: { en: "Plumbing Service", bn: "প্লাম্বিং সার্ভিস" },
    short: { en: "Geyser, leakage, lines, drain", bn: "গিজার, লিকেজ, লাইন, ড্রেন" },
    message: { en: "Hi I need plumbing service", bn: "হ্যালো, আমার প্লাম্বিং সার্ভিস প্রয়োজন" },
    others: { en: "Others or any kind of plumbing service", bn: "অন্যান্য বা যেকোনো প্লাম্বিং সার্ভিস" },
    options: [
      { en: "Geyser", bn: "গিজার" }, // geyser always first (right after the automatic "Checkup")
      { en: "Leakage", bn: "লিকেজ" },
      { en: "Tap & Shower", bn: "ট্যাপ ও শাওয়ার" },
      { en: "Commode & Flush", bn: "কমোড ও ফ্লাশ" },
      { en: "Drain Block", bn: "ড্রেন ব্লক" },
      { en: "Basin & Sink", bn: "বেসিন ও সিংক" },
      { en: "Water Line", bn: "পানির লাইন" },
      { en: "Water Pump", bn: "পানির পাম্প" },
      { en: "Bathroom", bn: "বাথরুম" },
      { en: "Kitchen", bn: "রান্নাঘর" },
    ],
    fullList: [
      "Plumbing Checkup & Inspection",
      "Geyser Service & Installation",
      "Water Leakage Repair",
      "Mixer, Shower, Tap & Valve Replacement",
      "Basin & Commode Installation & Repair",
      "Drain Blockage Removal",
      "Bathroom & Kitchen Plumbing",
      "Water Line Installation & Repair",
      "Water Pump Connection",
    ],
  },
  {
    key: "ac", letters: "AS", icon: "snow",
    name: { en: "AC Service", bn: "এসি সার্ভিস" },
    short: { en: "Servicing, gas, install, repair", bn: "সার্ভিসিং, গ্যাস, ইনস্টল, মেরামত" },
    message: { en: "Hi I need AC service", bn: "হ্যালো, আমার এসি সার্ভিস প্রয়োজন" },
    others: { en: "Others or any kind of AC service", bn: "অন্যান্য বা যেকোনো এসি সার্ভিস" },
    options: [
      { en: "Servicing", bn: "সার্ভিসিং" },
      { en: "Gas Refill", bn: "গ্যাস রিফিল" },
      { en: "Not Cooling", bn: "ঠান্ডা হচ্ছে না" },
      { en: "Water Leaking", bn: "পানি পড়ছে" },
      { en: "Installation", bn: "ইনস্টলেশন" },
      { en: "Shifting", bn: "শিফটিং" },
      { en: "Repair", bn: "মেরামত" },
    ],
    fullList: [],
  },
  {
    key: "home", letters: "HS", icon: "house",
    name: { en: "Home Service", bn: "হোম সার্ভিস" },
    short: { en: "Thai glass, IPS, gas stove, more", bn: "থাই গ্লাস, আইপিএস, গ্যাস চুলা, আরও" },
    message: { en: "Hi I need home service", bn: "হ্যালো, আমার হোম সার্ভিস প্রয়োজন" },
    others: { en: "Others or any kind of home service", bn: "অন্যান্য বা যেকোনো হোম সার্ভিস" },
    options: [
      { en: "Gas Stove", bn: "গ্যাস চুলা" },
      { en: "Washing Machine", bn: "ওয়াশিং মেশিন" },
      { en: "TV Wall Mount", bn: "টিভি ওয়াল মাউন্ট" },
      { en: "IPS", bn: "আইপিএস" },
      { en: "Thai Glass", bn: "থাই গ্লাস" },
      { en: "Door Lock", bn: "দরজার লক" },
      { en: "Water Purifier", bn: "পানির ফিল্টার" },
      { en: "Kitchen Hood", bn: "কিচেন হুড" },
      { en: "Furniture Assembly", bn: "ফার্নিচার সংযোজন" },
    ],
    fullList: [
      "Gas Stove Installation & Repair",
      "Washing Machine Installation",
      "TV Wall Mount Installation",
      "IPS & Inverter Installation",
      "Thai Glass Lock Installation & Repair",
      "Door Lock Installation & Replacement",
      "Water Purifier Installation & Servicing",
      "Kitchen Hood Installation & Cleaning",
      "Bathroom Accessories Installation",
      "Towel Rack & Soap Holder Installation",
      "Wall Mirror Installation",
      "Wall Shelf Installation",
      "Picture Frame Installation",
      "Furniture Assembly & Installation",
      "Minor Home Maintenance & Repair",
    ],
  },
  {
    key: "commercial", letters: "CS", icon: "building",
    name: { en: "Commercial Space Service", bn: "কমার্শিয়াল স্পেস সার্ভিস" },
    short: { en: "Offices, shops, restaurants", bn: "অফিস, দোকান, রেস্টুরেন্ট" },
    message: { en: "Hi I need commercial space service", bn: "হ্যালো, আমার কমার্শিয়াল স্পেস সার্ভিস প্রয়োজন" },
    others: { en: "Others or any kind of commercial service", bn: "অন্যান্য বা যেকোনো কমার্শিয়াল সার্ভিস" },
    options: [
      { en: "Electrical", bn: "ইলেকট্রিক্যাল" },
      { en: "Plumbing", bn: "প্লাম্বিং" },
      { en: "AC", bn: "এসি" },
      { en: "Lighting", bn: "লাইটিং" },
      { en: "Maintenance", bn: "রক্ষণাবেক্ষণ" },
      { en: "New Setup", bn: "নতুন সেটআপ" },
      { en: "Renovation", bn: "সংস্কার" },
    ],
    fullList: [
      "Commercial Electric / Plumbing Check Up",
      "Commercial Electrical Fault Finding & Repair",
      "Commercial Lighting Installation",
      "Office & Shop Lighting Maintenance",
      "Commercial Plumbing Installation & Repair",
      "Commercial Drainage & Blockage Removal",
      "Water Supply Line Installation & Repair",
      "AC Electrical Connection & Power Wiring",
      "Shop, Restaurant & Super Shop Maintenance",
      "Office & Commercial Building Maintenance",
      "Electrical Load Assessment & Distribution",
      "Power Distribution & Cable Management",
      "Office Electrical Wiring & Rewiring",
      "MDB, DB & SDB Installation and Servicing",
      "MCB, MCCB & Circuit Breaker Installation",
    ],
  },
];

/* Trending Services (home-page ticker). cat/work = which service form opens with which chips ticked. */
export const trendingItems: (Text & { cat: OrderCategory["key"]; work: string[] })[] = [
  { en: "Geyser Service/Checkup", bn: "গিজার সার্ভিস/চেকআপ", cat: "plumbing", work: ["Geyser"] },
  { en: "Geyser Installation", bn: "গিজার ইনস্টলেশন", cat: "plumbing", work: ["Geyser"] },
  { en: "Power Point for Heater & Geyser", bn: "হিটার ও গিজারের পাওয়ার পয়েন্ট", cat: "electric", work: ["Switch & Socket", "AC / Geyser Line"] },
  { en: "Geyser Repair & Leakage", bn: "গিজার মেরামত ও লিকেজ", cat: "plumbing", work: ["Geyser", "Leakage"] },
  { en: "Electrical Safety Checkup", bn: "ইলেকট্রিক্যাল সেফটি চেকআপ", cat: "electric", work: ["Checkup"] },
  { en: "Hot Water Line & Mixer Tap", bn: "গরম পানির লাইন ও মিক্সার ট্যাপ", cat: "plumbing", work: ["Tap & Shower", "Water Line"] },
  { en: "IPS Installation & Repair", bn: "আইপিএস ইনস্টলেশন ও মেরামত", cat: "electric", work: ["IPS"] },
  { en: "Shower Installation & Repair", bn: "শাওয়ার ইনস্টলেশন ও মেরামত", cat: "plumbing", work: ["Tap & Shower"] },
  { en: "No Power / Short Circuit", bn: "বিদ্যুৎ নেই / শর্ট সার্কিট", cat: "electric", work: ["No Power / Short Circuit"] },
  { en: "Gas Stove Servicing", bn: "গ্যাস চুলা সার্ভিসিং", cat: "home", work: ["Gas Stove"] },
  { en: "Water Leakage Repair", bn: "পানির লিকেজ মেরামত", cat: "plumbing", work: ["Leakage"] },
  { en: "Switch & Socket Repair", bn: "সুইচ ও সকেট মেরামত", cat: "electric", work: ["Switch & Socket"] },
  { en: "Commode & Basin Repair", bn: "কমোড ও বেসিন মেরামত", cat: "plumbing", work: ["Commode & Flush", "Basin & Sink"] },
  { en: "Light Installation", bn: "লাইট লাগানো", cat: "electric", work: ["Lights"] },
  { en: "Drain Blockage Removal", bn: "ড্রেন ব্লক পরিষ্কার", cat: "plumbing", work: ["Drain Block"] },
  { en: "Wiring Fault Repair", bn: "ওয়্যারিং সমস্যা মেরামত", cat: "electric", work: ["Wiring"] },
];

/* Extra order forms (not in the service boxes): opened from the "Trending Services" and "Checkup" labels.
   Order ID letters: GS (general). */
export const extraOrderForms: OrderCategory[] = [
  {
    key: "trending", letters: "GS", icon: "trend", noCheckup: true,
    name: { en: "Trending Services", bn: "ট্রেন্ডিং সার্ভিস" },
    short: { en: "Most wanted jobs this season", bn: "এই মৌসুমে সবচেয়ে বেশি চাওয়া কাজ" },
    message: { en: "Hi, I need a trending service", bn: "হ্যালো, আমার একটি ট্রেন্ডিং সার্ভিস প্রয়োজন" },
    others: { en: "Others or any kind of service", bn: "অন্যান্য বা যেকোনো সার্ভিস" },
    options: trendingItems.map(({ en, bn }) => ({ en, bn })),
    fullList: [],
  },
  {
    key: "checkup", letters: "GS", icon: "check", noCheckup: true,
    name: { en: "Checkup Service", bn: "চেকআপ সার্ভিস" },
    short: { en: "Any kind of checkup only 350 Tk", bn: "যেকোনো চেকআপ মাত্র ৩৫০ টাকা" },
    message: { en: "Hi, I need a checkup", bn: "হ্যালো, আমার একটি চেকআপ প্রয়োজন" },
    others: { en: "Others or any kind of checkup", bn: "অন্যান্য বা যেকোনো চেকআপ" },
    options: [
      { en: "Electrical Checkup", bn: "ইলেকট্রিক্যাল চেকআপ" },
      { en: "Plumbing Checkup", bn: "প্লাম্বিং চেকআপ" },
      { en: "Geyser Checkup", bn: "গিজার চেকআপ" },
      { en: "AC Checkup", bn: "এসি চেকআপ" },
      { en: "IPS Checkup", bn: "আইপিএস চেকআপ" },
      { en: "Gas Stove Checkup", bn: "গ্যাস চুলা চেকআপ" },
      { en: "Thai Glass Checkup", bn: "থাই গ্লাস চেকআপ" },
      { en: "Water Pump Checkup", bn: "পানির পাম্প চেকআপ" },
      { en: "Commercial Electrical Checkup", bn: "কমার্শিয়াল ইলেকট্রিক্যাল চেকআপ" },
      { en: "Commercial Plumbing Checkup", bn: "কমার্শিয়াল প্লাম্বিং চেকআপ" },
      { en: "Restaurant / Shop Checkup", bn: "রেস্টুরেন্ট / দোকান চেকআপ" },
      { en: "Office Checkup", bn: "অফিস চেকআপ" },
    ],
    fullList: [],
  },
];
export const allOrderForms = [...orderCategories, ...extraOrderForms];
export const findCategory = (key: string) => allOrderForms.find((c) => c.key === key);

export const firstOption: Text = { en: "Checkup", bn: "চেকআপ" };

/** Checkup first, then the popular jobs, then the "tail" big jobs, and "Others or any kind of …" always last */
export type Option = Text & { others?: boolean };
export const categoryOptions = (c: OrderCategory): Option[] => [
  ...(c.noCheckup ? [] : [firstOption]), ...c.options, ...(c.tail ?? []), { ...c.others, others: true },
];

/** start / end = hour (24h). Used to hide slots that are already over today. */
export const timeSlots = [
  { start: 8, end: 10, en: "8 – 10 AM", bn: "সকাল ৮টা – ১০টা" },
  { start: 10, end: 12, en: "10 AM – 12 PM", bn: "সকাল ১০টা – দুপুর ১২টা" },
  { start: 12, end: 14, en: "12 – 2 PM", bn: "দুপুর ১২টা – ২টা" },
  { start: 14, end: 16, en: "2 – 4 PM", bn: "দুপুর ২টা – বিকাল ৪টা" },
  { start: 16, end: 18, en: "4 – 6 PM", bn: "বিকাল ৪টা – সন্ধ্যা ৬টা" },
  { start: 18, end: 20, en: "6 – 8 PM", bn: "সন্ধ্যা ৬টা – রাত ৮টা" },
  { start: 20, end: 22, en: "8 – 10 PM", bn: "রাত ৮টা – ১০টা" },
];

/** How many days customers can choose (today + next days) */
export const bookingDays = 7;

/* Website text for the order flow (same words as emergencyeps.com) */
const en = {
  orderNow: "Order now",
  orderNowShort: "Direct WhatsApp",
  callUs: "Call us",
  orderDetails: "Order with details",
  priceEnquiry: "Price Enquiry",
  enquiryPick: "Pick a service — we'll tell you the cost",
  enquiryOff: "Order instead",
  enquiryWaShort: "Ask the price on WhatsApp",
  enquiryMessage: "Hi, I need Price Enquiry",
  enquiryNote: "Asking for a price? Fill what you know, then tap Price Enquiry.",
  checkupNote: "Any electric or plumbing checkup is only 350 Tk — it can be reduced depending on the work.",
  checkupBar: ["Any kind of electric or plumbing checkup only ", "350 Tk", " — can be reduced depending on the work"],
  optional: "(optional)",
  chooseEnquiry: "Choose a service for Price Enquiry",
  enquiryNow: "Price Enquiry now",
  open24: "Open 24 hours",
  heroText: "Tap Order now, share a few details, and our technician comes to you.",
  chooseService: "Choose a service",
  back: "All services",
  twoWays: "Choose how to order",
  aTitle: "Order on WhatsApp",
  aText: "One tap. This message goes to us:",
  aButton: "Order on WhatsApp",
  bTitle: "Write working requirement",
  bText: "Every field is optional. Fill what you know.",
  workTitle: "What work do you need?",
  issueLabel: "Issue details",
  issueHint: "Example: kitchen tap is leaking since morning",
  detailsTitle: "Your details",
  name: "Name",
  address: "Address",
  addressHint: "House, road, sector, area",
  contact: "Contact number",
  contactError: "Please check the number. Example: 01712345678",
  dateTitle: "Pick a date",
  timeTitle: "Pick a time",
  urgent: "Urgent",
  locationTitle: "Current location",
  addLocation: "Add my location",
  gettingLocation: "Finding your location…",
  locationAdded: "Location added",
  remove: "Remove",
  locationDenied: "Location is blocked. Allow location for this site, or just write your address.",
  locationFailed: "Could not find your location. Please write your address.",
  preview: "Message preview",
  previewNote: "Only filled fields are sent. The Order ID is added when you tap Send. You can still edit it in WhatsApp.",
  send: "Send order",
  clear: "Clear form",
  fullList: "All work we do",
  today: "Today",
  tomorrow: "Tomorrow",
  msgUrgent: "*URGENT – PLEASE COME ASAP*",
  msgEnquiry: "*I need Price Enquiry*",
  msgService: "Service",
  msgWork: "Work",
  msgIssue: "Issue",
  msgName: "Name",
  msgContact: "Contact",
  msgAddress: "Address",
  msgLocation: "Location",
  msgDate: "Date",
  msgTime: "Time",
  msgFooter: "Sent from website",
};
const bn: typeof en = {
  orderNow: "এখনই অর্ডার করুন",
  orderNowShort: "সরাসরি হোয়াটসঅ্যাপ",
  callUs: "কল করুন",
  orderDetails: "বিস্তারিত দিয়ে অর্ডার",
  priceEnquiry: "খরচ জানুন",
  enquiryPick: "সার্ভিস বেছে নিন — আমরা খরচ জানিয়ে দেব",
  enquiryOff: "অর্ডার করুন",
  enquiryWaShort: "হোয়াটসঅ্যাপে খরচ জানুন",
  enquiryMessage: "হ্যালো, আমি খরচ জানতে চাই",
  enquiryNote: "খরচ জানতে চান? যা জানেন লিখে 'খরচ জানুন' চাপুন।",
  checkupNote: "যেকোনো ইলেকট্রিক বা প্লাম্বিং চেকআপ মাত্র ৩৫০ টাকা — কাজের প্রয়োজন অনুযায়ী কমানো হতে পারে।",
  checkupBar: ["যেকোনো ইলেকট্রিক বা প্লাম্বিং চেকআপ মাত্র ", "৩৫০ টাকা", " — কাজের প্রয়োজন অনুযায়ী কমানো হতে পারে"],
  optional: "(ঐচ্ছিক)",
  chooseEnquiry: "খরচ জানতে সার্ভিস বেছে নিন",
  enquiryNow: "এখনই খরচ জানুন",
  open24: "২৪ ঘণ্টা খোলা",
  heroText: "এখনই অর্ডার করুন চাপুন, কিছু তথ্য দিন, আমাদের টেকনিশিয়ান আপনার কাছে আসবে।",
  chooseService: "সার্ভিস বেছে নিন",
  back: "সব সার্ভিস",
  twoWays: "কীভাবে অর্ডার করবেন বেছে নিন",
  aTitle: "হোয়াটসঅ্যাপে অর্ডার",
  aText: "এক ট্যাপ। এই মেসেজটি আমাদের কাছে যাবে:",
  aButton: "হোয়াটসঅ্যাপে অর্ডার করুন",
  bTitle: "কাজের বিবরণ লিখুন",
  bText: "সব ঘর ঐচ্ছিক। যা জানেন তা লিখুন।",
  workTitle: "কী কাজ প্রয়োজন?",
  issueLabel: "সমস্যার বিবরণ",
  issueHint: "যেমন: সকাল থেকে রান্নাঘরের ট্যাপ দিয়ে পানি পড়ছে",
  detailsTitle: "আপনার তথ্য",
  name: "নাম",
  address: "ঠিকানা",
  addressHint: "বাসা, রোড, সেক্টর, এলাকা",
  contact: "মোবাইল নম্বর",
  contactError: "নম্বরটি দেখুন। যেমন: 01712345678",
  dateTitle: "তারিখ বেছে নিন",
  timeTitle: "সময় বেছে নিন",
  urgent: "জরুরি",
  locationTitle: "বর্তমান লোকেশন",
  addLocation: "আমার লোকেশন যোগ করুন",
  gettingLocation: "লোকেশন খোঁজা হচ্ছে…",
  locationAdded: "লোকেশন যোগ হয়েছে",
  remove: "মুছুন",
  locationDenied: "লোকেশন বন্ধ আছে। এই সাইটে লোকেশন চালু করুন, অথবা ঠিকানা লিখুন।",
  locationFailed: "লোকেশন পাওয়া যায়নি। অনুগ্রহ করে ঠিকানা লিখুন।",
  preview: "মেসেজ দেখুন",
  previewNote: "শুধু পূরণ করা ঘর পাঠানো হবে। পাঠানোর সময় অর্ডার আইডি যোগ হবে। হোয়াটসঅ্যাপে এডিট করতে পারবেন।",
  send: "অর্ডার পাঠান",
  clear: "ফর্ম মুছুন",
  fullList: "আমাদের সব কাজ",
  today: "আজ",
  tomorrow: "আগামীকাল",
  msgUrgent: "*জরুরি – দ্রুত আসুন*",
  msgEnquiry: "*আমি খরচ জানতে চাই*",
  msgService: "সার্ভিস",
  msgWork: "কাজ",
  msgIssue: "সমস্যা",
  msgName: "নাম",
  msgContact: "যোগাযোগ",
  msgAddress: "ঠিকানা",
  msgLocation: "লোকেশন",
  msgDate: "তারিখ",
  msgTime: "সময়",
  msgFooter: "ওয়েবসাইট থেকে পাঠানো",
};
export const orderText = { en, bn };

/**
 * Every "Book" button opens the order flow (like emergencyeps.com):
 * with `for` → that service's order page /order/<service>/, without → /order/ (choose a service).
 * s = text for the issue box · area = goes into the address box
 */
export type BookParams = { for?: OrderCategory["key"]; s?: string; area?: string };
export function bookHref(lang: Lang, p: BookParams = {}): string {
  const { for: key, ...rest } = p;
  const q = new URLSearchParams(Object.entries(rest).filter((e): e is [string, string] => !!e[1])).toString();
  return lp(lang, key ? `/order/${key}/` : "/order/") + (q ? `?${q}` : "");
}

/** Which order page a website service belongs to */
export function categoryFor(s: Pick<Service, "slug" | "site" | "group">): OrderCategory["key"] {
  const g: Group = s.group;
  if (g === "commercial") return "commercial";
  if (g === "home") return "home";
  if (s.slug.startsWith("ac-")) return "ac";
  return s.site as SiteKey;
}
