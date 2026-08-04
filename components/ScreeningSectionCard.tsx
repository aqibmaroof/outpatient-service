import type { Answer, Answers, ScreeningCategory } from "@/lib/eligibility";

const choices: { value: Answer; label: string }[] = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

// One checklist from the packet: the section heading, its instruction line, and
// six numbered questions each answered YES or NO. Every question is its own
// radio group, so the two columns of the paper table become two buttons.
export default function ScreeningSectionCard({
  category,
  answers,
  onAnswer,
  /** Question ids left blank when the patient tried to continue. */
  missing = [],
}: {
  category: ScreeningCategory;
  answers: Answers;
  onAnswer: (questionId: string, answer: Answer) => void;
  missing?: readonly string[];
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
        {category.number}. {category.title}
      </p>
      <h2 className="mt-3 text-xl font-bold leading-snug text-ink sm:text-2xl">
        {category.intro}
      </h2>

      <div className="mt-6 divide-y divide-slate-100 border-y border-slate-100">
        {category.questions.map((question, index) => {
          const value = answers[question.id];
          const isMissing = missing.includes(question.id);

          return (
            <fieldset
              key={question.id}
              className={`flex flex-col gap-4 py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8 ${
                isMissing ? "-mx-3 rounded-md bg-red-50 px-3" : ""
              }`}
            >
              <legend className="sr-only">
                Question {index + 1}: {question.text}
              </legend>

              <p
                aria-hidden="true"
                className="flex gap-3 text-sm leading-relaxed text-ink"
              >
                <span className="font-semibold text-slate-400">
                  {index + 1}.
                </span>
                <span>{question.text}</span>
              </p>

              <div className="flex shrink-0 gap-2 sm:pl-11">
                {choices.map((choice) => (
                  <label
                    key={choice.value}
                    className="group flex-1 cursor-pointer sm:flex-none"
                  >
                    <input
                      type="radio"
                      name={question.id}
                      value={choice.value}
                      checked={value === choice.value}
                      onChange={() => onAnswer(question.id, choice.value)}
                      className="sr-only"
                    />
                    <span className="flex w-full items-center justify-center rounded-md border border-slate-200 px-5 py-2 text-sm font-medium text-slate-500 transition-colors group-hover:border-brand group-has-[:checked]:border-brand group-has-[:checked]:bg-brand group-has-[:checked]:text-white group-has-[:focus-visible]:ring-2 group-has-[:focus-visible]:ring-brand group-has-[:focus-visible]:ring-offset-2 sm:w-16">
                      {choice.label}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
          );
        })}
      </div>
    </div>
  );
}
