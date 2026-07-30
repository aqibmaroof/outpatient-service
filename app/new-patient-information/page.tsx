import NewPatientInformation from "@/containers/NewPatientInformation";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "New Patient Information",
  description:
    "Prepare for your first visit to Team Rehab — what to bring, what to wear, paperwork to complete, and what happens during your 45 to 60 minute evaluation.",
  path: "/new-patient-information",
  image: site.infoPages["new-patient-information"].image,
});

export default function Page() {
  return <NewPatientInformation />;
}
