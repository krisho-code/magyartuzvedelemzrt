"use client";

import React, { useState } from "react";
import { useI18n, useCurrentLocale } from "../../../../locales/client";

interface FormErrors {
  email?: string;
  general?: string;
}

const ContactCallToAction = () => {
  const t = useI18n();
  const currentLocale = useCurrentLocale();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = t(
        "contactPage.callbackRequest.validation.emailRequired"
      );
    } else if (!emailRegex.test(email)) {
      newErrors.email = t(
        "contactPage.callbackRequest.validation.emailInvalid"
      );
    } else if (email.length > 100) {
      newErrors.email = t(
        "contactPage.callbackRequest.validation.emailMaxLength"
      );
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);

    // Clear error when user starts typing
    if (errors.email) {
      setErrors((prev) => ({
        ...prev,
        email: undefined,
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
      const response = await fetch("/api/help", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, locale: currentLocale }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || t("contactPage.callbackRequest.messages.serverError")
        );
      }

      // Success
      setSubmitStatus("success");
      setEmail("");

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Error submitting help request:", error);
      setSubmitStatus("error");
      setErrors({
        general:
          error instanceof Error
            ? error.message
            : t("contactPage.callbackRequest.messages.generalError"),
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
      id="contact-call-to-action-section"
      className="flex items-center justify-center py-16 bg-red-50"
    >
      <div className="container grid gap-8 lg:grid-cols-[auto_auto] px-8">
        <div className="flex flex-col gap-4">
          <h3 className="text-h3">{t("contactPage.callbackRequest.title")}</h3>
          <p className="text-medium-normal">
            {t("contactPage.callbackRequest.description")}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <input
                id="help-email"
                name="email"
                type="email"
                value={email}
                onChange={handleInputChange}
                placeholder={t("contactPage.callbackRequest.placeholder")}
                className={`block w-full h-fit text-regular-normal border-2 p-3 bg-white focus:outline-2 focus:outline-red-700 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                disabled={isSubmitting}
              />
              {errors.email && (
                <span className="text-red-600 text-sm">{errors.email}</span>
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
                ? t("contactPage.callbackRequest.form.submitting")
                : t("contactPage.callbackRequest.button")}
            </button>
          </form>
        </div>
      </div>

      {/* Success Message - Fixed Bottom Right */}
      {submitStatus === "success" && (
        <div className="notification-popup fixed bottom-6 right-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg shadow-lg max-w-sm animate-slide-in">
          <p className="font-medium">
            ✓ {t("contactPage.callbackRequest.messages.success")}
          </p>
          <p className="text-sm mt-1">
            {t("contactPage.callbackRequest.messages.successDescription")}
          </p>
        </div>
      )}

      {/* Error Message - Fixed Bottom Right */}
      {submitStatus === "error" && errors.general && (
        <div className="notification-popup fixed bottom-6 right-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg shadow-lg max-w-sm animate-slide-in">
          <p className="font-medium">
            ✗ {t("contactPage.callbackRequest.messages.error")}
          </p>
          <p className="text-sm mt-1">{errors.general}</p>
        </div>
      )}
    </section>
  );
};

export default ContactCallToAction;
