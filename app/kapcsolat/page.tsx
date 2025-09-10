import React from "react";
import Hero from "../components/Hero";

const Kapcsolat = () => {
  return (
    <main>
      <Hero
        section="contacts"
        pageName="Kapcsolatok"
        pageTitle="Hozzánk bármivel fordulhat!"
        pageDescription="Lépjen velünk kapcsolatba bizalommal, ha tűzvédelemre, azbesztmentesítésre, veszélyes anyagok eltávolítására, vagy épületbiztonsági tanácsadásra van szüksége! Szakértő csapatunk készséggel válaszol kérdéseire, legyen szó akár konkrét ajánlatkérésről, akár általános tájékozódásról."
        button1Text="Kérjen visszahívást!"
        button2Text="Kérjen ajánlatot!"
        // heroImage="/contacts-hero.jpg"
      />
    </main>
  );
};

export default Kapcsolat;
