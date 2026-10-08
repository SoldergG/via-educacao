import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { Hero as HeroContent } from "@/lib/content/types";
import { RevealOnScroll } from "./RevealOnScroll";
import { MosaicMark } from "./LogoMark";

type Stat = { valor: string; label: string };

export function Hero({
  content,
  stats = [],
}: {
  content: HeroContent;
  stats?: Stat[];
}) {
  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-8 sm:pt-24">
      {/* halo suave de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-brand-100/60 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <RevealOnScroll>
            <p className="inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
              {content.kicker}
            </p>
            <h1 className="mt-6 font-display text-[2.7rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-[3.4rem] lg:text-[3.9rem]">
              {content.headline}
            </h1>
            <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-ink-muted">
              {content.subheadline}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <a
                href={content.ctaHref}
                className="inline-flex h-12 items-center gap-2 rounded-full bg-brand-700 px-7 text-sm font-medium text-white transition-colors hover:bg-brand-800"
              >
                {content.ctaLabel}
                <ArrowRight size={16} weight="bold" />
              </a>
              <a
                href="#servicos"
                className="inline-flex h-12 items-center rounded-full border border-border px-7 text-sm font-medium text-ink transition-colors hover:border-brand-500 hover:text-brand-700"
              >
                Ver serviços
              </a>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border bg-surface">
                <Image
                  src={content.imageSrc}
                  alt={content.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 460px, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl border border-border bg-paper px-5 py-4 shadow-[0_16px_44px_-16px_rgba(19,33,28,0.28)] sm:-left-8">
                <MosaicMark size={34} />
                <div>
                  <p className="font-display text-sm font-semibold text-ink">e@educa®</p>
                  <p className="text-xs text-ink-muted">Gestão educativa integrada</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {stats.length > 0 && (
          <RevealOnScroll delay={0.15}>
            <dl className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-bg px-6 py-7">
                  <dt className="font-display text-3xl font-semibold tracking-tight text-brand-700 sm:text-4xl">
                    {stat.valor}
                  </dt>
                  <dd className="mt-1.5 text-sm text-ink-muted">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </RevealOnScroll>
        )}
      </div>
    </section>
  );
}
