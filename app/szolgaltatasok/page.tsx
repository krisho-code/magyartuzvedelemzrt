import React from "react";
import Hero from "../components/Hero";

const Szolgáltatások = () => {
  return (
    <main>
      <Hero
        section="services"
        pageName="Szolgáltatások"
        pageTitle="Szolgáltatásaink bemutatása"
        pageDescription="Szolgáltatásaink célja, hogy ügyfeleink számára mindig biztonságos, megbízható és hosszú távon fenntartható megoldásokat nyújtsunk. Munkánk során a szakmai alaposságot és a minőséget helyezzük előtérbe, hogy partnereink minden esetben elégedetten vehessék igénybe szolgáltatásainkat."
        button1Text="Szolgáltatásaink"
        button2Text="Kapcsolat"
        // heroImage="/services-hero.jpg"
      />
    </main>
  );
};

export default Szolgáltatások;
