
import { Reveal } from "./ui.jsx";

const imagesPath = `${import.meta.env.BASE_URL}images/`;

const galleryImages = [
  {
    image: "clinic-team.jpeg",
    title: "Our Clinical Team",
  },
  {
    image: "treatment-machine.jpeg",
    title: "Advanced Therapy Equipment",
  },
  {
    image: "patient-treatment.jpeg",
    title: "Personalized Patient Care",
  },
  {
    image: "clinic-interior.jpeg",
    title: "Our Clinic Interior",
  },
  {
    image: "doctor-equipment.jpeg",
    title: "Professional Treatment",
  },
  {
    image: "team-group.jpeg",
    title: "Meet Our Team",
  },
];

const features = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="currentColor" aria-hidden="true">
        <circle cx="24" cy="13" r="8" />
        <circle cx="9" cy="18" r="6" />
        <circle cx="39" cy="18" r="6" />
        <path d="M9 28c-6 0-9 4-9 9v5h17v-5c0-4-3-8-8-9Zm30 0c-5 0-8 4-8 9v5h17v-5c0-5-3-9-9-9ZM24 25c-9 0-14 5-14 12v5h28v-5c0-7-5-12-14-12Z" />
      </svg>
    ),
    title: "Experienced Team",
    description: "Skilled & caring professionals",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="currentColor" aria-hidden="true">
        <path d="M24 3 5 10v13c0 12 8 19 19 23 11-4 19-11 19-23V10L24 3Z" />
        <path d="M21 13h6v8h8v6h-8v8h-6v-8h-8v-6h8v-8Z" fill="white" />
      </svg>
    ),
    title: "Personalized Treatment",
    description: "Care tailored to your needs",
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="4" y="7" width="40" height="29" rx="4" />
        <path d="M9 22h7l4-8 6 16 5-9h8" />
        <path d="M18 42h12M24 36v6" />
      </svg>
    ),
    title: "Modern Equipment",
    description: "Advanced tools for better care",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="currentColor" aria-hidden="true">
        <path d="M24 3 5 10v13c0 12 8 19 19 23 11-4 19-11 19-23V10L24 3Z" />
        <path
          d="m14 24 7 7 14-15"
          fill="none"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Safe & Hygienic Clinic",
    description: "Clean and comfortable environment",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-white py-16 sm:py-20"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-[#1CAF87]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-10 h-56 w-56 rounded-full bg-[#1CAF87]/10 blur-3xl" />

      <div className="container-lux relative">

        {/* Section Heading */}
        <Reveal>
          <div className="mb-7 flex items-center justify-center gap-3">
            <span className="hidden h-[2px] flex-1 bg-gradient-to-r from-transparent to-[#1CAF87] sm:block" />

            <span className="rounded-full bg-[#1CAF87] px-6 py-2.5 text-center text-xs font-bold uppercase tracking-[0.12em] text-white sm:text-sm">
              Our Clinic & Treatment Gallery
            </span>

            <span className="hidden h-[2px] flex-1 bg-gradient-to-l from-transparent to-[#1CAF87] sm:block" />
          </div>

          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl font-semibold leading-tight text-[#0C2B27] sm:text-4xl lg:text-5xl">
              Experience Our{" "}
              <span className="text-[#1CAF87]">
                Clinic & Treatment Sessions
              </span>
            </h2>

            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              See our dedicated team, modern facilities, and compassionate
              care in action.
            </p>
          </div>
        </Reveal>

        {/* Gallery Grid: 3 Columns x 2 Rows */}
        <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3">
          {galleryImages.map((item, index) => (
            <Reveal key={item.image} delay={index * 70}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-[#EAF8F3]">
                <img
                  src={`${imagesPath}${item.image}`}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Features Strip */}
        <Reveal delay={150}>
          <div className="mt-5 grid grid-cols-1 divide-y divide-[#1CAF87]/40 rounded-[28px] bg-[#E8FAF4] px-5 py-3 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-y-0 lg:px-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-center gap-4 px-3 py-5 sm:px-5 lg:py-4"
              >
                <div className="h-12 w-12 flex-none text-[#0DA77D] sm:h-14 sm:w-14">
                  {feature.icon}
                </div>

                <div className="min-w-0">
                  <h3 className="text-base font-bold leading-tight text-[#0C2B27] sm:text-lg">
                    {feature.title}
                  </h3>

                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
