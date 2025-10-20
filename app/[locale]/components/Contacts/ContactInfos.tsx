"use client";

import React from "react";
import { useI18n } from "../../../../locales/client";
import ContactInfosContent from "./ContactInfosContent";

const ContactInfos = () => {
  const t = useI18n();

  return (
    <section className="contact-infos-section flex items-center justify-center py-16 bg-gray-100">
      <div className="container grid gap-8 lg:grid-cols-4 px-8">
        <ContactInfosContent
          icon="/icons/email-icon-secondary.svg"
          title={t("contactPage.contactInfos.email.title")}
          text={t("contactPage.contactInfos.email.text")}
          link="email"
        />
        <ContactInfosContent
          icon="/icons/phone-icon-secondary.svg"
          title={t("contactPage.contactInfos.phone.title")}
          text={t("contactPage.contactInfos.phone.text")}
          link="phone"
        />
        <ContactInfosContent
          icon="/icons/location-icon-secondary.svg"
          title={t("contactPage.contactInfos.address.title")}
          text={t("contactPage.contactInfos.address.text")}
          link="address"
        />
        <ContactInfosContent
          icon="/icons/message-icon-secondary.svg"
          title={t("contactPage.contactInfos.postal.title")}
          text={t("contactPage.contactInfos.postal.text")}
          link="mail"
        />
      </div>
    </section>
  );
};

export default ContactInfos;
