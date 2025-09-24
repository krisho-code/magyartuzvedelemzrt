import React from "react";
import Hero from "../components/Global Components/Hero";
import ContactInfos from "../components/Contacts/ContactInfos";
import ContactForm from "../components/Contacts/ContactForm";
import ContactCallToAction from "../components/CallToAction/ContactCallToAction";

const Kapcsolat = () => {
  return (
    <main className="pt-24">
      <Hero
        section="contacts"
        pageName="Kapcsolatok"
        pageTitle="Hozzánk bármivel fordulhat!"
        pageDescription="Lépjen velünk kapcsolatba bizalommal, ha tűzvédelemre, azbesztmentesítésre, veszélyes anyagok eltávolítására, vagy épületbiztonsági tanácsadásra van szüksége! Szakértő csapatunk készséggel válaszol kérdéseire, legyen szó akár konkrét ajánlatkérésről, akár általános tájékozódásról."
        button1Text="Kérjen visszahívást!"
        button2Text="Kérjen ajánlatot!"
        link1="#contact-call-to-action-section"
        link2="#conact-form-section"
        // heroImage="/contacts-hero.jpg"
      />
      <ContactInfos />
      <ContactForm />
      <ContactCallToAction />
    </main>
  );
};

export default Kapcsolat;
