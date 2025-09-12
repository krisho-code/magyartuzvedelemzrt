import React from "react";

interface AboutInfoProps {
  img?: string;
  title: string;
  description: string;
}

const AboutInfo: React.FC<AboutInfoProps> = ({
  img = "/icons/fire-icon.svg",
  title,
  description,
}) => {
  return (
    <div className="col flex flex-col gap-8">
      <img src={img} alt="" className="w-fit" />
      <div className="flex flex-col gap-2">
        <h3 className="text-h3">{title}</h3>
        <p className="text-regular-normal">{description}</p>
      </div>
    </div>
  );
};

export default AboutInfo;
