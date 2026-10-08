import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { Eeduca } from "@/lib/content/types";
import { RevealOnScroll } from "./RevealOnScroll";

const SUBPAGE_HREF: Record<string, string> = {
  geral: "/e-educa",
  colegios: "/e-educa/colegios",
  municipios: "/e-educa/municipios",
};

export function EeducaOverview({ eeduca }: { eeduca: Eeduca[] }) {
  return (
    <section id="eeduca" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <RevealOnScroll className="max-w-2xl">
          <p className="inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            Plataforma
          </p>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.1]">
            e@educa®
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            O portal e@educa® fornece a autarquias e colégios um serviço de gestão
            inovador na área da educação — já implementado em 16 concelhos, para cerca de
            20.000 crianças.
          </p>
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {eeduca.map((item, index) => (
            <RevealOnScroll key={item.slug} delay={index * 0.08}>
              <Link
                href={SUBPAGE_HREF[item.slug] ?? "/e-educa"}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-paper transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-[0_20px_50px_-24px_rgba(19,33,28,0.25)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 380px, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                    {item.titulo}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-muted">
                    {item.resumo}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700">
                    Saber mais
                    <ArrowUpRight
                      size={16}
                      weight="bold"
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
