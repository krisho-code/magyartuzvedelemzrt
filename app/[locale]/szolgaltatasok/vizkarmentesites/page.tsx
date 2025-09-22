import React from "react";
import ServiceHero from "../../components/Services/ServiceHero";
import ServiceAbout from "../../components/Services/ServiceAbout";
import ServiceInfos from "../../components/Services/ServiceInfos";
import ServiceImages from "../../components/Services/ServiceImages";
import CallToAction from "../../components/CallToAction/CallToAction";

const Vizkarmentesites = () => {
  return (
    <main>
      <ServiceHero
        pageName="vizkarmentesites"
        title="Vízkármentesítés"
        description="Professzionális megoldások víz okozta károk esetén"
      />
      <ServiceAbout
        title="Mi az a vízkár mentesítés?"
        description="A víz alattomos károkat okozhat: csőtörés, árvíz vagy oltóvíz után a falak és padlók beszívják a nedvességet, ami penészedéshez és szerkezeti károkhoz vezethet. A vízkármentesítés során először eltávolítjuk a felesleges vizet, majd speciális szárítógépekkel kiszárítjuk a falakat és helyiségeket. Ezzel megelőzzük a további romlást és a penész kialakulását. A folyamat néhány naptól akár több hétig is eltarthat, de elengedhetetlen ahhoz, hogy az épület újra biztonságosan használható legyen."
      />
      <ServiceInfos
        title="Komplex megoldások vízkár utáni helyreállításra"
        text="Legyen szó csőtörésről, viharkárról, árvízről vagy oltóvízről, a Magyar Tűzvédelem Zrt. szakemberei speciális berendezésekkel és több évtizedes tapasztalattal nyújtanak gyors és hatékony segítséget. A vízkárok elhárítása nem tűr halasztást: a szakszerű szárítás és fertőtlenítés hiánya súlyos szerkezeti és egészségügyi problémákhoz vezethet. Modern hőszivattyús technológiánknak köszönhetően a falak mélyéről is eltávolítjuk a felesleges nedvességet, megelőzve a penészesedést és a korróziós károsodásokat – így az épület és a berendezések nagy része megmenthető."
        info1title="Gyors kárenyhítés"
        info1text="Azonnali intézkedésekkel csökkentjük a másodlagos károk kialakulásának kockázatát."
        info2title="Speciális szárítástechnológia"
        info2text="Hőszivattyús berendezésekkel hatékonyan szárítjuk ki az épületszerkezeteket a falak mélyéig."
        info3title="Fertőtlenítés és penészmentesítés"
        info3text="A vízkár után gondoskodunk a higiénikus környezetről és a levegő minőségének helyreállításáról."
        info4title="Berendezések megóvása"
        info4text="Műszaki eszközök tisztítása, konzerválása és korrózióvédelme a teljes cserék elkerülésére."
      />
      <ServiceImages imgs="/vizkarmentesites.jpg" />
      <CallToAction title="Kérjen személyre szabott ajánlatot még ma!" />
    </main>
  );
};

export default Vizkarmentesites;
