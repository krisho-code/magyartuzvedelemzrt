"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useI18n } from "@/locales/client";

interface MenuProps {
  mobileToggle?: () => void;
  extraClasses?: string;
  servicesDropdownOpen?: boolean;
  setServicesDropdownOpen?: (open: boolean) => void;
}

const Menu: React.FC<MenuProps> = ({
  mobileToggle,
  extraClasses,
  servicesDropdownOpen: parentServicesDropdownOpen,
  setServicesDropdownOpen: parentSetServicesDropdownOpen,
}) => {
  const t = useI18n();
  const [localServicesDropdownOpen, setLocalServicesDropdownOpen] =
    useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Use parent state if available, otherwise use local state
  const servicesDropdownOpen =
    parentServicesDropdownOpen !== undefined
      ? parentServicesDropdownOpen
      : localServicesDropdownOpen;
  const setServicesDropdownOpen =
    parentSetServicesDropdownOpen || setLocalServicesDropdownOpen;

  // Close dropdown when clicking outside (only for mobile)
  useEffect(() => {
    const isMobile = extraClasses?.includes("flex-col");
    if (!isMobile) return; // Desktop dropdown is handled by parent

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
  }, [extraClasses, setServicesDropdownOpen]);

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  const handleDropdownLinkClick = () => {
    setServicesDropdownOpen(false);
    if (mobileToggle) {
      mobileToggle();
    }
  };

  const isMobile = extraClasses?.includes("flex-col");

  return (
    <ul className={`menu ${extraClasses}`}>
      <li>
        <Link
          href="/cegismerteto"
          className="text-medium-normal"
          onClick={mobileToggle}
        >
          {t("header.navigation.about")}
        </Link>
      </li>
      <li ref={dropdownRef} className="relative">
        <button
          onClick={handleServicesClick}
          className="text-medium-normal hover:text-[#ae2138] transition-colors duration-250 cursor-pointer flex items-center gap-1"
        >
          {t("header.navigation.services")}
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${
              servicesDropdownOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Services Dropdown - Mobile Only */}
        {isMobile && (
          <div
            className={`services-dropdown relative mt-2 w-full bg-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
              servicesDropdownOpen
                ? "opacity-100 max-h-96 transform translate-y-0"
                : "opacity-0 max-h-0 transform -translate-y-2 pointer-events-none"
            }`}
          >
            <ul className="py-2">
              <li className="dropdown-li-item">
                <Link
                  href="/szolgaltatasok"
                  className="block px-4 py-2 text-medium-normal hover:text-[#ae2138] transition-colors duration-250"
                  onClick={handleDropdownLinkClick}
                >
                  {t("header.servicesDropdown.allServices")}
                </Link>
              </li>
              <li className="dropdown-li-item">
                <Link
                  href="/szolgaltatasok/tuzvedelem"
                  className="block px-4 py-2 text-medium-normal hover:text-[#ae2138] transition-colors duration-250"
                  onClick={handleDropdownLinkClick}
                >
                  {t("header.servicesDropdown.tuzvedelem")}
                </Link>
              </li>
              <li className="dropdown-li-item">
                <Link
                  href="/szolgaltatasok/azbesztmentesites"
                  className="block px-4 py-2 text-medium-normal hover:text-[#ae2138] transition-colors duration-250"
                  onClick={handleDropdownLinkClick}
                >
                  {t("header.servicesDropdown.azbesztmentesites")}
                </Link>
              </li>
              <li className="dropdown-li-item">
                <Link
                  href="/szolgaltatasok/tuzkarmentesites"
                  className="block px-4 py-2 text-medium-normal hover:text-[#ae2138] transition-colors duration-250"
                  onClick={handleDropdownLinkClick}
                >
                  {t("header.servicesDropdown.tuzkarmentesites")}
                </Link>
              </li>
              <li className="dropdown-li-item">
                <Link
                  href="/szolgaltatasok/vizkarmentesites"
                  className="block px-4 py-2 text-medium-normal hover:text-[#ae2138] transition-colors duration-250"
                  onClick={handleDropdownLinkClick}
                >
                  {t("header.servicesDropdown.vizkarmentesites")}
                </Link>
              </li>
              <li className="dropdown-li-item">
                <Link
                  href="/szolgaltatasok/tisztitasesveszelytelenites"
                  className="block px-4 py-2 text-medium-normal hover:text-[#ae2138] transition-colors duration-250"
                  onClick={handleDropdownLinkClick}
                >
                  {t("header.servicesDropdown.tisztitasesveszelytelenites")}
                </Link>
              </li>
              <li className="dropdown-li-item">
                <Link
                  href="/szolgaltatasok/alpintechnika"
                  className="block px-4 py-2 text-medium-normal hover:text-[#ae2138] transition-colors duration-250"
                  onClick={handleDropdownLinkClick}
                >
                  {t("header.servicesDropdown.alpintechnika")}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </li>
      <li>
        <Link
          href="/kapcsolat"
          className="text-medium-normal"
          onClick={mobileToggle}
        >
          {t("header.navigation.contact")}
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
