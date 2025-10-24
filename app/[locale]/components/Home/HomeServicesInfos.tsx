import React from "react";
import { getI18n } from "@/locales/server";
import HomeServicesInfosContent from "./HomeServicesInfosContent";

const HomeServicesInfos = async () => {
  const t = await getI18n();

  return (
    <div className="row grid grid-rows-[auto_auto] lg:grid-rows-1 lg:grid-cols-2 gap-16 lg:gap-16">
      <div className="col order-2 lg:order-1 flex flex-col justify-center gap-8">
        <HomeServicesInfosContent
          title={t("homeServices.services.tuzvedelem")}
          link="/szolgaltatasok/tuzvedelem"
        />
        <HomeServicesInfosContent
          title={t("homeServices.services.azbesztmentesites")}
          link="/szolgaltatasok/azbesztmentesites"
        />
        <HomeServicesInfosContent
          title={t("homeServices.services.tuzkarmentesites")}
          link="/szolgaltatasok/tuzkarmentesites"
        />
        <HomeServicesInfosContent
          title={t("homeServices.services.vizkarmentesites")}
          link="/szolgaltatasok/vizkarmentesites"
        />
        <HomeServicesInfosContent
          title={t("homeServices.services.tisztitasesveszelytelenites")}
          link="/szolgaltatasok/tisztitasesveszelytelenites"
        />
        <HomeServicesInfosContent
          title={t("homeServices.services.alpintechnika")}
          link="/szolgaltatasok/alpintechnika"
        />
      </div>
      <img
        src="/home-services.jpg"
        alt=""
        className="order-1 lg:order-2 w-full h-auto max-h-96 lg:h-full lg:max-h-none object-cover"
      />
    </div>
  );
};

export default HomeServicesInfos;
