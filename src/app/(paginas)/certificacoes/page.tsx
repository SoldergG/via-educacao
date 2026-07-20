import Image from "next/image";
import type { Metadata } from "next";
import { FileText } from "@phosphor-icons/react/dist/ssr";
import { getCertificacao } from "@/lib/content/queries";
import { PageHeader } from "@/components/landing/PageHeader";
import { RevealOnScroll } from "@/components/landing/RevealOnScroll";

export const metadata: Metadata = {
  title: "Certificações — Via Educação",
  description: "Certificação PME da Via Educação, atribuída pelo IAPMEI.",
};

export default async function CertificacoesPage() {
  const certificacao = await getCertificacao();

  return (
    <>
      <PageHeader titulo="Certificações" />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <RevealOnScroll>
            <p className="text-base leading-relaxed text-ink-muted">{certificacao.texto}</p>
            <div className="mt-8 flex items-center gap-5 border border-border bg-paper p-6">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden border border-border bg-cream">
                <Image
                  src={certificacao.imageSrc}
                  alt={certificacao.imageAlt}
                  fill
                  sizes="80px"
                  className="object-contain p-2"
                />
              </div>
              {certificacao.pdfUrl && (
                <a
                  href={certificacao.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm uppercase tracking-[0.08em] text-olive hover:text-olive-dark"
                >
                  <FileText size={16} weight="light" />
                  Ver certificado
                </a>
              )}
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
