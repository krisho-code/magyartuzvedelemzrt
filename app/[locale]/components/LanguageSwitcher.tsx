"use client";

import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import { ChangeEvent } from "react";

interface LanguageSwitcherProps {
  extraClasses?: string;
}

export default function LanguageSwitcher({
  extraClasses,
}: LanguageSwitcherProps) {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as "hu" | "en";
    changeLocale(newLocale);
  };

  return (
    <select
      onChange={handleChange}
      value={locale}
      className={`text-regular-normal ${extraClasses}`}
    >
      <option value="hu">Magyar (HU)</option>
      <option value="en">English (EN)</option>
    </select>
  );
}
