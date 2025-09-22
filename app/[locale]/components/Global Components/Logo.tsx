import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="logo">
      <img src="logo.svg" alt="Magyar Tűzvédelem Zrt." />
    </Link>
  );
};

export default Logo;
