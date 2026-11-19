
import { clinic } from "../data/clinic.js";
import { Icon, Reveal } from "./ui.jsx";

const clinicImage = `${import.meta.env.BASE_URL}images/motion_well_inside.png`;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#1CAF87] text-white"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-[#0C2B27]/10 blur-3xl" />

      <div className="container-lux relative flex min-h-[100svh] flex-col justify-center pb-28 pt-28 sm:pt-32">

        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">

          {/* Left Content */}
          <div>

            <Reveal>
              <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-white">
                <span className="h-px w-8 bg-white" />
                Batla House · Jamia Nagar · New Delhi
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-7 font-display text-4xl font-semibold leading-[1.12] sm:text-5xl lg:text-6xl">
                Move Better.
                <br />
                Live <span className="italic">Better.</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-white sm:text-lg">
                Expert physiotherapy, rehabilitation & pain management —
                with personalized, evidence-based care at{" "}
                <span className="font-bold text-white">
                  Motionwell Clinic.
                </span>
              </p>
            </Reveal>

            {/* Action Buttons */}
            <Reveal delay={300}>
              <div className="mt-9 flex flex-wrap items-center gap-4">

                <a
                  href="#book"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-wide text-[#0C2B27] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#F7F4EC]"
                >
                  Book Appointment
                  <Icon name="arrow" className="h-4 w-4" />
                </a>

                <a
                  href={`tel:${clinic.phoneDial}`}
                  className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-white px-7 py-4 text-sm font-bold tracking-wide text-white transition-all duration-300 hover:bg-white hover:text-[#0C2B27]"
                >
                  <Icon name="phone" className="h-4 w-4" />
                  {clinic.phone}
                </a>

              </div>
            </Reveal>

            {/* Statistics */}
            <Reveal delay={400}>
              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/30 pt-8">

                {[
                  ["5+", "Years' Experience"],
                  ["4", "Speciality Services"],
                  ["All Days", "10 AM – 10 PM"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <dt className="font-display text-2xl font-semibold text-white sm:text-3xl">
                      {value}
                    </dt>

                    <dd className="mt-2 text-[10px] font-bold uppercase tracking-wider text-white/90 sm:text-[11px]">
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

              {/* White Border */}
              <div className="absolute -inset-3 rounded-[2rem] border border-white/60" />

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-[1.8rem] border-2 border-white/50 bg-white shadow-2xl">
                <img
                  src={clinicImage}
                  alt="Inside Motionwell Physiotherapy Clinic"
                  className="block h-auto max-h-[600px] w-full object-contain"
                  loading="eager"
                  decoding="async"
                />
              </div>

              {/* Trusted Care Card */}
              <div className="absolute -bottom-6 -left-10 flex items-center gap-3 rounded-2xl border border-white/50 bg-white p-4 shadow-xl">

                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-[#1CAF87] text-white">
                  <Icon name="shield" className="h-6 w-6" />
                </span>

                <div>
                  <p className="text-sm font-bold text-[#0C2B27]">
                    Trusted Care
                  </p>

                  <p className="text-xs text-[#0C2B27]/70">
                    BPT, MPT — Dr. Zikra Perween
                  </p>
                </div>

              </div>

            </div>

          </Reveal>

        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="block h-20 w-full sm:h-28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 45 C180 0 240 115 440 75 S720 20 900 70 S1190 105 1440 35 V120 H0 Z"
            fill="#ffffff"
            fillOpacity="0.07"
          />
          <path
            d="M0 55 C180 10 240 125 440 85 S720 30 900 80 S1190 115 1440 45"
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.35"
            strokeWidth="2"
          />
        </svg>
      </div>

    </section>
  );
}
