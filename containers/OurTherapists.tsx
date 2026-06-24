import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import TeamCard from "@/components/TeamCard";
import AssistanceBand from "@/components/AssistanceBand";
import { site } from "@/lib/site";

export default function OurTherapists() {
  return (
    <>
      <PageHero
        title={site.therapistsPage.title}
        image={site.images.aboutHero}
        alt="The licensed physical therapists at Restore Physical Therapy"
      />

      <section className="py-20">
        <Container>
          <SectionHeader
            eyebrow="OUR TEAM"
            title="Meet Our Physical Therapists"
          />
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-slate-500">
            {site.therapistsPage.intro}
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {site.team.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </Container>
      </section>

      <AssistanceBand />
    </>
  );
}
