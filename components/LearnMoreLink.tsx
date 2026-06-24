import Link from "next/link";
import { IconArrowRight } from "./icons";

// The "Learn More →" style link used throughout the site.
export default function LearnMoreLink({
  href = "#",
  label = "Learn More",
}: {
  href?: string;
  label?: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
    >
      {label}
      <IconArrowRight className="h-4 w-4" />
    </Link>
  );
}
