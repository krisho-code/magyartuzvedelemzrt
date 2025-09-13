import React from "react";
import HomeTitle from "../HomeTitle";
import HomeServicesInfos from "../HomeServicesInfos";
import CallToActionButton from "../Buttons/CallToActionButton";

const HomeServices = () => {
  return (
    <section className="home-service-section flex items-center justify-center py-16 bg-gray-100">
      <div className="container flex flex-col gap-16 px-8">
        <HomeTitle pageName="Szolgáltatások" title="Fő szolgáltatásaink" />
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
