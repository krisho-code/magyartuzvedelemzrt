import React from "react";
import Link from "next/link";

interface HomeReferencesInfosContentProps {
  img: string;
  title: string;
  link?: string;
}

const HomeReferencesInfosContent: React.FC<HomeReferencesInfosContentProps> = ({
  img,
  title,
  link = "/referenciak",
}) => {
  return (
    <Link href={`${link}`} className="relative overflow-clip">
      <img src={`${img}`} alt="" />
      <h3 className="text-h3 text-center absolute top-[50%] left-[50%] text-white">
        {title}
      </h3>
    </Link>
  );
};

export default HomeReferencesInfosContent;
