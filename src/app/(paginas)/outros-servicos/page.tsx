import Image from "next/image";
import type { Metadata } from "next";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { getOutrosServicos } from "@/lib/content/queries";
import { PageHeader } from "@/components/landing/PageHeader";
import { RevealOnScroll } from "@/components/landing/RevealOnScroll";

export const metadata: Metadata = {
  title: "Outros Serviços — Via Educação",
  description: "Edição \"A minha escola…\" e consultoria no âmbito das AEC.",
};

export default async function OutrosServicosPage() {
  const servicos = await getOutrosServicos();

  return (
    <>
      <PageHeader titulo="Outros Serviços" />
      <section className="py-16 sm:py-20">
        <div className="mx-auto flex max-w-4xl flex-col gap-10 px-4 sm:px-6">
          {servicos.map((servico, index) => (
            <RevealOnScroll key={servico.slug} delay={index * 0.08}>
              <div className="grid grid-cols-1 gap-8 border border-border bg-paper p-8 sm:grid-cols-[1fr_1.4fr]">
                {servico.imageSrc && (
                  <div className="relative aspect-[4/3] overflow-hidden border border-border">
                    <Image
                      src={servico.imageSrc}
                      alt={servico.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 360px, 90vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <h2 className="font-display text-2xl text-ink">{servico.titulo}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{servico.texto}</p>
                  {servico.pontos.length > 0 && (
                    <ul className="mt-4 flex flex-col gap-2">
                      {servico.pontos.map((ponto) => (
                        <li key={ponto} className="flex items-start gap-2.5 text-sm text-ink-muted">
                          <CheckCircle size={16} weight="light" className="mt-0.5 shrink-0 text-olive" />
                          <span>{ponto}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
