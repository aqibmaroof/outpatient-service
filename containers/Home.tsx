import Image from "next/image";
import Container from "@/components/Container";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import HeroCard from "@/components/HeroCard";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CtaBand from "@/components/CtaBand";
import AssistanceBand from "@/components/AssistanceBand";
import { IconPin, IconPhone } from "@/components/icons";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <Image
          src={site.images.homeHero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <Container>
          <div className="relative pb-10 pt-32 sm:pt-44">
            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl">
              Regain Your Mobility. Reduce Your Pain. Reclaim Your Life.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85">
              Our licensed physical therapists create individualized treatment
              plans to help you recover, restore function, and get back to the
              activities you love.
            </p>

            <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-5 text-sm text-white/85 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
              <span className="inline-flex items-center gap-2">
                <IconPin className="h-4 w-4" />
                {site.address}
              </span>
              <span className="inline-flex items-center gap-2">
                <IconPhone className="h-4 w-4" />
                {site.phone}
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick-access cards */}
      <section className="bg-brand-dark">
        <Container>
          <div className="grid gap-6 py-10 md:grid-cols-2">
            {site.heroCards.map((card) => (
              <HeroCard key={card.title} {...card} />
            ))}
          </div>
        </Container>
      </section>

      {/* About */}
      <section className="py-20">
        <Container>
          <SectionHeader
            eyebrow="ABOUT US"
            title={
              <>
                A welcoming, patient-centered
                <br className="hidden sm:block" /> approach to your recovery
              </>
            }
          />
          <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src={site.images.aboutBuilding}
                alt="Physical therapist guiding a patient through a rehabilitation exercise"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-lg font-semibold text-ink">
                {site.homeAbout.lead}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-500">
                {site.homeAbout.body}
              </p>
              <Button href="/about" variant="outlineDark" className="mt-6">
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-20">
        <Container>
          <SectionHeader
            eyebrow="OUR SERVICES"
            title="Comprehensive Physical Therapy"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {site.homeServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />

      {/* Why choose us */}
      <section className="py-20">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-ink sm:text-4xl">
                Why Choose Us
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-500">
                We combine licensed expertise with a patient-first philosophy to
                deliver individualized care you can trust.
              </p>
              <div className="mt-8 space-y-6">
                {site.whyChoose.map((feature) => (
                  <div key={feature.title}>
                    <h3 className="text-lg font-bold text-ink">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src={site.images.whyChoose}
                alt="Patient working with state-of-the-art rehabilitation equipment"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="bg-slate-50 py-20">
        <Container>
          <SectionHeader eyebrow="HOW IT WORKS" title="Your Path to Recovery" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {site.process.map((item) => (
              <div
                key={item.step}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand/10 hover:ring-brand/30"
              >
                {/* Top accent bar reveals on hover */}
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand to-brand-dark transition-transform duration-300 group-hover:scale-x-100" />

                {/* Oversized watermark number */}
                <span className="pointer-events-none absolute -right-3 -top-5 select-none text-8xl font-black leading-none text-slate-50 transition-colors duration-300 group-hover:text-brand/10">
                  {item.step}
                </span>

                {/* Gradient step badge */}
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-dark text-lg font-bold text-white shadow-lg shadow-brand/30 transition-transform duration-300 group-hover:scale-110">
                  {item.step}
                </span>

                <h3 className="relative mt-6 text-lg font-bold text-ink">
                  {item.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-slate-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials
      <section className="py-20">
        <Container>
          <SectionHeader
            eyebrow="PATIENT STORIES"
            title="What Our Patients Are Saying"
          />
          <div className="mx-auto mt-12 grid gap-6 sm:grid-cols-2">
            {site.testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </Container>
      </section> */}

      <AssistanceBand />
    </>
  );
}
