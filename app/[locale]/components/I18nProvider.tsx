"use client";

import { I18nProviderClient } from "@/locales/client";

type ProviderProps = {
  locale: string;
  children: React.ReactNode;
};

export default function Provider({ locale, children }: ProviderProps) {
  return (
    <I18nProviderClient locale={locale}>
      {children}
    </I18nProviderClient>
  );
}