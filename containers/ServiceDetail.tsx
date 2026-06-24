import Image from "next/image";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import CtaBand from "@/components/CtaBand";
import AssistanceBand from "@/components/AssistanceBand";
import { site } from "@/lib/site";

export default function ServiceDetail({ slug }: { slug: string }) {
  const service = site.services.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = site.services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero title={service.title} image={service.image} alt={service.title} />

      <section className="py-20">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <SectionHeader
                eyebrow="INDIVIDUALIZED CARE"
                title={service.title}
                align="left"
              />
              <p className="mt-4 text-sm leading-relaxed text-slate-500">
                {service.text}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />

      {/* Related services */}
      <section className="bg-slate-50 py-20">
        <Container>
          <SectionHeader eyebrow="EXPLORE MORE" title="Related Services" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {related.map((s) => (
              <ServiceCard key={s.slug} {...s} />
            ))}
          </div>
        </Container>
      </section>

      <AssistanceBand />
    </>
  );
}
