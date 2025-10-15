"use client";

import React from "react";
import Link from "next/link";
import { useI18n } from "@/locales/client";

interface ServiceInfoProps {
  title: string;
  link: string;
}

const ServiceInfo: React.FC<ServiceInfoProps> = ({ title, link }) => {
  const t = useI18n();

  return (
    <div className="service-info flex items-start gap-8">
      <img src="/icons/fire-icon-secondary.svg" alt="" />
      <div className="content flex">
        <Link href={`${link}`} className="flex flex-col gap-2 md:gap-4">
          <h3 className="text-h3">{title}</h3>
          <p className="text-regular-normal underline flex gap-4 items-center">
            {t("servicesPage.services.learnMore")}{" "}
            <img src="/icons/arrow-icon.svg" className="w-2" />
          </p>
        </Link>
        {/* <p className="text-medium-normal">{description}</p>
        <Link href={`${link}`} className="text-regular-normal flex gap-2">
          Tudjon meg többet
          <img src="/icons/arrow-icon.svg" alt="" className="w-2" />
        </Link> */}
      </div>
    </div>
  );
};

export default ServiceInfo;
