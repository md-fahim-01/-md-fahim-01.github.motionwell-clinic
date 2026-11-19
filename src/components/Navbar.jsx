
import { useEffect, useState } from "react";
import { clinic } from "../data/clinic.js";
import { Icon } from "./ui.jsx";

const logoSrc = `${import.meta.env.BASE_URL}images/motion_wll_logo.png`;

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#doctor", label: "Our Doctor" },
  { href: "#services", label: "Services" },
  { href: "#fees", label: "Clinic Timings" },
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
          ? "bg-[#1CAF87] shadow-lg"
          : "bg-gradient-to-b from-[#1CAF87]/95 to-[#1CAF87]/80"
      }`}
    >
      <div className="container-lux flex h-20 items-center justify-between sm:h-24">

        {/* Clinic Logo */}
        <a
          href="#home"
          className="flex items-center gap-3"
          aria-label="Motionwell home"
        >
          <img
            src={logoSrc}
            alt="Motionwell Clinic Logo"
            className="h-14 w-14 rounded-full bg-white p-0.5 object-cover ring-2 ring-white shadow-lg sm:h-16 sm:w-16"
            loading="eager"
            decoding="async"
          />

          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold tracking-wide text-white sm:text-xl">
              Motionwell
            </span>

            <span className="block text-[9px] font-semibold uppercase tracking-[0.28em] text-white/85">
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
              className="text-[13px] font-semibold uppercase tracking-widest text-white/90 transition-colors hover:text-[#F7F4EC]"
            >
              {l.label}
            </a>
          ))}

          <a
            href={`tel:${clinic.phoneDial}`}
            className="hidden items-center gap-2 text-[13px] font-semibold tracking-wide text-white xl:flex"
          >
            <Icon name="phone" className="h-4 w-4 text-white" />
            {clinic.phone}
          </a>

          <a
            href="#book"
            className="rounded-full bg-white px-6 py-2.5 text-sm font-bold text-[#0C2B27] shadow-md transition-all hover:bg-[#F7F4EC] hover:shadow-lg"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="rounded-lg p-2 text-white transition-colors hover:bg-white/15 lg:hidden"
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
          className="border-t border-white/20 bg-[#1CAF87] px-6 pb-6 pt-2 shadow-lg lg:hidden"
          aria-label="Mobile"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/15 py-3.5 text-sm font-semibold uppercase tracking-widest text-white/95 transition-colors hover:text-[#F7F4EC]"
            >
              {l.label}
            </a>
          ))}

          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="mt-5 block w-full rounded-full bg-white px-6 py-3 text-center text-sm font-bold text-[#0C2B27] transition-colors hover:bg-[#F7F4EC]"
          >
            Book Appointment
          </a>
        </nav>
      )}
    </header>
  );
}
