"use client";

import React from "react";
import { useI18n } from "../../../../locales/client";
import Service from "./Service";

const Services = () => {
  const t = useI18n();

  return (
    <section id="services-section">
      <div className="frame">
        <Service
          name={t("servicesPage.services.tuzvedelem.name")}
          description={t("servicesPage.services.tuzvedelem.description")}
          text={t("servicesPage.services.tuzvedelem.text")}
          link="tuzvedelem"
          img="/images/tuzvedelem.png"
        />
        <Service
          name={t("servicesPage.services.azbesztmentesites.name")}
          description={t("servicesPage.services.azbesztmentesites.description")}
          text={t("servicesPage.services.azbesztmentesites.text")}
          link="azbesztmentesites"
          img="/images/azbesztmentesites.png"
        />
        <Service
          name={t("servicesPage.services.tuzkarmentesites.name")}
          description={t("servicesPage.services.tuzkarmentesites.description")}
          text={t("servicesPage.services.tuzkarmentesites.text")}
          link="tuzkarmentesites"
          img="/images/tuzkarmentesites.png"
        />
        <Service
          name={t("servicesPage.services.vizkarmentesites.name")}
          description={t("servicesPage.services.vizkarmentesites.description")}
          text={t("servicesPage.services.vizkarmentesites.text")}
          link="vizkarmentesites"
          img="/images/vizkarmentesites.png"
        />
        <Service
          name={t("servicesPage.services.tisztitasesveszelytelenites.name")}
          description={t(
            "servicesPage.services.tisztitasesveszelytelenites.description"
          )}
          text={t("servicesPage.services.tisztitasesveszelytelenites.text")}
          link="tisztitasesveszelytelenites"
          img="/images/iparitesv.png"
        />
        <Service
          name={t("servicesPage.services.alpintechnika.name")}
          description={t("servicesPage.services.alpintechnika.description")}
          text={t("servicesPage.services.alpintechnika.text")}
          img="/images/alpintechnika.png"
          link="alpintechnika"
          borderBottom={false}
        />
      </div>
    </section>
  );
};

export default Services;
