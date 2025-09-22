import React from "react";
import ServiceHero from "../../components/ServiceHero";
import ServiceAbout from "../../components/ServiceAbout";
import ServiceInfos from "../../components/ServiceInfos";
import ServiceImages from "../../components/ServiceImages";
import CallToAction from "../../components/CallToAction";

const Tuzkarmentesites = () => {
  return (
    <main>
      <ServiceHero
        pageName="tuzkarmentesites"
        title="Tűzkármentesítés"
        description="Gyors és szakszerű beavatkozás tűzeset után"
      />
      <ServiceAbout
        title="Mi az a tűzkár mentesítés?"
        description="Egy tűz után nemcsak az égés, hanem a füst, a korom és az oltóvíz is komoly károkat okoz. Ha nem kezdjük el gyorsan a helyreállítást, a fémek rozsdásodnak, a berendezések tönkre mennek, az épület szerkezete pedig tovább romlik. A tűzkármentesítés célja, hogy a lehető legtöbb értéket megmentsük: kitisztítjuk, fertőtlenítjük és szükség esetén újjáépítjük az érintett részeket. A munka sürgősségtől és károk mértékétől függően pár nap vagy akár több hét is lehet, de minden óra számít."
      />
      <ServiceInfos
        title="Komplett megoldások tűzkárok utáni helyreállításra"
        text="A Magyar Tűzvédelem Zrt. speciális technológiáival és közel 30 év tapasztalatával a tűzeseteket követően gyorsan és hatékonyan lépünk fel. A beavatkozás a tűz utáni 48–72 órában a legeredményesebb, hiszen ekkor előzhetők meg a korróziós és vegyi folyamatok által okozott súlyos másodlagos károk. Szolgáltatásaink célja, hogy az épületek, berendezések és szerkezetek minél nagyobb részét visszaállítsuk a tűz előtti állapothoz közeli szintre – gazdaságosan, biztosítói elvárásoknak megfelelően."
        info1title="Azonnali kárenyhítés"
        info1text="Gyors beavatkozás a másodlagos károk és a veszteségek minimalizálására."
        info2title="Épületszerkezetek helyreállítása"
        info2text="Sérült elemek bontása, korommentesítés és vegyszeres neutralizálás a biztonság érdekében."
        info3title="Berendezések mentése"
        info3text="Elektromos és műszaki eszközök tisztítása, szárítása és korrózió elleni védelme."
        info4title="Teljes körű ügyintézés"
        info4text="Biztosítótársaságokkal való kapcsolattartás, dokumentáció és szakszerű helyreállítás egy kézben."
      />
      <ServiceImages imgs="/tuzkarmentesites.jpg" />
      <CallToAction title="Kérjen személyre szabott ajánlatot még ma!" />
    </main>
  );
};

export default Tuzkarmentesites;
