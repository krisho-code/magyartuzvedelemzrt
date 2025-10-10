import React from "react";
import { getI18n } from "@/locales/server";

const AboutFuture = async () => {
  const t = await getI18n();

  return (
    <section
      id="about-future-section"
      className="flex items-center justify-center py-16 bg-gray-100"
    >
      <div className="container grid gap-16 items-center lg:grid-cols-2 px-8">
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          <div className="flex flex-col gap-8">
            <h2 className="text-h2">{t("aboutPage.future.title")}</h2>
            <p className="text-regular-normal">
              {t("aboutPage.future.description")}
            </p>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-h3">{t("aboutPage.future.mission.title")}</h3>
              <p>{t("aboutPage.future.mission.text")}</p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-h3">{t("aboutPage.future.vision.title")}</h3>
              <p>{t("aboutPage.future.vision.text")}</p>
            </div>
          </div>
        </div>
        <img
          src="/about-future.jpg"
          alt=""
          className="h-full object-cover order-1 lg:order-2"
        />
      </div>
    </section>
  );
};

export default AboutFuture;
