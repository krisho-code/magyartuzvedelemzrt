import React from "react";
import { getI18n } from "../../../../locales/server";
import ServiceHero from "../../components/Services/ServiceHero";
import ServiceAbout from "../../components/Services/ServiceAbout";
import ServiceInfos from "../../components/Services/ServiceInfos";
import ServiceImages from "../../components/Services/ServiceImages";
import CallToAction from "../../components/CallToAction/CallToAction";

const Tisztitasesveszelytelenites = async () => {
  const t = await getI18n();

  return (
    <main>
      <ServiceHero
        pageName="iparitesv"
        title={t("servicePages.tisztitasesveszelytelenites.hero.title")}
        description={t(
          "servicePages.tisztitasesveszelytelenites.hero.description"
        )}
      />
      <ServiceAbout
        title={t("servicePages.tisztitasesveszelytelenites.about.title")}
        description={t(
          "servicePages.tisztitasesveszelytelenites.about.description"
        )}
      />
      <ServiceInfos
        title={t("servicePages.tisztitasesveszelytelenites.infos.title")}
        text={t("servicePages.tisztitasesveszelytelenites.infos.text")}
        info1title={t(
          "servicePages.tisztitasesveszelytelenites.infos.info1title"
        )}
        info1text={t(
          "servicePages.tisztitasesveszelytelenites.infos.info1text"
        )}
        info2title={t(
          "servicePages.tisztitasesveszelytelenites.infos.info2title"
        )}
        info2text={t(
          "servicePages.tisztitasesveszelytelenites.infos.info2text"
        )}
        info3title={t(
          "servicePages.tisztitasesveszelytelenites.infos.info3title"
        )}
        info3text={t(
          "servicePages.tisztitasesveszelytelenites.infos.info3text"
        )}
        info4title={t(
          "servicePages.tisztitasesveszelytelenites.infos.info4title"
        )}
        info4text={t(
          "servicePages.tisztitasesveszelytelenites.infos.info4text"
        )}
      />
      <ServiceImages
        img1="/images/iparitesv1.png"
        img2="/images/iparitesv2.png"
        img3="/images/iparitesv3.png"
      />
      <CallToAction title={t("servicePages.common.ctaTitle")} />
    </main>
  );
};

export default Tisztitasesveszelytelenites;
