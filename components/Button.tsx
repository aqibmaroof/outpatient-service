import Link from "next/link";

type Variant = "primary" | "outlineLight" | "outlineDark";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  outlineLight: "border border-white/70 text-white hover:bg-white/10",
  outlineDark: "border border-brand text-brand hover:bg-brand hover:text-white",
};

export default function Button({
  href,
  variant = "primary",
  className = "",
  onClick,
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
