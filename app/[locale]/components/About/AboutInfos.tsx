import React from "react";
import { getI18n } from "@/locales/server";
import AboutInfosContent from "./AboutInfosContent";

const AboutInfos = async () => {
  const t = await getI18n();

  return (
    <div className="row grid grid-cols-1 gap-8 lg:grid-cols-4">
      <AboutInfosContent
        img="/icons/fire-icon-secondary.svg"
        title={t("homeAbout.info1.title")}
        description={t("homeAbout.info1.description")}
      />
      <AboutInfosContent
        img="/icons/fire-icon-secondary.svg"
        title={t("homeAbout.info2.title")}
        description={t("homeAbout.info2.description")}
      />
      <AboutInfosContent
        img="/icons/fire-icon-secondary.svg"
        title={t("homeAbout.info3.title")}
        description={t("homeAbout.info3.description")}
      />
      <AboutInfosContent
        img="/icons/fire-icon-secondary.svg"
        title={t("homeAbout.info4.title")}
        description={t("homeAbout.info4.description")}
      />
    </div>
  );
};

export default AboutInfos;
