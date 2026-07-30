import type { Metadata } from "next";
import OurTherapists from "@/containers/OurTherapists";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMetadata({
    title: site.therapistsPage.title,
    description:
      "Meet the licensed physical therapists at Team Rehab who guide your recovery with expertise, compassion, and a treatment plan built around your goals.",
    path: "/our-therapists",
    image: site.images.aboutLobby,
  }),
  // Kept out of the index for the same reason it is excluded from
  // app/sitemap.ts: this page still shows placeholder headshots. Remove this
  // block (and uncomment the sitemap entry) once real staff photos land.
  robots: { index: false, follow: true },
};

export default function Page() {
  return <OurTherapists />;
}
