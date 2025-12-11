"use client";
import React, { useState } from "react";
import { useI18n, useCurrentLocale } from "@/locales/client";
import hu from "@/locales/hu";
import en from "@/locales/en";

import UnderlinedTitle from "../Global Components/UnderlinedTitle";
import ContactEmail from "../Global Components/ContactEmail";
import ContactPhone from "../Global Components/ContactPhone";
import ContactLocation from "../Global Components/ContactLocation";

interface FormData {
  name: string;
  email: string;
  message: string;
  privacyAccepted: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  privacyAccepted?: string;
  general?: string;
}

const ContactForm = () => {
  const t = useI18n();
  const currentLocale = useCurrentLocale();
  const contactPersons =
    currentLocale === "hu"
      ? hu.contactForm.contactPersons
      : en.contactForm.contactPersons;
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    privacyAccepted: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = t("contactForm.validation.nameRequired");
    } else if (formData.name.length > 100) {
      newErrors.name = t("contactForm.validation.nameMaxLength");
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = t("contactForm.validation.emailRequired");
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = t("contactForm.validation.emailInvalid");
    } else if (formData.email.length > 100) {
      newErrors.email = t("contactForm.validation.emailMaxLength");
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = t("contactForm.validation.messageRequired");
    } else if (formData.message.length > 1000) {
      newErrors.message = t("contactForm.validation.messageMaxLength");
    }

    // Privacy acceptance validation
    if (!formData.privacyAccepted) {
      newErrors.privacyAccepted =
        currentLocale === "en"
          ? "Please accept the Data Processing Information to continue"
          : "Kérjük, fogadja el az Adatkezelési Tájékoztatót a folytatáshoz";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, locale: currentLocale }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || t("contactForm.messages.serverError"));
      }

      // Success
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "", privacyAccepted: false });

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setErrors({
        general:
          error instanceof Error
            ? error.message
            : t("contactForm.messages.generalError"),
      });

      // Auto-hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
        setErrors({});
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="conact-form-section"
      className="flex items-center justify-center py-16"
    >
      <div className="container grid gap-16 lg:grid-cols-2 px-8">
        {/* Item */}
        <div className="col flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <UnderlinedTitle
              pageName={t("contactForm.pageName")}
              title={t("contactForm.title")}
            />
            <p className="text-regular-normal">
              {t("contactForm.description")}
            </p>
          </div>
          <ul className="flex flex-col gap-8">
            <li className="flex items-center gap-4">
              <ContactEmail icon={true} underline={true} />
            </li>
            {contactPersons.map((person, index: number) => (
              <li key={`phone-${index}`} className="flex items-start">
                <ContactPhone
                  icon={true}
                  underline={false}
                  phone={person.phone}
                  name={person.name}
                  position={person.position}
                />
              </li>
            ))}
            <li className="flex items-center gap-4">
              <ContactLocation icon={true} underline={true} />
            </li>
          </ul>
        </div>
        {/* Success Message - Fixed Bottom Right */}
        {submitStatus === "success" && (
          <div className="notification-popup fixed bottom-6 right-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg shadow-lg max-w-sm animate-slide-in">
            <p className="font-medium">✓ {t("contactForm.messages.success")}</p>
            <p className="text-sm mt-1">
              {t("contactForm.messages.successDescription")}
            </p>
          </div>
        )}

        {/* Error Message - Fixed Bottom Right */}
        {submitStatus === "error" && errors.general && (
          <div className="notification-popup fixed bottom-6 right-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg shadow-lg max-w-sm animate-slide-in">
            <p className="font-medium">✗ {t("contactForm.messages.error")}</p>
            <p className="text-sm mt-1">{errors.general}</p>
          </div>
        )}

        {/* Item */}
        <div className="col">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            {/* Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name">
                {t("contactForm.form.nameLabel")}{" "}
                <span className="text-red-600">
                  {t("contactForm.form.requiredMark")}
                </span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                className={`block w-full text-regular-normal border-2 p-3 focus:outline-2 focus:outline-red-700 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                disabled={isSubmitting}
              />
              {errors.name && (
                <span className="text-red-600 text-sm">{errors.name}</span>
              )}
            </div>
            {/* Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email">
                {t("contactForm.form.emailLabel")}{" "}
                <span className="text-red-600">
                  {t("contactForm.form.requiredMark")}
                </span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`block w-full text-regular-normal border-2 p-3 focus:outline-2 focus:outline-red-700 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                disabled={isSubmitting}
              />
              {errors.email && (
                <span className="text-red-600 text-sm">{errors.email}</span>
              )}
            </div>
            {/* Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message">
                {t("contactForm.form.messageLabel")}{" "}
                <span className="text-red-600">
                  {t("contactForm.form.requiredMark")}
                </span>
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                placeholder={t("contactForm.form.messagePlaceholder")}
                className={`block w-full resize-none text-regular-normal border-2 p-3 focus:outline-2 focus:outline-red-700 ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
                disabled={isSubmitting}
              ></textarea>
              {errors.message && (
                <span className="text-red-600 text-sm">{errors.message}</span>
              )}
            </div>
            {/* Character count for message */}
            <div className="text-sm text-gray-600 -mt-6">
              {formData.message.length}/1000{" "}
              {t("contactForm.form.characterCount")}
            </div>

            {/* Privacy Policy Checkbox */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <input
                  id="privacyAccepted"
                  name="privacyAccepted"
                  type="checkbox"
                  checked={formData.privacyAccepted}
                  onChange={(e) => {
                    setFormData((prev) => ({
                      ...prev,
                      privacyAccepted: e.target.checked,
                    }));
                    // Clear error when user checks the box
                    if (errors.privacyAccepted) {
                      setErrors((prev) => ({
                        ...prev,
                        privacyAccepted: undefined,
                      }));
                    }
                  }}
                  className={`mt-1 w-4 h-4 cursor-pointer ${
                    errors.privacyAccepted ? "accent-red-600" : ""
                  }`}
                  disabled={isSubmitting}
                />
                <label
                  htmlFor="privacyAccepted"
                  className="cursor-pointer text-regular-normal"
                >
                  <a
                    href={`/${currentLocale}/adatkezelesitajekoztato`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {t("contactForm.form.privacyCheckboxLabel")}
                  </a>
                  <span className="ml-1 text-red-600">
                    {t("contactForm.form.requiredMark")}
                  </span>
                </label>
              </div>
              {errors.privacyAccepted && (
                <span className="text-red-600 text-sm flex items-center gap-1">
                  {errors.privacyAccepted}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`cta-button primary block w-fit h-fit py-3 px-6 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting
                ? t("contactForm.form.submitting")
                : t("contactForm.form.submitButton")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
