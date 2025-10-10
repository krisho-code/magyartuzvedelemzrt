import React from "react";
import { getI18n } from "@/locales/server";

interface PersonProps {
  img: string;
  name?: string;
  position?: string;
}

const Person: React.FC<PersonProps> = async ({ img, name, position }) => {
  const t = await getI18n();

  return (
    <div className="person flex flex-col items-center justify-center gap-4 h-fit lg:items-start lg:justify-start">
      <img src={`${img}`} alt="" />
      <div className="flex flex-col">
        <p className="text-bold-normal">
          {name || t("aboutPage.team.person.defaultName")}
        </p>
        <p className="text-regular-normal">
          {position || t("aboutPage.team.person.defaultPosition")}
        </p>
      </div>
    </div>
  );
};

export default Person;
