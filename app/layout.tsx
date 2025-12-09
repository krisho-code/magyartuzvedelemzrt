import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Magyar Tűzvédelem Zrt.",
  description:
    "Magyar Tűzvédelem Zrt. - Professzionális tűzvédelmi szolgáltatások",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
