import React from "react";
import { getI18n } from "@/locales/server";
import UnderlinedTitle from "../Global Components/UnderlinedTitle";
import HomeServicesInfos from "./HomeServicesInfos";
import CallToActionButton from "../CallToAction/CallToActionButton";

const HomeServices = async () => {
  const t = await getI18n();

  return (
    <section className="home-service-section flex items-center justify-center py-16 bg-gray-50">
      <div className="container flex flex-col gap-16 px-8">
        <UnderlinedTitle
          pageName={t("homeServices.pageName")}
          title={t("homeServices.title")}
        />
        <HomeServicesInfos />
        <CallToActionButton
          link="/szolgaltatasok"
          text={t("homeServices.cta")}
        />
      </div>
    </section>
  );
};

export default HomeServices;
