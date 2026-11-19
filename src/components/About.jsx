
import { conditions } from "../data/clinic.js";
import { Icon, Reveal } from "./ui.jsx";

const imagesPath = `${import.meta.env.BASE_URL}images/`;

const points = [
  "Personalized, evidence-based treatment plans",
  "Modern techniques with a compassionate approach",
  "Focus on pain relief, mobility & lasting recovery",
];

export default function About() {
  return (
    <section id="about" className="bg-cream py-20 sm:py-28">
      <div className="container-lux grid items-center gap-14 lg:grid-cols-2">

        <Reveal>
          <div className="relative">

            {/* Main Clinic Interior Image */}
            <img
              src={`${imagesPath}inside_img.png`}
              alt="Motionwell Physiotherapy Clinic Interior"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-card"
              loading="lazy"
              decoding="async"
            />

            {/* Rehabilitation Image */}
            <img
              src={`${imagesPath}inside_img.png`}
              alt="Rehabilitation facilities at Motionwell"
              className="absolute -bottom-10 -right-4 hidden w-44 rounded-2xl border-4 border-cream object-cover shadow-soft sm:block lg:w-52"
              loading="lazy"
              decoding="async"
            />

            {/* Experience Badge */}
            <div className="absolute -left-4 -top-4 hidden rounded-2xl bg-[#1CAF87] px-5 py-4 text-white shadow-soft sm:block">
              <p className="font-display text-2xl font-semibold text-white">
                5+
              </p>

              <p className="text-[10px] font-semibold uppercase tracking-widest text-white/90">
                Years of Expertise
              </p>
            </div>

          </div>
        </Reveal>

        <Reveal delay={120}>
          {/* Section Label */}
          <p className="eyebrow">
            About Motionwell
          </p>

          {/* Heading */}
          <h2 className="mt-4 font-display text-3xl font-medium leading-snug text-ink sm:text-4xl">
            Dedicated to Healing, Mobility & Long-Term Recovery
          </h2>

          {/* Description */}
          <p className="mt-6 leading-relaxed text-ink/70">
            Motionwell Physiotherapy, Rehabilitation & Multispeciality Clinic is
            committed to delivering personalized, evidence-based care focused on
            pain relief, mobility restoration and functional recovery. We
            believe every patient deserves expert treatment designed around
            their unique condition and lifestyle.
          </p>

          {/* Clinic Highlights */}
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#1CAF87]/10 text-[#1CAF87]">
                  <Icon name="check" className="h-3.5 w-3.5" />
                </span>

                <span className="text-sm font-medium text-ink/80">
                  {p}
                </span>
              </li>
            ))}
          </ul>

          {/* Conditions We Treat */}
          <div className="mt-10">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-ink/45">
              Conditions We Treat
            </p>

            <div className="flex flex-wrap gap-2.5">
              {conditions.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-sand bg-white px-4 py-2 text-xs font-semibold text-ink/70 shadow-sm transition-all hover:border-[#1CAF87] hover:text-[#1CAF87]"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
