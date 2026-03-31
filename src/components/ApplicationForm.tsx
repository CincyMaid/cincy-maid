"use client";

import { useState, FormEvent } from "react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  currentWorkplace: string;
  city: string;
  travelDistance: string;
  ownTransportation: string;
  ownCleaningSupplies: string;
  hasInsurance: string;
  backgroundCheck: string;
  yearsExperience: string;
  hoursPerWeek: string;
}

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  currentWorkplace: "",
  city: "",
  travelDistance: "",
  ownTransportation: "",
  ownCleaningSupplies: "",
  hasInsurance: "",
  backgroundCheck: "",
  yearsExperience: "",
  hoursPerWeek: "",
};

const inputClasses =
  "w-full rounded-lg border border-cream-dark bg-white px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30 transition-colors";

const labelClasses = "block text-sm font-medium text-gray-700 mb-1.5";

const radioGroupClasses = "flex items-center gap-6 mt-1.5";

const radioClasses =
  "h-4 w-4 border-cream-dark text-teal focus:ring-teal/30 cursor-pointer";

export default function ApplicationForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const res = await fetch("/api/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (!res.ok) {
      setError("Something went wrong. Please try again or call us at (513) 951-7799.");
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-cream-dark bg-white p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal/10">
          <svg
            className="h-8 w-8 text-teal"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Application Received!
        </h3>
        <p className="text-gray-600 mb-6">
          Thanks for applying to Cincy Maid. We&apos;ll review your application
          and reach out within a few business days.
        </p>
        <button
          type="button"
          onClick={() => {
            setFormData(initialFormData);
            setSubmitted(false);
          }}
          className="inline-flex items-center rounded-lg bg-teal px-6 py-2.5 text-sm font-medium text-white hover:bg-teal/90 transition-colors"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-cream-dark bg-white p-6 sm:p-8 space-y-6"
    >
      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className={labelClasses}>
          Full Name <span className="text-coral">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          placeholder="Jane Doe"
          value={formData.fullName}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClasses}>
          Email <span className="text-coral">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="jane@example.com"
          value={formData.email}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className={labelClasses}>
          Phone <span className="text-coral">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="(513) 555-0123"
          value={formData.phone}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      {/* Current Workplace */}
      <div>
        <label htmlFor="currentWorkplace" className={labelClasses}>
          Current Workplace
        </label>
        <input
          type="text"
          id="currentWorkplace"
          name="currentWorkplace"
          placeholder="Current or most recent employer"
          value={formData.currentWorkplace}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      {/* Location (City, OH) */}
      <div>
        <label htmlFor="city" className={labelClasses}>
          Location (City, OH) <span className="text-coral">*</span>
        </label>
        <input
          type="text"
          id="city"
          name="city"
          required
          placeholder="Cincinnati"
          value={formData.city}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      {/* Travel Distance */}
      <div>
        <label htmlFor="travelDistance" className={labelClasses}>
          How far are you willing to travel for jobs? (miles){" "}
          <span className="text-coral">*</span>
        </label>
        <input
          type="text"
          id="travelDistance"
          name="travelDistance"
          required
          placeholder="e.g. 25"
          value={formData.travelDistance}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      {/* Own Transportation */}
      <fieldset>
        <legend className={labelClasses}>
          Do you have your own transportation?{" "}
          <span className="text-coral">*</span>
        </legend>
        <div className={radioGroupClasses}>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="ownTransportation"
              value="Yes"
              required
              checked={formData.ownTransportation === "Yes"}
              onChange={handleChange}
              className={radioClasses}
            />
            <span className="text-sm text-gray-700">Yes</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="ownTransportation"
              value="No"
              checked={formData.ownTransportation === "No"}
              onChange={handleChange}
              className={radioClasses}
            />
            <span className="text-sm text-gray-700">No</span>
          </label>
        </div>
      </fieldset>

      {/* Own Cleaning Supplies */}
      <fieldset>
        <legend className={labelClasses}>
          Do you have your own cleaning supplies?{" "}
          <span className="text-coral">*</span>
        </legend>
        <div className={radioGroupClasses}>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="ownCleaningSupplies"
              value="Yes"
              required
              checked={formData.ownCleaningSupplies === "Yes"}
              onChange={handleChange}
              className={radioClasses}
            />
            <span className="text-sm text-gray-700">Yes</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="ownCleaningSupplies"
              value="No"
              checked={formData.ownCleaningSupplies === "No"}
              onChange={handleChange}
              className={radioClasses}
            />
            <span className="text-sm text-gray-700">No</span>
          </label>
        </div>
      </fieldset>

      {/* Insurance */}
      <fieldset>
        <legend className={labelClasses}>
          Do you have insurance? <span className="text-coral">*</span>
        </legend>
        <div className={radioGroupClasses}>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="hasInsurance"
              value="Yes"
              required
              checked={formData.hasInsurance === "Yes"}
              onChange={handleChange}
              className={radioClasses}
            />
            <span className="text-sm text-gray-700">Yes</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="hasInsurance"
              value="No"
              checked={formData.hasInsurance === "No"}
              onChange={handleChange}
              className={radioClasses}
            />
            <span className="text-sm text-gray-700">No</span>
          </label>
        </div>
      </fieldset>

      {/* Background Check */}
      <fieldset>
        <legend className={labelClasses}>
          Are you willing to pass a background check?{" "}
          <span className="text-coral">*</span>
        </legend>
        <div className={radioGroupClasses}>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="backgroundCheck"
              value="Yes"
              required
              checked={formData.backgroundCheck === "Yes"}
              onChange={handleChange}
              className={radioClasses}
            />
            <span className="text-sm text-gray-700">Yes</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="backgroundCheck"
              value="No"
              checked={formData.backgroundCheck === "No"}
              onChange={handleChange}
              className={radioClasses}
            />
            <span className="text-sm text-gray-700">No</span>
          </label>
        </div>
      </fieldset>

      {/* Years of Experience */}
      <div>
        <label htmlFor="yearsExperience" className={labelClasses}>
          Years of Cleaning Experience <span className="text-coral">*</span>
        </label>
        <input
          type="text"
          id="yearsExperience"
          name="yearsExperience"
          required
          placeholder="e.g. 3"
          value={formData.yearsExperience}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      {/* Hours Per Week */}
      <div>
        <label htmlFor="hoursPerWeek" className={labelClasses}>
          Desired Hours Per Week <span className="text-coral">*</span>
        </label>
        <select
          id="hoursPerWeek"
          name="hoursPerWeek"
          required
          value={formData.hoursPerWeek}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="" disabled>
            Select hours per week
          </option>
          <option value="0-10">0 - 10 hours</option>
          <option value="10-20">10 - 20 hours</option>
          <option value="20-30">20 - 30 hours</option>
          <option value="30-40">30 - 40 hours</option>
        </select>
      </div>

      {/* Error */}
      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          {error}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-teal px-6 py-3 text-base font-semibold text-white hover:bg-teal/90 focus:outline-none focus:ring-2 focus:ring-teal/30 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}
