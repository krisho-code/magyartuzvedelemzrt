import React from "react";
import PageName from "../PageName";
import AboutInfo from "../AboutInfo";
import CallToActionButton from "../Buttons/CallToActionButton";

const HomeAbout = () => {
  return (
    <section className="home-about-section flex items-center justify-center py-16">
      <div className="container flex flex-col gap-16 px-8">
        <div className="flex flex-col gap-2">
          <PageName pageName="Cégismertető" />
          <h2 className="text-h2">Miért válasszon minket?</h2>
        </div>
        <div className="row grid grid-cols-1 gap-8 lg:grid-cols-4">
          <AboutInfo
            img="/icons/fire-icon-secondary.svg"
            title="100%-ban Magyar cég"
            description="Hazai tulajdonú vállalkozásként elkötelezettek vagyunk a magyar ipar és közszolgáltatások magas színvonalú kiszolgálása iránt."
          />
          <AboutInfo
            img="/icons/fire-icon-secondary.svg"
            title="30+ év szakmai tapasztalat"
            description="Több mint három évtizedes tapasztalatunk biztosítja a megbízható és szakszerű kivitelezést minden projektünkben."
          />
          <AboutInfo
            img="/icons/fire-icon-secondary.svg"
            title="Széleskörű szolgáltatások"
            description="Passzív tűzvédelem, azbesztmentesítés, víz- és tűzkármentesítés, ipari tisztítás és alpintechnikai munkák – mindent egy helyen."
          />
          <AboutInfo
            img="/icons/fire-icon-secondary.svg"
            title="Magas színvonal"
            description="Minősített technológiákkal és szakértő csapattal garantáljuk a legmagasabb szintű biztonságot és hatékonyságot."
          />
        </div>
        <CallToActionButton link="/cegismerteto" text="Ismerd meg cégünket!" />
      </div>
    </section>
  );
};

export default HomeAbout;
