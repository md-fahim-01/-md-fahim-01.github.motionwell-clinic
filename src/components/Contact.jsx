
import { clinic } from "../data/clinic.js";
import { Icon, Reveal } from "./ui.jsx";

export default function Contact() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    clinic.mapsQuery
  )}&output=embed`;

  const contactItems = [
    {
      icon: "pin",
      title: "Clinic Address",
      body: clinic.address.full,
    },
    {
      icon: "phone",
      title: "Call / WhatsApp",
      body: clinic.phone,
      href: `tel:${clinic.phoneDial}`,
    },
    {
      icon: "mail",
      title: "Email",
      body: clinic.email,
      href: `mailto:${clinic.email}`,
    },
    {
      icon: "clock",
      title: "Timings",
      body: "Morning 10 AM – 3 PM · On-call 3–5 PM · Evening 5–10 PM (All Days)",
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="container-lux">

        {/* Section Heading */}
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">Contact Us</p>

            <h2 className="mt-4 font-display text-3xl font-medium text-ink sm:text-4xl">
              Visit Our Clinic
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-ink/60">
              Get in touch with Motionwell Clinic for appointments,
              consultations and personalized physiotherapy care.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">

          {/* Contact Information */}
          <Reveal>
            <div className="grid h-full gap-4 sm:grid-cols-2 lg:grid-cols-1">

              {contactItems.map((item) => {
                const content = (
                  <>
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-pine text-[#1CAF87]">
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-ink/50">
                        {item.title}
                      </p>

                      <p className="mt-1 text-sm font-medium leading-relaxed text-ink/80">
                        {item.body}
                      </p>
                    </div>
                  </>
                );

                return item.href ? (
                  <a
                    key={item.title}
                    href={item.href}
                    className="card-lux flex items-start gap-4 p-5 transition-shadow hover:shadow-soft"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={item.title}
                    className="card-lux flex items-start gap-4 p-5"
                  >
                    {content}
                  </div>
                );
              })}

            </div>
          </Reveal>

          {/* Google Maps */}
          <Reveal delay={120}>
            <div className="h-full min-h-[320px] overflow-hidden rounded-2xl border border-sand shadow-card sm:min-h-[400px] lg:min-h-full">

              <iframe
                title="Motionwell Clinic location on Google Maps"
                src={mapSrc}
                className="h-full min-h-[320px] w-full sm:min-h-[400px]"
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
