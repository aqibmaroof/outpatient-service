// Step counter + bar shown above the current step of the screening
// questionnaire.
export default function QuizProgress({
  current,
  total,
  label,
}: {
  /** 1-based index of the step on screen. */
  current: number;
  total: number;
  /** Overrides the default "Step X of Y" counter. */
  label?: string;
}) {
  const percent = Math.round((current / total) * 100);

  return (
    <div>
      <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
        <span>{label ?? `Step ${current} of ${total}`}</span>
        <span>{percent}%</span>
      </div>
      <div
        className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-200"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={current}
        aria-label="Questionnaire progress"
      >
        <div
          className="h-full rounded-full bg-brand transition-[width] duration-300 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
