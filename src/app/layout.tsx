import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { LanguageProvider } from "../context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gonzalo Balboa - Portfolio",
  description: "Portfolio personal de desarrollo web",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      {
        url: '/logo.jpg',
        type: 'image/jpg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <LanguageProvider>
          <main>{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
