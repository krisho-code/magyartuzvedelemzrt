import React from "react";
import PageName from "../PageName";
import ServiceInfo from "../ServiceInfo";
import CallToActionButton from "../Buttons/CallToActionButton";

const HomeServices = () => {
  return (
    <section className="home-service-section flex items-center justify-center py-16 bg-gray-100">
      <div className="container flex flex-col gap-16 px-8">
        <div className="flex flex-col gap-2">
          <PageName pageName="Szolgáltatások" />
          <h2 className="text-h2">Fő szolgáltatásaink</h2>
        </div>
        <div className="row grid grid-rows-[auto_auto] lg:grid-rows-1 lg:grid-cols-2 gap-16 lg:gap-16">
          <div className="col order-2 lg:order-1 flex flex-col justify-center gap-8">
            <ServiceInfo
              title="Tűzvédelem"
              description="Professzionális passzív tűzvédelmi megoldások"
            />
            <ServiceInfo
              title="Azbesztmentesítés"
              description="Biztonságosan és szakszerűen, teljes körű szolgáltatás országosan"
            />
            <ServiceInfo
              title="Vízkármentesítés"
              description="Professzionális megoldások víz okozta károk esetén"
            />
          </div>
          <div className="col order-1 lg:order-2 flex items-center justify-start">
            <img src="/home-services.jpg" alt="" />
          </div>
        </div>
        <CallToActionButton
          link="/szolgaltatasok"
          text="Tekintse meg minden szolgáltatásunkat!"
        />
      </div>
    </section>
  );
};

export default HomeServices;
