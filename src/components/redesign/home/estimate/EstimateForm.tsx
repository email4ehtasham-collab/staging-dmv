"use client";

import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "@/components/Common/Button";
import styles from "./estimate.module.scss";

type Status = "idle" | "submitting" | "success" | "error";

const initialForm = {
  name: "",
  phoneNumber: "",
  email: "",
  zipCode: "",
  projectType: "",
  message: "",
};

const projectTypes = [
  "Kitchen Remodel",
  "Bathroom Remodel",
  "Basement Finishing",
  "ADU Construction",
  "Whole-Home Renovation",
  "Home Addition",
  "Design-build",
  "Something else",
];

export default function EstimateForm() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");

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
        <h3>Request your free estimate</h3>
        <p>No minimum project size. No obligation.</p>
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
            placeholder="20852"
            required
          />
        </label>
      </div>

      <label className={styles.field}>
        <span>Project type</span>
        <select name="projectType" value={formData.projectType} onChange={handleChange} required>
          <option value="" disabled>Choose a project type</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </label>

      <label className={styles.field}>
        <span>Tell us about the project (optional)</span>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          placeholder="Rough size, timing, and anything you already know you want."
        />
      </label>

      <Button type="submit" className={styles.submit} disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Request My Free Estimate"}
      </Button>

      <p className={styles.consent}>We only use your details to contact you about your project.</p>

      {status === "success" || status === "error" ? (
        <div className={styles.status} aria-live="polite">
          {status === "success" ? <p className={styles.success}>Thank you. Your request was sent, and our team will be in touch shortly.</p> : null}
          {status === "error" ? <p className={styles.error}>Something went wrong. Please call us at (240) 730-1292 or try again.</p> : null}
        </div>
      ) : null}
    </form>
  );
}
