import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Box, Toolbar } from "@mui/material";
import Menu from "./menu";
import Footer from "./footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hertzios.com"),
  title: {
    default: "Hertzios | Soluciones Digitales",
    template: "%s | Hertzios",
  },
  description:
    "Transformamos tus ideas en realidad digital. Desarrollo web, diseño UI/UX y soluciones tecnológicas a medida para tu negocio.",
  openGraph: {
    title: "Hertzios | Soluciones Digitales",
    description:
      "Transformamos tus ideas en realidad digital. Desarrollo web, diseño UI/UX y soluciones tecnológicas a medida para tu negocio.",
    url: "https://www.hertzios.com",
    siteName: "Hertzios",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hertzios | Soluciones Digitales",
    description:
      "Transformamos tus ideas en realidad digital. Desarrollo web, diseño UI/UX y soluciones tecnológicas a medida para tu negocio.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Menu />
        <Box component="main" sx={{ p: 3 }}>
          {<Toolbar />}
          {children}

        </Box>
        <Footer />

      </body>
    </html>
  );
}
