import type { Metadata } from "next";
import "./reset.css";
import "./globals.css";

import Header from "./components/Header";

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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
