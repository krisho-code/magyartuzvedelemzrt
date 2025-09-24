import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="logo max-w-48">
      <img src="alter-logo.svg" alt="Magyar Tűzvédelem Zrt." />
    </Link>
  );
};

export default Logo;
