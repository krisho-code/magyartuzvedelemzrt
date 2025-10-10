import React from "react";
import { getI18n } from "@/locales/server";
import UnderlinedTitle from "../Global Components/UnderlinedTitle";
import HomeReferencesInfos from "./HomeReferencesInfos";

const HomeReferences = async () => {
  const t = await getI18n();

  return (
    <section className="home-references-section flex items-center justify-center py-16 bg-gray-100">
      <div className="container flex flex-col gap-16 px-8">
        <div className="flex flex-col gap-8">
          <UnderlinedTitle
            pageName={t("homeReferences.pageName")}
            extraClassesDiv="items-center"
            extraClassesH2="text-center"
            title={t("homeReferences.title")}
          />
          <p className="text-medium-normal text-center">
            {t("homeReferences.description")}
          </p>
        </div>
        <HomeReferencesInfos />
      </div>
    </section>
  );
};

export default HomeReferences;
