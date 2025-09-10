import React from "react";
import CallToActionButton from "../Buttons/CallToActionButton";

const Topfoot = () => {
  return (
    <div className="topfoot flex items-center justify-center h-72 md:h-40 bg-gray-100">
      <div className="container flex flex-col gap-4 px-8">
        {/* Item */}
        <div className="row flex items-center justify-between">
          <CallToActionButton />
          <a href="#" className="logo">
            <img src="logo.svg" alt="Magyar Tűzvédelem Zrt." />
          </a>
        </div>

        {/* Item */}
        <div className="row flex items-center justify-between">
          <ul className="menu flex flex-col gap-2 md:flex-row md:items-center md:gap-8">
            <li>
              <a href="#" className="text-medium-normal">
                Cégismertető
              </a>
            </li>
            <li>
              <a href="#" className="text-medium-normal">
                Szolgáltatások
              </a>
            </li>
            <li>
              <a href="#" className="text-medium-normal">
                Referenciák
              </a>
            </li>
            <li>
              <a href="#" className="text-medium-normal">
                Kapcsolat
              </a>
            </li>
          </ul>
          <div className="contacts hidden lg:flex items-center gap-8">
            <a href="#" className="phone flex items-center gap-4">
              <img src="icons/phone-icon.svg" alt="" width={16} />
              <p className="text-regular-normal">+36 98 123 7456</p>
            </a>
            <a href="#" className="email flex items-center gap-4">
              <img src="icons/email-icon.svg" alt="" width={16} />
              <p className="text-regular-normal">info@magyar-tuzvedelem.hu</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topfoot;
