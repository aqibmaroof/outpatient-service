import HomeExercisePrograms from "@/containers/HomeExercisePrograms";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Home Exercise Programs",
  description:
    "Continue your recovery between visits with a home exercise program designed by your Team Rehab therapist — clear instructions and safe, steady progression.",
  path: "/home-exercise-programs",
  image: site.infoPages["home-exercise-programs"].image,
});

export default function Page() {
  return <HomeExercisePrograms />;
}
