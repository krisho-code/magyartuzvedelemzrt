"use client";

import { useChangeLocale, useCurrentLocale, useI18n } from "@/locales/client";
import { ChangeEvent } from "react";

interface LanguageSwitcherProps {
  extraClasses?: string;
  mobileToggle?: () => void;
}

export default function LanguageSwitcher({
  extraClasses,
  mobileToggle,
}: LanguageSwitcherProps) {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();
  const t = useI18n();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as "hu" | "en";
    changeLocale(newLocale);
    // Close mobile menu when language is changed in mobile view
    if (mobileToggle) {
      mobileToggle();
    }
  };

  return (
    <select
      onChange={handleChange}
      value={locale}
      className={`text-regular-normal ${extraClasses}`}
    >
      <option value="hu">{t("header.languageSwitcher.hungarian")}</option>
      <option value="en">{t("header.languageSwitcher.english")}</option>
    </select>
  );
}
