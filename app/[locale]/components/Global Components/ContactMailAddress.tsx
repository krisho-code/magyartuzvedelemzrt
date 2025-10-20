"use client";

import React from "react";
import { useI18n } from "@/locales/client";

interface ContactMailAddressProps {
  icon: boolean;
  underline?: boolean;
}

const ContactMailAddress = ({ icon, underline }: ContactMailAddressProps) => {
  const t = useI18n();
  const postalAddress = t("contactPage.contactInfos.postal.link");

  return icon ? (
    <a
      href="https://www.google.com/maps/place/Pom%C3%A1z,+K%C3%B3s+K%C3%A1roly+utca+34a,+2013/@47.6515477,18.993567,17z/data=!3m1!4b1!4m6!3m5!1s0x476a78878ede582d:0xe2d71d9fbea2132e!8m2!3d47.6515441!4d18.9961419!16s%2Fg%2F11fwhm9ght?hl=hu&entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D"
      target="_blank"
      rel="noopener noreferrer"
      className="location flex gap-4 hover:color-text-primary"
    >
      <img src="icons/message-icon.svg" alt="" width={16} />
      <span className={`text-regular-normal ${underline ? "underline" : ""}`}>
        {postalAddress}
      </span>
    </a>
  ) : (
    <a
      href="https://www.google.com/maps/place/Pom%C3%A1z,+K%C3%B3s+K%C3%A1roly+utca+34a,+2013/@47.6515477,18.993567,17z/data=!3m1!4b1!4m6!3m5!1s0x476a78878ede582d:0xe2d71d9fbea2132e!8m2!3d47.6515441!4d18.9961419!16s%2Fg%2F11fwhm9ght?hl=hu&entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D"
      target="_blank"
      rel="noopener noreferrer"
      className={`text-regular-normal ${underline ? "underline" : ""}`}
    >
      {postalAddress}
    </a>
  );
};

export default ContactMailAddress;
