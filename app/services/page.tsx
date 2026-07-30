import Services from "@/containers/Services";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Explore Team Rehab's physical therapy services — orthopedic rehabilitation, post-surgical recovery, sports injury management, manual therapy, and balance training.",
  path: "/services",
  image: site.images.servicesHero,
});

export default function Page() {
  return <Services />;
}
