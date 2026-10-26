// General FAQs used on home pages. PLACEHOLDER: check answers match your real policies.

import { company } from "./company";
import type { Faq } from "./services";
import type { SiteKey } from "./sites";
import type { Lang } from "../i18n";

const m = company.responseMinutes;

const common: Record<Lang, Faq[]> = {
  en: [
    { q: "How do I book a service?", a: "Tap any WhatsApp button on this site. The message already names the service — just add your area and, if you can, a photo or video of the problem." },
    { q: "How fast can a technician reach me?", a: `In most of Uttara we usually arrive within about ${m} minutes for urgent jobs. For other areas or booked jobs, we come at the time you choose.` },
    { q: "Will I know the cost before work starts?", a: "Yes. We discuss the job with you on WhatsApp or on site and agree everything before starting. No surprises." },
    { q: "How do I pay?", a: `You pay after the job is done, by ${company.payments.join(", ")}.` },
    { q: "Do you do both electrical and plumbing work?", a: "Yes. Emergency Electric and Plumbing Service has an Electrical Division (electricservicebd.com) and a Plumbing Division (plumbingservicebd.com). One message, one team, both jobs." },
    { q: "Do you work for offices and companies?", a: "Yes — offices, shops, restaurants, super shops, clinics, schools and apartment buildings, including monthly maintenance contracts and after-hours work." },
  ],
  bn: [
    { q: "কীভাবে সার্ভিস বুক করব?", a: "এই সাইটের যেকোনো হোয়াটসঅ্যাপ বাটনে চাপুন। মেসেজে সার্ভিসের নাম আগেই লেখা থাকবে — শুধু এলাকা আর পারলে সমস্যার একটি ছবি বা ভিডিও দিন।" },
    { q: "টেকনিশিয়ান কত দ্রুত আসতে পারবে?", a: `উত্তরার বেশিরভাগ জায়গায় জরুরি কাজে সাধারণত প্রায় ${m} মিনিটের মধ্যে পৌঁছাই। অন্য এলাকায় বা আগে বুক করা কাজে আপনার পছন্দের সময়ে আসি।` },
    { q: "কাজ শুরুর আগে কি খরচ জানতে পারব?", a: "হ্যাঁ। হোয়াটসঅ্যাপে বা সরেজমিনে কাজটি নিয়ে আলোচনা করে সব ঠিক করে তারপর কাজ শুরু করি। কোনো চমক নেই।" },
    { q: "কীভাবে পেমেন্ট করব?", a: `কাজ শেষ হওয়ার পর ${company.paymentsBn.join(", ")} — যেকোনোভাবে পেমেন্ট করতে পারেন।` },
    { q: "আপনারা কি ইলেকট্রিক ও প্লাম্বিং দুটো কাজই করেন?", a: "হ্যাঁ। ইমার্জেন্সি ইলেকট্রিক অ্যান্ড প্লাম্বিং সার্ভিসের ইলেকট্রিক্যাল বিভাগ (electricservicebd.com) ও প্লাম্বিং বিভাগ (plumbingservicebd.com) আছে। এক মেসেজে, এক টিমে দুই কাজ।" },
    { q: "অফিস ও কোম্পানির কাজ কি করেন?", a: "হ্যাঁ — অফিস, দোকান, রেস্টুরেন্ট, সুপার শপ, ক্লিনিক, স্কুল ও অ্যাপার্টমেন্ট বিল্ডিং; মাসিক রক্ষণাবেক্ষণ চুক্তি ও অফিস সময়ের পরে কাজ সহ।" },
  ],
};

const specific: Record<SiteKey, Record<Lang, Faq>> = {
  electric: {
    en: { q: "Are your electricians trained for safe work?", a: "Yes. Our team is led by an electrical engineer. We use correctly rated cables and breakers, check earthing, and switch off lines before working." },
    bn: { q: "আপনাদের ইলেকট্রিশিয়ানরা কি নিরাপদ কাজে প্রশিক্ষিত?", a: "হ্যাঁ। আমাদের টিম একজন ইলেকট্রিক্যাল ইঞ্জিনিয়ারের নেতৃত্বে কাজ করে। সঠিক রেটিংয়ের তার ও ব্রেকার ব্যবহার, আর্থিং চেক এবং লাইন বন্ধ করে কাজ করা হয়।" },
  },
  plumbing: {
    en: { q: "Do you fix leaks without breaking the whole bathroom?", a: "We first find the exact leak point, then open only what's needed. We explain the options before any breaking." },
    bn: { q: "পুরো বাথরুম না ভেঙে কি লিক ঠিক করা যায়?", a: "আমরা আগে লিকের সঠিক জায়গা খুঁজে বের করি, তারপর যতটুকু দরকার শুধু ততটুকু খুলি। ভাঙার আগে বিকল্পগুলো বুঝিয়ে বলি।" },
  },
};

export const generalFaqs = (siteKey: SiteKey, lang: Lang): Faq[] => [...common[lang].slice(0, 3), specific[siteKey][lang], ...common[lang].slice(3)];
