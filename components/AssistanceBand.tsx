import Image from "next/image";
import Container from "./Container";
import { site } from "@/lib/site";

// Dark "Ready to Start Your Recovery?" banner with the contact lines.
export default function AssistanceBand() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src={site.images.assistance}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/80" />
      <Container>
        <div className="relative  gap-8 py-16 flex flex-col items-center justify-between sm:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Start Your Recovery?
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80">
              Our team is here to guide you every step of the way. Reach out to
              schedule an evaluation or ask about our services.
            </p>
          </div>
          <div className="flex flex-wrap gap-12">
            <div>
              <p className="text-sm text-white/70">Contact Number:</p>
              <p className="mt-1 text-xl font-bold text-white">{site.phone}</p>
            </div>
            <div>
              <p className="text-sm text-white/70">Fax Number:</p>
              <p className="mt-1 text-xl font-bold text-white">
                {site.faxNumber}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
