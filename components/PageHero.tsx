import Image from "next/image";
import Container from "./Container";

// The dark photo hero used at the top of the inner pages.
export default function PageHero({
  title,
  image,
  alt,
}: {
  title: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <Image src={image} alt={alt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-ink/70" />
      <Container>
        <div className="relative flex min-h-[260px] flex-col justify-end pb-10 pt-32 sm:min-h-[320px] sm:pb-12 sm:pt-40">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">{title}</h1>
        </div>
      </Container>
    </section>
  );
}
