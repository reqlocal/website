import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import { FooterCta } from "@/components/FooterCta";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "reqlocal — Request-scoped context for Node.js",
  description:
    "Typed request context with AsyncLocalStorage. Zero runtime dependencies. Express and Fastify.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "reqlocal",
    description:
      "Stop threading context. One middleware. TypeScript-native request stores for Node.js.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen font-sans">
        <Navbar />
        {children}
        <FooterCta />
      </body>
    </html>
  );
}
