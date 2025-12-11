import React from "react";

const Impresszum = () => {
  return (
    <main className="pt-24">
      <div className="container mx-auto py-16 px-8">
        <h1 className="text-h2 color-primary-text pb-4">Impresszum</h1>

        {/* Vállalkozás adatai */}
        <div className="flex flex-col pb-8">
          <h2 className="pb-4 font-bold text-xl">Vállalkozás adatai</h2>

          <p className="font-bold py-1">
            Cégnév:{" "}
            <span className="font-normal">
              Magyar Tűzvédelem és Kármentesítő Zrt.
            </span>
          </p>
          <p className="font-bold py-1">
            Székhely:{" "}
            <span className="font-normal">
              1052 Budapest, Deák Ferenc tér 3. (Meyer Levinson emelet)
            </span>
          </p>
          <p className="font-bold py-1">
            Posta cím:{" "}
            <span className="font-normal">
              1052 Budapest, Deák Ferenc tér 3. (Meyer Levinson emelet)
            </span>
          </p>
          <p className="font-bold py-1">
            Adószám: <span className="font-normal">27419030-2-41</span>
          </p>
          <p className="font-bold py-1">
            Cégjegyzékszám:{" "}
            <span className="font-normal text-red-600">
              [CÉGJEGYZÉKSZÁM HIÁNYZIK - Pótlandó!]
            </span>
          </p>
          <p className="font-bold py-1">
            Telefonszám: <span className="font-normal">+36 30 475 1050</span>
          </p>
          <p className="font-bold py-1">
            E-mail cím:{" "}
            <span className="font-normal">info@magyartuzvedelemzrt.hu</span>
          </p>
          <p className="font-bold py-1">
            Bankszámlaszám:{" "}
            <span className="font-normal text-red-600">
              [BANKSZÁMLASZÁM HIÁNYZIK - Pótlandó!]
            </span>
          </p>
        </div>

        {/* Tárhelyszolgáltató adatai */}
        <div className="flex flex-col">
          <h2 className="pb-4 font-bold text-xl">Tárhelyszolgáltató adatai</h2>
          <p className="font-bold py-1">
            Cégnév: <span className="font-normal">Vercel Inc.</span>
          </p>
          <p className="font-bold py-1">
            Cím:{" "}
            <span className="font-normal">
              340 S Lemon Ave #4133 Walnut, CA 91789, USA
            </span>
          </p>
          <p className="font-bold py-1">
            Elérhetőség:{" "}
            <span className="font-normal">
              privacy@vercel.com / https://vercel.com
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Impresszum;
