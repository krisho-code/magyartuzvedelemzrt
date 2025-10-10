import React from "react";
import { getI18n } from "../../../../locales/server";
import ServiceHero from "../../components/Services/ServiceHero";
import ServiceAbout from "../../components/Services/ServiceAbout";
import ServiceInfos from "../../components/Services/ServiceInfos";
import ServiceImages from "../../components/Services/ServiceImages";
import CallToAction from "../../components/CallToAction/CallToAction";

const Azbesztmentesites = async () => {
  const t = await getI18n();

  return (
    <main>
      <ServiceHero
        pageName="azbesztmentesites"
        title={t("servicePages.azbesztmentesites.hero.title")}
        description={t("servicePages.azbesztmentesites.hero.description")}
      />
      <ServiceAbout
        title={t("servicePages.azbesztmentesites.about.title")}
        description={t("servicePages.azbesztmentesites.about.description")}
      />
      <ServiceInfos
        title={t("servicePages.azbesztmentesites.infos.title")}
        text={t("servicePages.azbesztmentesites.infos.text")}
        info1title={t("servicePages.azbesztmentesites.infos.info1title")}
        info1text={t("servicePages.azbesztmentesites.infos.info1text")}
        info2title={t("servicePages.azbesztmentesites.infos.info2title")}
        info2text={t("servicePages.azbesztmentesites.infos.info2text")}
        info3title={t("servicePages.azbesztmentesites.infos.info3title")}
        info3text={t("servicePages.azbesztmentesites.infos.info3text")}
        info4title={t("servicePages.azbesztmentesites.infos.info4title")}
        info4text={t("servicePages.azbesztmentesites.infos.info4text")}
      />
      <ServiceImages imgs="/azbesztmentesites.jpg" />
      <CallToAction title={t("servicePages.common.ctaTitle")} />
    </main>
  );
};

export default Azbesztmentesites;
