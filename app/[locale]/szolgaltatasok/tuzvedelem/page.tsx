import React from "react";
import ServiceHero from "../../components/ServiceHero";
import ServiceAbout from "../../components/ServiceAbout";
import ServiceInfos from "../../components/ServiceInfos";
import ServiceImages from "../../components/ServiceImages";
import CallToAction from "../../components/CallToAction";

const Tűzvédelem = () => {
  return (
    <main>
      <ServiceHero
        pageName="tuzvedelem"
        title="Tűzvédelem"
        description="Professzionális passzív tűzvédelmi megoldások"
      />
      <ServiceAbout
        title="Mi az a tűzvédelem"
        description="A tűz rövid idő alatt hatalmas károkat okozhat, ezért kiemelten
          fontos, hogy az épületek és szerkezetek védve legyenek. A tűzvédelem
          lényege, hogy a falak, acélszerkezetek és faanyagok ne gyengüljenek
          meg túl gyorsan, így maradjon idő a menekülésre és a mentésre. Ehhez
          speciális festékeket, bevonatokat és burkolatokat alkalmazunk, amelyek
          akár órákig is ellenállnak a lángok hőjének. A munka nagyságától
          függően néhány nap vagy hét alatt elvégezhető, és hosszú távon
          biztonságot ad az épület minden használójának."
      />
      <ServiceInfos />
      <ServiceImages imgs="/tuzvedelem.jpg" />
      <CallToAction title="Kérjen személyre szabott ajánlatot még ma!" />
    </main>
  );
};

export default Tűzvédelem;
