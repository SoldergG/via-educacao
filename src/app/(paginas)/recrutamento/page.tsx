import type { Metadata } from "next";
import { PageHeader } from "@/components/landing/PageHeader";
import { PedidoForm } from "@/components/landing/PedidoForm";
import { RevealOnScroll } from "@/components/landing/RevealOnScroll";

export const metadata: Metadata = {
  title: "Recrutamento — Via Educação",
  description: "Queres fazer parte da equipa da Via Educação? Envia-nos a tua candidatura.",
};

export default function RecrutamentoPage() {
  return (
    <>
      <PageHeader
        titulo="Recrutamento"
        intro="Se estás interessado/a em fazer parte da equipa da Via Educação, envia-nos a tua candidatura. Todos os dados são confidenciais e utilizados apenas internamente."
      />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <RevealOnScroll>
            <PedidoForm
              tipo="recrutamento"
              entidadeLabel="Área de formação"
              mensagemLabel="Fala-nos um pouco sobre ti (ou deixa o link do teu CV/LinkedIn)"
              successMessage="Candidatura enviada com sucesso. Obrigado pelo interesse — entraremos em contacto se houver uma oportunidade compatível."
              submitLabel="Enviar candidatura"
            />
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
