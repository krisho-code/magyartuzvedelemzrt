"use client";

import React from "react";
import { useI18n } from "@/locales/client";
import CallToActionButton from "../CallToAction/CallToActionButton";
import AlterLogo from "../Global Components/AlterLogo";
import Menu from "../Header/Menu";
import ContactPhone from "../Global Components/ContactPhone";
import ContactEmail from "../Global Components/ContactEmail";

const Topfoot = () => {
  const t = useI18n();

  return (
    <div className="topfoot flex items-center justify-center h-88 sm:h-72 md:h-40 bg-zinc-800 text-white">
      <div className="container flex flex-col gap-4 px-8">
        {/* Item */}
        <div className="row flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CallToActionButton
            link="/kapcsolat"
            text={t("header.cta.contactUs")}
          />
          <AlterLogo />
        </div>

        {/* Item */}
        <div className="row flex items-center justify-between">
          <Menu
            extraClasses="flex flex-col gap-2 md:flex-row md:items-center md:gap-8"
            disableServicesDropdown={true}
          />

          <div className="contacts hidden lg:flex items-center gap-4">
            {/* <ContactPhone icon={true} white={true} /> */}
            <ContactEmail icon={true} white={true} />
            <p className="text-white pl-4 border-l-2 border-gray-400">
              Küldjön ajánlatkérést!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topfoot;
