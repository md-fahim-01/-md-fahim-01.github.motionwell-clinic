
import { clinic, steps, timings } from "../data/clinic.js";
import { Icon, Reveal } from "./ui.jsx";

const feeFeatures = [
  "No hidden charges",
  "All days open",
  "WhatsApp & phone confirmation",
];

export default function FeesTimings() {
  return (
    <section id="fees" className="bg-sand/60 py-20 sm:py-28">
      <div className="container-lux">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">

          {/* Consultation Fees Card */}
          <Reveal>
            <div className="card-lux relative h-full overflow-hidden p-9 sm:p-10">

              {/* Decorative Background */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/15 blur-2xl" />

              <p className="eyebrow">Consultation Fees</p>

              <div className="mt-6 flex items-end gap-2">
                <span className="font-display text-6xl font-semibold text-ink">
                  {clinic.fee}
                </span>

                <span className="pb-2 text-sm font-semibold uppercase tracking-widest text-ink/50">
                  / consultation
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-ink/65">
                Transparent, flat pricing across all services — physiotherapy,
                rehabilitation, pain management and general physician
                consultation.
              </p>

              {/* Fee Features */}
              <ul className="mt-7 space-y-3 border-t border-sand pt-7">
                {feeFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm font-medium text-ink/75"
                  >
                    <Icon
                      name="check"
                      className="h-4 w-4 flex-none text-pine"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Appointment Button */}
              <a
                href="#book"
                className="btn-gold mt-9 inline-flex w-full items-center justify-center sm:w-auto"
              >
                Book for {clinic.fee}
                <Icon name="arrow" className="ml-2 h-4 w-4" />
              </a>

            </div>
          </Reveal>

          {/* Clinic Timings Card */}
          <Reveal delay={120}>
            <div className="card-lux h-full p-9 sm:p-10">

              <p className="eyebrow">Clinic Timings</p>

              <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                Open All Days
              </h3>

              {/* Timings */}
              <div className="mt-7 divide-y divide-sand">
                {timings.map((timing) => (
                  <div
                    key={timing.label}
                    className="flex items-center justify-between gap-4 py-4"
                  >
                    <span className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-ink/60">
                      <Icon
                        name="clock"
                        className="h-4 w-4 flex-none text-gold"
                      />
                      {timing.label}
                    </span>

                    <span className="text-right font-display text-lg font-semibold text-ink">
                      {timing.hours}
                    </span>
                  </div>
                ))}
              </div>

              {/* Patient Journey */}
              <div className="mt-10">
                <p className="eyebrow">Your Journey With Us</p>

                <ol className="mt-6 grid gap-5 sm:grid-cols-2">
                  {steps.map((step) => (
                    <li
                      key={step.num}
                      className="flex items-start gap-4"
                    >
                      <span className="font-display text-2xl font-semibold text-gold/70">
                        {step.num}
                      </span>

                      <div>
                        <p className="text-sm font-bold text-ink">
                          {step.title}
                        </p>

                        <p className="mt-1 text-xs leading-relaxed text-ink/60">
                          {step.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
