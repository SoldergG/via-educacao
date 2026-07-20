import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getEeducaBySlug } from "@/lib/content/queries";
import { EeducaDetail } from "@/components/landing/EeducaDetail";

export const metadata: Metadata = {
  title: "E@Educa Colégios — Via Educação",
  description: "Gestão escolar e portal para encarregados de educação em colégios privados.",
};

export default async function EeducaColegiosPage() {
  const eeduca = await getEeducaBySlug("colegios");
  if (!eeduca) notFound();
  return <EeducaDetail eeduca={eeduca} />;
}
