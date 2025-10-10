import React from "react";
import { getI18n } from "../../../../locales/server";
import ServiceHero from "../../components/Services/ServiceHero";
import ServiceAbout from "../../components/Services/ServiceAbout";
import ServiceInfos from "../../components/Services/ServiceInfos";
import ServiceImages from "../../components/Services/ServiceImages";
import CallToAction from "../../components/CallToAction/CallToAction";

const Alpintechnika = async () => {
  const t = await getI18n();

  return (
    <main>
      <ServiceHero
        pageName="alpintechnika"
        title={t("servicePages.alpintechnika.hero.title")}
        description={t("servicePages.alpintechnika.hero.description")}
      />
      <ServiceAbout
        title={t("servicePages.alpintechnika.about.title")}
        description={t("servicePages.alpintechnika.about.description")}
      />
      <ServiceInfos
        title={t("servicePages.alpintechnika.infos.title")}
        text={t("servicePages.alpintechnika.infos.text")}
        info1title={t("servicePages.alpintechnika.infos.info1title")}
        info1text={t("servicePages.alpintechnika.infos.info1text")}
        info2title={t("servicePages.alpintechnika.infos.info2title")}
        info2text={t("servicePages.alpintechnika.infos.info2text")}
        info3title={t("servicePages.alpintechnika.infos.info3title")}
        info3text={t("servicePages.alpintechnika.infos.info3text")}
        info4title={t("servicePages.alpintechnika.infos.info4title")}
        info4text={t("servicePages.alpintechnika.infos.info4text")}
      />
      <ServiceImages imgs="/alpintechnika.jpg" />
      <CallToAction title={t("servicePages.common.ctaTitle")} />
    </main>
  );
};

export default Alpintechnika;
