import React from "react";
import PageName from "./PageName";
import CallToActionButton from "../components/Buttons/CallToActionButton";

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
      className={`hero-section ${section} grid grid-rows-[256_auto] lg:grid-cols-2 lg:grid-rows-1`}
    >
      <div className="column h-fit order-2 lg:order-1 py-8 lg:py-16">
        <div className="container flex flex-col gap-8 px-8">
          <PageName pageName={pageName} />
          <p className="text-h1">{pageTitle}</p>
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
      <div className="image lg:h-full order-1 lg:order-2"></div>
    </section>
  );
};

export default Hero;
