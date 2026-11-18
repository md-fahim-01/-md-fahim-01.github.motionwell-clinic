import { useState } from "react";
import { faqs, testimonials } from "../data/clinic.js";
import { Icon, Reveal } from "./ui.jsx";

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card-lux overflow-hidden">
      <button
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-sm font-bold text-ink">{q}</span>
        <span
          className={`flex h-8 w-8 flex-none items-center justify-center rounded-full bg-pine/5 text-pine transition-transform duration-300 ${open ? "rotate-45" : ""}`}
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      {open && <p className="px-6 pb-6 text-sm leading-relaxed text-ink/65">{a}</p>}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-lux">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">Testimonials</p>
            <h2 className="mt-4 font-display text-3xl font-medium text-ink sm:text-4xl">
              What Our Patients Say
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="card-lux flex h-full flex-col p-8">
                <div className="flex gap-1 text-gold" aria-label="5 star rating">
                  {[...Array(5)].map((_, s) => (
                    <Icon key={s} name="star" className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-ink/70">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 border-t border-sand pt-5">
                  <p className="font-display text-base font-semibold text-ink">{t.name}</p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                    {t.treatment}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl space-y-4">
          <Reveal>
            <h3 className="text-center font-display text-2xl font-medium text-ink">
              Frequently Asked Questions
            </h3>
          </Reveal>
          {faqs.map((f) => (
            <Reveal key={f.q}>
              <FaqItem q={f.q} a={f.a} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
