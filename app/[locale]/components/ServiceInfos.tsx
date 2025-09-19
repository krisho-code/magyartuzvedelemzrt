import React from "react";
import ServiceInfosContent from "./ServiceInfosContent";
import CallToActionButton from "./Buttons/CallToActionButton";

const ServiceInfos = () => {
  return (
    <section className="service-infos-section flex items-center justify-center py-16 bg-gray-100">
      <div className="container flex flex-col gap-16 px-8">
        <div className="flex flex-col gap-8 w-[75%]">
          <h2 className="text-h2">
            Komplex tűzvédelmi szolgáltatások minden épülettípushoz
          </h2>
          <p className="text-regular-normal">
            A Magyar Tűzvédelem Zrt. célja, hogy a legmodernebb, tanúsított
            technológiákkal biztosítsa az ipari, kereskedelmi és lakóépületek
            szerkezeteinek tűzállóságát. Szolgáltatásaink a jogszabályi
            előírásoknak megfelelően, szakértő csapatunk bevonásával valósulnak
            meg – így partnereink teljes biztonságban tudhatják magukat és
            értékeiket. Alkalmazott technológiáink a tűzvédelmi festés
            (R15-R120), tűzvédelmi burkolat (R15-R240) és tűzvédelmi habarcs
            (R15-R240).
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16">
          <ServiceInfosContent
            title="Tűzállósági bevonatok"
            text="Speciális tűzvédő festékek és bevonatok alkalmazása, amelyek
          jelentősen növelik az acél- és betonszerkezetek tűzállóságát."
          />
          <ServiceInfosContent
            title="Tűzvédelmi lezárások"
            text="Kábel- és csőátvezetések, valamint fal- és födémáttörések professzionális tűzgátló lezárása a tűz és füst terjedésének megakadályozására."
          />
          <ServiceInfosContent
            title="Könnyűszerkezetes rendszerek védelme"
            text="Gipszkarton és más szerkezetek tűzvédelmi burkolása, hogy minden épülettípus megfeleljen a legszigorúbb biztonsági előírásoknak."
          />
          <ServiceInfosContent
            title="Tanúsított megoldások"
            text="Minden munkafolyamatunk minősített anyagokkal és engedélyezett technológiákkal zajlik, garantálva a jogszabályi megfelelést."
          />
        </div>
        <div className="flex flex-col gap-4 lg:flex-row">
          <CallToActionButton text="Kérjen személyre szabott ajánlatot!" />
          <CallToActionButton
            buttonType="secondary"
            text="Vegye fel velünk a kapcsolatot!"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceInfos;
