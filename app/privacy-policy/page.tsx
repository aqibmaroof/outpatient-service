import PrivacyPolicy from "@/containers/PrivacyPolicy";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Team Rehab collects, uses, and protects your personal and health information, and how to request access to or corrections of your records.",
  path: "/privacy-policy",
  image: site.infoPages["privacy-policy"].image,
});

export default function Page() {
  return <PrivacyPolicy />;
}
