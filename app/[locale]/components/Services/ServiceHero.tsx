import React from "react";

interface ServiceHeroProps {
  pageName: string;
  title: string;
  description: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({
  pageName,
  title,
  description,
}) => {
  return (
    <section
      className={`service-hero-section ${pageName} flex items-center justify-center h-80 md:h-96`}
    >
      <div className="container flex flex-col items-center gap-2 w-fit px-8">
        <h1 className="text-h1 text-white text-center w-fit">{title}</h1>
        <p className="text-medium-normal text-white text-center w-fit">
          {description}
        </p>
      </div>
    </section>
  );
};

export default ServiceHero;
