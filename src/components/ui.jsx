
import { useEffect, useRef, useState } from "react";

export function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback for browsers without IntersectionObserver
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function Icon({ name, className = "h-6 w-6" }) {
  const paths = {
    spine: (
      <path d="M8 3h8M8 21h8M9 3c0 3-1.5 4.5-1.5 7S9 14 9 17.5V21M15 3c0 3 1.5 4.5 1.5 7S15 14 15 17.5V21M7.5 10h9M7 14h10" />
    ),
    heart: (
      <path d="M19 14c1.5-1.5 2-3 2-4.5A4.5 4.5 0 0 0 16.5 5c-1.7 0-3.2 1-4.5 2.6C10.7 6 9.2 5 7.5 5A4.5 4.5 0 0 0 3 9.5C3 11 3.5 12.5 5 14l7 7 7-7z" />
    ),
    shield: (
      <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" />
    ),
    stethoscope: (
      <path d="M6 3v6a4 4 0 0 0 8 0V3M6 3H4m10 0h2M10 13v2a5 5 0 0 0 5 5 4 4 0 0 0 4-4v-3m0 0a1.5 1.5 0 1 0 .01 0" />
    ),
    clock: (
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-14v5l3.5 2" />
    ),
    pin: (
      <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
    ),
    phone: (
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    ),
    mail: (
      <path d="M3 6h18v12H3V6zm0 0l9 7 9-7" />
    ),
    whatsapp: (
      <path
        d="M12.04 2a9.9 9.9 0 0 0-8.5 15L2 22l5.15-1.5A10 10 0 1 0 12.04 2zm5.8 14.1c-.25.7-1.45 1.35-2 1.4-.55.05-1.05.25-3.5-.75s-3.95-3.5-4.1-3.7c-.15-.2-1-1.35-1-2.6s.65-1.85.9-2.1c.25-.25.5-.3.7-.3h.5c.15 0 .35-.05.55.4l.75 1.85c.05.15.1.3 0 .5l-.3.45-.45.5c-.15.15-.3.3-.15.6.15.3.7 1.2 1.5 1.9 1 .95 1.85 1.2 2.15 1.35.3.15.5.1.7-.1l.95-1.1c.2-.3.4-.25.7-.15l1.9.9c.3.15.5.2.55.35.05.1.05.75-.2 1.45z"
        strokeWidth="0"
      />
    ),
    arrow: <path d="M5 12h14m-6-6l6 6-6 6" />,
    check: <path d="M20 6L9 17l-5-5" />,
    star: (
      <path
        d="M12 3l2.7 5.7 6.3.8-4.6 4.3 1.2 6.2L12 17.1l-5.6 2.9 1.2-6.2L3 9.5l6.3-.8L12 3z"
        strokeWidth="0"
      />
    ),
  };

  const iconPath = paths[name];

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {iconPath || null}
    </svg>
  );
}
