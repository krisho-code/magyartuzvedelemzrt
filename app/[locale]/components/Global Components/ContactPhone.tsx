"use client";

import React from "react";
import { useI18n } from "@/locales/client";

interface ContactPhoneProps {
  icon: boolean;
  white?: boolean;
  underline?: boolean;
}

const ContactPhone = ({ icon, white, underline }: ContactPhoneProps) => {
  const t = useI18n();
  const phone = t("header.topbar.phone");
  const phoneHref = phone.replace(/\s/g, "").replace(/^\+/, "");

  return icon ? (
    <a
      href={`tel:${phoneHref}`}
      className="phone flex gap-4 hover:color-text-primary"
    >
      {!white && <img src="icons/phone-icon.svg" alt="" width={16} />}
      {white && <img src="icons/phone-icon-white.svg" alt="" width={16} />}
      <span
        className={`text-regular-normal ${white ? "text-white" : ""} ${
          underline ? "underline" : ""
        }`}
      >
        {phone}
      </span>
    </a>
  ) : (
    <a
      href={`tel:${phoneHref}`}
      className={`text-regular-normal ${
        white ? "text-white" : ""
      } hover:color-text-primary ${underline ? "underline" : ""}`}
    >
      {phone}
    </a>
  );
};

export default ContactPhone;
