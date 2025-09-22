import React from "react";
import Link from "next/link";

interface MenuProps {
  mobileToggle?: () => void;
  extraClasses?: string;
}

const Menu: React.FC<MenuProps> = ({ mobileToggle, extraClasses }) => {
  return (
    <ul className={`menu ${extraClasses}`}>
      <li>
        <Link
          href="/cegismerteto"
          className="text-medium-normal"
          onClick={mobileToggle}
        >
          Cégismertető
        </Link>
      </li>
      <li>
        <Link
          href="/szolgaltatasok"
          className="text-medium-normal"
          onClick={mobileToggle}
        >
          Szolgáltatások
        </Link>
      </li>
      <li>
        <Link
          href="/referenciak"
          className="text-medium-normal"
          onClick={mobileToggle}
        >
          Referenciák
        </Link>
      </li>
      <li>
        <Link
          href="/kapcsolat"
          className="text-medium-normal"
          onClick={mobileToggle}
        >
          Kapcsolat
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
