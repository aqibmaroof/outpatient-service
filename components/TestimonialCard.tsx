import { IconStar } from "./icons";

export default function TestimonialCard({
  quote,
  name,
}: {
  quote: string;
  name: string;
}) {
  return (
    <div className="w-full rounded-lg bg-white p-6 ring-1 ring-slate-100">
      <div className="flex gap-0.5 text-amber-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <IconStar key={i} className="h-4 w-4" />
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">“{quote}”</p>
      <div className="mt-5 flex items-center gap-3">
        <span className="h-8 w-8 rounded-full bg-slate-200" />
        <span className="text-sm font-medium text-ink">{name}</span>
      </div>
    </div>
  );
}
