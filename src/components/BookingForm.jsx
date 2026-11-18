
import { useState } from "react";
import { clinic, services, timings } from "../data/clinic.js";
import { Icon, Reveal } from "./ui.jsx";

const initial = {
  name: "",
  phone: "",
  age: "",
  gender: "",
  service: "",
  date: "",
  time: "",
  symptoms: "",
  consent: false,
};

const timeSlots = [
  "Morning (10:00 AM – 3:00 PM)",
  "Evening (5:00 PM – 10:00 PM)",
];

const genders = ["Male", "Female", "Other"];

function getLocalDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function validate(v) {
  const e = {};

  const name = v.name.trim();
  const phone = v.phone.replace(/\s/g, "");
  const age = Number(v.age);

  if (name.length < 3 || name.length > 80) {
    e.name = "Enter a name between 3 and 80 characters";
  }

  if (!/^[6-9]\d{9}$/.test(phone)) {
    e.phone = "Enter a valid 10-digit Indian mobile number";
  }

  if (
    !v.age ||
    !Number.isInteger(age) ||
    age < 1 ||
    age > 120
  ) {
    e.age = "Enter a valid age between 1 and 120";
  }

  if (!genders.includes(v.gender)) {
    e.gender = "Please select gender";
  }

  if (!services.some((s) => s.name === v.service)) {
    e.service = "Please select a valid service";
  }

  if (!v.date || v.date < getLocalDate()) {
    e.date = "Please choose today or a future date";
  }

  if (!timeSlots.includes(v.time)) {
    e.time = "Please choose a valid time slot";
  }

  if (v.symptoms.trim().length > 500) {
    e.symptoms = "Please keep symptoms within 500 characters";
  }

  if (!v.consent) {
    e.consent = "Please agree before sharing your details on WhatsApp";
  }

  if (!/^\d{10,15}$/.test(String(clinic.whatsapp))) {
    e.form = "Clinic WhatsApp number is not configured correctly";
  }

  return e;
}

export default function BookingForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const updateField = (key) => (e) => {
    const value =
      key === "consent" ? e.target.checked : e.target.value;

    setForm((previous) => ({
      ...previous,
      [key]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [key]: undefined,
      form: undefined,
    }));

    setSent(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const msg = [
      "*New Appointment Request — Motionwell Clinic*",
      "",
      `*Name:* ${form.name.trim()}`,
      `*Mobile:* ${form.phone.replace(/\s/g, "")}`,
      `*Age:* ${form.age}`,
      `*Gender:* ${form.gender}`,
      `*Service:* ${form.service}`,
      `*Preferred Date:* ${form.date}`,
      `*Preferred Time:* ${form.time}`,
      form.symptoms.trim()
        ? `*Problem / Symptoms:* ${form.symptoms.trim()}`
        : null,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl =
      `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(msg)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setSent(true);
  };

  return (
    <section
      id="book"
      className="relative overflow-hidden bg-pineDeep py-20 text-white sm:py-28"
    >
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-lux relative grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <Reveal>
          <p className="eyebrow">Book Appointment</p>

          <h2 className="mt-4 font-display text-3xl font-medium sm:text-4xl">
            Reserve Your Appointment Today
          </h2>

          <p className="mt-5 max-w-md leading-relaxed text-white/70">
            Fill the form and your details will open in WhatsApp. We confirm
            your slot via WhatsApp or a phone call. All days open.
          </p>

          <ul className="mt-8 space-y-4 text-sm">
            {[
              "Step 1 — Submit the appointment form",
              "Step 2 — Details open in clinic WhatsApp",
              "Step 3 — Confirmation on WhatsApp / phone call",
            ].map((s) => (
              <li key={s} className="flex items-center gap-3 text-white/80">
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Icon name="check" className="h-3.5 w-3.5" />
                </span>
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/50">
              Booking Slots
            </p>

            <div className="mt-4 grid grid-cols-2 gap-4">
              {timings
                .filter((t) => t.label !== "On-Call")
                .map((t) => (
                  <div key={t.label}>
                    <p className="text-sm font-bold text-gold">{t.label}</p>
                    <p className="mt-1 text-sm text-white/75">{t.hours}</p>
                  </div>
                ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-3xl bg-white p-7 text-ink shadow-soft sm:p-9">
            {sent && (
              <div
                className="mb-6 rounded-xl border border-pine/20 bg-pine/5 p-4 text-sm font-medium text-pine"
                role="status"
              >
                WhatsApp should open with your details. Please press{" "}
                <b>Send</b> in WhatsApp to submit your appointment request.
              </div>
            )}

            {errors.form && (
              <p className="mb-4 text-sm font-medium text-red-600" role="alert">
                {errors.form}
              </p>
            )}

            <form
              onSubmit={onSubmit}
              noValidate
              className="grid gap-5 sm:grid-cols-2"
            >
              <div>
                <label className="label" htmlFor="bf-name">
                  Patient Name *
                </label>
                <input
                  id="bf-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  maxLength={80}
                  className="field"
                  value={form.name}
                  onChange={updateField("name")}
                  placeholder="Full name"
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs font-medium text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="label" htmlFor="bf-phone">
                  Mobile Number *
                </label>
                <input
                  id="bf-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel-national"
                  inputMode="numeric"
                  maxLength={10}
                  className="field"
                  value={form.phone}
                  onChange={updateField("phone")}
                  placeholder="10-digit mobile"
                />
                {errors.phone && (
                  <p className="mt-1.5 text-xs font-medium text-red-600">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label className="label" htmlFor="bf-age">
                  Age *
                </label>
                <input
                  id="bf-age"
                  name="age"
                  type="number"
                  min="1"
                  max="120"
                  step="1"
                  inputMode="numeric"
                  className="field"
                  value={form.age}
                  onChange={updateField("age")}
                  placeholder="Years"
                />
                {errors.age && (
                  <p className="mt-1.5 text-xs font-medium text-red-600">
                    {errors.age}
                  </p>
                )}
              </div>

              <div>
                <label className="label" htmlFor="bf-gender">
                  Gender *
                </label>
                <select
                  id="bf-gender"
                  name="gender"
                  className="field"
                  value={form.gender}
                  onChange={updateField("gender")}
                >
                  <option value="">Select</option>
                  {genders.map((gender) => (
                    <option key={gender} value={gender}>
                      {gender}
                    </option>
                  ))}
                </select>
                {errors.gender && (
                  <p className="mt-1.5 text-xs font-medium text-red-600">
                    {errors.gender}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label className="label" htmlFor="bf-service">
                  Select Service *
                </label>
                <select
                  id="bf-service"
                  name="service"
                  className="field"
                  value={form.service}
                  onChange={updateField("service")}
                >
                  <option value="">Choose a service</option>
                  {services.map((s) => (
                    <option key={s.name} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="mt-1.5 text-xs font-medium text-red-600">
                    {errors.service}
                  </p>
                )}
              </div>

              <div>
                <label className="label" htmlFor="bf-date">
                  Preferred Date *
                </label>
                <input
                  id="bf-date"
                  name="date"
                  type="date"
                  className="field"
                  value={form.date}
                  onChange={updateField("date")}
                  min={getLocalDate()}
                />
                {errors.date && (
                  <p className="mt-1.5 text-xs font-medium text-red-600">
                    {errors.date}
                  </p>
                )}
              </div>

              <div>
                <label className="label" htmlFor="bf-time">
                  Preferred Time *
                </label>
                <select
                  id="bf-time"
                  name="time"
                  className="field"
                  value={form.time}
                  onChange={updateField("time")}
                >
                  <option value="">Select slot</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
                {errors.time && (
                  <p className="mt-1.5 text-xs font-medium text-red-600">
                    {errors.time}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label className="label" htmlFor="bf-symptoms">
                  Problem / Symptoms (Optional)
                </label>
                <textarea
                  id="bf-symptoms"
                  name="symptoms"
                  rows="3"
                  maxLength={500}
                  className="field resize-none"
                  value={form.symptoms}
                  onChange={updateField("symptoms")}
                  placeholder="Briefly describe your problem…"
                />
                <p className="mt-1 text-right text-xs text-ink/40">
                  {form.symptoms.length}/500
                </p>
                {errors.symptoms && (
                  <p className="mt-1.5 text-xs font-medium text-red-600">
                    {errors.symptoms}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label className="flex cursor-pointer items-start gap-3 text-sm text-ink/70">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={updateField("consent")}
                    className="mt-1 h-4 w-4 flex-none accent-[#174D3A]"
                  />
                  <span>
                    I agree to share my appointment details and the information
                    provided above with Motionwell Clinic through WhatsApp.
                  </span>
                </label>

                {errors.consent && (
                  <p className="mt-1.5 text-xs font-medium text-red-600">
                    {errors.consent}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <button type="submit" className="btn-gold w-full">
                  <Icon name="whatsapp" className="h-4 w-4" />
                  Send on WhatsApp
                </button>

                <p className="mt-3 text-center text-[11px] text-ink/50">
                  Your details are not stored by this website. They are shared
                  with WhatsApp when you proceed and press Send.
                </p>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
