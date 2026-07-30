import ServiceDetail from "@/containers/ServiceDetail";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const slug = "sports-injury-management";

export const metadata = pageMetadata({
  title: "Sports Injury Management",
  description:
    "Sports injury rehabilitation and re-injury prevention for athletes of every level, combining recovery with performance-focused training at Team Rehab.",
  path: `/services/${slug}`,
  image: site.services.find((s) => s.slug === slug)?.image,
});

export default function Page() {
  return <ServiceDetail slug={slug} />;
}
