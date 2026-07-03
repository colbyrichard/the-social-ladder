import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";

export const display = localFont({
  src: [
    { path: "../../public/fonts/sentient-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/sentient-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../../public/fonts/sentient-500.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/sentient-500-italic.woff2", weight: "500", style: "italic" },
  ],
  variable: "--font-display",
  display: "swap",
});

export const body = localFont({
  src: [
    { path: "../../public/fonts/switzer-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/switzer-500.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/switzer-600.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/switzer-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});

export const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});
