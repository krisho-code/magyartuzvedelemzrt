import React from "react";
import Menu from "./Menu";
import CallToActionButton from "../CallToAction/CallToActionButton";
import AlterLogo from "../Global Components/AlterLogo";

interface NavbarProps {
  mobileToggle: () => void;
  mobileOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ mobileToggle, mobileOpen }) => {
  return (
    <div className="navbar flex justify-center items-center h-24 bg-zinc-800 text-white opacity-80">
      <div className="container flex items-center justify-between px-8">
        {/* Item */}
        <nav className="nav flex items-center gap-8">
          <AlterLogo />
          <Menu extraClasses="hidden lg:flex items-center gap-8" />
        </nav>
        {/* Item */}
        <CallToActionButton
          link="/kapcsolat"
          extraClasses={"hidden xl:flex"}
          text="Vegye fel velünk a kapcsolatot!"
        />

        {/* Mobile menu */}
        <button className="mobile-menu lg:hidden" onClick={mobileToggle}>
          {mobileOpen ? (
            <img src="icons/close-icon-white.svg" alt="Close" width={24} />
          ) : (
            <img src="icons/menu-icon-white.svg" alt="Menu" width={24} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
