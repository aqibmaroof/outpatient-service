import LearnMoreLink from "./LearnMoreLink";

// Text-only card (no image) used in the secondary services grid.
export default function InfoLinkCard({
  title,
  text,
  href = "#",
}: {
  title: string;
  text: string;
  href?: string;
}) {
  return (
    <div>
      <h3 className="text-base font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-500">{text}</p>
      <div className="mt-3">
        <LearnMoreLink href={href} />
      </div>
    </div>
  );
}
