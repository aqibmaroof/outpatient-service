import ServiceDetail from "@/containers/ServiceDetail";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const slug = "chronic-pain-management";

export const metadata = pageMetadata({
  title: "Chronic Pain Management",
  description:
    "Individualized physical therapy for persistent pain, combining advanced therapeutic techniques and movement strategies to reduce pain and improve function.",
  path: `/services/${slug}`,
  image: site.services.find((s) => s.slug === slug)?.image,
});

export default function Page() {
  return <ServiceDetail slug={slug} />;
}
