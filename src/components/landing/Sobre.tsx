import Image from "next/image";
import { Check } from "@phosphor-icons/react/dist/ssr";
import type { Sobre as SobreContent } from "@/lib/content/types";
import { RevealOnScroll } from "./RevealOnScroll";

export function Sobre({ content }: { content: SobreContent }) {
  const anosDeAtividade = new Date().getFullYear() - content.anoFundacao;

  return (
    <section id="sobre" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <RevealOnScroll className="relative order-2 lg:order-1">
          <div className="relative aspect-[5/5] w-full overflow-hidden rounded-3xl border border-border">
            <Image
              src={content.imageSrc}
              alt={content.imageAlt}
              fill
              sizes="(min-width: 1024px) 460px, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-4 rounded-2xl border border-border bg-paper px-6 py-5 shadow-[0_16px_44px_-16px_rgba(19,33,28,0.28)] sm:-right-8">
            <p className="font-display text-4xl font-semibold tracking-tight text-brand-700">
              {anosDeAtividade}
            </p>
            <p className="mt-0.5 text-xs uppercase tracking-[0.12em] text-ink-muted">
              anos de experiência
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1} className="order-1 lg:order-2">
          <p className="inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            Quem somos
          </p>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.1]">
            {content.titulo}
          </h2>
          <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-ink-muted">
            {content.textoIntro}
          </p>
          <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-ink-muted">
            {content.textoMissao}
          </p>

          <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {content.pontos.map((ponto) => (
              <li key={ponto} className="flex items-start gap-3 text-sm text-ink">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <Check size={12} weight="bold" />
                </span>
                <span>{ponto}</span>
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </section>
  );
}
