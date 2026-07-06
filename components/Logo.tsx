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
          comingFor !== "footer"
            ? "https://work-wear-assets.s3.amazonaws.com/products/products/teamrehab_physical_therapy_logo_white-ed2dd4d7-ea08-42dd-a7aa-d96f9e0e3271.png"
            : "https://work-wear-assets.s3.amazonaws.com/products/products/teamrehab_physical_therapy_logo_black-63b0d668-b8d6-4e57-bf7c-999eab4dd713.png"
        }
        alt={site.brand.name}
      />
    </span>
  );
}
