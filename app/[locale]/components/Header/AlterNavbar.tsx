"use client";

import React, { useEffect, useState, useRef } from "react";
import { useI18n } from "@/locales/client";
import Menu from "./Menu";
import CallToActionButton from "../CallToAction/CallToActionButton";
import AlterLogo from "../Global Components/AlterLogo";
import Link from "next/link";

interface NavbarProps {
  mobileToggle: () => void;
  mobileOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ mobileToggle, mobileOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const t = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 48);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <div
        className={`navbar alter-navbar flex justify-center items-center h-24 bg-zinc-800 text-white transition-opacity ease-in-out duration-250 ${
          mobileOpen ? "opacity-100" : "opacity-80"
        } ${scrolled ? "opacity-80" : "opacity-100"} hover:opacity-100`}
      >
        <div className="container flex items-center justify-between px-8">
          {/* Item */}
          <nav className="nav flex items-center gap-8">
            <AlterLogo />
            <Menu
              extraClasses="hidden lg:flex items-center gap-8"
              servicesDropdownOpen={servicesDropdownOpen}
              setServicesDropdownOpen={setServicesDropdownOpen}
            />
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
              <img
                src="/icons/close-icon-white.svg"
                alt={t("header.mobile.closeAlt")}
                width={24}
              />
            ) : (
              <img
                src="/icons/menu-icon-white.svg"
                alt={t("header.mobile.menuAlt")}
                width={24}
              />
            )}
          </button>
        </div>
      </div>

      {/* Services Dropdown - positioned at bottom of header */}
      <div
        className={`services-dropdown hidden lg:block absolute left-0 right-0 bg-gray-200 shadow-lg overflow-hidden transition-all duration-300 ease-in-out z-50 ${
          servicesDropdownOpen
            ? "opacity-100 max-h-96 transform translate-y-0"
            : "opacity-0 max-h-0 transform -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="container px-8">
          <ul className="py-4">
            <li>
              <Link
                href="/szolgaltatasok"
                className="block py-2 text-black hover:text-[#ae2138] transition-colors duration-250"
                onClick={() => setServicesDropdownOpen(false)}
              >
                {t("header.servicesDropdown.allServices")}
              </Link>
            </li>
            <li>
              <Link
                href="/szolgaltatasok/tuzvedelem"
                className="block py-2 text-black hover:text-[#ae2138] transition-colors duration-250"
                onClick={() => setServicesDropdownOpen(false)}
              >
                {t("header.servicesDropdown.tuzvedelem")}
              </Link>
            </li>
            <li>
              <Link
                href="/szolgaltatasok/azbesztmentesites"
                className="block py-2 text-black hover:text-[#ae2138] transition-colors duration-250"
                onClick={() => setServicesDropdownOpen(false)}
              >
                {t("header.servicesDropdown.azbesztmentesites")}
              </Link>
            </li>
            <li>
              <Link
                href="/szolgaltatasok/tuzkarmentesites"
                className="block py-2 text-black hover:text-[#ae2138] transition-colors duration-250"
                onClick={() => setServicesDropdownOpen(false)}
              >
                {t("header.servicesDropdown.tuzkarmentesites")}
              </Link>
            </li>
            <li>
              <Link
                href="/szolgaltatasok/vizkarmentesites"
                className="block py-2 text-black hover:text-[#ae2138] transition-colors duration-250"
                onClick={() => setServicesDropdownOpen(false)}
              >
                {t("header.servicesDropdown.vizkarmentesites")}
              </Link>
            </li>
            <li>
              <Link
                href="/szolgaltatasok/tisztitasesveszelytelenites"
                className="block py-2 text-black hover:text-[#ae2138] transition-colors duration-250"
                onClick={() => setServicesDropdownOpen(false)}
              >
                {t("header.servicesDropdown.tisztitasesveszelytelenites")}
              </Link>
            </li>
            <li>
              <Link
                href="/szolgaltatasok/alpintechnika"
                className="block py-2 text-black hover:text-[#ae2138] transition-colors duration-250"
                onClick={() => setServicesDropdownOpen(false)}
              >
                {t("header.servicesDropdown.alpintechnika")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
