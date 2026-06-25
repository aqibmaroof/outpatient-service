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
    <span className="flex items-center justify-between">
      <img
        className="h-auto w-50"
        src={
          comingFor === "footer"
            ? "https://work-wear-assets.s3.amazonaws.com/products/products/teamrehab_black-291ac37b-3318-45d9-bee0-e91c7358500c.svg"
            : "https://work-wear-assets.s3.amazonaws.com/products/products/teamrehab-ced4dfef-af96-4b31-bdc0-78c85adba413.svg"
        }
        alt={site.brand.name}
      />
    </span>
  );
}
