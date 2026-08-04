import { categories } from "@/lib/eligibility";

// First step of the questionnaire: the packet's "find the one (or ones) that
// match what you're experiencing" instruction, as a checkbox group of cards.
// Real <input type="checkbox"> elements keep keyboard and screen-reader
// behaviour for free; the visible card is styled off the input's checked state.
export default function ScreeningCategoryPicker({
  selected,
  onToggle,
}: {
  selected: readonly string[];
  onToggle: (id: string) => void;
}) {
  return (
    <fieldset>
      <legend className="text-xl font-bold leading-snug text-ink sm:text-2xl">
        Which of these match what you&apos;re experiencing?
      </legend>
      <p className="mt-2 text-sm leading-relaxed text-slate-500">
        Choose all that apply. You&apos;ll answer six quick YES or NO questions
        for each one you pick.
      </p>

      <div className="mt-6 space-y-3">
        {categories.map((category) => (
          <label
            key={category.id}
            className="group flex cursor-pointer items-start gap-4 rounded-md border border-slate-200 bg-white p-4 transition-colors hover:border-brand has-[:checked]:border-brand has-[:checked]:bg-brand/5 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand has-[:focus-visible]:ring-offset-2"
          >
            <input
              type="checkbox"
              name="categories"
              value={category.id}
              checked={selected.includes(category.id)}
              onChange={() => onToggle(category.id)}
              className="sr-only"
            />
            <span
              aria-hidden="true"
              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-slate-300 transition-colors group-has-[:checked]:border-brand group-has-[:checked]:bg-brand"
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3 w-3 text-white opacity-0 transition-opacity group-has-[:checked]:opacity-100"
              >
                <path d="M4 10.5l4 4 8-9" />
              </svg>
            </span>
            <span>
              <span className="block text-sm font-medium text-ink">
                {category.title}
              </span>
              <span className="mt-1 block text-sm leading-relaxed text-slate-500">
                {category.pickerHint}
              </span>
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
