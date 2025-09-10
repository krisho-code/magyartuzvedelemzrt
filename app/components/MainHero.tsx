import React from "react";
import CallToActionButton from "./Buttons/CallToActionButton";

const MainHero = () => {
  return (
    <section className="main-hero-section h-200 md:h-224 flex items-center justify-center">
      <div className="container flex flex-col gap-8 px-8">
        <h1 className="text-h1 text-white">
          Professzionális tűzvédelmi megoldások, szakemberektől
        </h1>
        <p className="text-medium-normal text-white">
          Szakembereink gondoskodnak a modern, megbízható megoldásokról a
          biztonságos holnapért.
        </p>
        <div className="actions flex flex-col md:flex-row gap-4">
          <CallToActionButton
            link="/kapcsolat"
            text="Vegye fel velünk a kapcsolatot!"
          />
          <CallToActionButton
            link="/szolgaltatasok"
            buttonType="alternative"
            text="Tekintse meg szolgáltatásainkat!"
          />
        </div>
      </div>
    </section>
  );
};

export default MainHero;
