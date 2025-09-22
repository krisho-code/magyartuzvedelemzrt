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
        title="Mi az a tűzvédelem?"
        description="A tűz rövid idő alatt hatalmas károkat okozhat, ezért kiemelten
          fontos, hogy az épületek és szerkezetek védve legyenek. A tűzvédelem
          lényege, hogy a falak, acélszerkezetek és faanyagok ne gyengüljenek
          meg túl gyorsan, így maradjon idő a menekülésre és a mentésre. Ehhez
          speciális festékeket, bevonatokat és burkolatokat alkalmazunk, amelyek
          akár órákig is ellenállnak a lángok hőjének. A munka nagyságától
          függően néhány nap vagy hét alatt elvégezhető, és hosszú távon
          biztonságot ad az épület minden használójának."
      />
      <ServiceInfos
        title="Komplex tűzvédelmi szolgáltatások minden épülettípushoz"
        text="A Magyar Tűzvédelem Zrt. célja, hogy a legmodernebb, tanúsított
            technológiákkal biztosítsa az ipari, kereskedelmi és lakóépületek
            szerkezeteinek tűzállóságát. Szolgáltatásaink a jogszabályi
            előírásoknak megfelelően, szakértő csapatunk bevonásával valósulnak
            meg – így partnereink teljes biztonságban tudhatják magukat és
            értékeiket. Alkalmazott technológiáink a tűzvédelmi festés
            (R15-R120), tűzvédelmi burkolat (R15-R240) és tűzvédelmi habarcs
            (R15-R240)."
        info1title="Tűzállósági bevonatok"
        info1text="Speciális tűzvédő festékek és bevonatok alkalmazása, amelyek
                  jelentősen növelik az acél- és betonszerkezetek tűzállóságát."
        info2title="Tűzvédelmi lezárások"
        info2text="Kábel- és csőátvezetések, valamint fal- és födémáttörések professzionális tűzgátló lezárása a tűz és füst terjedésének megakadályozására."
        info3title="Könnyűszerkezetes rendszerek védelme"
        info3text="Gipszkarton és más szerkezetek tűzvédelmi burkolása, hogy minden épülettípus megfeleljen a legszigorúbb biztonsági előírásoknak."
        info4title="Tanúsított megoldások"
        info4text="Minden munkafolyamatunk minősített anyagokkal és engedélyezett technológiákkal zajlik, garantálva a jogszabályi megfelelést."
      />
      <ServiceImages imgs="/tuzvedelem.jpg" />
      <CallToAction title="Kérjen személyre szabott ajánlatot még ma!" />
    </main>
  );
};

export default Tűzvédelem;
