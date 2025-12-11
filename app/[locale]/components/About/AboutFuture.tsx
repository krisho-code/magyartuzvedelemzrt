import React from "react";
import { getI18n } from "@/locales/server";

const AboutFuture = async () => {
  const t = await getI18n();

  return (
    <section
      id="about-future-section"
      className="w-full max-w-full overflow-hidden flex items-center justify-center py-16 bg-gray-100"
    >
      <div className="container grid gap-16 items-center lg:grid-cols-2 px-8 w-full max-w-full">
        <div className="flex flex-col gap-8 order-2 lg:order-1 w-full max-w-full">
          <div className="flex flex-col gap-8">
            <h2 className="text-h2 break-words overflow-hidden text-wrap">
              {t("aboutPage.future.title")}
            </h2>
            <p className="text-regular-normal break-words overflow-hidden text-wrap">
              {t("aboutPage.future.description")}
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 w-full">
            <div className="flex flex-col gap-4 flex-1 min-w-0">
              <h3 className="text-h3 break-words overflow-hidden text-wrap">
                {t("aboutPage.future.mission.title")}
              </h3>
              <p className="break-words overflow-hidden text-wrap">
                {t("aboutPage.future.mission.text")}
              </p>
            </div>
            <div className="flex flex-col gap-4 flex-1 min-w-0">
              <h3 className="text-h3 break-words overflow-hidden text-wrap">
                {t("aboutPage.future.vision.title")}
              </h3>
              <p className="break-words overflow-hidden text-wrap">
                {t("aboutPage.future.vision.text")}
              </p>
            </div>
          </div>
        </div>
        <img
          src="/images/about-future.png"
          alt=""
          className="w-full h-full max-w-full object-cover order-1 lg:order-2"
        />
      </div>
    </section>
  );
};

export default AboutFuture;
