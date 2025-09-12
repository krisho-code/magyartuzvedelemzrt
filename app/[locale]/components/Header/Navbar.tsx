import React from "react";
import Logo from "../Logo";
import Menu from "../Menu";
import CallToActionButton from "../Buttons/CallToActionButton";

interface NavbarProps {
  mobileToggle: () => void;
  mobileOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ mobileToggle, mobileOpen }) => {
  return (
    <div className="navbar flex justify-center items-center h-24 border-b-2 sm:border-t-2 border-gray-200 bg-white">
      <div className="container flex items-center justify-between px-8">
        {/* Item */}
        <nav className="nav flex items-center gap-8">
          <Logo />
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
            <img src="icons/close-icon.svg" alt="Close" width={24} />
          ) : (
            <img src="icons/menu-icon.svg" alt="Menu" width={24} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
