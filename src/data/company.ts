// Company facts shared by BOTH sites. Keep these identical everywhere (Google checks NAP consistency).
// Values marked PLACEHOLDER must be replaced with real details before launch.

export const company = {
  name: "Emergency Electric and Plumbing Service", // PLACEHOLDER: match trade license spelling exactly
  nameBn: "ইমার্জেন্সি ইলেকট্রিক অ্যান্ড প্লাম্বিং সার্ভিস",
  shortName: "Emergency EPS",
  // Phone + WhatsApp come from .env (PHONE, PHONE_INTL, WHATSAPP_NUMBER); these are the fallbacks.
  phone: process.env.PHONE || "01609-993537",
  phoneIntl: process.env.PHONE_INTL || "+8801609993537",
  whatsapp: process.env.WHATSAPP_NUMBER || "8801609993537", // country code, no + or spaces
  email: "electricianandplumberbd@gmail.com", // optional
  address: {
    street: "House-67, Road-12/A, Sector-10", // leave empty if service-area only (address hidden on Google)
    streetBn: "বাড়ি-৬৭, রোড-১২/এ, সেক্টর-১০",
    locality: "Uttara",
    localityBn: "উত্তরা",
    region: "Dhaka",
    regionBn: "ঢাকা",
    postalCode: "1230",
    country: "BD",
  },
  // Approximate base location from job-photo GPS (Uttara). PLACEHOLDER: replace with the real office location.
  geo: { lat: 23.8728, lng: 90.4005 },
  hours: {
    // PLACEHOLDER: real working hours. Only claim 24/7 if the phone is answered 24/7.
    opens: "08:00",
    closes: "22:00",
    label: "Every day, 8 AM – 10 PM · urgent calls answered",
    labelBn: "প্রতিদিন সকাল ৮টা – রাত ১০টা · জরুরি কল গ্রহণ করা হয়",
  },
  responseMinutes: 60, // PLACEHOLDER: typical arrival time in Uttara
  payments: ["Cash", "bKash", "Nagad"], // PLACEHOLDER
  paymentsBn: ["নগদ টাকা", "বিকাশ", "নগদ (Nagad)"],
  expert: {
    // Name taken from camera watermark on job photos. PLACEHOLDER: confirm name, title and experience.
    name: "Eng. Md Shakhawat",
    title: "Lead Electrical Engineer",
    titleBn: "প্রধান ইলেকট্রিক্যাল ইঞ্জিনিয়ার",
  },
  social: {
    // Empty values are hidden on the site. YouTube / Instagram / TikTok: PLACEHOLDER, add when available.
    googleBusiness: "https://share.google/0Q82bfZLFurpw6t36",
    googleReview: "",
    facebook: "https://www.facebook.com/profile.php?id=100095419443718",
    youtube: "",
    instagram: "",
    tiktok: "",
  },
  logo: "/logo.png",
};

export const waLink = (text: string) =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;
export const telLink = `tel:${company.phoneIntl}`;

// Google Sheet fields for a WhatsApp order button (see src/scripts/order.ts).
// letters: GS = general "order now", CS = commercial; empty = this site's letters (ES / PS).
export type SheetOrder = { letters?: string; service?: string; orderType?: string; address?: string };
export const orderNow: SheetOrder = { letters: "GS", service: "Order now", orderType: "Order now" };
export const commercialOrder = (service = "Commercial Space Service"): SheetOrder =>
  ({ letters: "CS", service, orderType: "WhatsApp (A)" });
