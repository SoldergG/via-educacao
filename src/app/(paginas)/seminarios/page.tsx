import Image from "next/image";
import type { Metadata } from "next";
import { FileText } from "@phosphor-icons/react/dist/ssr";
import { getSeminarios } from "@/lib/content/queries";
import { PageHeader } from "@/components/landing/PageHeader";
import { RevealOnScroll } from "@/components/landing/RevealOnScroll";

export const metadata: Metadata = {
  title: "Seminários & Eventos — Via Educação",
  description: "Congressos, seminários e eventos da Via Educação.",
};

export default async function SeminariosPage() {
  const seminarios = await getSeminarios();

  return (
    <>
      <PageHeader titulo="Seminários & Eventos" />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="flex flex-col gap-6">
            {seminarios.map((seminario, index) => (
              <RevealOnScroll key={seminario.id} delay={index * 0.08}>
                <div className="grid grid-cols-1 overflow-hidden border border-border bg-paper sm:grid-cols-[220px_1fr]">
                  {seminario.imageSrc && (
                    <div className="relative aspect-[16/10] sm:aspect-auto">
                      <Image
                        src={seminario.imageSrc}
                        alt={seminario.imageAlt}
                        fill
                        sizes="220px"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex flex-col justify-center p-6">
                    {seminario.dataEvento && (
                      <p className="text-xs uppercase tracking-[0.1em] text-olive">
                        {seminario.dataEvento}
                      </p>
                    )}
                    <h2 className="mt-1.5 font-display text-xl text-ink">{seminario.titulo}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {seminario.descricao}
                    </p>
                    {seminario.pdfUrl && (
                      <a
                        href={seminario.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex w-fit items-center gap-1.5 text-xs uppercase tracking-[0.08em] text-olive hover:text-olive-dark"
                      >
                        <FileText size={14} weight="light" />
                        Ver programa
                      </a>
                    )}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
            {seminarios.length === 0 && (
              <p className="text-sm text-ink-muted">Sem eventos publicados de momento.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
