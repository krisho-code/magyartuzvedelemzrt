import React from "react";
import Hero from "../components/Hero";

const Cégismertető = () => {
  return (
    <main>
      <Hero
        section="about"
        pageName="Cégismertető"
        pageTitle="Vállalatunk bemutatása"
        pageDescription="A Magyar Tűzvédelem Zrt. alapításának célja egy olyan vállalkozás
            létrehozása volt, amely műszaki és szakmai színvonalával teljesíti
            ügyfelei elvárásait. Megbízhatóságát a több évtizedes vezetői
            tapasztalat, valamint munkatársai szakmai elkötelezettsége és
            széleskörű referenciái biztosítják."
        button1Text="Küldetésünk és jövőképünk"
        button2Text="Csapatunk"
        // heroImage="/about-hero.jpg"
      />
    </main>
  );
};

export default Cégismertető;
