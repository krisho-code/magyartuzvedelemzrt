import React from "react";
import Service from "./Service";

const Services = () => {
  return (
    <section className="services-section">
      <div className="frame">
        <Service
          name="Tűzvédelem"
          description="Professzionális passzív tűzvédelmi megoldások"
          text="A Magyar Tűzvédelem Zrt. professzionális passzív tűzvédelmi megoldásokkal növeli az épületek tűzállóságát, biztosítva az emberek és értékek védelmét."
          img="/tuzvedelem.jpg"
        />
        <Service
          name="Azbesztmentesítés"
          description="Biztonságosan és szakszerűen, teljes körű szolgáltatás országosan"
          text="A Magyar Tűzvédelem Zrt. az azbesztmentesítést szakszerű, hermetikusan lezárt térben, negatív nyomással és HEPA-szűréses elszívással végzi a biztonság érdekében."
          img="/azbesztmentesites.jpg"
        />
        <Service
          name="Tűzkármentesítés"
          description="Gyors és szakszerű beavatkozás tűzeset után"
          text="A tűzesetek után végzett tűzkármentesítés nem csupán az ingatlan esztétikai vagy funkcionális helyreállítását jelenti, hanem a másodlagos károk megelőzését is."
          img="/tuzkarmentesites.jpg"
        />
        <Service
          name="Vízkármentesítés"
          description="Professzionális megoldások víz okozta károk esetén"
          text="A Magyar Tűzvédelem Zrt. gyors és hatékony vízkármentesítéssel csökkenti a károkat és megelőzi a hosszú távú következményeket."
          img="/vizkarmentesites.jpg"
        />
        <Service
          name="Ipari tisztítás és veszélytelenítés"
          description="Hatékony, professzionális megoldások extrém szennyeződések esetén is"
          text="A Magyar Tűzvédelem Zrt. ipari létesítmények és gépsorok szakszerű tisztítását és fertőtlenítését biztosítja, veszélyes anyagok és extrém helyzetek kezelésével is."
          img="/iparitesv.jpg"
        />
        <Service
          name="Ipari alpintechnikai munkák"
          description="Biztonságos, gyors és költséghatékony"
          text="A Magyar Tűzvédelem Zrt. ipari alpintechnikával biztosít gyors és biztonságos munkavégzést a nehezen hozzáférhető helyeken."
          img="/alpintechnika.jpg"
          borderBottom={false}
        />
      </div>
    </section>
  );
};

export default Services;
