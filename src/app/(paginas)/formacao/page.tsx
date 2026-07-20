import type { Metadata } from "next";
import { PageHeader } from "@/components/landing/PageHeader";
import { PedidoForm } from "@/components/landing/PedidoForm";
import { RevealOnScroll } from "@/components/landing/RevealOnScroll";

export const metadata: Metadata = {
  title: "Formação — Via Educação",
  description: "Regista o teu interesse nas ações de formação da Via Educação.",
};

export default function FormacaoPage() {
  return (
    <>
      <PageHeader
        titulo="Formação"
        intro="Inscreve-te para receberes brevemente o nosso programa de formação."
      />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <RevealOnScroll>
            <PedidoForm
              tipo="formacao"
              entidadeLabel="Entidade / Instituição"
              mensagemLabel="Observações"
              successMessage="Inscrição enviada com sucesso. Entraremos em contacto assim que o programa estiver disponível."
              submitLabel="Registar interesse"
            />
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
