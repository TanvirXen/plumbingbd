// YouTube videos shown on the Work page (and service pages that list a matching service).
// Upload the videos from ../Pictures to the company YouTube channel, then add them here.
// Example: { id: "dQw4w9WgXcQ", title: "Ceiling fan installation in Uttara", site: "electric", service: "ceiling-fan-installation", date: "2026-10-01" }

import type { SiteKey } from "./sites";

export interface Video {
  id: string; // YouTube video ID
  title: string;
  site: SiteKey;
  service?: string; // service slug
  date: string; // upload date YYYY-MM-DD
}

export const videos: Video[] = [];
