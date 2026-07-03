import type { Metadata } from "next";
import { display, body as bodyFont, mono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Social Ladder | Marketing with a little romance",
  description:
    "The Social Ladder is a social-media marketing studio for founder-led brands. Elegant, considered strategy and content that makes attention feel personal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${bodyFont.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink font-body">
        {children}
      </body>
    </html>
  );
}
