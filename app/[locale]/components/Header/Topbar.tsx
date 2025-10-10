"use client";

import React from "react";
import { useI18n } from "@/locales/client";
import LanguageSwitcher from "./LanguageSwitcher";

const Topbar = () => {
  const t = useI18n();

  return (
    <div className="topbar hidden sm:flex justify-center items-center h-12 bg-gray-100">
      <div className="container flex justify-between items-center px-8">
        {/* Item */}
        <div className="contacts flex items-center gap-8">
          <a href="#" className="phone flex items-center gap-4">
            <img src="icons/phone-icon.svg" alt="" width={16} />
            <p className="text-regular-normal">{t("header.topbar.phone")}</p>
          </a>
          <a href="#" className="email flex items-center gap-4">
            <img src="icons/email-icon.svg" alt="" width={16} />
            <p className="text-regular-normal">{t("header.topbar.email")}</p>
          </a>
        </div>
        {/* Item */}
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Topbar;
