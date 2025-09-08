"use client";
import React, { useState } from "react";
import "../styles/Header.css";
import Topbar from "./Header/Topbar";
import Navbar from "./Header/Navbar";
import MobileNavbar from "./Header/MobileNavbar";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const mobileToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <header>
      <Topbar />
      <Navbar mobileToggle={mobileToggle} mobileOpen={mobileOpen} />
      <MobileNavbar mobileOpen={mobileOpen} />
    </header>
  );
};

export default Header;
