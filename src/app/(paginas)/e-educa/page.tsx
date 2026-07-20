import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getEeducaBySlug } from "@/lib/content/queries";
import { EeducaDetail } from "@/components/landing/EeducaDetail";

export const metadata: Metadata = {
  title: "E@Educa — Via Educação",
  description: "Portal e@educa®: gestão educativa inovadora para autarquias e colégios.",
};

export default async function EeducaGeralPage() {
  const eeduca = await getEeducaBySlug("geral");
  if (!eeduca) notFound();
  return <EeducaDetail eeduca={eeduca} />;
}
