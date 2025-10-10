import React from "react";
import { getI18n } from "../../../locales/server";
import Hero from "../components/Global Components/Hero";
import ContactInfos from "../components/Contacts/ContactInfos";
import ContactForm from "../components/Contacts/ContactForm";
import ContactCallToAction from "../components/CallToAction/ContactCallToAction";

const Kapcsolat = async () => {
  const t = await getI18n();

  return (
    <main className="pt-24">
      <Hero
        section="contacts"
        pageName={t("contactPage.hero.pageName")}
        pageTitle={t("contactPage.hero.title")}
        pageDescription={t("contactPage.hero.description")}
        button1Text={t("contactPage.hero.button1")}
        button2Text={t("contactPage.hero.button2")}
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
