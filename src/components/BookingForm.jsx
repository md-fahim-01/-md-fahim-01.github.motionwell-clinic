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
};

function validate(v) {
  const e = {};
  if (!v.name.trim() || v.name.trim().length < 3) e.name = "Please enter your full name";
  if (!/^[6-9]\d{9}$/.test(v.phone.replace(/\s/g, "")))
    e.phone = "Enter a valid 10-digit Indian mobile number";
  const age = Number(v.age);
  if (!v.age || Number.isNaN(age) || age < 1 || age > 120) e.age = "Enter a valid age";
  if (!v.gender) e.gender = "Please select gender";
  if (!v.service) e.service = "Please select a service";
  if (!v.date) e.date = "Please choose a date";
  if (!v.time) e.time = "Please choose a time slot";
  return e;
}

export default function BookingForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => {
    setForm({ ...form, [k]: e.target.value });
    if (errors[k]) setErrors({ ...errors, [k]: undefined });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
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
      form.symptoms.trim() ? `*Problem / Symptoms:* ${form.symptoms.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(
      `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener"
    );
    setSent(true);
  };

  return (
    <section id="book" className="relative overflow-hidden bg-pineDeep py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="container-lux relative grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <Reveal>
          <p className="eyebrow">Book Appointment</p>
          <h2 className="mt-4 font-display text-3xl font-medium sm:text-4xl">
            Reserve Your Appointment Today
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-white/70">
            Fill the form and your details will reach our WhatsApp — we confirm
            your slot via WhatsApp or a phone call. All days open.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            {[
              "Step 1 — Submit the appointment form",
              "Step 2 — Details sent to clinic WhatsApp",
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
              <div className="mb-6 rounded-xl border border-pine/20 bg-pine/5 p-4 text-sm font-medium text-pine">
                WhatsApp opened with your details — please press <b>send</b> in
                WhatsApp. We will confirm your appointment shortly.
              </div>
            )}
            <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="label" htmlFor="bf-name">Patient Name *</label>
                <input id="bf-name" className="field" value={form.name} onChange={set("name")} placeholder="Full name" />
                {errors.name && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.name}</p>}
              </div>
              <div>
                <label className="label" htmlFor="bf-phone">Mobile Number *</label>
                <input id="bf-phone" className="field" value={form.phone} onChange={set("phone")} inputMode="tel" placeholder="10-digit mobile" />
                {errors.phone && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.phone}</p>}
              </div>
              <div>
                <label className="label" htmlFor="bf-age">Age *</label>
                <input id="bf-age" className="field" value={form.age} onChange={set("age")} inputMode="numeric" placeholder="Years" />
                {errors.age && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.age}</p>}
              </div>
              <div>
                <label className="label" htmlFor="bf-gender">Gender *</label>
                <select id="bf-gender" className="field" value={form.gender} onChange={set("gender")}>
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                {errors.gender && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.gender}</p>}
              </div>
              <div className="sm:col-span-2">
                <label className="label" htmlFor="bf-service">Select Service *</label>
                <select id="bf-service" className="field" value={form.service} onChange={set("service")}>
                  <option value="">Choose a service</option>
                  {services.map((s) => (
                    <option key={s.name}>{s.name}</option>
                  ))}
                </select>
                {errors.service && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.service}</p>}
              </div>
              <div>
                <label className="label" htmlFor="bf-date">Preferred Date *</label>
                <input id="bf-date" type="date" className="field" value={form.date} onChange={set("date")} min={new Date().toISOString().split("T")[0]} />
                {errors.date && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.date}</p>}
              </div>
              <div>
                <label className="label" htmlFor="bf-time">Preferred Time *</label>
                <select id="bf-time" className="field" value={form.time} onChange={set("time")}>
                  <option value="">Select slot</option>
                  <option>Morning (10:00 AM – 3:00 PM)</option>
                  <option>Evening (5:00 PM – 10:00 PM)</option>
                </select>
                {errors.time && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.time}</p>}
              </div>
              <div className="sm:col-span-2">
                <label className="label" htmlFor="bf-symptoms">Problem / Symptoms (Optional)</label>
                <textarea id="bf-symptoms" rows="3" className="field resize-none" value={form.symptoms} onChange={set("symptoms")} placeholder="Briefly describe your problem…" />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="btn-gold w-full">
                  <Icon name="whatsapp" className="h-4 w-4" /> Send on WhatsApp
                </button>
                <p className="mt-3 text-center text-[11px] text-ink/50">
                  Your details open in WhatsApp — nothing is stored on this website.
                </p>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
