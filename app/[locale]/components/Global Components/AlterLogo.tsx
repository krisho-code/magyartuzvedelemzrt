"use client";

import React from "react";
import Link from "next/link";
import { useCurrentLocale } from "@/locales/client";

interface LogoProps {
  mobileToggle?: () => void;
}

const Logo: React.FC<LogoProps> = ({ mobileToggle }) => {
  const locale = useCurrentLocale();

  return (
    <Link href={`/${locale}`} className="logo max-w-40" onClick={mobileToggle}>
      <img src="/alter-logo.svg" alt="Magyar Tűzvédelem Zrt." />
    </Link>
  );
};

export default Logo;
