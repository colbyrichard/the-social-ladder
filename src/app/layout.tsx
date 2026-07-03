import type { Metadata } from "next";
import { display, body as bodyFont } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fielding Marketing Co. | Marketing for founder-led brands",
  description:
    "Fielding is a marketing partner for founder-led brands that have outgrown guesswork. Strategy, brand, and growth marketing under one roof.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink font-body">
        {children}
      </body>
    </html>
  );
}
