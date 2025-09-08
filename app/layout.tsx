import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
