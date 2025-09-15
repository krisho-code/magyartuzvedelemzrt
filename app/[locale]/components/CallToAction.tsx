import React from "react";
import CallToActionButton from "./Buttons/CallToActionButton";

interface CallToActionProps {
  title: string;
  text?: string;
  cta1?: string;
  cta2?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  title,
  text = "Nézze meg és tájékozódjon szolgáltatásainkból, majd kérjen konzultációt vagy küldjön ajánlatot!",
  cta1 = "Informálódjon szolgáltatásainkból!",
  cta2 = "Kérjen konzultációt!",
}) => {
  return (
    <section className="call-to-action-section flex items-center justify-center py-16 bg-red-50">
      <div className="container grid gap-8 lg:grid-cols-[1fr_auto] px-8">
        <div className="col flex flex-col gap-4">
          <h3 className="text-h3">{title}</h3>
          <p className="text-medium-normal">{text}</p>
        </div>
        <div className="col flex flex-col gap-4">
          <CallToActionButton text={`${cta1}`} />
          <CallToActionButton buttonType="secondary" text={`${cta2}`} />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
