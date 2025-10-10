import React from "react";
import { getI18n } from "@/locales/server";
import Hero from "../components/Global Components/Hero";
import Stats from "../components/Global Components/Stats";
import HomeAbout from "../components/Home/HomeAbout";
import AboutFuture from "../components/About/AboutFuture";
import AboutTeam from "../components/About/AboutTeam";
import CallToAction from "../components/CallToAction/CallToAction";

const Cégismertető = async () => {
  const t = await getI18n();

  return (
    <main className="pt-24">
      <Hero
        section="about"
        pageName={t("aboutPage.hero.pageName")}
        pageTitle={t("aboutPage.hero.title")}
        pageDescription={t("aboutPage.hero.description")}
        button1Text={t("aboutPage.hero.button1")}
        button2Text={t("aboutPage.hero.button2")}
        link1="#about-future-section"
        link2="#about-team-section"
        // heroImage="/about-hero.jpg"
      />
      <Stats
        title={t("aboutPage.stats.title")}
        description={t("aboutPage.stats.description")}
        stat1={t("aboutPage.stats.stat1")}
        text1={t("aboutPage.stats.text1")}
        stat2={t("aboutPage.stats.stat2")}
        text2={t("aboutPage.stats.text2")}
        stat3={t("aboutPage.stats.stat3")}
        text3={t("aboutPage.stats.text3")}
      />
      <HomeAbout hiddenButton={true} />
      <AboutFuture />
      <AboutTeam />
      <CallToAction title={t("aboutPage.cta.title")} />
    </main>
  );
};

export default Cégismertető;
