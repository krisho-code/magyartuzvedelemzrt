import React from "react";
import { getI18n } from "../../../../locales/server";
import ServiceHero from "../../components/Services/ServiceHero";
import ServiceAbout from "../../components/Services/ServiceAbout";
import ServiceInfos from "../../components/Services/ServiceInfos";
import ServiceImages from "../../components/Services/ServiceImages";
import CallToAction from "../../components/CallToAction/CallToAction";

const Tuzkarmentesites = async () => {
  const t = await getI18n();

  return (
    <main>
      <ServiceHero
        pageName="tuzkarmentesites"
        title={t("servicePages.tuzkarmentesites.hero.title")}
        description={t("servicePages.tuzkarmentesites.hero.description")}
      />
      <ServiceAbout
        title={t("servicePages.tuzkarmentesites.about.title")}
        description={t("servicePages.tuzkarmentesites.about.description")}
      />
      <ServiceInfos
        title={t("servicePages.tuzkarmentesites.infos.title")}
        text={t("servicePages.tuzkarmentesites.infos.text")}
        info1title={t("servicePages.tuzkarmentesites.infos.info1title")}
        info1text={t("servicePages.tuzkarmentesites.infos.info1text")}
        info2title={t("servicePages.tuzkarmentesites.infos.info2title")}
        info2text={t("servicePages.tuzkarmentesites.infos.info2text")}
        info3title={t("servicePages.tuzkarmentesites.infos.info3title")}
        info3text={t("servicePages.tuzkarmentesites.infos.info3text")}
        info4title={t("servicePages.tuzkarmentesites.infos.info4title")}
        info4text={t("servicePages.tuzkarmentesites.infos.info4text")}
      />
      <ServiceImages imgs="/tuzkarmentesites.jpg" />
      <CallToAction title={t("servicePages.common.ctaTitle")} />
    </main>
  );
};

export default Tuzkarmentesites;
