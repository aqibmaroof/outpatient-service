import Link from "next/link";
import { IconArrowRight } from "./icons";

// One of the three cards that sit on the blue band beneath the home hero.
export default function HeroCard({
  title,
  text,
  linkLabel,
  href,
}: {
  title: string;
  text: string;
  linkLabel: string;
  href: string;
}) {
  return (
    <div className="rounded-lg bg-white/5 p-6 ring-1 ring-white/20">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-white/80">{text}</p>
      <Link
        href={href}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white hover:underline"
      >
        {linkLabel}
        <IconArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
