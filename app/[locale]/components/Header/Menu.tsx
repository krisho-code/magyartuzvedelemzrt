"use client";

import React from "react";
import Link from "next/link";
import { useI18n } from "@/locales/client";

interface MenuProps {
  mobileToggle?: () => void;
  extraClasses?: string;
}

const Menu: React.FC<MenuProps> = ({ mobileToggle, extraClasses }) => {
  const t = useI18n();

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
      <li>
        <Link
          href="/szolgaltatasok"
          className="text-medium-normal"
          onClick={mobileToggle}
        >
          {t("header.navigation.services")}
        </Link>
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
