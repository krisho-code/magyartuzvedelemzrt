"use client";

import React from "react";
import { useI18n } from "@/locales/client";

interface ContactPhoneProps {
  icon: boolean;
  white?: boolean;
  underline?: boolean;
  phone?: string;
  name?: string;
  position?: string;
}

const ContactPhone = ({
  icon,
  white,
  underline,
  phone,
  name,
  position,
}: ContactPhoneProps) => {
  const t = useI18n();
  const displayPhone = phone || t("header.topbar.phone");
  const phoneHref = displayPhone.replace(/\s/g, "").replace(/^\+/, "");

  if (name && position) {
    // Display with name and position (for contact form)
    return (
      <div className="flex flex-col gap-1">
        <a
          href={`tel:${phoneHref}`}
          className="phone flex gap-4 hover:color-text-primary"
        >
          {!white && <img src="/icons/phone-icon.svg" alt="" width={16} />}
          {white && <img src="/icons/phone-icon-white.svg" alt="" width={16} />}
          <span
            className={`text-regular-normal font-semibold ${
              white ? "text-white" : ""
            } ${underline ? "underline" : ""}`}
          >
            {displayPhone}
          </span>
        </a>
        <div className="flex gap-4 ml-10">
          <div className="flex flex-col gap-0">
            <p className={`text-sm font-medium ${white ? "text-white" : ""}`}>
              {name}
            </p>
            <p
              className={`text-xs ${white ? "text-gray-200" : "text-gray-600"}`}
            >
              {position}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return icon ? (
    <a
      href={`tel:${phoneHref}`}
      className="phone flex gap-4 hover:color-text-primary"
    >
      {!white && <img src="/icons/phone-icon.svg" alt="" width={16} />}
      {white && <img src="/icons/phone-icon-white.svg" alt="" width={16} />}
      <span
        className={`text-regular-normal ${white ? "text-white" : ""} ${
          underline ? "underline" : ""
        }`}
      >
        {displayPhone}
      </span>
    </a>
  ) : (
    <a
      href={`tel:${phoneHref}`}
      className={`text-regular-normal ${
        white ? "text-white" : ""
      } hover:color-text-primary ${underline ? "underline" : ""}`}
    >
      {displayPhone}
    </a>
  );
};

export default ContactPhone;
