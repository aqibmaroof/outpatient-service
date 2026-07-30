import DirectAccessReferrals from "@/containers/DirectAccessReferrals";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Direct Access & Referrals",
  description:
    "Start physical therapy at Team Rehab with or without a physician referral. We confirm what your state and insurance plan allow and coordinate with your doctor.",
  path: "/direct-access-and-referrals",
  image: site.infoPages["direct-access-and-referrals"].image,
});

export default function Page() {
  return <DirectAccessReferrals />;
}
