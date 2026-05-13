"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import contactForm from "@/data/contact_form.json";
import { ContactFormConfig, ContactFormField } from "@/types";
import { trackEvent } from "@/lib/analytics";

type Status = "idle" | "submitting" | "success" | "error";

const config = contactForm as unknown as ContactFormConfig;

export default function ContactForm({ location }: { location: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(config.fields.map((f) => [f.id, ""])),
  );

  const handleChange = (id: string, value: string) => {
    setValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Build payload using field LABELS as keys so the Formspree dashboard
    // shows the original question text, not the short id.
    const labeled: Record<string, string> = {};
    for (const f of config.fields) {
      labeled[f.label] = values[f.id] || "";
    }

    const senderName = values.name || values.email || "Anonymous";
    const payload = {
      _subject: `New project brief from ${senderName}`,
      _replyto: values.email || "",
      ...labeled,
    };

    try {
      const response = await fetch(config.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error(`Status ${response.status}`);

      trackEvent("contact_form_submitted", {
        location,
        stage: values.stage || "",
        budget: values.budget || "",
        timeline: values.timeline || "",
      });

      setStatus("success");
      setValues(Object.fromEntries(config.fields.map((f) => [f.id, ""])));
    } catch {
      trackEvent("contact_form_error", { location });
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 bg-white dark:bg-zinc-900 border-2 border-green-500 dark:border-green-600 rounded-2xl text-center">
        <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
          Got it.
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          {config.successMessage}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 md:p-8 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-lg"
    >
      <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
        {config.heading}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        {config.subheading}
      </p>

      <div className="space-y-5">
        {config.fields.map((field: ContactFormField) => (
          <div key={field.id}>
            <label
              htmlFor={field.id}
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>

            {field.type === "textarea" ? (
              <textarea
                id={field.id}
                name={field.id}
                required={field.required}
                placeholder={field.placeholder}
                value={values[field.id]}
                onChange={(e) => handleChange(field.id, e.target.value)}
                rows={3}
                className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            ) : field.type === "select" ? (
              <select
                id={field.id}
                name={field.id}
                required={field.required}
                value={values[field.id]}
                onChange={(e) => handleChange(field.id, e.target.value)}
                className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="">Select…</option>
                {(field.options || []).map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={field.id}
                name={field.id}
                type={field.type}
                required={field.required}
                placeholder={field.placeholder}
                value={values[field.id]}
                onChange={(e) => handleChange(field.id, e.target.value)}
                className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            )}
          </div>
        ))}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        <Send className="w-5 h-5" />
        {status === "submitting" ? "Sending…" : config.submitLabel}
      </button>

      {status === "error" && (
        <p className="mt-4 text-center text-sm text-red-600 dark:text-red-400">
          {config.errorMessage}
        </p>
      )}
    </form>
  );
}
