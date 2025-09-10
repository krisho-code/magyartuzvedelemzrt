"use client";
import React, { useState } from "react";
import Topbar from "./Header/Topbar";
import Navbar from "./Header/Navbar";
import MobileNavbar from "./Header/MobileNavbar";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const mobileToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <Topbar />
      <Navbar mobileToggle={mobileToggle} mobileOpen={mobileOpen} />
      <MobileNavbar mobileOpen={mobileOpen} />
    </header>
  );
};

export default Header;
