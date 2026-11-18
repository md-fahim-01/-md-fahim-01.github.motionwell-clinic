
import { clinic } from "../data/clinic.js";
import { Icon } from "./ui.jsx";

const logoSrc = `${import.meta.env.BASE_URL}images/motion_wll_logo.png`;

export default function Footer() {
  return (
    <footer className="bg-ink pb-24 pt-16 text-white/70">
      <div className="container-lux grid gap-10 md:grid-cols-3">

        {/* Clinic Logo & Description */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logoSrc}
              alt="Motionwell Clinic Logo"
              className="h-14 w-14 rounded-full bg-white p-0.5 object-cover ring-2 ring-white/60 shadow-soft"
              loading="lazy"
              decoding="async"
            />

            <span className="font-display text-xl font-semibold text-white">
              Motion<span className="text-gold">well</span>
            </span>
          </div>

          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            {clinic.shortName} Physiotherapy, Rehabilitation & Multispeciality
            Clinic — expert care for pain relief, mobility and lasting recovery.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
            Quick Links
          </p>

          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {[
              ["#home", "Home"],
              ["#about", "About Us"],
              ["#doctor", "Our Doctor"],
              ["#services", "Our Services"],
              ["#fees", "Fees & Timings"],
              ["#book", "Book Appointment"],
              ["#contact", "Contact Us"],
            ].map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  className="transition-colors hover:text-gold"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
            Reach Us
          </p>

          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Icon
                name="pin"
                className="mt-0.5 h-4 w-4 flex-none text-gold"
              />
              {clinic.address.full}
            </li>

            <li className="flex items-center gap-3">
              <Icon
                name="phone"
                className="h-4 w-4 flex-none text-gold"
              />
              <a
                href={`tel:${clinic.phoneDial}`}
                className="hover:text-gold"
              >
                {clinic.phone}
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Icon
                name="mail"
                className="h-4 w-4 flex-none text-gold"
              />
              <a
                href={`mailto:${clinic.email}`}
                className="break-all hover:text-gold"
              >
                {clinic.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright & Developer Credit */}
      <div className="container-lux mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">

        <p className="text-center">
          © {new Date().getFullYear()} Motionwell Physiotherapy,
          Rehabilitation & Multispeciality Clinic. All rights reserved.
        </p>

        <p>
          Consultation {clinic.fee} · Open All Days
        </p>

        <div className="flex flex-col items-center gap-1">
          <p>
            Designed & Developed by{" "}
            <span className="font-bold tracking-wide text-gold">
              Fahim
            </span>
          </p>

          <a
            href="tel:6206485367"
            className="font-semibold tracking-wide text-white/60 transition-colors hover:text-gold"
          >
            +91 62064 85367
          </a>
        </div>
      </div>
    </footer>
  );
}
