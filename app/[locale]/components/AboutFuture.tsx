import React from "react";

const AboutFuture = () => {
  return (
    <section className="about-future-section flex items-center justify-center py-16">
      <div className="container grid gap-16 items-center lg:grid-cols-2 px-8">
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          <div className="flex flex-col gap-8">
            <h2 className="text-h2">Küldetésünk és jövőképünk</h2>
            <p className="text-regular-normal">
              A Magyar Tűzvédelem Zrt. célja, hogy hosszú távú tapasztalatára és
              jövőorientált szemléletére építve megbízható, magas színvonalú
              szolgáltatásokat nyújtson. Küldetésünk, hogy folyamatos
              fejlődéssel és ügyfélközpontú megoldásokkal erősítsük piaci
              pozíciónkat, miközben biztosítjuk partnereink számára a
              leggyorsabb és legbiztonságosabb folyamatokat.
            </p>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-h3">Küldetésünk</h3>
              <p>
                Célunk, hogy a passzív tűzvédelem területén folyamatosan
                erősítsük jelenlétünket, hosszú távú üzleti kapcsolataink,
                fejlesztéseink és bővülő kínálatunk révén.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-h3">Jövőképünk</h3>
              <p>
                A Magyar Tűzvédelem Zrt. a legmegbízhatóbb és leggyorsabb
                szolgáltatóként kíván kiemelkedni az iparágban, ügyfeleinek első
                osztályú támogatást nyújtva, és vonzó munkaadóként is
                helytállva.
              </p>
            </div>
          </div>
        </div>
        <img
          src="/about-future.jpg"
          alt=""
          className="h-full object-cover order-1 lg:order-2"
        />
      </div>
    </section>
  );
};

export default AboutFuture;
