import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import EligibilityQuiz from "@/components/EligibilityQuiz";
import CtaBand from "@/components/CtaBand";
import { categories, YES_THRESHOLD } from "@/lib/eligibility";
import { site } from "@/lib/site";

const reassurances = [
  {
    title: "Six short checklists",
    text: "Pick the ones that match what you're experiencing, then answer each question with a simple YES or NO.",
  },
  {
    title: "No account, no obligation",
    text: "Your answers stay in your browser. Nothing is submitted until you decide to request an appointment.",
  },
  {
    title: "A clear result either way",
    text: `You'll see your YES count for each checklist, and whether ${YES_THRESHOLD} or more of them point to symptoms physical therapy can help with.`,
  },
];

export default function EligibilityCheck() {
  return (
    <>
      <PageHero
        title="Patient Self-Screening Questionnaires"
        image={site.images.svcConsult}
        alt="Therapist evaluating a patient at Team Rehab"
      />

      {/* Intro — the packet's "How to use this packet" instructions */}
      <section className="py-20">
        <Container>
          {/* One centred column — heading, instructions, checklist index, then
              the three reassurances — so every block shares the same axis. */}
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <SectionHeader
              eyebrow="Patient Questionnaire"
              title="Six quick checklists to help you understand whether team rehab could help you"
              className="text-balance"
            />
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-pretty text-slate-500">
              Below are six short checklists covering common conditions we
              treat. Find the one (or ones) that match what you&apos;re
              experiencing, answer each question with a simple YES or NO, and
              read the result at the end.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-pretty text-slate-500">
              This is not a diagnosis. It is a quick way to see whether your
              symptoms are the kind that team rehab commonly helps with. If
              several of these apply to you, it may be worth scheduling an
              evaluation.
            </p>

            <ul className="mt-10 grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <li
                  key={category.id}
                  className="flex items-center gap-3 rounded-md bg-slate-50 px-4 py-3 text-left"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand">
                    {category.number}
                  </span>
                  <span className="text-sm font-medium text-ink">
                    {category.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-10 text-center md:grid-cols-3">
            {reassurances.map((item) => (
              <div key={item.title}>
                <h3 className="text-base font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-pretty text-slate-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Questionnaire */}
      <section className="bg-slate-50 py-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            <EligibilityQuiz />

            <p className="mt-8 text-center text-sm leading-relaxed text-slate-500">
              Prefer to talk it through? Call us at{" "}
              <a
                href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                className="font-medium text-brand hover:underline"
              >
                {site.phone}
              </a>{" "}
              — Monday through Friday, 9:00 AM to 5:00 PM.
            </p>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
