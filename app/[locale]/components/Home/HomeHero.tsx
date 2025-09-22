import React from "react";
import { getI18n } from "@/locales/server";

import CallToActionButton from "../CallToAction/CallToActionButton";

const HomeHero = async () => {
  const t = await getI18n();

  return (
    <section className="home-hero-section h-200 md:h-224 flex items-center justify-center">
      <div className="container flex flex-col gap-8 px-8">
        <h1 className="text-h1 xl:w-60/100 text-white">
          {t("mainHero.title")}
        </h1>
        <p className="text-medium-normal text-white">
          {t("mainHero.description")}
        </p>
        <div className="actions flex flex-col md:flex-row gap-4">
          <CallToActionButton
            link="/kapcsolat"
            text={`${t("mainHero.cta1")}`}
          />
          <CallToActionButton
            link="/szolgaltatasok"
            buttonType="alternative"
            text={`${t("mainHero.cta2")}`}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
