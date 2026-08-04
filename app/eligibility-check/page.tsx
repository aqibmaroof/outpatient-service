import EligibilityCheck from "@/containers/EligibilityCheck";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Patient Self-Screening Questionnaires",
  description:
    "Six short YES/NO checklists — balance, low back, neck and shoulder, knee and hip, post-surgical, and sports injury — to help you see whether physical therapy at Team Rehab in Angels Camp, CA could help you.",
  path: "/eligibility-check",
  image: site.images.svcConsult,
});

export default function Page() {
  return <EligibilityCheck />;
}
