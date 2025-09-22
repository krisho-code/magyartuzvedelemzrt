import React from "react";
import CallToActionButton from "./CallToActionButton";

const ContactCallToAction = () => {
  return (
    <section className="contact-call-to-action-section flex items-center justify-center py-16 bg-red-50">
      <div className="container grid gap-8 lg:grid-cols-[auto_auto] px-8">
        <div className="flex flex-col gap-4">
          <h3 className="text-h3">Nem tudja pontosan mit szeretne?</h3>
          <p className="text-medium-normal">
            Kérjen megkeresést tőlünk emailben és segítünk Önnek kitalálni!
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <input
            id="email"
            type="text"
            placeholder="Adja meg az email címét!"
            className="block w-full h-fit text-regular-normal border-2 p-3 bg-white focus:outline-2 focus:outline-red-700"
          />
          <CallToActionButton text="Segítséget kérek!" />
        </div>
      </div>
    </section>
  );
};

export default ContactCallToAction;
