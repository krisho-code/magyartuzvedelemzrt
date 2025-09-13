import React from "react";
import HomeServicesInfosContent from "./HomeServicesInfosContent";

const HomeServicesInfos = () => {
  return (
    <div className="row grid grid-rows-[auto_auto] lg:grid-rows-1 lg:grid-cols-2 gap-16 lg:gap-16">
      <div className="col order-2 lg:order-1 flex flex-col justify-center gap-8">
        <HomeServicesInfosContent
          title="Tűzvédelem"
          description="Professzionális passzív tűzvédelmi megoldások"
        />
        <HomeServicesInfosContent
          title="Azbesztmentesítés"
          description="Biztonságosan és szakszerűen, teljes körű szolgáltatás országosan"
        />
        <HomeServicesInfosContent
          title="Vízkármentesítés"
          description="Professzionális megoldások víz okozta károk esetén"
        />
      </div>
      <div className="col order-1 lg:order-2 flex items-center justify-start">
        <img src="/home-services.jpg" alt="" />
      </div>
    </div>
  );
};

export default HomeServicesInfos;
