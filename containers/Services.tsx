import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import InfoLinkCard from "@/components/InfoLinkCard";
import CtaBand from "@/components/CtaBand";
import AssistanceBand from "@/components/AssistanceBand";
import { site } from "@/lib/site";

export default function Services() {
  return (
    <>
      <PageHero
        title="Our Services"
        image={site.images.servicesHero}
        alt="Physical therapist working with a patient at Restore Physical Therapy"
      />

      {/* Service cards */}
      <section className="py-20">
        <Container>
          <SectionHeader
            eyebrow="INDIVIDUALIZED CARE"
            title="Comprehensive Physical Therapy Services"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {site.services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />

      {/* Secondary links */}
      <section className="pb-20 pt-6">
        <Container>
          <div className="grid gap-x-10 gap-y-10 md:grid-cols-3">
            {site.serviceLinks.map((link) => (
              <InfoLinkCard key={link.title} {...link} />
            ))}
          </div>
        </Container>
      </section>

      <AssistanceBand />
    </>
  );
}
