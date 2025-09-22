import React from "react";

interface ServiceAboutProps {
  title: string;
  description: string;
}

const ServiceAbout: React.FC<ServiceAboutProps> = ({ title, description }) => {
  return (
    <section className="service-about-section flex items-center justify-center py-16">
      <div className="container grid gap-8 lg:grid-cols-2 px-8">
        <h2 className="text-h2">{title}</h2>
        <p className="text-regular-normal">{description}</p>
      </div>
    </section>
  );
};

export default ServiceAbout;
