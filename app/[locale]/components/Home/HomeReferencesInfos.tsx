import React from "react";
import { getI18n } from "@/locales/server";
import HomeReferencesInfosContent from "./HomeReferencesInfosContent";

const HomeReferencesInfos = async () => {
  const t = await getI18n();

  return (
    <div className="home-references-infos grid grid-rows-3 gap-16 lg:grid-rows-1 lg:grid-cols-3 lg:gap-8">
      <HomeReferencesInfosContent
        img="/reference-a.jpg"
        title={t("homeReferences.projects.veritas")}
      />
      <HomeReferencesInfosContent
        img="/reference-b.jpg"
        title={t("homeReferences.projects.alfaplast")}
      />
      <HomeReferencesInfosContent
        img="/reference-c.jpg"
        title={t("homeReferences.projects.dunapark")}
      />
    </div>
  );
};

export default HomeReferencesInfos;
