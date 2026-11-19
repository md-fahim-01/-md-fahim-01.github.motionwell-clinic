
import { services } from "../data/clinic.js";
import { Icon, Reveal } from "./ui.jsx";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#F7F4EC] py-20 sm:py-28"
    >
      <div className="container-lux">

        {/* Section Heading */}
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">

            <p className="inline-flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#1CAF87]">
              <span className="h-px w-8 bg-[#1CAF87]" />
              Our Services
              <span className="h-px w-8 bg-[#1CAF87]" />
            </p>

            <h2 className="mt-5 font-display text-3xl font-semibold leading-snug text-[#0C2B27] sm:text-4xl">
              Complete Care Under One Roof
            </h2>

            <p className="mt-5 leading-relaxed text-[#0C2B27]/70">
              From advanced physiotherapy to general physician consultation —
              every service delivered with precision and warmth.
            </p>

          </div>
        </Reveal>

        {/* Services Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {services.map((service, index) => (
            <Reveal key={service.name} delay={index * 90}>

              <article className="group h-full rounded-3xl border border-[#1CAF87]/20 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#1CAF87]/50 hover:shadow-xl">

                {/* Icon */}
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1CAF87] text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0C2B27]">
                  <Icon name={service.icon} className="h-7 w-7" />
                </span>

                {/* Title */}
                <h3 className="mt-6 font-display text-xl font-semibold leading-snug text-[#0C2B27]">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-[#0C2B27]/70">
                  {service.desc}
                </p>

                {/* Bottom Accent */}
                <div className="mt-7 h-1 w-12 rounded-full bg-[#1CAF87] transition-all duration-300 group-hover:w-20" />

              </article>

            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
}
