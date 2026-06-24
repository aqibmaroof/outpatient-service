import Container from "./Container";

// Blue "Take the First Step Toward Recovery" banner (home + services).
export default function CtaBand() {
  return (
    <section className="py-10">
      <Container>
        <div className="rounded-lg bg-brand-dark px-8 py-8">
          <div className="md:max-w-2xl">
            <h3 className="text-lg font-bold text-white">
              Take the First Step Toward Recovery
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/85">
              Whether you're recovering from an injury, managing chronic pain,
              or aiming to enhance your physical performance, our licensed
              physical therapists are here to guide you with expertise,
              compassion, and a plan built around your goals.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
