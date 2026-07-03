import localFont from "next/font/local";

export const display = localFont({
  src: [
    { path: "../../public/fonts/cabinet-grotesk-500.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/cabinet-grotesk-700.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/cabinet-grotesk-800.woff2", weight: "800", style: "normal" },
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
