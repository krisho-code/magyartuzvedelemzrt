import test from "node:test";
import React from "react";

interface StatsProps {
  title: string;
  description: string;
  stat1: string;
  text1: string;
  stat2: string;
  text2: string;
  stat3: string;
  text3: string;
}

const Stats: React.FC<StatsProps> = ({
  title,
  description,
  stat1,
  text1,
  stat2,
  text2,
  stat3,
  text3,
}) => {
  return (
    <section className="stats-section flex items-center justify-center py-16 bg-gray-50">
      <div className="container flex flex-col gap-16 px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <h2 className="text-h2">{title}</h2>
          <p>{description}</p>
        </div>
        <div className="grid gap-16 items-center lg:grid-cols-3">
          <div className="col flex flex-col gap-4 h-fit border-l-2 pl-4">
            <p className="text-5xl md:text-6xl lg:text-7xl font-bold color-primary-text">
              {stat1}
            </p>
            <p className="text-bold-normal">{text1}</p>
          </div>
          <div className="col flex flex-col gap-4 h-fit border-l-2 pl-4">
            <p className="text-5xl lg:text-7xl font-bold color-primary-text">
              {stat2}
            </p>
            <p className="text-bold-normal">{text2}</p>
          </div>
          <div className="col flex flex-col gap-4 h-fit border-l-2 pl-4">
            <p className="text-5xl lg:text-7xl font-bold color-primary-text">
              {stat3}
            </p>
            <p className="text-bold-normal">{text3}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
