import React from "react";
import ServiceHero from "../../components/ServiceHero";
import ServiceAbout from "../../components/ServiceAbout";
import ServiceInfos from "../../components/ServiceInfos";
import ServiceImages from "../../components/ServiceImages";
import CallToAction from "../../components/CallToAction";

const Alpintechnika = () => {
  return (
    <main>
      <ServiceHero
        pageName="alpintechnika"
        title="Ipari alpintechnika"
        description="Biztonságos, gyors és költséghatékony munkavégzés a legnehezebben elérhető helyeken is"
      />
      <ServiceAbout
        title="Mi az az ipari alpintechnika?"
        description="Vannak munkák, amelyeket állványozás vagy daru nélkül is el lehet végezni – ipari alpintechnikával. Ez azt jelenti, hogy képzett szakemberek kötéltechnika segítségével érik el a magasban vagy nehezen hozzáférhető helyen lévő felületeket. Így gyorsabban és költséghatékonyabban lehet homlokzatot javítani, légtechnikát szerelni, galambtüskézni vagy akár festeni. Az ilyen munkák általában pár órától néhány napig tartanak, és biztonságos megoldást nyújtanak akkor is, amikor más módszerek túl drágák vagy bonyolultak lennének."
      />
      <ServiceInfos
        title="Rugalmas és hatékony megoldások állványozás nélkül"
        text="A Magyar Tűzvédelem Zrt. ipari alpintechnikai szolgáltatásai lehetővé teszik, hogy a legnehezebben hozzáférhető területeken is szakszerű és biztonságos munkát végezzünk – drága állványok vagy emelőgépek használata nélkül. Tapasztalt, fiatalos és dinamikus csapatunk szinte bármilyen magassági feladatot el tud látni, legyen szó szerelésről, javításról, tisztításról vagy veszélytelenítésről. Megoldásaink gyorsak, költséghatékonyak, és maximálisan megfelelnek a biztonsági előírásoknak."
        info1title="Homlokzatok és épületszerkezetek"
        info1text="Javítás, tisztítás, festés és karbantartás alpintechnikával, akár nagy magasságban is."
        info2title="Ipari és műszaki feladatok"
        info2text="Tűzjelző rendszerek, légtechnikai hálózatok, villámhárítók és egyéb berendezések szerelése."
        info3title="Veszélytelenítés és mentesítés"
        info3text="Galambtüskék telepítése, madármentesítés, veszélyes elemek eltávolítása."
        info4title="Gyors és költséghatékony kivitelezés"
        info4text="Állványozás és emelőgépek nélkül, rugalmas és gazdaságos megoldások minden projektre."
      />
      <ServiceImages imgs="/alpintechnika.jpg" />
      <CallToAction title="Kérjen személyre szabott ajánlatot még ma!" />
    </main>
  );
};

export default Alpintechnika;
