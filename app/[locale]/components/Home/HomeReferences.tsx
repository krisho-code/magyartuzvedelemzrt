import React from "react";
import HomeTitle from "../HomeTitle";
import HomeReferencesInfos from "../HomeReferencesInfos";

const HomeReferences = () => {
  return (
    <section className="home-references-section flex items-center justify-center py-16">
      <div className="container flex flex-col gap-16 px-8">
        <div className="flex flex-col gap-8">
          <HomeTitle
            pageName="Referenciák"
            extraClassesDiv="items-center"
            extraClassesH2="text-center"
            title="Ők már megbíztak bennünk!"
          />
          <p className="text-medium-normal text-center">
            Referenciáink a szakmai elkötelezettségünket és megbízhatóságunkat
            igazolják, számos sikeresen megvalósított projekt bizonyítja munkánk
            minőségét.
          </p>
        </div>
        <HomeReferencesInfos />
      </div>
    </section>
  );
};

export default HomeReferences;
