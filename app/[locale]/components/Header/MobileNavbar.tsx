import React from "react";
import CallToActionButton from "../CallToAction/CallToActionButton";
import Menu from "./Menu";
import LanguageSwitcher from "./LanguageSwitcher";

interface MobileNavbarProps {
  mobileToggle: () => void;
  mobileOpen: boolean;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  mobileToggle,
  mobileOpen,
}) => {
  return (
    <div
      className={`mobile-navbar lg:hidden flex justify-center items-center h-fit py-8 bg-gray-100 ${
        mobileOpen ? "" : "hidden"
      }`}
    >
      <div className="container flex flex-col align-top justify-start gap-8 px-8">
        {/* Item */}
        <Menu
          extraClasses="flex flex-col gap-0.5"
          mobileToggle={mobileToggle}
        />
        {/* Item */}
        <CallToActionButton
          link="/kapcsolat"
          text="Vegye fel velünk a kapcsolatot!"
          mobileToggle={mobileToggle}
        />
        {/* Item */}
        <LanguageSwitcher extraClasses="sm:hidden" />
      </div>
    </div>
  );
};

export default MobileNavbar;
