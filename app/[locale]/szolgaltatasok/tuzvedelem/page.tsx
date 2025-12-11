import React from "react";
import { getI18n } from "../../../../locales/server";
import ServiceHero from "../../components/Services/ServiceHero";
import ServiceAbout from "../../components/Services/ServiceAbout";
import ServiceInfos from "../../components/Services/ServiceInfos";
import ServiceImages from "../../components/Services/ServiceImages";
import CallToAction from "../../components/CallToAction/CallToAction";

const Tűzvédelem = async () => {
  const t = await getI18n();

  return (
    <main>
      <ServiceHero
        pageName="tuzvedelem"
        title={t("servicePages.tuzvedelem.hero.title")}
        description={t("servicePages.tuzvedelem.hero.description")}
      />
      <ServiceAbout
        title={t("servicePages.tuzvedelem.about.title")}
        description={t("servicePages.tuzvedelem.about.description")}
      />
      <ServiceInfos
        title={t("servicePages.tuzvedelem.infos.title")}
        text={t("servicePages.tuzvedelem.infos.text")}
        info1title={t("servicePages.tuzvedelem.infos.info1title")}
        info1text={t("servicePages.tuzvedelem.infos.info1text")}
        info2title={t("servicePages.tuzvedelem.infos.info2title")}
        info2text={t("servicePages.tuzvedelem.infos.info2text")}
        info3title={t("servicePages.tuzvedelem.infos.info3title")}
        info3text={t("servicePages.tuzvedelem.infos.info3text")}
        info4title={t("servicePages.tuzvedelem.infos.info4title")}
        info4text={t("servicePages.tuzvedelem.infos.info4text")}
      />
      <ServiceImages
        img1="/images/tuzvedelem1.png"
        img2="/images/tuzvedelem2.png"
        img3="/images/tuzvedelem3.png"
      />
      <CallToAction title={t("servicePages.common.ctaTitle")} />
    </main>
  );
};

export default Tűzvédelem;
