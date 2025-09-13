import React from "react";
import HomeReferencesInfosContent from "./HomeReferencesInfosContent";

const HomeReferencesInfos = () => {
  return (
    <div className="home-references-infos grid grid-rows-3 gap-16 lg:grid-rows-1 lg:grid-cols-3 lg:gap-8">
      <HomeReferencesInfosContent
        img="/reference-a.jpg"
        title="Veritas Tower"
      />
      <HomeReferencesInfosContent
        img="/reference-b.jpg"
        title="AlfaPlast Gyártelep"
      />
      <HomeReferencesInfosContent
        img="/reference-c.jpg"
        title="DunaPark Társasházak"
      />
    </div>
  );
};

export default HomeReferencesInfos;
