// Booking page data – the same 5 order categories, options and messages as the emergencyeps.com flow
// (WhatsApp-Order-Flowchart-3). letters = first part of the Order ID in the Google Sheet (ES-301026-1).
import type { Group, Service } from "./services";
import type { SiteKey } from "./sites";

type Text = { en: string; bn: string };
export interface OrderCategory {
  key: "electric" | "plumbing" | "ac" | "home" | "commercial";
  letters: string;
  icon: string;
  name: Text;
  short: Text;
  message: Text; // one-tap WhatsApp message (A)
  options: Text[]; // work chips; "Checkup" first and "Others" last are added automatically
}

export const orderCategories: OrderCategory[] = [
  {
    key: "electric", letters: "ES", icon: "⚡",
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
  },
  {
    key: "plumbing", letters: "PS", icon: "💧",
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
  },
  {
    key: "ac", letters: "AS", icon: "❄️",
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
  },
  {
    key: "home", letters: "HS", icon: "🏠",
    name: { en: "Home Service", bn: "হোম সার্ভিস" },
    short: { en: "Thai glass, IPS, gas stove, more", bn: "থাই গ্লাস, আইপিএস, গ্যাস চুলা, আরও" },
    message: { en: "Hi I need home service", bn: "হ্যালো, আমার হোম সার্ভিস প্রয়োজন" },
    options: [
      { en: "Thai Glass", bn: "থাই গ্লাস" },
      { en: "IPS", bn: "আইপিএস" },
      { en: "Gas Stove", bn: "গ্যাস চুলা" },
      { en: "Washing Machine", bn: "ওয়াশিং মেশিন" },
    ],
  },
  {
    key: "commercial", letters: "CS", icon: "🏢",
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
  },
];

export const firstOption: Text = { en: "Checkup", bn: "চেকআপ" };
export const lastOption: Text = { en: "Others", bn: "অন্যান্য" };

/** Checkup first, Others last – always */
export const categoryOptions = (c: OrderCategory) => [firstOption, ...c.options, lastOption];

/** start / end = hour (24h). Used to grey out slots that are already over today. */
export const timeSlots = [
  { start: 8, end: 10, en: "8 – 10 AM", bn: "সকাল ৮টা – ১০টা" },
  { start: 10, end: 12, en: "10 AM – 12 PM", bn: "সকাল ১০টা – দুপুর ১২টা" },
  { start: 12, end: 14, en: "12 – 2 PM", bn: "দুপুর ১২টা – ২টা" },
  { start: 14, end: 16, en: "2 – 4 PM", bn: "দুপুর ২টা – বিকাল ৪টা" },
  { start: 16, end: 18, en: "4 – 6 PM", bn: "বিকাল ৪টা – সন্ধ্যা ৬টা" },
  { start: 18, end: 20, en: "6 – 8 PM", bn: "সন্ধ্যা ৬টা – রাত ৮টা" },
  { start: 20, end: 22, en: "8 – 10 PM", bn: "রাত ৮টা – ১০টা" },
];

/** How many days the customer can pick (today + next days) */
export const bookingDays = 7;

/** Which booking category a service page belongs to (for /order/?for=… links) */
export function categoryFor(s: Pick<Service, "slug" | "site" | "group">): OrderCategory["key"] {
  const g: Group = s.group;
  if (g === "commercial") return "commercial";
  if (g === "home") return "home";
  if (s.slug.startsWith("ac-")) return "ac";
  return s.site as SiteKey;
}
