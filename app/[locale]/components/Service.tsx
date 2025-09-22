import React from "react";
import Link from "next/link";

interface ServiceProps {
  name: string;
  description: string;
  text: string;
  link: string;
  img: string;
  borderBottom?: boolean;
}

const Service: React.FC<ServiceProps> = ({
  name,
  description,
  text,
  link,
  img,
  borderBottom = true,
}) => {
  return (
    <div
      className={`service flex items-center justify-center py-8 w-full ${
        borderBottom ? "border-b-2" : null
      } transition duration-250 ease-in-out hover:bg-gray-200`}
    >
      <div className="container grid gap-8 lg:grid-cols-2 items-center lg:gap-16 p-8">
        <div className="content flex flex-col gap-4">
          <h2 className="text-h2">{name}</h2>
          <p className="text-bold-normal">{description}</p>
          <p className="text-regular-normal">{text}</p>
          <Link
            href={`szolgaltatasok/${link}`}
            className="text-regular-normal flex gap-2"
          >
            Tudjon meg többet
            <img src="/icons/arrow-icon.svg" alt="" className="w-2" />
          </Link>
        </div>
        <img
          src={`${img}`}
          alt=""
          className="w-full max-h-[320px] object-cover lg:max-h-[448px]"
        />
      </div>
    </div>
  );
};

export default Service;
