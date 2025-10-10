"use client";

import React from "react";
import { useI18n } from "@/locales/client";
import CallToActionButton from "../CallToAction/CallToActionButton";
import Menu from "./Menu";
import LanguageSwitcher from "./LanguageSwitcher";

interface MobileNavbarProps {
  mobileToggle: () => void;
  mobileOpen: boolean;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  mobileToggle,
  mobileOpen,
}) => {
  const t = useI18n();

  return (
    <div
      className={`mobile-navbar lg:hidden flex justify-center items-center h-fit py-8 bg-gray-200 ${
        mobileOpen ? "" : "hidden"
      }`}
    >
      <div className="container flex flex-col align-top justify-start gap-8 px-8">
        {/* Item */}
        <Menu
          extraClasses="flex flex-col gap-0.5"
          mobileToggle={mobileToggle}
        />
        {/* Item */}
        <CallToActionButton
          link="/kapcsolat"
          text={t("header.cta.contactUs")}
          mobileToggle={mobileToggle}
        />
        {/* Item */}
        <LanguageSwitcher extraClasses="sm:hidden" />
      </div>
    </div>
  );
};

export default MobileNavbar;
