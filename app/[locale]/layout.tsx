import type { Metadata } from "next";
import "./styles/reset.css";
import "./styles/globals.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Provider from "./components/I18nProvider";

export const metadata: Metadata = {
  title: "",
  appleWebApp: {
    title: "MyWebSite",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;

  return (
    <Provider locale={locale}>
      <Header />
      {children}
      <Footer />
    </Provider>
  );
}
