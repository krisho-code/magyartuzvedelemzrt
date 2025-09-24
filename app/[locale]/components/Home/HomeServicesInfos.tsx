import React from "react";
import HomeServicesInfosContent from "./HomeServicesInfosContent";

const HomeServicesInfos = () => {
  return (
    <div className="row grid grid-rows-[auto_auto] lg:grid-rows-1 lg:grid-cols-2 gap-16 lg:gap-16">
      <div className="col order-2 lg:order-1 flex flex-col justify-center gap-8">
        <HomeServicesInfosContent
          title="Tűzvédelem"
          link="/szolgaltatasok/tuzvedelem"
        />
        <HomeServicesInfosContent
          title="Azbesztmentesítés"
          link="/szolgaltatasok/azbesztmentesites"
        />
        <HomeServicesInfosContent
          title="Tűzkármentesítés"
          link="/szolgaltatasok/tuzkarmentesites"
        />
        <HomeServicesInfosContent
          title="Vízkármentesítés"
          link="/szolgaltatasok/vizkarmentesites"
        />
        <HomeServicesInfosContent
          title="Ipari tisztítás és veszélytelenítés"
          link="/szolgaltatasok/tisztitasesveszelytelenites"
        />
        <HomeServicesInfosContent
          title="Ipari alpintechnika"
          link="/szolgaltatasok/alpintechnika"
        />
      </div>
      <img
        src="/home-services.jpg"
        alt=""
        className="order-1 lg:order-2 h-full object-cover"
      />
    </div>
  );
};

export default HomeServicesInfos;
