import React from "react";
import Hero from "../components/Global Components/Hero";
import Stats from "../components/Global Components/Stats";
import Services from "../components/Services/Services";
import CallToAction from "../components/CallToAction/CallToAction";

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
      <Stats
        title="Szakértelmünk magáért beszél!"
        description="A Magyar Tűzvédelem Zrt. több évtizedes szakmai tapasztalattal, elismert minősítésekkel és engedélyekkel biztosítja ügyfelei számára a legmagasabb színvonalú megoldásokat. Minden projektünkben a megbízhatóság, a biztonság és a precíz kivitelezés áll a középpontban, így partnereink garantáltan hosszú távú értéket kapnak."
        stat1="GNB"
        text1="Minősítéssel dolgozunk"
        stat2="HPS"
        text2="Engedélyünk van a munkáinkra"
        stat3="30+"
        text3="Év szakmai tapasztalat"
      />
      <Services />
      <CallToAction title="Fedezze fel szolgáltatásainkat részletesen!" />
    </main>
  );
};

export default Szolgáltatások;
