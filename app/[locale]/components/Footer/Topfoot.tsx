"use client";

import React from "react";
import { useI18n } from "@/locales/client";
import CallToActionButton from "../CallToAction/CallToActionButton";
import Logo from "../Global Components/Logo";
import Menu from "../Header/Menu";

const Topfoot = () => {
  const t = useI18n();

  return (
    <div className="topfoot flex items-center justify-center h-88 sm:h-72 md:h-40 bg-gray-100">
      <div className="container flex flex-col gap-4 px-8">
        {/* Item */}
        <div className="row flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CallToActionButton
            link="/kapcsolat"
            text={t("header.cta.contactUs")}
          />
          <Logo />
        </div>

        {/* Item */}
        <div className="row flex items-center justify-between">
          <Menu
            extraClasses="flex flex-col gap-2 md:flex-row md:items-center md:gap-8"
            disableServicesDropdown={true}
          />

          <div className="contacts hidden lg:flex items-center gap-8">
            <a href="#" className="phone flex items-center gap-4">
              <img src="icons/phone-icon.svg" alt="" width={16} />
              <p className="text-regular-normal">{t("header.topbar.phone")}</p>
            </a>
            <a href="#" className="email flex items-center gap-4">
              <img src="icons/phone-icon.svg" alt="" width={16} />
              <p className="text-regular-normal">{t("header.topbar.email")}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topfoot;
