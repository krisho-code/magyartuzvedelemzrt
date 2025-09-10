import React from "react";
import CallToActionButton from "../Buttons/CallToActionButton";

interface MobileNavbarProps {
  mobileOpen: boolean;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ mobileOpen }) => {
  return (
    <div
      className={`mobile-navbar lg:hidden flex justify-center items-center h-fit py-8 bg-gray-100 ${
        mobileOpen ? "" : "hidden"
      }`}
    >
      <div className="container flex flex-col align-top justify-start gap-8 px-8">
        {/* Item */}
        <ul className="menu flex flex-col gap-0.5">
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
        {/* Item */}
        <CallToActionButton text="Vegye fel velünk a kapcsolatot!" />
        {/* Item */}
        <div className="language sm:hidden">
          <select name="language" id="language" className="text-regular-normal">
            <option value="hu">Magyar</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
