import WhatToExpect from "@/containers/WhatToExpect";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "What to Expect",
  description:
    "See how care works at Team Rehab: a comprehensive evaluation, a personalized treatment plan built around your goals, and progress tracked at every visit.",
  path: "/what-to-expect",
  image: site.infoPages["what-to-expect"].image,
  
});

export default function Page() {
  return <WhatToExpect />;
}
