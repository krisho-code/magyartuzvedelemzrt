import React from "react";
import UnderlinedTitle from "../Global Components/UnderlinedTitle";
import AboutInfos from "../About/AboutInfos";
import CallToActionButton from "../CallToAction/CallToActionButton";

interface HomeAboutProps {
  hiddenButton?: boolean;
}

const HomeAbout: React.FC<HomeAboutProps> = ({ hiddenButton = false }) => {
  return (
    <section className="home-about-section flex items-center justify-center py-16">
      <div className="container flex flex-col gap-16 px-8">
        <UnderlinedTitle
          pageName="Cégismertető"
          title="Miért minket válasszon?"
        />
        <AboutInfos />
        {!hiddenButton ? (
          <CallToActionButton
            link="/cegismerteto"
            text="Ismerd meg cégünket!"
          />
        ) : null}
      </div>
    </section>
  );
};

export default HomeAbout;
