"use client";

import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "@/components/Common/Button";
import styles from "./estimate.module.scss";

type Status = "idle" | "submitting" | "success" | "error";
type EstimateFormVariant = "home" | "kitchen" | "bethesda-kitchen" | "bethesda-bathroom" | "bethesda-basement" | "bathroom" | "basement";

const initialForm = {
  name: "",
  phoneNumber: "",
  email: "",
  zipCode: "",
  projectType: "",
  message: "",
};

const homeProjectTypes = [
  "Kitchen Remodel",
  "Bathroom Remodel",
  "Basement Finishing",
  "ADU Construction",
  "Whole-Home Renovation",
  "Home Addition",
  "Design-build",
  "Something else",
];

const bathroomProjectTypes = [
  "Primary bathroom remodel",
  "Guest or hall bath remodel",
  "Powder room update",
  "Tub-to-shower conversion",
  "Walk-in or curbless shower",
  "Accessible / aging-in-place bath",
  "Bathroom addition",
  "Condo bathroom remodel",
  "Something else",
];

const basementProjectTypes = [
  "Basement finishing",
  "Basement remodeling",
  "Basement bathroom",
  "Family room or playroom",
  "Home office or gym",
  "Home theater or wet bar",
  "Guest suite or apartment",
  "Something else",
];

const kitchenProjectTypes = [
  "Full kitchen remodel",
  "Minor kitchen refresh",
  "Cabinet refacing",
  "Countertop replacement",
  "Kitchen layout change",
  "Kitchen plus adjacent room",
  "Something else",
];

const copyByVariant: Record<
  EstimateFormVariant,
  {
    heading: string;
    subheading: string;
    projectLabel: string;
    projectPlaceholder: string;
    projectTypes: string[];
    zipPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
  }
> = {
  home: {
    heading: "Request your free estimate",
    subheading: "No minimum project size. No obligation.",
    projectLabel: "Project type",
    projectPlaceholder: "Choose a project type",
    projectTypes: homeProjectTypes,
    zipPlaceholder: "20852",
    messageLabel: "Tell us about the project (optional)",
    messagePlaceholder: "Rough size, timing, and anything you already know you want.",
    submit: "Request My Free Estimate",
  },
  kitchen: {
    heading: "Book your free kitchen estimate",
    subheading: "No minimum project size. No obligation.",
    projectLabel: "Kitchen project",
    projectPlaceholder: "Choose a kitchen project",
    projectTypes: kitchenProjectTypes,
    zipPlaceholder: "20852",
    messageLabel: "Tell us about your kitchen (optional)",
    messagePlaceholder: "Room size, what you want to change, and when you'd like to start.",
    submit: "Book My Free Kitchen Estimate",
  },
  "bethesda-kitchen": {
    heading: "Book your free in-home consultation",
    subheading: "Bethesda kitchens A� No minimum project size A� No obligation",
    projectLabel: "Kitchen project",
    projectPlaceholder: "Choose a kitchen project",
    projectTypes: kitchenProjectTypes,
    zipPlaceholder: "20814",
    messageLabel: "Tell us about your kitchen (optional)",
    messagePlaceholder: "Home style, what you want to change, and when you'd like to start.",
    submit: "Book My Free Consultation",
  },
  "bethesda-bathroom": {
    heading: "Book your free bathroom estimate",
    subheading: "Bethesda bathrooms · No minimum project size · No obligation",
    projectLabel: "Bathroom project",
    projectPlaceholder: "Choose a bathroom project",
    projectTypes: bathroomProjectTypes,
    zipPlaceholder: "20814",
    messageLabel: "Tell us about your bathroom (optional)",
    messagePlaceholder: "Home style, what you want to change, and when you'd like to start.",
    submit: "Book My Free Bathroom Estimate",
  },
  "bethesda-basement": {
    heading: "Book your free Bethesda basement estimate",
    subheading: "Bethesda basements · No minimum project size · No obligation",
    projectLabel: "Basement project",
    projectPlaceholder: "Choose a basement project",
    projectTypes: basementProjectTypes,
    zipPlaceholder: "20814",
    messageLabel: "Tell us about your basement (optional)",
    messagePlaceholder: "Ceiling height, moisture concerns, rooms you want, and timing.",
    submit: "Book My Free Basement Estimate",
  },
  basement: {
    heading: "Book your free basement estimate",
    subheading: "Maryland and DC basements · No minimum project size · No obligation",
    projectLabel: "Basement project",
    projectPlaceholder: "Choose a basement project",
    projectTypes: basementProjectTypes,
    zipPlaceholder: "20852",
    messageLabel: "Tell us about your basement (optional)",
    messagePlaceholder: "Ceiling height, moisture concerns, rooms you want, and timing.",
    submit: "Book My Free Basement Estimate",
  },
  bathroom: {
    heading: "Book your free bathroom estimate",
    subheading: "No minimum project size. No obligation.",
    projectLabel: "Bathroom project",
    projectPlaceholder: "Choose a bathroom project",
    projectTypes: bathroomProjectTypes,
    zipPlaceholder: "20852",
    messageLabel: "Tell us about your bathroom (optional)",
    messagePlaceholder: "Room size, what you want to change, and when you'd like to start.",
    submit: "Book My Free Bathroom Estimate",
  },
};

export default function EstimateForm({ variant = "home" }: { variant?: EstimateFormVariant }) {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const copy = copyByVariant[variant];

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    try {
      await axios.post("https://api.dmv-gc.com/api/auth/contact-form", {
        name: formData.name,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        message: `Project type: ${formData.projectType}\nZIP code: ${formData.zipCode}\n\n${formData.message}`,
      });
      setFormData(initialForm);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formHeader}>
        <h3>{copy.heading}</h3>
        <p>{copy.subheading}</p>
      </div>

      <div className={styles.row}>
        <label className={styles.field}>
          <span>Full name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            placeholder="Jane Smith"
            required
          />
        </label>

        <label className={styles.field}>
          <span>Phone</span>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            autoComplete="tel"
            placeholder="(240) 555-0123"
            required
          />
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.field}>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            placeholder="you@email.com"
            required
          />
        </label>

        <label className={styles.field}>
          <span>ZIP code</span>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            autoComplete="postal-code"
            inputMode="numeric"
            pattern="[0-9]{5}"
            maxLength={5}
            placeholder={copy.zipPlaceholder}
            required
          />
        </label>
      </div>

      <label className={styles.field}>
        <span>{copy.projectLabel}</span>
        <select name="projectType" value={formData.projectType} onChange={handleChange} required>
          <option value="" disabled>
            {copy.projectPlaceholder}
          </option>
          {copy.projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>

      <label className={styles.field}>
        <span>{copy.messageLabel}</span>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          placeholder={copy.messagePlaceholder}
        />
      </label>

      <Button type="submit" className={styles.submit} disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : copy.submit}
      </Button>

      <p className={styles.consent}>We only use your details to contact you about your project.</p>

      {status === "success" || status === "error" ? (
        <div className={styles.status} aria-live="polite">
          {status === "success" ? (
            <p className={styles.success}>Thank you. Your request was sent, and our team will be in touch shortly.</p>
          ) : null}
          {status === "error" ? (
            <p className={styles.error}>Something went wrong. Please call us at (240) 730-1292 or try again.</p>
          ) : null}
        </div>
      ) : null}
    </form>
  );
}
