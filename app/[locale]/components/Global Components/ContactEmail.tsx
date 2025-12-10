"use client";

import React from "react";
import { useI18n } from "@/locales/client";

interface EmailProps {
  icon: boolean;
  white?: boolean;
  underline?: boolean;
}

const ContactEmail = ({ icon, white, underline }: EmailProps) => {
  const t = useI18n();
  const email = t("header.topbar.email");

  return icon ? (
    <a
      href={`mailto:${email}`}
      target="_blank"
      rel="noopener noreferrer"
      className="email flex gap-4 hover:color-text-primary"
    >
      {white && <img src="/icons/email-icon-white.svg" alt="" width={16} />}
      {!white && <img src="/icons/email-icon.svg" alt="" width={16} />}
      <span
        className={`text-regular-normal ${white ? "text-white" : ""} ${
          underline ? "underline" : ""
        }`}
      >
        {email}
      </span>
    </a>
  ) : (
    <a
      href={`mailto:${email}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-regular-normal ${
        white ? "text-white" : ""
      } hover:color-text-primary ${underline ? "underline" : ""}`}
    >
      {email}
    </a>
  );
};

export default ContactEmail;
