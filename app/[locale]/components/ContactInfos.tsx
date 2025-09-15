import React from "react";
import ContactInfosContent from "./ContactInfosContent";

const ContactInfos = () => {
  return (
    <section className="contact-infos-section flex items-center justify-center py-16 bg-gray-100">
      <div className="container grid gap-8 lg:grid-cols-4 px-8">
        <ContactInfosContent
          icon="/icons/email-icon-secondary.svg"
          title="Email"
          text="Hagyjon nekünk egy emailt, és mi 2 napon belül válaszolunk Önnek!"
          link="info@magyartuzvedelemzrt.hu"
        />
        <ContactInfosContent
          icon="/icons/phone-icon-secondary.svg"
          title="Telefon"
          text="Hívjon fel minket és mi segítünk eljutni a megoldáshoz!"
          link="+36 30 475 1050"
        />
        <ContactInfosContent
          icon="/icons/location-icon-secondary.svg"
          title="Székhely"
          text="Ezen a címen megtalál minket X:00 - X:00 között!"
          link="1052 Budapest, Deák Ferenc tér 3. (Meyer Levinson emelet)"
        />
        <ContactInfosContent
          icon="/icons/message-icon-secondary.svg"
          title="Levelezési cím"
          text="Ha más úton szeretne kapcsolatba lépni velünk, erre címezzen!"
          link="2013 Pomáz Kós Károly utca 34/1/A"
        />
      </div>
    </section>
  );
};

export default ContactInfos;
