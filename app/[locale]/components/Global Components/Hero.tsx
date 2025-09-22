import React from "react";
import PageName from "./PageName";
import CallToActionButton from "../CallToAction/CallToActionButton";

interface HeroProps {
  section: string;
  pageName: string;
  pageTitle: string;
  pageDescription: string;
  button1Text: string;
  button2Text: string;
  // heroImage: string;
}

const Hero: React.FC<HeroProps> = ({
  section,
  pageName,
  pageTitle,
  pageDescription,
  button1Text,
  button2Text,
  // heroImage,
}) => {
  return (
    <section
      className={`hero-section ${section} grid grid-rows-[320_auto] lg:grid-cols-2 lg:grid-rows-1 lg:items-center`}
    >
      <div className="flex items-center justify-center h-fit order-2 lg:order-1">
        <div className="container flex flex-col gap-8 pt-8 pb-16 px-8 lg:px-16">
          <PageName pageName={pageName} />
          <h1 className="text-h1">{pageTitle}</h1>
          <p className="text-medium-normal">{pageDescription}</p>
          <div className="actions flex flex-col md:flex-row gap-4">
            <CallToActionButton text={`${button1Text}`} />
            <CallToActionButton
              buttonType="secondary"
              text={`${button2Text}`}
            />
          </div>
        </div>
      </div>
      <div className="image h-full lg:min-h-[65vh] order-1 lg:order-2"></div>
    </section>
  );
};

export default Hero;
