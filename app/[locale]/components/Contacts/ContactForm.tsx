import React from "react";

import UnderlinedTitle from "../Global Components/UnderlinedTitle";

const ContactForm = () => {
  return (
    <section className="conact-form-section flex items-center justify-center py-16">
      <div className="container grid gap-16 lg:grid-cols-2 px-8">
        {/* Item */}
        <div className="col flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <UnderlinedTitle
              pageName="Kapcsolatok"
              title="Vegye fel velünk a kapcsolatot!"
            />
            <p className="text-regular-normal">
              Az alábbi elérhetőségen keressen minket, vagy küldön üzenetet!
            </p>
          </div>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <img src="/icons/email-icon.svg" alt="" />
              <a href="#" className="underline">
                info@magyartuzvedelemzrt.hu
              </a>
            </li>
            <li className="flex items-center gap-4">
              <img src="/icons/phone-icon.svg" alt="" />
              <a href="#" className="underline">
                +36 30 475 1050 
              </a>
            </li>
            <li className="flex items-center gap-4">
              <img src="/icons/location-icon.svg" alt="" />
              <a href="#" className="underline">
                1052 Budapest, Deák Ferenc tér 3. (Meyer Levinson emelet)
              </a>
            </li>
          </ul>
        </div>
        {/* Item */}
        <div className="col">
          <form className="flex flex-col gap-8">
            {/* Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name">
                Név / Cégnév <span>*</span>
              </label>
              <input
                id="name"
                type="text"
                className="block w-full text-regular-normal border-2 p-3 focus:outline-2 focus:outline-red-700"
              />
            </div>
            {/* Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email">
                Email <span>*</span>
              </label>
              <input
                id="email"
                type="text"
                className="block w-full text-regular-normal border-2 p-3 focus:outline-2 focus:outline-red-700"
              />
            </div>
            {/* Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message">
                Üzenet <span>*</span>
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                placeholder="Ide írja az üzenetét..."
                className="block w-full resize-none text-regular-normal border-2 p-3 focus:outline-2 focus:outline-red-700"
              ></textarea>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="check" id="check" />
              <label htmlFor="check">
                Elfogadon a <span className="underline">Feltételeket</span>
              </label>
            </div>
            <button
              type="submit"
              className="cta-button primary block w-fit h-fit py-3 px-6"
            >
              Üzenet küldése
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
