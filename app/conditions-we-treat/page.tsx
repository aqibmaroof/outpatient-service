import ConditionsWeTreat from "@/containers/ConditionsWeTreat";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Conditions We Treat",
  description:
    "From back, neck, shoulder, and knee injuries to chronic pain, balance disorders, and neuropathy — see the conditions our licensed physical therapists treat.",
  path: "/conditions-we-treat",
  image: site.infoPages["conditions-we-treat"].image,
});

export default function Page() {
  return <ConditionsWeTreat />;
}
