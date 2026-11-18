
import { doctor } from "../data/clinic.js";
import { Icon, Reveal } from "./ui.jsx";

const doctorImage = `${import.meta.env.BASE_URL}images/lady_dr.jpeg`;

export default function Doctor() {
  return (
    <section id="doctor" className="bg-pine py-20 text-white sm:py-28">
      <div className="container-lux grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">

        {/* Doctor Image */}
        <Reveal>
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-3 rounded-3xl border border-gold/40" />

            <img
              src={doctorImage}
              alt={`Dr. ${doctor.name} - Physiotherapist`}
              className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-soft"
              loading="lazy"
              decoding="async"
              width="400"
              height="500"
            />
          </div>
        </Reveal>

        {/* Doctor Information */}
        <Reveal delay={120}>
          <p className="eyebrow">Meet Our Doctor</p>

          <h2 className="mt-4 font-display text-3xl font-medium sm:text-4xl">
            {doctor.name}
          </h2>

          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-gold">
            {doctor.title} · {doctor.qualification} · {doctor.experience}
          </p>

          <p className="mt-6 max-w-xl leading-relaxed text-white/75">
            {doctor.philosophy}
          </p>

          {/* Professional Experience */}
          <div className="mt-8 space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/50">
              Professional Experience
            </p>

            {doctor.roles.map((role, index) => (
              <div
                key={`${role}-${index}`}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Icon name="shield" className="h-4 w-4" />
                </span>

                <p className="text-sm font-medium text-white/85">
                  {role}
                </p>
              </div>
            ))}
          </div>

          {/* Appointment Button */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#book" className="btn-gold">
              Consult Now
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}