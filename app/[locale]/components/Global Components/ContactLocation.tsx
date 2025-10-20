"use client";

import React from "react";
import { useI18n } from "@/locales/client";

interface ContactLocationProps {
  icon: boolean;
  underline?: boolean;
}

const ContactLocation = ({ icon, underline }: ContactLocationProps) => {
  const t = useI18n();
  const address = t("contactForm.contactInfo.address");

  return icon ? (
    <a
      href="https://www.google.com/maps/place/Meyer+%26+Levinson+Kft./@47.497294,19.0534302,19.62z/data=!4m15!1m8!3m7!1s0x4741dc41b4a82c51:0x7f43f758fdd4aaf5!2sBudapest,+De%C3%A1k+Ferenc+t%C3%A9r+3,+1052!3b1!8m2!3d47.4974706!4d19.0535904!16s%2Fg%2F11q2nk15_w!3m5!1s0x4741dc404ac4b90f:0x628fcb213bfb7b38!8m2!3d47.4970759!4d19.053757!16s%2Fg%2F1v2kw6ls?hl=hu&entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D"
      target="_blank"
      rel="noopener noreferrer"
      className="location flex gap-4 hover:color-text-primary"
    >
      <img src="icons/location-icon.svg" alt="" width={16} />
      <span className={`text-regular-normal ${underline ? "underline" : ""}`}>
        {address}
      </span>
    </a>
  ) : (
    <a
      href="https://www.google.com/maps/place/Meyer+%26+Levinson+Kft./@47.497294,19.0534302,19.62z/data=!4m15!1m8!3m7!1s0x4741dc41b4a82c51:0x7f43f758fdd4aaf5!2sBudapest,+De%C3%A1k+Ferenc+t%C3%A9r+3,+1052!3b1!8m2!3d47.4974706!4d19.0535904!16s%2Fg%2F11q2nk15_w!3m5!1s0x4741dc404ac4b90f:0x628fcb213bfb7b38!8m2!3d47.4970759!4d19.053757!16s%2Fg%2F1v2kw6ls?hl=hu&entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D"
      target="_blank"
      rel="noopener noreferrer"
      className={`text-regular-normal ${
        underline ? "underline" : ""
      } hover:color-text-primary`}
    >
      {address}
    </a>
  );
};

export default ContactLocation;
