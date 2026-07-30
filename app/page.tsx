import type { Metadata } from "next";
import Home from "@/containers/Home";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Outpatient Physical Therapy in Angels Camp, CA",
    description:
      "Team Rehab is an outpatient physical therapy clinic in Angels Camp, CA — orthopedic rehabilitation, post-surgical recovery, sports injury care, and balance training.",
    path: "/",
    image: site.images.homeHero,
  }),
  // The root layout's title template only applies to *child* segments, and
  // app/page.tsx shares the layout's segment — so spell the title out here.
  title: {
    absolute: `${site.brand.name} | Outpatient Physical Therapy in Angels Camp, CA`,
  },
};

export default function Page() {
  return <Home />;
}
