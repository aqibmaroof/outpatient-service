import Contact from "@/containers/Contact";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact Us",
  description: `Contact Team Rehab in Angels Camp, CA. Call ${site.phone}, fax ${site.faxNumber}, or request an appointment online. Open Monday through Friday, 9:00 AM to 5:00 PM.`,
  path: "/contact",
  image: site.images.contactHero,
});

export default function Page() {
  return <Contact />;
}
