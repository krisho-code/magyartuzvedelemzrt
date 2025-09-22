import React from "react";
import Link from "next/link";

interface ServiceInfoProps {
  title: string;
  description: string;
  link: string;
}

const ServiceInfo: React.FC<ServiceInfoProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <div className="service-info flex items-start gap-8">
      <img src="/icons/fire-icon-secondary.svg" alt="" />
      <div className="content flex flex-col gap-4">
        <h3 className="text-h3">{title}</h3>
        <p className="text-medium-normal">{description}</p>
        <Link href={`${link}`} className="text-regular-normal flex gap-2">
          Tudjon meg többet
          <img src="/icons/arrow-icon.svg" alt="" className="w-2" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceInfo;
