import type { Metadata } from "next";
import Homepage from "./home/page";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Potenciamos tu negocio con soluciones de software a medida. Desarrollo web, automatización e integración de sistemas.",
};

export default function Home() {
  return (
    <>
      < Homepage />
    </>
  );
}
