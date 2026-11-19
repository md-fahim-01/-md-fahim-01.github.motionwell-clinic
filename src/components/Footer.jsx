
import { clinic } from "../data/clinic.js";
import { Icon } from "./ui.jsx";

const logoSrc = `${import.meta.env.BASE_URL}images/motion_wll_logo.png`;

export default function Footer() {
  return (
    <footer className="bg-[#1CAF87] pb-24 pt-16 text-white">

      <div className="container-lux grid gap-12 md:grid-cols-3">

        {/* Clinic Logo & Description */}
        <div>
          <div className="flex items-center gap-3">

            <img
              src={logoSrc}
              alt="Motionwell Clinic Logo"
              className="h-14 w-14 rounded-full border-2 border-white bg-white p-0.5 object-cover shadow-lg"
              loading="lazy"
              decoding="async"
            />

            <span className="font-display text-xl font-semibold text-white">
              Motion<span className="text-white/75">well</span>
            </span>

          </div>

          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/90">
            {clinic.shortName} Physiotherapy, Rehabilitation & Multispeciality
            Clinic — expert care for pain relief, mobility and lasting recovery.
          </p>
        </div>

        {/* Quick Links */}
        <div>

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-white">
            Quick Links
          </p>

          <div className="mt-3 h-0.5 w-10 rounded-full bg-white/70" />

          <ul className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3 text-sm text-white/90">

            {[
              ["#home", "Home"],
              ["#about", "About Us"],
              ["#doctor", "Our Doctors"],
              ["#services", "Our Services"],
              ["#fees", "Fees & Timings"],
              ["#book", "Book Appointment"],
              ["#contact", "Contact Us"],
            ].map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  className="transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}

          </ul>
        </div>

        {/* Contact Information */}
        <div>

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-white">
            Reach Us
          </p>

          <div className="mt-3 h-0.5 w-10 rounded-full bg-white/70" />

          <ul className="mt-5 space-y-4 text-sm text-white/90">

            <li className="flex items-start gap-3">
              <Icon
                name="pin"
                className="mt-0.5 h-5 w-5 flex-none text-white"
              />
              <span>{clinic.address.full}</span>
            </li>

            <li className="flex items-center gap-3">
              <Icon
                name="phone"
                className="h-5 w-5 flex-none text-white"
              />

              <a
                href={`tel:${clinic.phoneDial}`}
                className="transition-colors hover:text-white/70"
              >
                {clinic.phone}
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Icon
                name="mail"
                className="h-5 w-5 flex-none text-white"
              />

              <a
                href={`mailto:${clinic.email}`}
                className="break-all transition-colors hover:text-white/70"
              >
                {clinic.email}
              </a>
            </li>

          </ul>
        </div>

      </div>

      {/* Copyright & Developer Credit */}
      <div className="container-lux mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/30 pt-7 text-xs text-white/85 sm:flex-row">

        <p className="text-center leading-relaxed">
          © {new Date().getFullYear()} Motionwell Physiotherapy,
          Rehabilitation & Multispeciality Clinic. All rights reserved.
        </p>

        <div className="flex flex-col items-center gap-1">

          <p>
            Designed & Developed by{" "}
            <span className="font-bold tracking-wide text-white">
              Fahim
            </span>
          </p>

          <a
            href="tel:6206485367"
            className="font-semibold tracking-wide text-white transition-colors hover:text-white/70"
          >
            +91 62064 85367
          </a>

        </div>

      </div>

    </footer>
  );
}
