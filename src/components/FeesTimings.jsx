
import { steps, timings } from "../data/clinic.js";
import { Icon, Reveal } from "./ui.jsx";

export default function FeesTimings() {
  return (
    <section id="fees" className="bg-sand/60 py-20 sm:py-28">
      <div className="container-lux">

        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="eyebrow justify-center">Visit Motionwell</p>

            <h2 className="mt-4 font-display text-3xl font-medium text-ink sm:text-4xl">
              Clinic Timings & Patient Journey
            </h2>

            <p className="mt-4 leading-relaxed text-ink/65">
              Plan your visit and learn what to expect during your
              journey towards better health and mobility.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="card-lux p-7 sm:p-10">

            {/* Clinic Timings */}
            <div>
              <p className="eyebrow">Clinic Timings</p>

              <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                Open All Days
              </h3>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {timings.map((timing) => (
                  <div
                    key={timing.label}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-sand bg-cream/60 p-5"
                  >
                    <span className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-ink/60">
                      <Icon
                        name="clock"
                        className="h-5 w-5 flex-none text-pine"
                      />
                      {timing.label}
                    </span>

                    <span className="text-right font-display text-lg font-semibold text-ink">
                      {timing.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Patient Journey */}
            <div className="mt-12 border-t border-sand pt-10">
              <p className="eyebrow">Your Journey With Us</p>

              <ol className="mt-7 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
                {steps.map((step) => (
                  <li
                    key={step.num}
                    className="flex items-start gap-4"
                  >
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-pine/10 font-display text-lg font-semibold text-pine">
                      {step.num}
                    </span>

                    <div>
                      <p className="text-sm font-bold text-ink">
                        {step.title}
                      </p>

                      <p className="mt-2 text-sm leading-relaxed text-ink/60">
                        {step.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Appointment Button */}
            <div className="mt-10 border-t border-sand pt-8 text-center">
              <p className="mb-5 text-sm text-ink/65">
                Ready to take the next step towards better mobility?
              </p>

              <a href="#book" className="btn-gold">
                Book an Appointment
                <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
