import React from "react";
import Person from "./Person";

const AboutTeam = () => {
  return (
    <section
      id="about-team-section"
      className="flex items-center justify-center py-16"
    >
      <div className="container flex flex-col gap-16 px-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-h2">Ismerje meg csapatunkat!</h2>
          <p className="text-medium-normal">
            Tapasztalt kollégáink együttműködésével, magas szintű
            elhivatottsággal valósítjuk meg projektjeinket.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-16 lg:grid-cols-4 lg:gap-16">
          <Person img="/person1.jpg" />
          <Person img="/person2.jpg" />
          <Person img="/person3.jpg" />
          <Person img="/person4.jpg" />
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
