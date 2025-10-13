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
  link1?: string;
  link2?: string;
  // heroImage: string;
}

const Hero: React.FC<HeroProps> = ({
  section,
  pageName,
  pageTitle,
  pageDescription,
  button1Text,
  button2Text,
  link1,
  link2,
  // heroImage,
}) => {
  return (
    <section
      className={`hero-section ${section} w-full max-w-full overflow-hidden grid grid-rows-[min-content_auto] lg:grid-cols-2 lg:grid-rows-1 lg:items-center`}
    >
      <div className="flex items-center justify-center h-fit order-2 lg:order-1 w-full max-w-full">
        <div className="container flex flex-col gap-8 pt-8 pb-16 px-8 sm:px-6 md:px-8 lg:px-16 w-full max-w-full">
          <PageName pageName={pageName} />
          <h1 className="text-h1-responsive break-words overflow-hidden text-wrap">
            {pageTitle}
          </h1>
          <p className="text-medium-normal break-words overflow-hidden text-wrap">
            {pageDescription}
          </p>
          <div className="actions flex flex-col md:flex-row gap-4">
            <CallToActionButton
              text={`${button1Text}`}
              link={link1 ? link1 : "#"}
            />
            <CallToActionButton
              buttonType="secondary"
              text={`${button2Text}`}
              link={link2 ? link2 : "#"}
            />
          </div>
        </div>
      </div>
      <div className="image w-full h-full lg:min-h-[65vh] order-1 lg:order-2 min-h-[250px] md:min-h-[320px]"></div>
    </section>
  );
};

export default Hero;
