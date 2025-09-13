import React from "react";
import AboutInfosContent from "./AboutInfosContent";

const AboutInfos = () => {
  return (
    <div className="row grid grid-cols-1 gap-8 lg:grid-cols-4">
      <AboutInfosContent
        img="/icons/fire-icon-secondary.svg"
        title="100%-ban Magyar cég"
        description="Hazai tulajdonú vállalkozásként elkötelezettek vagyunk a magyar ipar és közszolgáltatások magas színvonalú kiszolgálása iránt."
      />
      <AboutInfosContent
        img="/icons/fire-icon-secondary.svg"
        title="30+ év szakmai tapasztalat"
        description="Több mint három évtizedes tapasztalatunk biztosítja a megbízható és szakszerű kivitelezést minden projektünkben."
      />
      <AboutInfosContent
        img="/icons/fire-icon-secondary.svg"
        title="Széleskörű szolgáltatások"
        description="Passzív tűzvédelem, azbesztmentesítés, víz- és tűzkármentesítés, ipari tisztítás és alpintechnikai munkák – mindent egy helyen."
      />
      <AboutInfosContent
        img="/icons/fire-icon-secondary.svg"
        title="Magas színvonal"
        description="Minősített technológiákkal és szakértő csapattal garantáljuk a legmagasabb szintű biztonságot és hatékonyságot."
      />
    </div>
  );
};

export default AboutInfos;
