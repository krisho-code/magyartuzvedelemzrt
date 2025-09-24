import React from "react";
import UnderlinedTitle from "../Global Components/UnderlinedTitle";
import HomeServicesInfos from "./HomeServicesInfos";
import CallToActionButton from "../CallToAction/CallToActionButton";

const HomeServices = () => {
  return (
    <section className="home-service-section flex items-center justify-center py-16 bg-gray-50">
      <div className="container flex flex-col gap-16 px-8">
        <UnderlinedTitle
          pageName="Szolgáltatások"
          title="Tekintsd meg szolgáltatásainkat!"
        />
        <HomeServicesInfos />
        <CallToActionButton
          link="/szolgaltatasok"
          text="Tekintse meg minden szolgáltatásunkat!"
        />
      </div>
    </section>
  );
};

export default HomeServices;
