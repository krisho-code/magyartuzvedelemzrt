import React from "react";
import ServiceHero from "../../components/ServiceHero";
import ServiceAbout from "../../components/ServiceAbout";
import ServiceInfos from "../../components/ServiceInfos";
import ServiceImages from "../../components/ServiceImages";
import CallToAction from "../../components/CallToAction";

const Tisztitasesveszelytelenites = () => {
  return (
    <main>
      <ServiceHero
        pageName="iparitesv"
        title="Ipari tisztítás és veszélytelenítés"
        description="Hatékony, professzionális megoldások extrém szennyeződések esetén is"
      />
      <ServiceAbout
        title="Mit jelent az ipari tisztítás és veszélytelenítés?"
        description="Gyárakban, üzemekben és nagyobb intézményekben időről időre szükség van alapos nagytakarításra. Ez nem egyszerű porszívózást jelent: ipari gépek, légcsatornák, homlokzatok, olajszennyezett padlók tisztításáról van szó. Az ipari tisztítás speciális eszközökkel és vegyszerekkel történik, mindig az adott feladathoz igazítva. Ezáltal nemcsak tisztább, hanem biztonságosabb és egészségesebb is lesz a környezet. Az időtartam a feladattól függ, lehet egy napos vagy akár több hetes munka."
      />
      <ServiceInfos
        title="Komplex tisztítási és mentesítési megoldások"
        text="A Magyar Tűzvédelem Zrt. közel három évtizedes tapasztalattal nyújt teljes körű iparitisztítási és veszélytelenítési szolgáltatásokat. Legyen szó üzemcsarnokokról, irodaházakról, kórházakról vagy speciális létesítményekről, szakembereink a feladathoz leginkább illeszkedő technológiákat és tisztítószereket alkalmazzák. A cél minden esetben ugyanaz: higiénikus, biztonságos és üzemkész környezet biztosítása, miközben megóvjuk a berendezéseket és minimalizáljuk a leállási időt. A tűz- és vízkármentesítési tapasztalatainkra építve a legmodernebb eljárásokat alkalmazzuk a fertőtlenítésben, szennyeződések eltávolításában és speciális ipari felületek tisztításában."
        info1title="Ipari és épület tisztítás"
        info1text="Homlokzatok, csarnokok, irodák és kórházi terek professzionális tisztítása, fertőtlenítése."
        info2title="Berendezések karbantartó tisztítása"
        info2text="Gépsorok, erőművi generátorok, légtechnikai rendszerek és elektronikai egységek szakszerű mentesítése."
        info3title="Speciális veszélytelenítés"
        info3text="Olajszennyezett felületek kezelése, madárürülék mentesítés, hajléktalanok utáni fertőtlenítés."
        info4title="Rendkívüli helyzetek kezelése"
        info4text="Viharkárok utáni takarítás, lomtalanítás és gyors reagálás kritikus körülmények között."
      />
      <ServiceImages imgs="/iparitesv.jpg" />
      <CallToAction title="Kérjen személyre szabott ajánlatot még ma!" />
    </main>
  );
};

export default Tisztitasesveszelytelenites;
