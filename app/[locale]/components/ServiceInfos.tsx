import React from "react";
import ServiceInfosContent from "./ServiceInfosContent";
import CallToActionButton from "./Buttons/CallToActionButton";

interface ServiceInfosProps {
  title: string;
  text: string;
  info1title: string;
  info1text: string;
  info2title: string;
  info2text: string;
  info3title: string;
  info3text: string;
  info4title: string;
  info4text: string;
}

const ServiceInfos: React.FC<ServiceInfosProps> = ({
  title,
  text,
  info1title,
  info1text,
  info2title,
  info2text,
  info3title,
  info3text,
  info4title,
  info4text,
}) => {
  return (
    <section className="service-infos-section flex items-center justify-center py-16 bg-gray-100">
      <div className="container flex flex-col gap-16 px-8">
        <div className="flex flex-col gap-8 w-[75%]">
          <h2 className="text-h2">{title}</h2>
          <p className="text-regular-normal">{text}</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16">
          <ServiceInfosContent title={`${info1title}`} text={`${info1text}`} />
          <ServiceInfosContent title={`${info2title}`} text={`${info2text}`} />
          <ServiceInfosContent title={`${info3title}`} text={`${info3text}`} />
          <ServiceInfosContent title={`${info4title}`} text={`${info4text}`} />
        </div>
        <div className="flex flex-col gap-4 lg:flex-row">
          <CallToActionButton text="Kérjen személyre szabott ajánlatot!" />
          <CallToActionButton
            buttonType="secondary"
            text="Vegye fel velünk a kapcsolatot!"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceInfos;
