import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getEeducaBySlug } from "@/lib/content/queries";
import { EeducaDetail } from "@/components/landing/EeducaDetail";

export const metadata: Metadata = {
  title: "E@Educa Municípios — Via Educação",
  description: "Gestão escolar municipal: refeitórios, transportes, AEC, Carta Educativa e mais.",
};

export default async function EeducaMunicipiosPage() {
  const eeduca = await getEeducaBySlug("municipios");
  if (!eeduca) notFound();
  return <EeducaDetail eeduca={eeduca} />;
}
