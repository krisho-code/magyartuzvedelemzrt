import React from "react";
import Link from "next/link";

interface LogoProps {
  mobileToggle?: () => void;
}

const Logo: React.FC<LogoProps> = ({ mobileToggle }) => {
  return (
    <Link href="/" className="logo max-w-40" onClick={mobileToggle}>
      <img src="/alter-logo.svg" alt="Magyar Tűzvédelem Zrt." />
    </Link>
  );
};

export default Logo;
