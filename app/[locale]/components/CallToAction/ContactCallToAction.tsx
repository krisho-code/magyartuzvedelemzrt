"use client";

import React from "react";
import { useI18n } from "../../../../locales/client";
import CallToActionButton from "./CallToActionButton";

const ContactCallToAction = () => {
  const t = useI18n();

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
          <input
            id="email"
            type="text"
            placeholder={t("contactPage.callbackRequest.placeholder")}
            className="block w-full h-fit text-regular-normal border-2 p-3 bg-white focus:outline-2 focus:outline-red-700"
          />
          <CallToActionButton text={t("contactPage.callbackRequest.button")} />
        </div>
      </div>
    </section>
  );
};

export default ContactCallToAction;
