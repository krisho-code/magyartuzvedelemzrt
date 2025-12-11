"use client";

import React from "react";
import Link from "next/link";
import { useI18n } from "@/locales/client";
import CallToActionButton from "../CallToAction/CallToActionButton";
import AlterLogo from "../Global Components/AlterLogo";
import Menu from "../Header/Menu";
import ContactEmail from "../Global Components/ContactEmail";
import ContactLocation from "../Global Components/ContactLocation";

const Topfoot = () => {
  const t = useI18n();

  const services = [
    {
      href: "/szolgaltatasok/tuzvedelem",
      label: t("homeServices.services.tuzvedelem"),
    },
    {
      href: "/szolgaltatasok/azbesztmentesites",
      label: t("homeServices.services.azbesztmentesites"),
    },
    {
      href: "/szolgaltatasok/tuzkarmentesites",
      label: t("homeServices.services.tuzkarmentesites"),
    },
    {
      href: "/szolgaltatasok/vizkarmentesites",
      label: t("homeServices.services.vizkarmentesites"),
    },
    {
      href: "/szolgaltatasok/tisztitasesveszelytelenites",
      label: t("homeServices.services.tisztitasesveszelytelenites"),
    },
    {
      href: "/szolgaltatasok/alpintechnika",
      label: t("homeServices.services.alpintechnika"),
    },
  ];

  return (
    <div className="topfoot flex items-center justify-center bg-zinc-800 text-white">
      <div className="container flex flex-col gap-8 px-8 py-8 pb-16">
        {/* Item 1: Logo and CTA */}
        <div className="row flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
          <AlterLogo />
        </div>

        {/* Item 2: Navigation and Services */}
        <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {/* Main Menu */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm">Menu</h3>
            <Menu
              extraClasses="flex flex-col gap-3"
              disableServicesDropdown={true}
            />
          </div>

          {/* Services Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm">Szolgáltatások</h3>
            <div className="flex flex-col gap-3">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="text-white transition-colors text-medium-normal"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm">Elérhetőségek</h3>
            <div className="flex flex-col gap-3">
              <ContactEmail icon={true} white={true} />
              <ContactLocation icon={true} white={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topfoot;
