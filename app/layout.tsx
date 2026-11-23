import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SOKO HUB | Shop Kapkures",
  description: "Discover local shops and products in Kapkures, Kenya.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
