import ServiceDetail from "@/containers/ServiceDetail";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const slug = "post-surgical-recovery";

export const metadata = pageMetadata({
  title: "Post-Surgical Recovery",
  description:
    "Structured post-operative rehabilitation that rebuilds function safely, restores range of motion, and returns you to daily life with confidence.",
  path: `/services/${slug}`,
  image: site.services.find((s) => s.slug === slug)?.image,
});

export default function Page() {
  return <ServiceDetail slug={slug} />;
}
