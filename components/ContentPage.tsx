import Container from "./Container";
import PageHero from "./PageHero";
import AssistanceBand from "./AssistanceBand";

type Section = { heading: string; body: string };

// Shared layout for the standalone informational pages (footer links).
export default function ContentPage({
  page,
}: {
  page: {
    title: string;
    image: string;
    intro: string;
    sections: readonly Section[];
  };
}) {
  return (
    <>
      <PageHero title={page.title} image={page.image} alt={page.title} />

      <section className="bg-slate-50 py-20">
        <Container>
          <p className="max-w-3xl text-lg font-semibold leading-relaxed text-ink">
            {page.intro}
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {page.sections.map((section) => (
              <div
                key={section.heading}
                className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-100"
              >
                <h2 className="text-base font-bold text-ink">
                  {section.heading}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <AssistanceBand />
    </>
  );
}
