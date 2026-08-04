import Link from "next/link";
import Button from "./Button";
import { IconArrowRight, IconCheck } from "./icons";
import {
  resultSentence,
  type CategoryScore,
  type ScreeningResult,
} from "@/lib/eligibility";
import { site } from "@/lib/site";

// The screen shown once the patient finishes their checklists: one result box
// per checklist (the packet's "Your Result" boxes), then the score summary that
// mirrors the front-desk table on the paper form.
export default function EligibilityResultCard({
  result,
  onRestart,
}: {
  result: ScreeningResult;
  onRestart: () => void;
}) {
  const { scores, indicated } = result;
  const hasFlags = indicated.length > 0;

  // Two checklists can point at the same service page — show it once.
  const recommendations = indicated
    .map((score) => score.category.recommendation)
    .filter(
      (recommendation, index, all) =>
        all.findIndex((entry) => entry.href === recommendation.href) === index,
    );

  return (
    <div
      className={`rounded-lg bg-white p-8 shadow-sm ring-1 sm:p-10 ${
        hasFlags ? "ring-brand/30" : "ring-slate-100"
      }`}
    >
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-full ${
          hasFlags ? "bg-brand text-white" : "bg-slate-100 text-slate-400"
        }`}
      >
        <IconCheck className="h-7 w-7" />
      </div>

      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
        Your Results
      </p>
      <h2 className="mt-3 text-2xl font-bold leading-snug text-ink sm:text-3xl">
        {hasFlags
          ? "Yes — you would benefit from physical therapy"
          : "Physical therapy may still help you"}
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-slate-500">
        {hasFlags
          ? `Your answers describe symptoms our therapists treat every day. The
             next step is an evaluation, where a licensed therapist assesses your
             movement, strength, and pain and builds a plan around your goals.`
          : `Your answers don't point to one area in particular. If any of these symptoms limit what you do day to day, an evaluation is still worthwhile.`}
      </p>

      {/* Per-checklist result boxes */}
      <div className="mt-8 space-y-4">
        {scores.map((score) => (
          <ResultBox key={score.category.id} score={score} />
        ))}
      </div>

      {/* Score summary — the packet's front-desk table */}
      <h3 className="mt-10 text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">
        Score summary
      </h3>
      <dl className="mt-4 overflow-hidden rounded-md ring-1 ring-slate-100">
        {scores.map((score) => (
          <div
            key={score.category.id}
            className="flex items-center justify-between gap-6 border-b border-slate-100 px-5 py-3 text-sm last:border-b-0"
          >
            <dt className="text-slate-500">
              {score.category.number}. {score.category.title}
            </dt>
            <dd className="shrink-0">
              <span
                className={
                  score.meetsThreshold
                    ? "font-semibold text-brand"
                    : "font-medium text-ink"
                }
              >
                {score.yesCount} of {score.total} YES
              </span>
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 text-xs leading-relaxed text-slate-400">
        Bring these numbers with you — your therapist reviews them at your
        evaluation to shape your plan of care.
      </p>

      {/* What happens next */}
      <h3 className="mt-10 text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">
        What happens next
      </h3>
      <ol className="mt-4 space-y-4">
        {[
          `Call us at ${site.phone} or request an appointment online — most patients are seen within a few days.`,
          "Your initial evaluation takes about 45–60 minutes. Wear loose, comfortable clothing.",
          "Bring a photo ID, your insurance card, and any referral or imaging reports you have.",
        ].map((step, index) => (
          <li key={step} className="flex gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand">
              {index + 1}
            </span>
            <p className="text-sm leading-relaxed text-slate-500">{step}</p>
          </li>
        ))}
      </ol>

      {/* Recommended service pages */}
      {recommendations.length > 0 && (
        <div className="mt-8 space-y-3">
          {recommendations.map((recommendation) => (
            <Link
              key={recommendation.href}
              href={recommendation.href}
              className="flex items-center justify-between gap-4 rounded-md border border-slate-200 p-5 transition-colors hover:border-brand"
            >
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                  Recommended for you
                </span>
                <span className="mt-1 block text-sm font-bold text-ink">
                  {recommendation.title}
                </span>
              </span>
              <IconArrowRight className="h-5 w-5 shrink-0 text-brand" />
            </Link>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/contact">Request an Appointment</Button>
        <a
          href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
          className="inline-flex items-center justify-center rounded-md border border-brand px-6 py-3 text-sm font-medium text-brand transition-colors hover:bg-brand hover:text-white"
        >
          Call {site.phone}
        </a>
      </div>

      <button
        type="button"
        onClick={onRestart}
        className="mt-8 text-sm font-medium text-brand hover:underline"
      >
        Start over
      </button>

      <p className="mt-8 border-t border-slate-200 pt-6 text-xs leading-relaxed text-slate-400">
        This is not a diagnosis. It is a quick way to see whether your symptoms
        are the kind that physical therapy commonly helps with. Your therapist
        confirms whether physical therapy is appropriate at your initial
        evaluation.
      </p>
    </div>
  );
}

// One checklist's outcome, with the answers behind it available on demand.
function ResultBox({ score }: { score: CategoryScore }) {
  return (
    <div
      className={`rounded-md p-5 ${
        score.meetsThreshold
          ? "border-l-4 border-brand bg-brand/5"
          : "border-l-4 border-slate-200 bg-slate-50"
      }`}
    >
      <p className="text-sm font-bold text-ink">
        {score.category.number}. {score.category.title}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-slate-500">
        {score.meetsThreshold
          ? resultSentence(score)
          : `You answered YES to ${score.yesCount} of ${score.total} questions in this area. Mention these symptoms at your evaluation if they are still affecting your daily activities.`}
      </p>

      <details className="mt-3">
        <summary className="cursor-pointer text-xs font-medium text-brand">
          Review your answers
        </summary>
        <ul className="mt-3 space-y-2">
          {score.responses.map(({ question, answer }, index) => (
            <li
              key={question.id}
              className="flex justify-between gap-4 text-xs leading-relaxed"
            >
              <span className="text-slate-500">
                {index + 1}. {question.text}
              </span>
              <span
                className={`shrink-0 font-semibold uppercase ${
                  answer === "yes" ? "text-brand" : "text-slate-400"
                }`}
              >
                {answer}
              </span>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}
