import React from "react";
import Link from "next/link";

interface HomeReferencesInfosContentProps {
  img: string;
  title: string;
}

const HomeReferencesInfosContent: React.FC<HomeReferencesInfosContentProps> = ({
  img,
  title,
}) => {
  return (
    <Link href="#" className="relative overflow-clip">
      <img src={`${img}`} alt="" />
      <h3 className="text-h3 text-center absolute top-[50%] left-[50%] text-white">
        {title}
      </h3>
    </Link>
  );
};

export default HomeReferencesInfosContent;
