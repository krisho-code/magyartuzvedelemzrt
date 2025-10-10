import React from "react";
import { getI18n } from "../../../locales/server";
import Hero from "../components/Global Components/Hero";
import Stats from "../components/Global Components/Stats";
import Services from "../components/Services/Services";
import CallToAction from "../components/CallToAction/CallToAction";

const Szolgáltatások = async () => {
  const t = await getI18n();

  return (
    <main className="pt-24">
      <Hero
        section="services"
        pageName={t("servicesPage.hero.pageName")}
        pageTitle={t("servicesPage.hero.title")}
        pageDescription={t("servicesPage.hero.description")}
        button1Text={t("servicesPage.hero.button1")}
        button2Text={t("servicesPage.hero.button2")}
        link1="#services-section"
        link2="/kapcsolat"
        // heroImage="/services-hero.jpg"
      />
      <Stats
        title={t("servicesPage.stats.title")}
        description={t("servicesPage.stats.description")}
        stat1={t("servicesPage.stats.stat1")}
        text1={t("servicesPage.stats.text1")}
        stat2={t("servicesPage.stats.stat2")}
        text2={t("servicesPage.stats.text2")}
        stat3={t("servicesPage.stats.stat3")}
        text3={t("servicesPage.stats.text3")}
      />
      <Services />
      <CallToAction title={t("servicesPage.cta.title")} />
    </main>
  );
};

export default Szolgáltatások;
