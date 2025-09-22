import React from "react";

interface PersonProps {
  img: string;
  name?: string;
  position?: string;
}

const Person: React.FC<PersonProps> = ({
  img,
  name = "Full Name",
  position = "Position",
}) => {
  return (
    <div className="person flex flex-col items-center justify-center gap-4 h-fit lg:items-start lg:justify-start">
      <img src={`${img}`} alt="" />
      <div className="flex flex-col">
        <p className="text-bold-normal">Full Name</p>
        <p className="text-regular-normal">Position</p>
      </div>
    </div>
  );
};

export default Person;
