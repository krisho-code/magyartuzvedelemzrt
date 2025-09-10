import React from "react";
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
          <a href="#" className="logo">
            <img src="logo.svg" alt="Magyar Tűzvédelem Zrt." />
          </a>
          <ul className="menu hidden lg:flex items-center gap-8">
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
        </nav>
        {/* Item */}
        <CallToActionButton extraClasses={"hidden lg:block"} />

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
