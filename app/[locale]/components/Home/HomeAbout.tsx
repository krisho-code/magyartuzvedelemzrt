import React from "react";
import { getI18n } from "@/locales/server";
import UnderlinedTitle from "../Global Components/UnderlinedTitle";
import AboutInfos from "../About/AboutInfos";
import CallToActionButton from "../CallToAction/CallToActionButton";

interface HomeAboutProps {
  hiddenButton?: boolean;
  id?: string;
}

const HomeAbout: React.FC<HomeAboutProps> = async ({
  hiddenButton = false,
  id,
}) => {
  const t = await getI18n();

  return (
    <section
      className="home-about-section flex items-center justify-center py-16"
      id={id}
    >
      <div className="container flex flex-col gap-16 px-8">
        <UnderlinedTitle
          pageName={t("homeAbout.pageName")}
          title={t("homeAbout.title")}
        />
        <AboutInfos />
        {!hiddenButton ? (
          <CallToActionButton link="/cegismerteto" text={t("homeAbout.cta")} />
        ) : null}
      </div>
    </section>
  );
};

export default HomeAbout;
