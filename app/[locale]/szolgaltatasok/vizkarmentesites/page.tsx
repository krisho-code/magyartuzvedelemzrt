import React from "react";
import { getI18n } from "../../../../locales/server";
import ServiceHero from "../../components/Services/ServiceHero";
import ServiceAbout from "../../components/Services/ServiceAbout";
import ServiceInfos from "../../components/Services/ServiceInfos";
import ServiceImages from "../../components/Services/ServiceImages";
import CallToAction from "../../components/CallToAction/CallToAction";

const Vizkarmentesites = async () => {
  const t = await getI18n();

  return (
    <main>
      <ServiceHero
        pageName="vizkarmentesites"
        title={t("servicePages.vizkarmentesites.hero.title")}
        description={t("servicePages.vizkarmentesites.hero.description")}
      />
      <ServiceAbout
        title={t("servicePages.vizkarmentesites.about.title")}
        description={t("servicePages.vizkarmentesites.about.description")}
      />
      <ServiceInfos
        title={t("servicePages.vizkarmentesites.infos.title")}
        text={t("servicePages.vizkarmentesites.infos.text")}
        info1title={t("servicePages.vizkarmentesites.infos.info1title")}
        info1text={t("servicePages.vizkarmentesites.infos.info1text")}
        info2title={t("servicePages.vizkarmentesites.infos.info2title")}
        info2text={t("servicePages.vizkarmentesites.infos.info2text")}
        info3title={t("servicePages.vizkarmentesites.infos.info3title")}
        info3text={t("servicePages.vizkarmentesites.infos.info3text")}
        info4title={t("servicePages.vizkarmentesites.infos.info4title")}
        info4text={t("servicePages.vizkarmentesites.infos.info4text")}
      />
      <ServiceImages imgs="/vizkarmentesites.jpg" />
      <CallToAction title={t("servicePages.common.ctaTitle")} />
    </main>
  );
};

export default Vizkarmentesites;
