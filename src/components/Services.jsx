
import { services } from "../data/clinic.js";
import { Icon, Reveal } from "./ui.jsx";

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="container-lux">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">Our Services</p>

            <h2 className="mt-4 font-display text-3xl font-medium text-ink sm:text-4xl">
              Complete Care Under One Roof
            </h2>

            <p className="mt-4 text-ink/65">
              From advanced physiotherapy to general physician consultation —
              every service delivered with precision and warmth.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 90}>
              <article className="card-lux group h-full p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pine text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">
                  <Icon name={s.icon} className="h-7 w-7" />
                </span>

                <h3 className="mt-6 font-display text-xl font-semibold text-ink">
                  {s.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-ink/65">
                  {s.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
