import type { Metadata } from "next";
import Homepage from "./home/page";

export const metadata: Metadata = {
  title: "Hertzios | Desarrollo Web y Software a Medida",
  description:
    "Potenciamos tu negocio con soluciones de software a medida. Desarrollo de aplicaciones web, automatización de procesos e integración de sistemas.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Hertzios",
    "url": "https://www.hertzios.com",
    "logo": "https://www.hertzios.com/icon.png", // Next.js icon route
    "description": "Transformamos tus ideas en realidad digital. Desarrollo web, diseño UI/UX y soluciones tecnológicas a medida.",
    "sameAs": []
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Hertzios",
    "url": "https://www.hertzios.com"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Homepage />
    </>
  );
}
