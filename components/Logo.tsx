import { site } from "@/lib/site";

// The wordmark used in the header (light, over dark hero) and footer (dark).
export default function Logo({
  variant = "light",
  comingFor = "header",
}: {
  variant?: "light" | "dark";
  comingFor?: "header" | "footer";
}) {
  const textColor = variant === "light" ? "text-white" : "text-ink";
  void comingFor;

  return (
    <span className="flex items-center justify-start gap-2.5">
      {comingFor === "footer" ?
        <img
          src="https://work-wear-assets.s3.amazonaws.com/products/products/logo-white-9144ec49-a98f-4487-ae09-2677966e7a11.svg"
          alt={site.brand.line1}
        />
       : 
        <img
          src="https://work-wear-assets.s3.amazonaws.com/products/products/black-logo-58b2f402-43b2-4c79-9efc-35daca1f5732.svg"
          alt={site.brand.line1}
        />
      }

      <span className="flex flex-col leading-none">
        <span className={`text-base font-bold tracking-wide ${textColor}`}>
          {site.brand.line1}
        </span>
        <span
          className={`text-[10px] font-medium tracking-[0.18em] ${
            variant === "light" ? "text-white/70" : "text-slate-500"
          }`}
        >
          {site.brand.line2}
        </span>
      </span>
    </span>
  );
}
