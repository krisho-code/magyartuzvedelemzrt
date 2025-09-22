import React from "react";

interface ServiceInfosContentProps {
  title: string;
  text: string;
}

const ServiceInfosContent: React.FC<ServiceInfosContentProps> = ({
  title,
  text,
}) => {
  return (
    <div className="flex gap-4 items-start pt-8 border-t-2">
      <img src="/icons/fire-icon-secondary.svg" alt="" />
      <div className="content flex flex-col gap-2">
        <h3 className="text-h3">{title}</h3>
        <p className="text-regular-normal">{text}</p>
      </div>
    </div>
  );
};

export default ServiceInfosContent;
