import { clinic } from "../data/clinic.js";
import { Icon } from "./ui.jsx";

export default function FloatingButtons() {
  const wa = `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
    "Hello Motionwell Clinic, I would like to book an appointment."
  )}`;
  return (
    <>
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition-transform hover:scale-105"
      >
        <Icon name="whatsapp" className="h-7 w-7" />
      </a>
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
