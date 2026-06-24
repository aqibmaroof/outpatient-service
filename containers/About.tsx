import Image from "next/image";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import AssistanceBand from "@/components/AssistanceBand";
import { site } from "@/lib/site";

export default function About() {
  return (
    <>
      <PageHero
        title="About Us"
        image={site.images.aboutHero}
        alt="A licensed physical therapist at Restore Physical Therapy"
      />

      {/* Intro */}
      <section className="bg-slate-50 py-20">
        <Container>
          <h2 className="max-w-3xl text-3xl font-bold leading-snug text-ink sm:text-4xl">
            {site.about.heading}
          </h2>

          <div className="relative mt-10 aspect-[16/7] w-full overflow-hidden rounded-lg">
            <Image
              src={site.images.aboutLobby}
              alt="Restore Physical Therapy clinic and treatment space"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="mt-10 grid gap-8 text-sm leading-relaxed text-slate-500 md:grid-cols-3">
            {site.about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <Container>
          <dl className="divide-y divide-slate-200">
            <div className="grid gap-4 py-8 md:grid-cols-[220px_1fr]">
              <dt className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                Vision
              </dt>
              <dd className="text-base leading-relaxed text-ink">
                {site.about.vision}
              </dd>
            </div>
            <div className="grid gap-4 py-8 md:grid-cols-[220px_1fr]">
              <dt className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                Mission
              </dt>
              <dd className="text-base leading-relaxed text-ink">
                {site.about.mission}
              </dd>
            </div>
          </dl>
        </Container>
      </section>

      <AssistanceBand />
    </>
  );
}
