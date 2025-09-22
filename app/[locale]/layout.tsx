import type { Metadata } from "next";
import "./styles/reset.css";
import "./styles/globals.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="">
      <body className="pt-24 sm:pt-36">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
