import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menu from "./menu";
import Footer from "./footer";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import Script from "next/script";

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
  alternates: {
    canonical: "/",
  },
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
    <html lang="es" suppressHydrationWarning>
      <head>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const supportDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && supportDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background font-sans text-foreground`}
      >
        <AppRouterCacheProvider>
          <Menu />
          <main className="container mx-auto p-4 pt-20">
            {children}
          </main>
          <Footer />
          <WhatsAppFAB />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
