// Order flow – exactly the emergencyeps.com flow (WhatsApp-Order-Flowchart-3):
//   "Order now" (direct WhatsApp) + 5 services → /order/<service>/ → A: one tap on WhatsApp, or B: order form.
// Texts, services, options and messages are copied from emergencyeps.com (src/content.ts there).
// letters = first part of the Order ID in the Google Sheet (ES-301026-1).
import type { Group, Service } from "./services";
import type { SiteKey } from "./sites";
import { lp, type Lang } from "../i18n";

type Text = { en: string; bn: string };
export interface OrderCategory {
  key: "electric" | "plumbing" | "ac" | "home" | "commercial";
  letters: string;
  icon: "bolt" | "tap" | "snow" | "house" | "building";
  name: Text;
  short: Text;
  message: Text; // "Order on WhatsApp" (A) message
  options: Text[]; // form chips; "Checkup" first and "Others" last are added automatically
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
    options: [
      { en: "Wiring", bn: "ওয়্যারিং" },
      { en: "DB Board", bn: "ডিবি বোর্ড" },
      { en: "Breaker (MCB)", bn: "ব্রেকার (MCB)" },
      { en: "Switch & Socket", bn: "সুইচ ও সকেট" },
      { en: "Lights", bn: "লাইট" },
      { en: "Fans", bn: "ফ্যান" },
    ],
    fullList: [
      "Electrical Checkup & Inspection",
      "Ceiling Fan Installation & Uninstallation",
      "Ceiling Fan Servicing & Repair",
      "Light Installation & Repair",
      "Main Circuit Breaker (MCB) Installation",
      "Main Distribution Board (MDB) Servicing",
      "Switch, Socket & Power Point Installation",
      "Short Circuit Repair",
      "AC & Geyser Electrical Connection Checkup",
      "Electrical Wiring & Rewiring",
      "IPS Installation & Uninstallation",
      "Distribution Board (DB) Servicing",
      "Profile Light Installation",
    ],
  },
  {
    key: "plumbing", letters: "PS", icon: "tap",
    name: { en: "Plumbing Service", bn: "প্লাম্বিং সার্ভিস" },
    short: { en: "Leakage, lines, drain, geyser", bn: "লিকেজ, লাইন, ড্রেন, গিজার" },
    message: { en: "Hi I need plumbing service", bn: "হ্যালো, আমার প্লাম্বিং সার্ভিস প্রয়োজন" },
    options: [
      { en: "Leakage", bn: "লিকেজ" },
      { en: "Water Line", bn: "পানির লাইন" },
      { en: "Bathroom", bn: "বাথরুম" },
      { en: "Kitchen", bn: "রান্নাঘর" },
      { en: "Drain Block", bn: "ড্রেন ব্লক" },
      { en: "Water Pump", bn: "পানির পাম্প" },
      { en: "Geyser", bn: "গিজার" },
    ],
    fullList: [
      "Water Leakage Repair",
      "Water Line Installation & Repair",
      "Bathroom & Kitchen Plumbing",
      "Basin & Commode Installation & Repair",
      "Mixer, Shower, Tap & Valve Replacement",
      "Drain Blockage Removal",
      "Water Pump Connection",
      "Geyser Service & Installation",
    ],
  },
  {
    key: "ac", letters: "AS", icon: "snow",
    name: { en: "AC Service", bn: "এসি সার্ভিস" },
    short: { en: "Servicing, gas, install, repair", bn: "সার্ভিসিং, গ্যাস, ইনস্টল, মেরামত" },
    message: { en: "Hi I need AC service", bn: "হ্যালো, আমার এসি সার্ভিস প্রয়োজন" },
    options: [
      { en: "Servicing", bn: "সার্ভিসিং" },
      { en: "Gas Refill", bn: "গ্যাস রিফিল" },
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
    options: [
      { en: "Thai Glass", bn: "থাই গ্লাস" },
      { en: "IPS", bn: "আইপিএস" },
      { en: "Gas Stove", bn: "গ্যাস চুলা" },
      { en: "Washing Machine", bn: "ওয়াশিং মেশিন" },
    ],
    fullList: [
      "Washing Machine Installation",
      "Water Purifier Installation & Servicing",
      "Gas Stove Installation & Repair",
      "Kitchen Hood Installation & Cleaning",
      "TV Wall Mount Installation",
      "Wall Mirror Installation",
      "Wall Shelf Installation",
      "Thai Glass Lock Installation & Repair",
      "Door Lock Installation & Replacement",
      "Bathroom Accessories Installation",
      "Towel Rack & Soap Holder Installation",
      "Furniture Assembly & Installation",
      "Picture Frame Installation",
      "IPS & Inverter Installation",
      "Minor Home Maintenance & Repair",
    ],
  },
  {
    key: "commercial", letters: "CS", icon: "building",
    name: { en: "Commercial Space Service", bn: "কমার্শিয়াল স্পেস সার্ভিস" },
    short: { en: "Offices, shops, restaurants", bn: "অফিস, দোকান, রেস্টুরেন্ট" },
    message: { en: "Hi I need commercial space service", bn: "হ্যালো, আমার কমার্শিয়াল স্পেস সার্ভিস প্রয়োজন" },
    options: [
      { en: "Electrical", bn: "ইলেকট্রিক্যাল" },
      { en: "Plumbing", bn: "প্লাম্বিং" },
      { en: "AC", bn: "এসি" },
      { en: "New Setup", bn: "নতুন সেটআপ" },
      { en: "Renovation", bn: "সংস্কার" },
    ],
    fullList: [
      "Commercial Electric / Plumbing Check Up",
      "Office Electrical Wiring & Rewiring",
      "Commercial Lighting Installation",
      "MDB, DB & SDB Installation and Servicing",
      "MCB, MCCB & Circuit Breaker Installation",
      "Commercial Electrical Fault Finding & Repair",
      "Power Distribution & Cable Management",
      "Commercial Plumbing Installation & Repair",
      "Water Supply Line Installation & Repair",
      "Commercial Drainage & Blockage Removal",
      "Office & Shop Lighting Maintenance",
      "AC Electrical Connection & Power Wiring",
      "Shop, Restaurant & Super Shop Maintenance",
      "Office & Commercial Building Maintenance",
      "Electrical Load Assessment & Distribution",
    ],
  },
];

export const findCategory = (key: string) => orderCategories.find((c) => c.key === key);

export const firstOption: Text = { en: "Checkup", bn: "চেকআপ" };
export const lastOption: Text = { en: "Others", bn: "অন্যান্য" };

/** Checkup first, Others last – always */
export const categoryOptions = (c: OrderCategory) => [firstOption, ...c.options, lastOption];

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
  open24: "Open 24 hours",
  heroText: "Tap a service, send the WhatsApp message, and our technician comes to you.",
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
  send: "Send order on WhatsApp",
  clear: "Clear form",
  fullList: "All work we do",
  today: "Today",
  tomorrow: "Tomorrow",
  msgUrgent: "*URGENT – PLEASE COME ASAP*",
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
  open24: "২৪ ঘণ্টা খোলা",
  heroText: "সার্ভিস বেছে নিন, হোয়াটসঅ্যাপ মেসেজ পাঠান, আমাদের টেকনিশিয়ান আপনার কাছে আসবে।",
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
  send: "হোয়াটসঅ্যাপে অর্ডার পাঠান",
  clear: "ফর্ম মুছুন",
  fullList: "আমাদের সব কাজ",
  today: "আজ",
  tomorrow: "আগামীকাল",
  msgUrgent: "*জরুরি – দ্রুত আসুন*",
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
