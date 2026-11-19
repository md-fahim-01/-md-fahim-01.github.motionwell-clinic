
import { doctor } from "../data/clinic.js";

const doctors = [
  {
    id: 1,
    name: doctor.name,
    qualification: doctor.qualification,
    title: doctor.title,
    experience: doctor.experience,
    image: `${import.meta.env.BASE_URL}images/lady_dr.jpeg`,
  },
  {
    id: 2,
    name: "Dr. Abdullah Tayyab",
    qualification: "MBBS, DNB (ORTHO), FIJR, FIFA",
    title: "Orthopaedic & Joint Replacement Surgeon",
    experience: "Holy Family Hospital",
    image: `${import.meta.env.BASE_URL}images/doctor-2.jpeg`,
  },
  {
    id: 3,
    name: "Dr. Afgana Praveen (PT)",
    qualification: "BPT, MPT, M.I.A.P, IAP",
    title: "Physiotherapist",
    experience: "6 Years Experience",
    image: `${import.meta.env.BASE_URL}images/doctor-3.jpeg`,
  },
  {
    id: 4,
    name: "Dr. Mohammad Asif",
    qualification: "MBBS",
    title: "General Physician",
    experience: "DMC - 42536",
    image: `${import.meta.env.BASE_URL}images/doctor-4.jpeg`,
  },
];

export default function Doctor() {
  const sliderDoctors = [...doctors, ...doctors];

  return (
    <section id="doctor" className="doctors-section">
      <div className="doctors-container">

        <div className="doctors-heading">
          <span className="doctors-eyebrow">
            MOTIONWELL MEDICAL TEAM
          </span>

          <h2>
            Meet Our <span>Doctors</span>
          </h2>

          <p>
            Experienced healthcare professionals committed to
            your health, comfort and recovery.
          </p>
        </div>

        <div className="doctor-marquee">
          <div className="doctor-marquee-track">
            {sliderDoctors.map((item, index) => (
              <article
                className="doctor-profile"
                key={`${item.id}-${index}`}
              >
                <div className="doctor-avatar">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading={index < 4 ? "eager" : "lazy"}
                    decoding="async"
                    onError={(e) => {
                      console.error(
                        "Doctor image not found:",
                        e.currentTarget.src
                      );
                    }}
                  />
                </div>

                <h3>{item.name}</h3>

                <p className="doctor-qualification">
                  {item.qualification}
                </p>

                <p className="doctor-title">
                  {item.title}
                </p>

                <p className="doctor-experience">
                  {item.experience}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="doctors-footer">
          <a href="#book" className="doctors-button">
            Book an Appointment <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
