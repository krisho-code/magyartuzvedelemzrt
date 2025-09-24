"use client";
import React, { useState } from "react";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import AlterNavbar from "./AlterNavbar";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const mobileToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <Topbar />
      <AlterNavbar mobileToggle={mobileToggle} mobileOpen={mobileOpen} />
      {/* <Navbar mobileToggle={mobileToggle} mobileOpen={mobileOpen} /> */}
      <MobileNavbar mobileToggle={mobileToggle} mobileOpen={mobileOpen} />
    </header>
  );
};

export default Header;
