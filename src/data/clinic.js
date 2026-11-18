
/* ============================================================
   MOTIONWELL CLINIC — EDIT EVERYTHING HERE
   Clinic information is managed from this file.
   Images are stored inside public/images/.
   ============================================================ */

export const clinic = {
  name: "Motionwell Physiotherapy, Rehabilitation & Multispeciality Clinic",
  shortName: "Motionwell",
  tagline: "Move Better. Live Better.",

  phone: "+91 96254 42586",
  phoneDial: "+919625442586",
  whatsapp: "919625442586",

  email: "wellmotion586@gmail.com",
  fee: "₹300",

  address: {
    line1: "R12, Upper Ground Floor, Near Hari Masjid,",
    line2: "Front of Taj Super Store, Batla House,",
    line3: "Jamia Nagar, New Delhi – 110025",
    full: "R12, Upper Ground Floor, Near Hari Masjid, Front of Taj Super Store, Batla House, Jamia Nagar, New Delhi – 110025",
  },

  mapsQuery:
    "Motionwell Physiotherapy, Batla House, Jamia Nagar, New Delhi 110025",
};

export const doctor = {
  name: "Dr. Zikra Perween",
  title: "Physiotherapist",
  qualification: "BPT, MPT",
  experience: "5+ Years",

  photo: `${import.meta.env.BASE_URL}images/lady_dr.jpeg`,

  roles: [
    "Ex-Resident — Oncoplus Hospital, Defence Colony",
    "Ex-Resident — Neo Genesis Hospital, Janakpuri",
  ],

  philosophy:
    "Personalized, evidence-based care focused on pain relief, restored mobility and a confident return to your everyday life.",
};

export const services = [
  {
    icon: "spine",
    name: "Physiotherapy",
    desc: "Advanced hands-on therapy and guided exercise programs for physical recovery.",
  },
  {
    icon: "heart",
    name: "Rehabilitation",
    desc: "Structured recovery programs after injury, surgery, fracture or neurological conditions.",
  },
  {
    icon: "shield",
    name: "Pain Management",
    desc: "Targeted relief for back pain, neck pain, joint pain and chronic pain conditions.",
  },
  {
    icon: "stethoscope",
    name: "General Physician Consultation",
    desc: "Medical consultation and guidance for everyday health concerns.",
  },
];

export const conditions = [
  "Back & Neck Pain",
  "Frozen Shoulder",
  "Knee & Joint Pain",
  "Sports Injury",
  "Post-Fracture Recovery",
  "Post-Surgical Rehab",
  "Sciatica & Slipped Disc",
  "Neurological Rehab",
];

export const timings = [
  { label: "Morning", hours: "10:00 AM – 3:00 PM" },
  { label: "On-Call", hours: "3:00 PM – 5:00 PM" },
  { label: "Evening", hours: "5:00 PM – 10:00 PM" },
];

export const steps = [
  {
    num: "01",
    title: "Book Appointment",
    text: "Reserve your slot through WhatsApp or a phone call — all days open.",
  },
  {
    num: "02",
    title: "Detailed Assessment",
    text: "Medical history, pain areas and mobility are carefully evaluated.",
  },
  {
    num: "03",
    title: "Personalized Plan",
    text: "A customized treatment plan is designed for your condition and lifestyle.",
  },
  {
    num: "04",
    title: "Therapy & Recovery",
    text: "Hands-on therapy, guided exercise and progress monitoring throughout recovery.",
  },
];

export const testimonials = [
  {
    name: "Sana Khan",
    treatment: "Back Pain Relief",
    text: "Months of back pain after my delivery — Dr. Zikra's sessions gave me relief I didn't expect. Very gentle, patient and professional care.",
  },
  {
    name: "Mohammed Arif",
    treatment: "Knee Rehabilitation",
    text: "After my knee surgery I could barely walk. Within weeks of therapy at Motionwell I was climbing stairs again. Truly grateful.",
  },
  {
    name: "Rukhsana Perween",
    treatment: "Frozen Shoulder",
    text: "My frozen shoulder had limited my arm movement completely. The exercises and therapy here restored it. Highly recommended clinic.",
  },
];

export const faqs = [
  {
    q: "Do I need an appointment or can I walk in?",
    a: "Walk-ins are welcome, but booking on WhatsApp or by phone is recommended so your slot is reserved and waiting time is minimal.",
  },
  {
    q: "What are the consultation fees?",
    a: "Consultation fees are ₹300 for all services, including physiotherapy and general physician consultation.",
  },
  {
    q: "Is the clinic open on Sundays?",
    a: "Yes — the clinic is open all days: 10 AM – 3 PM and 5 PM – 10 PM, with on-call support from 3 PM – 5 PM.",
  },
  {
    q: "How is my appointment confirmed?",
    a: "After you submit the form, your details open in WhatsApp. The clinic then confirms your appointment via WhatsApp or a phone call.",
  },
];
