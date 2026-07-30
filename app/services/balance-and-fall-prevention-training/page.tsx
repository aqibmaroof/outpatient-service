import ServiceDetail from "@/containers/ServiceDetail";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const slug = "balance-and-fall-prevention-training";

export const metadata = pageMetadata({
  title: "Balance & Fall Prevention Training",
  description:
    "Balance training to improve stability, coordination, and confidence in movement — reducing fall risk and supporting safe, independent living at Team Rehab.",
  path: `/services/${slug}`,
  image: site.services.find((s) => s.slug === slug)?.image,
});

export default function Page() {
  return <ServiceDetail slug={slug} />;
}
