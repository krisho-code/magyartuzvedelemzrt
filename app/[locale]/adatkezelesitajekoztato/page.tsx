import React from "react";

const Adatkezelesitajekoztato = () => {
  return (
    <main className="pt-24">
      <div className="container mx-auto py-16 px-8">
        <h1 className="text-h2 color-primary-text pb-4">
          Adatkezelési tájékoztató
        </h1>

        {/* 1. Bevezetés és általános információk */}
        <div className="flex flex-col pb-8">
          <h2 className="pb-2 font-bold text-lg">
            1. Bevezetés és általános információk
          </h2>
          <p className="pb-2">
            Ez az Adatkezelési tájékoztató (továbbiakban: „Tájékoztató")
            ismerteti, hogy a<strong> Magyar Tűzvédelem Zrt.</strong>{" "}
            (továbbiakban: „Adatkezelő", „mi", „ránk" vagy „a Társaság") hogyan
            gyűjt, kezel, feldolgoz és véd személyes adatokat. Elkötelezettünk
            az adatvédelmi jogszabályok betartásában, különösen az Európai Unió
            Általános Adatvédelmi Rendeletének (GDPR).
          </p>
          <p className="pb-2">
            <strong>Adatkezelő:</strong>
          </p>
          <p className="pb-2">
            <strong>Cégnév:</strong> Magyar Tűzvédelem és Kármentesítő Zrt.
          </p>
          <p className="pb-2">
            <strong>Cím:</strong> 1052 Budapest, Deák Ferenc tér 3. (Meyer
            Levinson emelet)
          </p>
          <p className="pb-2">
            <strong>E-mail:</strong> info@magyartuzvedelemzrt.hu
          </p>
          <p className="pb-2">
            <strong>Telefon:</strong> +36 30 475 1050
          </p>
          <p className="pb-4">
            Ez a Tájékoztató az adatkezelésre vonatkozik, amely a weboldalunkon
            (www.magyartuzvedelemzrt.hu) keresztül történik, különösen a
            kapcsolatfelvételi formanyomtatványon keresztül.
          </p>
        </div>

        {/* 2. Adatkezelés célja */}
        <div className="flex flex-col pb-8">
          <h2 className="pb-2 font-bold text-lg">2. Adatkezelés célja</h2>
          <p className="pb-2">
            A személyes adatokat kizárólag a következő célokra kezeljük:
          </p>
          <ul className="pb-4 list-disc list-inside">
            <li className="pb-1">
              Az Ön által küldött üzenetre való válaszadás
            </li>
            <li className="pb-1">
              Kommunikáció az Ön megadott e-mail címen keresztül
            </li>
            <li className="pb-1">
              Az Ön megadott telefonszámon történő elérhetőség
            </li>
            <li className="pb-1">Konzultáció és ajánlatkérés teljesítése</li>
            <li className="pb-1">
              Üzleti kapcsolatok kialakítása és fenntartása
            </li>
          </ul>
          <p>
            Adatait nem használjuk marketing célokra az Ön előzetes kifejezett
            beleegyezése nélkül.
          </p>
        </div>

        {/* 3. Gyűjtött adatok típusa */}
        <div className="flex flex-col pb-8">
          <h2 className="pb-2 font-bold text-lg">
            3. Gyűjtött adatok típusa és a tárolás módja
          </h2>
          <p className="pb-2">
            A kapcsolatfelvételi formanyomtatványon keresztül az alábbi
            személyes adatokat kérjük be:
          </p>
          <ul className="pb-4 list-disc list-inside">
            <li className="pb-1">
              <strong>Név / Cégnév:</strong> A megadott név vagy cégmegnevezés
            </li>
            <li className="pb-1">
              <strong>E-mail cím:</strong> Az Ön e-mail kapcsolattartási címe
            </li>
            <li className="pb-1">
              <strong>Üzenet:</strong> Az Ön által küldött üzenet szövege
            </li>
          </ul>
          <p className="font-bold mb-2">Hogyan tároljuk az adatokat?</p>
          <p>
            A weboldal <strong>nem menti el</strong> az Ön adatait webes
            adatbázisba. A technikai háttérrendszer az űrlap kitöltése után az
            adatokat azonnal egy e-mail üzenetté alakítja, és továbbítja az
            Adatkezelő e-mail fiókjába. A weboldal szerverén (Vercel) az
            adatokról nem készül tartós másolat, azok kizárólag a
            levelezőrendszerünkben kerülnek tárolásra.
          </p>
        </div>

        {/* 4. Adatkezelés jogalapja */}
        <div className="flex flex-col pb-8">
          <h2 className="pb-2 font-bold text-lg">4. Adatkezelés jogalapja</h2>
          <p className="pb-2">
            Az Ön személyes adatainak feldolgozása az alábbi jogalappal
            történik:
          </p>
          <ul className="pb-4 list-disc list-inside">
            <li className="pb-1">
              <strong>Önkéntes beleegyezés (GDPR 6. cikk (1) a) pont):</strong>{" "}
              A kapcsolatfelvételi formanyomtatvány kitöltésével és elküldésével
              Ön kifejezetten beleegyezik személyes adatai feldolgozásába.
            </li>
          </ul>
          <p>
            Az adatkezelés kizárólag az Ön beleegyezésével történik, amely Ön
            bármikor visszavonhat.
          </p>
        </div>

        {/* 5. Adattovábbítás */}
        <div className="flex flex-col pb-8">
          <h2 className="pb-2 font-bold text-lg">5. Adattovábbítás</h2>
          <p className="pb-2">Az Ön adatait az alábbiak szerint kezeljük:</p>
          <ul className="pb-4 list-disc list-inside">
            <li className="pb-1">
              <strong>Tárhelyszolgáltató:</strong> A weboldal technikai
              üzemeltetését a <strong>Vercel Inc.</strong> (340 S Lemon Ave
              #4133 Walnut, CA 91789, USA) biztosítja. A szolgáltatóval kötött
              szerződés és adatfeldolgozási megállapodás (DPA) garantálja az
              adatok biztonságát a GDPR előírásaival összhangban.
            </li>
            <li className="pb-1">
              <strong>E-mail szolgáltatók:</strong> A levelezés alapvető e-mail
              szolgáltatók segítségével valósul meg.
            </li>
          </ul>
          <p className="pb-4">
            <strong>Fontos:</strong> Az Ön adatait nem értékesítjük, nem adjuk
            át harmadik felek számára reklámozási célokra, és nem osztjuk meg
            üzleti partnerek számára az Ön beleegyezése nélkül.
          </p>
          <p>
            Az adatok továbbítása csak a fent felsorolt technika működtetéséhez
            szükséges mértékben történik.
          </p>
        </div>

        {/* 6. Adatvédelem és biztonság */}
        <div className="flex flex-col pb-8">
          <h2 className="pb-2 font-bold text-lg">
            6. Adatvédelem és biztonság
          </h2>
          <p className="pb-2">
            Az Ön adatainak biztonságát magas prioritásnak tekintjük. Számos
            intézkedés megtesszük:
          </p>
          <ul className="pb-4 list-disc list-inside">
            <li className="pb-1">
              <strong>HTTPS/SSL titkosítás:</strong> Az összes kommunikáció a
              weboldal és az Ön böngészője között titkosított HTTPS kapcsolaton
              keresztül történik.
            </li>
            <li className="pb-1">
              <strong>Biztonságos szerverfeltételek:</strong> Az adatokat
              biztonságos szerver infrastruktúrán tároljuk, amely fizikai és
              logikai védelemmel rendelkezik.
            </li>
            <li className="pb-1">
              <strong>Hozzáférés korlátozása:</strong> Az adatokhoz csak az
              adatkezeléshez szükséges személyek férhetnek hozzá.
            </li>
            <li className="pb-1">
              <strong>Rendszeres felülvizsgálat:</strong> Rendszeresen
              felülvizsgáljuk adatvédelmi intézkedéseinket és biztonsági
              protokollunkat.
            </li>
          </ul>
          <p>
            Azonban, mivel az internet nem teljesen biztonságos, nem tudjuk
            garantálni a 100%-os biztonságot. Az Ön felelőssége, hogy
            biztonságban tartsa jelszavait és bizalmas adatait.
          </p>
        </div>

        {/* 7. Érintetti jogok */}
        <div className="flex flex-col pb-8">
          <h2 className="pb-2 font-bold text-lg">7. Érintetti jogok (GDPR)</h2>
          <p className="pb-2">
            A személyes adatok védelméről szóló hatályos jogszabályok értelmében
            Önnek az alábbi jogai vannak:
          </p>
          <ul className="pb-4 list-disc list-inside">
            <li className="pb-1">
              <strong>Hozzáférési jog:</strong> Kérheti az Ön adatainak
              másolatát és információt azok feldolgozásáról.
            </li>
            <li className="pb-1">
              <strong>Helyesbítési jog:</strong> Kérheti az Ön adatainak
              helyesbítését, ha azok pontatlanok vagy hiányosak.
            </li>
            <li className="pb-1">
              <strong>Törlési jog (Felejtéshez való jog):</strong> Bizonyos
              körülmények között kérheti az Ön adatainak törlését.
            </li>
            <li className="pb-1">
              <strong>Feldolgozás korlátozási joga:</strong> Kérheti az Ön
              adatainak feldolgozásának korlátozását.
            </li>
            <li className="pb-1">
              <strong>Tiltakozási jog:</strong> Tiltakozhat az Ön adatainak
              bizonyos célokra történő feldolgozása ellen.
            </li>
            <li className="pb-1">
              <strong>Adathordozhatóság joga:</strong> Kérheti az Ön adatainak
              strukturált, széles körben használt, géppel olvasható formátumban
              történő átadását.
            </li>
          </ul>
          <p className="pb-4">
            Az ezekkel a jogokkal kapcsolatos kéréseket az alábbi
            elérhetőségeken keresztül nyújthatja be.
          </p>
        </div>

        {/* 8. Sütik és online nyomkövetés */}
        <div className="flex flex-col pb-8">
          <h2 className="pb-2 font-bold text-lg">
            8. Sütik és online nyomkövetés
          </h2>
          <p className="pb-2">
            <strong>Alapvető sütik:</strong> Weboldalunk alapvető technikai
            sütikkel működik, amelyek biztosítják az oldal helyes betöltését és
            biztonságos működését. Ezek nem gyűjtenek személyes profilt Önről.
          </p>
          <p className="pb-2">
            <strong>Harmadik fél sütik:</strong> Lehetséges, hogy weboldalunk
            olyan elemeket tartalmaz, mint a Google Maps vagy más beágyazott
            tartalmak, amelyek saját sütiket használhatnak. Ezekre vonatkozóan
            az adott szolgáltatók adatvédelmi szabályai érvényesek.
          </p>
          <p className="pb-4">
            Ön szabályozhatja a sütik fogadását a böngészője beállításain
            keresztül. Kérjük azonban vegyük figyelembe, hogy a sütik letiltása
            az oldal bizonyos funkcióinak működésére hatással lehet.
          </p>
        </div>

        {/* 9. Adatok tárolási ideje */}
        <div className="flex flex-col pb-8">
          <h2 className="pb-2 font-bold text-lg">9. Adatok tárolási ideje</h2>
          <p className="pb-2">
            Az Ön személyes adatait csak olyan ideig tároljuk, amíg:
          </p>
          <ul className="pb-4 list-disc list-inside">
            <li className="pb-1">
              Az adatkezeléshez szükséges (pl. az Ön megkeresésre történő
              válaszadásig)
            </li>
            <li className="pb-1">
              A vonatkozó jogszabályok megkövetelik (pl. számviteli vagy
              közteherre vonatkozó nyilvántartások)
            </li>
            <li className="pb-1">
              Az Ön erre vonatkozó kérésére nem töröltük az adatokat
            </li>
          </ul>
          <p>
            Az érdeklődésre válaszadása után az adatokat általában legfeljebb 1
            év múlva töröljük, ha további jogos érdek nem indokolja a tárolást.
          </p>
        </div>

        {/* 10. Kapcsolattartás az adatvédelemmel kapcsolatos kérdésekben */}
        <div className="flex flex-col pb-8">
          <h2 className="pb-2 font-bold text-lg">
            10. Kapcsolattartás az adatvédelemmel kapcsolatos kérdésekben
          </h2>
          <p className="pb-2">
            Ha kérdése van az adatkezelésünkről vagy szeretné gyakorolni az Ön
            GDPR-jogait, kérjük, forduljon hozzánk az alábbi elérhetőségeken:
          </p>
          <p className="pb-2">
            <strong>E-mail:</strong> info@magyartuzvedelemzrt.hu
          </p>
          <p className="pb-4">
            <strong>Postai cím:</strong> 1052 Budapest, Deák Ferenc tér 3.
            (Meyer Levinson emelet)
          </p>
          <p className="pb-4">
            Az adatvédelemmel kapcsolatos panaszait a Nemzeti Adatvédelmi
            Felügyelethez is bejelentetheti: info@naih.hu, illetve a
            https://www.naih.hu/ címen.
          </p>
        </div>

        {/* 11. Frissítések és változtatások */}
        <div className="flex flex-col pb-4">
          <h2 className="pb-2 font-bold text-lg">
            11. Frissítések és változtatások
          </h2>
          <p className="pb-2">
            Fenntartjuk az ezt az Adatkezelési tájékoztatót bármikor módosítani
            vagy frissíteni jogot, hogy az megfeleljék a jogszabályi
            követelményeknek vagy a mi adatkezelési gyakorlatának
            megváltozásakor.
          </p>
          <p className="pb-2">
            Jelentős módosítások esetén értesítjük az érintetteket, és az e-mail
            útján vagy az weboldalon keresztül hozzuk ezt nyilvánosságra.
          </p>
          <p>
            Az Adatkezelési tájékoztató utolsó frissítésének dátuma: 2025.
            december 11.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Adatkezelesitajekoztato;
