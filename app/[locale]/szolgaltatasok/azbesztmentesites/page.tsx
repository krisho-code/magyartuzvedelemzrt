import React from "react";
import ServiceHero from "../../components/Services/ServiceHero";
import ServiceAbout from "../../components/Services/ServiceAbout";
import ServiceInfos from "../../components/Services/ServiceInfos";
import ServiceImages from "../../components/Services/ServiceImages";
import CallToAction from "../../components/CallToAction/CallToAction";

const Azbesztmentesites = () => {
  return (
    <main>
      <ServiceHero
        pageName="azbesztmentesites"
        title="Azbesztmentesítés"
        description="Biztonságosan és szakszerűen, teljes körű szolgáltatás országosan"
      />
      <ServiceAbout
        title="Mi az az Azbesztmentesítés?"
        description="Az azbeszt régen népszerű építőanyag volt, ma azonban tudjuk, hogy rendkívül veszélyes az egészségre – belégzése súlyos betegségeket okozhat. Az azbesztmentesítés során szakszerűen eltávolítjuk az épületekben lévő régi burkolatokat, csöveket, tetőfedő anyagokat. Ez egy precíz, zárt technológiát igénylő folyamat, hiszen a szálló porszemek jelentik a valódi veszélyt. A munkát mindig engedéllyel rendelkező szakemberek végzik, általában néhány nap alatt. Az eredmény: egészségesebb, biztonságosabb környezet."
      />
      <ServiceInfos
        title="Komplett megoldások azbesztmentesítésre"
        text="A Magyar Tűzvédelem Zrt. közel 30 éves tapasztalattal és speciális szaktudással végzi az azbeszt biztonságos eltávolítását bármilyen formában is forduljon elő. Munkánk során a jogszabályoknak megfelelően, egészségkárosító hatások és környezetszennyezés nélkül biztosítjuk az azbesztes anyagok bontását, kezelését és ártalmatlanítását. Szolgáltatásaink lefedik a teljes folyamatot az előzetes felméréstől és munkaterv-készítéstől a bontáson át egészen a veszélyes hulladék elszállításáig és megsemmisítéséig."
        info1title="Szórt azbeszt eltávolítása"
        info1text="Hermetikusan zárt fekete zónában, HEPA-szűrős technológiával és szigorú védelmi protokoll mellett végezzük a bontást."
        info2title="Azbesztcement anyagok bontása"
        info2text="Hullámpala, tető- és kerítéselemek biztonságos, szabályos bontása és a veszélyes hulladék teljes körű ártalmatlanítása."
        info3title="Épületen belüli azbesztmentesítés"
        info3text="Csővezetékek, légcsatornák, burkolatok és álmennyezetek bontása precíz technológiával és munkavédelmi előírások betartásával."
        info4title="Felmérések és bevizsgálások"
        info4text="Azbeszttartalom vizsgálata mintavétellel, valamint épületek teljes azbeszttérképének elkészítése."
      />
      <ServiceImages imgs="/azbesztmentesites.jpg" />
      <CallToAction title="Kérjen személyre szabott ajánlatot még ma!" />
    </main>
  );
};

export default Azbesztmentesites;
