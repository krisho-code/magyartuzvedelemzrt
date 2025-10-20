"use client";

import React from "react";
import { useI18n } from "@/locales/client";
import LanguageSwitcher from "./LanguageSwitcher";
import ContactPhone from "../Global Components/ContactPhone";
import ContactEmail from "../Global Components/ContactEmail";

const Topbar = () => {
  const t = useI18n();

  return (
    <div className="topbar hidden sm:flex justify-center items-center h-12 bg-gray-100">
      <div className="container flex justify-between items-center px-8">
        {/* Item */}
        <div className="contacts flex items-center gap-8">
          <ContactPhone icon={true} />
          <ContactEmail icon={true} />
        </div>
        {/* Item */}
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Topbar;
