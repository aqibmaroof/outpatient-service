import InsuranceBilling from "@/containers/InsuranceBilling";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Insurance & Billing",
  description:
    "Team Rehab accepts most major insurance plans, including Medicare. We verify your benefits and explain co-pays and out-of-pocket costs before your first visit.",
  path: "/insurance-and-billing",
  image: site.infoPages["insurance-and-billing"].image,
});

export default function Page() {
  return <InsuranceBilling />;
}
