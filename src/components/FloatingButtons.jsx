
import { clinic } from "../data/clinic.js";
import { Icon } from "./ui.jsx";

export default function FloatingButtons() {
  const wa = `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
    "Hello Motionwell Clinic, I would like to book an appointment."
  )}`;

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="h-9 w-9"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16.04 3C9.01 3 3.29 8.72 3.29 15.75c0 2.25.59 4.44 1.72 6.38L3.2 28.8l6.83-1.79a12.7 12.7 0 0 0 6.01 1.51h.01c7.02 0 12.74-5.72 12.74-12.75 0-3.4-1.32-6.59-3.72-8.99A12.66 12.66 0 0 0 16.04 3Zm0 23.37h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.05 1.06 1.08-3.95-.25-.4a10.6 10.6 0 0 1-1.63-5.62c0-5.88 4.78-10.66 10.66-10.66 2.85 0 5.53 1.11 7.54 3.12a10.6 10.6 0 0 1 3.12 7.55c0 5.88-4.78 10.66-10.67 10.66Zm5.85-7.99c-.32-.16-1.9-.94-2.19-1.05-.29-.1-.5-.16-.71.16-.21.32-.82 1.05-1 1.26-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.84-1.59-1.88-1.78-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.36-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.64 0 1.55 1.13 3.05 1.29 3.26.16.21 2.22 3.39 5.38 4.75.75.32 1.34.51 1.8.65.76.24 1.45.21 2 .13.61-.09 1.9-.77 2.17-1.52.26-.75.26-1.4.18-1.53-.08-.14-.29-.22-.61-.38Z" />
        </svg>
      </a>

      {/* Call Floating Button */}
      <a
        href={`tel:${clinic.phoneDial}`}
        aria-label="Call the clinic"
        className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-pine text-gold shadow-soft transition-transform hover:scale-105 lg:hidden"
      >
        <Icon name="phone" className="h-6 w-6" />
      </a>
    </>
  );
}
