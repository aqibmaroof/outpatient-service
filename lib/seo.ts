import type { Metadata } from "next";
import { site } from "@/lib/site";

// Per-page metadata builder.
//
// Next.js merges metadata between segments *shallowly*: a page that defines its
// own `openGraph` block replaces the root layout's entirely rather than merging
// into it (see the "Merging" section of
// node_modules/next/dist/docs/01-app/03-api-reference/04-functions/generate-metadata.md).
// Routing every page through this helper means the shared OG fields — siteName,
// locale, type — are re-stated on each page instead of being silently dropped.
//
// `title` is left short: the root layout's `%s | Team Rehab` template supplies
// the brand. `canonical` and `url` are relative and resolve against
// `metadataBase` in app/layout.tsx.
export function pageMetadata({
  title,
  description,
  path,
  image = site.images.homeHero,
}: {
  title: string;
  description: string;
  /** Route path with a leading slash, e.g. "/about". */
  path: string;
  /** Absolute-from-root image path; defaults to the home hero. */
  image?: string;
}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${site.brand.name}`,
      description,
      url: path,
      siteName: site.brand.name,
      locale: "en_US",
      type: "website",
      // Width/height are deliberately omitted — the clinic photos are not
      // cropped to a 1200×630 OG ratio, so asserting dimensions would lie.
      images: [{ url: image, alt: `${title} — ${site.brand.name}` }],
    },
  };
}
