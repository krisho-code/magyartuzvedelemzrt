import type { Metadata } from "next";
import "./styles/reset.css";
import "./styles/globals.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Provider from "./components/I18nProvider";

export const metadata: Metadata = {
  title: "",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  return (
    <html lang={locale}>
      <body>
        <Provider locale={locale}>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
