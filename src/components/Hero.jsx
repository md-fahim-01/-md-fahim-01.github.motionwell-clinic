
import { clinic } from "../data/clinic.js";
import { Icon, Reveal } from "./ui.jsx";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-pineDeep text-white"
    >
      {/* Hero Background Image */}
      <img
        src="/images/motion_well_inside.png"
        alt="Motionwell Physiotherapy Clinic"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-25"
        loading="eager"
        decoding="async"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pineDeep via-pineDeep/85 to-pine/60" />

      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-lux relative flex min-h-[100svh] flex-col justify-center pb-20 pt-28 sm:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">

          {/* Left Content */}
          <div>
            <Reveal>
              <p className="eyebrow">
                Batla House · Jamia Nagar · New Delhi
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-6 font-display text-4xl font-medium leading-[1.12] sm:text-5xl lg:text-6xl">
                Move Better.
                <br />
                Live <span className="italic text-gold">Better.</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                Expert physiotherapy, rehabilitation & pain management — with
                personalized, evidence-based care at{" "}
                <span className="font-semibold text-white">
                  Motionwell Clinic
                </span>.
                Consultation just {clinic.fee}, open all days.
              </p>
            </Reveal>

            {/* Action Buttons */}
            <Reveal delay={300}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href="#book" className="btn-gold">
                  Book Appointment
                  <Icon name="arrow" className="h-4 w-4" />
                </a>

                <a href={`tel:${clinic.phoneDial}`} className="btn-ghost">
                  <Icon name="phone" className="h-4 w-4" />
                  {clinic.phone}
                </a>
              </div>
            </Reveal>

            {/* Clinic Statistics */}
            <Reveal delay={400}>
              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
                {[
                  ["5+", "Years' Experience"],
                  ["4", "Speciality Services"],
                  ["All Days", "10 AM – 10 PM"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <dt className="font-display text-2xl font-semibold text-gold sm:text-3xl">
                      {value}
                    </dt>
                    <dd className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-white/55">
                      {label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Right Clinic Image */}
          <Reveal delay={250} className="hidden lg:block">
            <div className="relative ml-auto max-w-md">

              {/* Gold Border */}
              <div className="absolute -inset-3 rounded-3xl border border-gold/30" />

              {/* Full Image - No Cropping */}
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-soft">
                <img
                  src="/images/motion_well_inside.png"
                  alt="Inside Motionwell Clinic"
                  className="block h-auto max-h-[600px] w-full object-contain"
                  loading="eager"
                  decoding="async"
                />
              </div>

              {/* Doctor Information Card */}
              <div className="absolute -bottom-6 -left-10 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-soft">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-pine text-gold">
                  <Icon name="shield" className="h-5 w-5" />
                </span>

                <div>
                  <p className="text-sm font-bold text-ink">
                    Trusted Care
                  </p>
                  <p className="text-xs text-ink/60">
                    BPT, MPT — Dr. Zikra Perween
                  </p>
                </div>
              </div>

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
