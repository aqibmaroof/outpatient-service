import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact"
        image={site.images.contactHero}
        alt="Restore Physical Therapy clinic exterior"
      />

      {/* Contact details + map card */}
      <section className="bg-slate-50 py-20">
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-10">
              <div>
                <h2 className="text-xl font-bold text-ink">Visit Us</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  We&apos;d love to welcome you to our clinic. Find us at:
                </p>
                <p className="mt-2 text-sm font-medium text-ink">
                  {site.address}
                </p>
              </div>

              {site.contactBlocks.map((block) => (
                <div key={block.title}>
                  <h2 className="text-xl font-bold text-ink">{block.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {block.detail}
                  </p>
                  {block.kind === "fax" ? (
                    <p className="mt-2 inline-block text-sm font-medium text-ink">
                      {block.value}
                    </p>
                  ) : (
                    <a
                      href={
                        block.kind === "email"
                          ? `mailto:${block.value}`
                          : `tel:${block.value.replace(/[^+\d]/g, "")}`
                      }
                      className="mt-2 inline-block text-sm font-medium text-brand hover:underline"
                    >
                      {block.value}
                    </a>
                  )}
                </div>
              ))}

              <div>
                <h2 className="text-xl font-bold text-ink">Office Hours</h2>
                <dl className="mt-3 space-y-2">
                  {site.officeHours.map((entry) => (
                    <div
                      key={entry.day}
                      className="flex justify-between gap-4 border-b border-slate-200 pb-2 text-sm"
                    >
                      <dt className="text-slate-500">{entry.day}</dt>
                      <dd className="font-medium text-ink">{entry.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>

      {/* Map */}
      <section className="relative h-[360px] w-full bg-sky-200">
        <iframe
          title={`Map showing ${site.brand.name}`}
          src={`https://maps.google.com/maps?q=${encodeURIComponent(
            site.address,
          )}&z=15&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0"
        />
      
      </section>
    </>
  );
}
