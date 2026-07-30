import ServiceDetail from "@/containers/ServiceDetail";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const slug = "orthopedic-rehabilitation";

export const metadata = pageMetadata({
  title: "Orthopedic Rehabilitation",
  description:
    "Targeted physical therapy for injuries of the muscles, joints, ligaments, and bones — restoring strength, flexibility, and pain-free movement at Team Rehab.",
  path: `/services/${slug}`,
  image: site.services.find((s) => s.slug === slug)?.image,
});

export default function Page() {
  return <ServiceDetail slug={slug} />;
}
