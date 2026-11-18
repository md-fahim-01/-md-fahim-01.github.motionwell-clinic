
import { useEffect, useState } from "react";
import { clinic } from "../data/clinic.js";
import { Icon } from "./ui.jsx";

const logoSrc = `${import.meta.env.BASE_URL}images/motion_wll_logo.png`;

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#doctor", label: "Our Doctor" },
  { href: "#services", label: "Services" },
  { href: "#fees", label: "Fees & Timings" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-pineDeep/95 shadow-soft backdrop-blur"
          : "bg-gradient-to-b from-ink/70 to-transparent"
      }`}
    >
      <div className="container-lux flex h-20 items-center justify-between sm:h-24">

        {/* Circular Clinic Logo */}
        <a
          href="#home"
          className="flex items-center gap-3"
          aria-label="Motionwell home"
        >
          <img
            src={logoSrc}
            alt="Motionwell Clinic Logo"
            className="h-14 w-14 rounded-full bg-white p-0.5 object-cover ring-2 ring-white/70 shadow-soft sm:h-16 sm:w-16"
            loading="eager"
            decoding="async"
          />

          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold tracking-wide text-white sm:text-xl">
              Motion<span className="text-gold">well</span>
            </span>

            <span className="block text-[9px] font-semibold uppercase tracking-[0.28em] text-white/60">
              Physiotherapy & Rehab
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Primary"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-semibold uppercase tracking-widest text-white/75 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}

          <a
            href={`tel:${clinic.phoneDial}`}
            className="hidden items-center gap-2 text-[13px] font-semibold tracking-wide text-white/85 xl:flex"
          >
            <Icon name="phone" className="h-4 w-4 text-gold" />
            {clinic.phone}
          </a>

          <a href="#book" className="btn-gold !px-6 !py-2.5">
            Book Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="rounded-lg p-2 text-white lg:hidden"
          onClick={() => setOpen((previous) => !previous)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav
          id="mobile-navigation"
          className="border-t border-white/10 bg-pineDeep/98 px-6 pb-6 pt-2 backdrop-blur lg:hidden"
          aria-label="Mobile"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 py-3.5 text-sm font-semibold uppercase tracking-widest text-white/80 hover:text-gold"
            >
              {l.label}
            </a>
          ))}

          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="btn-gold mt-5 w-full"
          >
            Book Appointment
          </a>
        </nav>
      )}
    </header>
  );
}
