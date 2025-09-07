import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { LanguageProvider } from "../context/LanguageContext";
import GoogleAnalytics from "../components/global/analytics/GoogleAnalytics";
import PageTracker from "../components/global/analytics/PageTracker";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gonzalo Balboa - Portfolio",
  description: "Portfolio personal de desarrollo web de Gonzalo Balboa",
  manifest: "/site.webmanifest",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="./favicon.ico" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <main>{children}</main>
        </LanguageProvider>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        <PageTracker />
        <SpeedInsights />
      </body>
    </html>
  );
}
