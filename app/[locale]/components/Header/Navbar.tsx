"use client";

import React from "react";
import { useI18n } from "@/locales/client";
import Logo from "../Global Components/Logo";
import Menu from "./Menu";
import CallToActionButton from "../CallToAction/CallToActionButton";

interface NavbarProps {
  mobileToggle: () => void;
  mobileOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ mobileToggle, mobileOpen }) => {
  const t = useI18n();

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
          text={t("header.cta.contactUs")}
        />

        {/* Mobile menu */}
        <button className="mobile-menu lg:hidden" onClick={mobileToggle}>
          {mobileOpen ? (
            <img src="icons/close-icon.svg" alt={t("header.mobile.closeAlt")} width={24} />
          ) : (
            <img src="icons/menu-icon.svg" alt={t("header.mobile.menuAlt")} width={24} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
