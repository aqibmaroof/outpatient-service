import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Every public route under app/. Keep this list in sync when adding a page.
// `priority` ranks pages relative to each other; `changeFrequency` is a hint
// only — crawlers use their own heuristics.
const routes: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  {
    path: "/services/orthopedic-rehabilitation",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/services/post-surgical-recovery",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/services/sports-injury-management",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/services/hands-on-manual-therapy",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/services/chronic-pain-management",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/services/balance-and-fall-prevention-training",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  { path: "/conditions-we-treat", priority: 0.8, changeFrequency: "monthly" },
  // Intentionally excluded: /our-therapists is not linked from the nav or
  // footer yet and still shows placeholder headshots. Uncomment once the real
  // staff photos land (see the `team` TODO in lib/site.ts).
  // { path: "/our-therapists", priority: 0.7, changeFrequency: "monthly" },
  { path: "/what-to-expect", priority: 0.7, changeFrequency: "yearly" },
  {
    path: "/new-patient-information",
    priority: 0.7,
    changeFrequency: "yearly",
  },
  {
    path: "/direct-access-and-referrals",
    priority: 0.7,
    changeFrequency: "yearly",
  },
  { path: "/insurance-and-billing", priority: 0.7, changeFrequency: "yearly" },
  { path: "/home-exercise-programs", priority: 0.7, changeFrequency: "yearly" },
  { path: "/eligibility-check", priority: 0.8, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.9, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
