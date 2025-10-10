import React from "react";
import { getI18n } from "@/locales/server";

import UnderlinedTitle from "../Global Components/UnderlinedTitle";

const ContactForm = async () => {
  const t = await getI18n();

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
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <img src="/icons/email-icon.svg" alt="" />
              <a href="#" className="underline">
                {t("contactForm.contactInfo.email")}
              </a>
            </li>
            <li className="flex items-center gap-4">
              <img src="/icons/phone-icon.svg" alt="" />
              <a href="#" className="underline">
                {t("contactForm.contactInfo.phone")}
              </a>
            </li>
            <li className="flex items-center gap-4">
              <img src="/icons/location-icon.svg" alt="" />
              <a href="#" className="underline">
                {t("contactForm.contactInfo.address")}
              </a>
            </li>
          </ul>
        </div>
        {/* Item */}
        <div className="col">
          <form className="flex flex-col gap-8">
            {/* Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name">
                {t("contactForm.form.nameLabel")}{" "}
                <span>{t("contactForm.form.requiredMark")}</span>
              </label>
              <input
                id="name"
                type="text"
                className="block w-full text-regular-normal border-2 p-3 focus:outline-2 focus:outline-red-700"
              />
            </div>
            {/* Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email">
                {t("contactForm.form.emailLabel")}{" "}
                <span>{t("contactForm.form.requiredMark")}</span>
              </label>
              <input
                id="email"
                type="text"
                className="block w-full text-regular-normal border-2 p-3 focus:outline-2 focus:outline-red-700"
              />
            </div>
            {/* Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message">
                {t("contactForm.form.messageLabel")}{" "}
                <span>{t("contactForm.form.requiredMark")}</span>
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                placeholder={t("contactForm.form.messagePlaceholder")}
                className="block w-full resize-none text-regular-normal border-2 p-3 focus:outline-2 focus:outline-red-700"
              ></textarea>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="check" id="check" />
              <label htmlFor="check">
                {t("contactForm.form.termsText")}{" "}
                <span className="underline">
                  {t("contactForm.form.termsLink")}
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="cta-button primary block w-fit h-fit py-3 px-6"
            >
              {t("contactForm.form.submitButton")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
