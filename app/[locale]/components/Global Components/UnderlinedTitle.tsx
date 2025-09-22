import React from "react";
import PageName from "./PageName";

interface HomeTitleProps {
  pageName: string;
  extraClassesDiv?: string;
  extraClassesH2?: string;
  title: string;
}

const UnderlinedTitle: React.FC<HomeTitleProps> = ({
  pageName,
  extraClassesDiv,
  extraClassesH2,
  title,
}) => {
  return (
    <div className={`flex flex-col gap-2 ${extraClassesDiv}`}>
      <PageName pageName={`${pageName}`} />
      <h2 className={`text-h2 ${extraClassesH2}`}>{title}</h2>
    </div>
  );
};

export default UnderlinedTitle;
