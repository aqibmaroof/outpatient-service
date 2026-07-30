import About from "@/containers/About";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Meet Team Rehab: a welcoming, patient-centered physical therapy clinic built on individualized, evidence-based care and measurable progress at every visit.",
  path: "/about",
  image: site.images.aboutHero,
});

export default function Page() {
  return <About />;
}
