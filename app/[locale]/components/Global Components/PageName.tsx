import React from "react";

interface PageNameProps {
  pageName: string;
}

const PageName: React.FC<PageNameProps> = ({ pageName }) => {
  return (
    <p className="text-regular-normal w-fit border-b-4 color-primary-b">
      {pageName}
    </p>
  );
};

export default PageName;
