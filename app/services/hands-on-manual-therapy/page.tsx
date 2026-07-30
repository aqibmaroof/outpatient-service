import ServiceDetail from "@/containers/ServiceDetail";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const slug = "hands-on-manual-therapy";

export const metadata = pageMetadata({
  title: "Hands-On Manual Therapy",
  description:
    "Skilled hands-on techniques — joint mobilization, soft-tissue work, and stretching — to relieve pain and restore movement in stiff or injured areas.",
  path: `/services/${slug}`,
  image: site.services.find((s) => s.slug === slug)?.image,
});

export default function Page() {
  return <ServiceDetail slug={slug} />;
}
