import React from "react";
import Hero from "../components/Hero";
import Stats from "../components/Stats";

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
      <Stats
        title="Tudásunk kiemelkedik a piacon!"
        description="A Magyar Tűzvédelem Zrt. egy 100%-ban magyar tulajdonú vállalkozás, amely közel 30 év szakmai tapasztalatra építve kínál megbízható szolgáltatásokat. Fő tevékenységei a passzív tűzvédelem és azbesztmentesítés, hazai partnerek magas színvonalú kiszolgálásával."
        stat1="30+"
        text1="Év szakmai tapasztalat"
        stat2="100+"
        text2="Elégedett ügyfél"
        stat3="50+"
        text3="Településen végzett munka országszerte"
      />
    </main>
  );
};

export default Cégismertető;
