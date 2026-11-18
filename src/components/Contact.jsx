import { clinic } from "../data/clinic.js";
import { Icon, Reveal } from "./ui.jsx";

export default function Contact() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    clinic.mapsQuery
  )}&output=embed`;

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="container-lux">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">Contact Us</p>
            <h2 className="mt-4 font-display text-3xl font-medium text-ink sm:text-4xl">
              Visit Our Clinic
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="grid h-full gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                { icon: "pin", title: "Clinic Address", body: clinic.address.full },
                { icon: "phone", title: "Call / WhatsApp", body: clinic.phone, href: `tel:${clinic.phoneDial}` },
                { icon: "mail", title: "Email", body: clinic.email, href: `mailto:${clinic.email}` },
                { icon: "clock", title: "Timings", body: "Morning 10 AM – 3 PM · On-call 3–5 PM · Evening 5–10 PM (All Days)" },
              ].map((c) => {
                const Inner = (
                  <>
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-pine text-gold">
                      <Icon name={c.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-ink/50">{c.title}</p>
                      <p className="mt-1 text-sm font-medium leading-relaxed text-ink/80">{c.body}</p>
                    </div>
                  </>
                );
                return c.href ? (
                  <a key={c.title} href={c.href} className="card-lux flex items-start gap-4 p-5 transition-shadow hover:shadow-soft">
                    {Inner}
                  </a>
                ) : (
                  <div key={c.title} className="card-lux flex items-start gap-4 p-5">
                    {Inner}
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full overflow-hidden rounded-2xl border border-sand shadow-card">
              <iframe
                title="Motionwell Clinic location on Google Maps"
                src={mapSrc}
                className="h-full min-h-[320px] w-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
