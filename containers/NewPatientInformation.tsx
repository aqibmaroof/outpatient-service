import ContentPage from "@/components/ContentPage";
import { site } from "@/lib/site";

export default function NewPatientInformation() {
  return <ContentPage page={site.infoPages["new-patient-information"]} />;
}
