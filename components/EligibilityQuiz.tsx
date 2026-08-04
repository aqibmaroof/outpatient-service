"use client";

import { useRef, useState } from "react";
import QuizProgress from "./QuizProgress";
import ScreeningCategoryPicker from "./ScreeningCategoryPicker";
import ScreeningSectionCard from "./ScreeningSectionCard";
import EligibilityResultCard from "./EligibilityResultCard";
import { IconArrowLeft, IconArrowRight } from "./icons";
import {
  evaluateScreening,
  orderedCategories,
  type Answer,
  type Answers,
  type ScreeningResult,
} from "@/lib/eligibility";

// The printed packet as a step-through form: first the patient picks which of
// the six checklists match what they're experiencing, then answers each chosen
// checklist's six YES/NO questions, then sees a scored result per checklist.
//
// Answers stay on the client — nothing is submitted anywhere.
export default function EligibilityQuiz() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [answers, setAnswers] = useState<Answers>({});
  const [missing, setMissing] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ScreeningResult | null>(null);
  const topRef = useRef<HTMLDivElement>(null);

  // Sections to walk through, always in packet order regardless of click order.
  const chosen = orderedCategories(selected);
  // Step 0 is the picker; steps 1..n are the chosen sections.
  const totalSteps = chosen.length + 1;
  const category = step > 0 ? chosen[step - 1] : undefined;

  // Keep the card in view when its height changes between steps.
  function scrollToTop() {
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function toggleCategory(id: string) {
    setSelected((previous) =>
      previous.includes(id)
        ? previous.filter((entry) => entry !== id)
        : [...previous, id],
    );
    setError(null);
  }

  function answer(questionId: string, value: Answer) {
    setAnswers((previous) => ({ ...previous, [questionId]: value }));
    setMissing((previous) => previous.filter((entry) => entry !== questionId));
    setError(null);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!category) {
      if (selected.length === 0) {
        setError("Please choose at least one checklist to continue.");
        return;
      }
      setStep(1);
      scrollToTop();
      return;
    }

    const unanswered = category.questions
      .filter((question) => !answers[question.id])
      .map((question) => question.id);

    if (unanswered.length > 0) {
      setMissing(unanswered);
      setError(
        unanswered.length === category.questions.length
          ? "Please answer YES or NO to each question to continue."
          : `Please answer the ${unanswered.length} remaining question${
              unanswered.length === 1 ? "" : "s"
            } to continue.`,
      );
      return;
    }

    if (step === totalSteps - 1) {
      setResult(evaluateScreening(selected, answers));
    } else {
      setStep(step + 1);
    }
    scrollToTop();
  }

  function goBack() {
    setError(null);
    setMissing([]);
    setStep(Math.max(0, step - 1));
    scrollToTop();
  }

  function restart() {
    setSelected([]);
    setAnswers({});
    setMissing([]);
    setError(null);
    setResult(null);
    setStep(0);
    scrollToTop();
  }

  const isLast = step === totalSteps - 1;

  return (
    <div ref={topRef} className="scroll-mt-32">
      {result ? (
        <EligibilityResultCard result={result} onRestart={restart} />
      ) : (
        <form
          onSubmit={handleSubmit}
          className="rounded-lg bg-white p-8 shadow-sm ring-1 ring-slate-100 sm:p-10"
        >
          <QuizProgress
            current={step + 1}
            // Before anything is picked there is only one step, which would
            // read as 100% done — keep the bar partial until we know better.
            total={Math.max(totalSteps, 2)}
            label={
              category
                ? `Checklist ${step} of ${chosen.length}`
                : "Choose your checklists"
            }
          />

          <div className="mt-8">
            {category ? (
              <ScreeningSectionCard
                key={category.id}
                category={category}
                answers={answers}
                onAnswer={answer}
                missing={missing}
              />
            ) : (
              <ScreeningCategoryPicker
                selected={selected}
                onToggle={toggleCategory}
              />
            )}
          </div>

          {error && (
            <p role="alert" className="mt-5 text-sm font-medium text-red-600">
              {error}
            </p>
          )}

          <div className="mt-8 flex items-center justify-between gap-4 border-t border-slate-200 pt-6">
            <button
              type="button"
              onClick={goBack}
              disabled={step === 0}
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-ink disabled:cursor-not-allowed disabled:opacity-40"
            >
              <IconArrowLeft className="h-4 w-4" />
              Back
            </button>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
            >
              {isLast && category ? "See My Results" : "Continue"}
              <IconArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
