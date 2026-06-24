import Image from "next/image";
import LearnMoreLink from "./LearnMoreLink";

export default function ServiceCard({
  title,
  text,
  image,
  href,
}: {
  title: string;
  text: string;
  image: string;
  href: string;
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-100">
      <div className="relative h-44 w-full">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-ink">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">{text}</p>
        <div className="mt-5">
          <LearnMoreLink href={href} />
        </div>
      </div>
    </div>
  );
}
