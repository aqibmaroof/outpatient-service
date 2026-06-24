// A small uppercase eyebrow label above a section title, centered by default.
export default function SectionHeader({
  eyebrow,
  title,
  align = "center",
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-bold leading-snug text-ink sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
