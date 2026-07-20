import Image from "next/image";
import type { Metadata } from "next";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { getCartasEducativas } from "@/lib/content/queries";
import { PageHeader } from "@/components/landing/PageHeader";
import { RevealOnScroll } from "@/components/landing/RevealOnScroll";

export const metadata: Metadata = {
  title: "Elaboração de Cartas Educativas e Projeto Educativo Municipal — Via Educação",
  description:
    "Serviço de consultoria da Via Educação para apoiar municípios na elaboração de Cartas Educativas e do Projeto Educativo Municipal.",
};

export default async function CartasEducativasPage() {
  const content = await getCartasEducativas();

  return (
    <>
      <PageHeader titulo={content.titulo} intro={content.texto} />
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6">
          <RevealOnScroll>
            <a
              href={content.cartaCtaHref}
              className="group flex flex-col overflow-hidden border border-border bg-paper transition-colors hover:border-olive"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={content.cartaImageSrc}
                  alt="Elaboração de Cartas Educativas de 2ª Geração"
                  fill
                  sizes="(min-width: 1024px) 480px, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 items-center justify-between p-6">
                <span className="font-display text-lg text-ink">{content.cartaCtaLabel}</span>
                <ArrowUpRight size={18} weight="light" className="text-olive" />
              </div>
            </a>
          </RevealOnScroll>
          <RevealOnScroll delay={0.08}>
            <a
              href={content.pemCtaHref}
              className="group flex flex-col overflow-hidden border border-border bg-paper transition-colors hover:border-olive"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={content.pemImageSrc}
                  alt="Projeto Educativo Municipal"
                  fill
                  sizes="(min-width: 1024px) 480px, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 items-center justify-between p-6">
                <span className="font-display text-lg text-ink">{content.pemCtaLabel}</span>
                <ArrowUpRight size={18} weight="light" className="text-olive" />
              </div>
            </a>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
