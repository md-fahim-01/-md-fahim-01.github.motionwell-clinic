
const doctors = [
  {
    id: 1,
    name: "Dr. Zikra Perween, PT",
    qualification: ["BPT, MPT, M.I.A.P., IAP"],
    title: "Physiotherapist",
    details: [
      "5 Years Experience",
      "Ex-Resident: Oncoplus Hospital, Defence Colony",
      "Ex-Resident: Neo Genesis Hospital, Janakpuri",
    ],
    image: `${import.meta.env.BASE_URL}images/lady_dr.jpeg`,
  },
  {
    id: 2,
    name: "Dr. Abdullah Tayyab",
    qualification: [
      "MBBS, DNB (ORTHO)",
      "FIJR (Fellowship in Joint Replacement)",
      "FIFA (Diploma in Football Medicine)",
    ],
    title: "Consultant Orthopaedic & Joint Replacement Surgeon",
    details: ["(Holy Family Hospital)"],
    image: `${import.meta.env.BASE_URL}images/doctor-2.jpeg`,
  },
  {
    id: 3,
    name: "Dr. Afgana Praveen (PT)",
    qualification: ["BPT, MPT, M.I.A.P., IAP"],
    title: "Physiotherapist",
    details: [
      "6 Years Experience",
      "Free Walk Clinic (Kanpur)",
      "Spine Cure Clinic (Kanpur)",
      "Parbha Medical Centre (Noida)",
    ],
    image: `${import.meta.env.BASE_URL}images/doctor-3.jpeg`,
  },
  {
    id: 4,
    name: "Dr. Mohammad Asif",
    qualification: ["MBBS"],
    title: "General Physician",
    details: [
      "Ex-Resident: NSMCH, Patna",
      "Ex-Resident: MAH, Delhi",
      "DMC - 42536",
    ],
    image: `${import.meta.env.BASE_URL}images/doctor-4.jpeg`,
  },
];

export default function Doctor() {
  return (
    <section id="doctor" className="doctors-section">
      <div className="doctors-container">

        {/* Heading */}
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

        {/* Four Static Doctor Cards */}
        <div className="doctors-grid">
          {doctors.map((item) => (
            <article className="doctor-card" key={item.id}>

              <div className="doctor-avatar">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="doctor-card-content">
                <h3>{item.name}</h3>

                <div className="doctor-qualification">
                  {item.qualification.map((qualification) => (
                    <p key={qualification}>{qualification}</p>
                  ))}
                </div>

                <p className="doctor-title">{item.title}</p>

                <div className="doctor-experience">
                  {item.details.map((detail) => (
                    <p key={detail}>{detail}</p>
                  ))}
                </div>
              </div>

            </article>
          ))}
        </div>

        {/* Appointment Button */}
        <div className="doctors-footer">
          <a href="#book" className="doctors-button">
            Book an Appointment <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
