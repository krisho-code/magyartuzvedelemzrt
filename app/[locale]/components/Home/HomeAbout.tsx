import React from "react";
import HomeTitle from "../HomeTitle";
import AboutInfos from "../AboutInfos";
import CallToActionButton from "../Buttons/CallToActionButton";

const HomeAbout = () => {
  return (
    <section className="home-about-section flex items-center justify-center py-16">
      <div className="container flex flex-col gap-16 px-8">
        <HomeTitle pageName="Cégismertető" title="Miért minket válasszon?" />
        <AboutInfos />
        <CallToActionButton link="/cegismerteto" text="Ismerd meg cégünket!" />
      </div>
    </section>
  );
};

export default HomeAbout;
