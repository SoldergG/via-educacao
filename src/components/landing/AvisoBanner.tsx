import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { Aviso } from "@/lib/content/types";
import { RevealOnScroll } from "./RevealOnScroll";

/**
 * Bloco editável para o "Em destaque" da home — o admin liga/desliga
 * em /admin/hero-aviso.
 */
export function AvisoBanner({ aviso }: { aviso: Aviso }) {
  if (!aviso.ativo) return null;

  return (
    <section className="pt-4 pb-4">
      <div className="mx-auto max-w-6xl px-6">
        <RevealOnScroll>
          <div className="grid grid-cols-1 items-center gap-6 rounded-2xl border border-brand-200 bg-brand-50 p-6 sm:grid-cols-[auto_1fr_auto] sm:gap-8 sm:p-8">
            {aviso.imageSrc && (
              <div className="relative h-20 w-32 shrink-0 overflow-hidden rounded-xl border border-border bg-paper sm:h-24 sm:w-40">
                <Image
                  src={aviso.imageSrc}
                  alt={aviso.imageAlt}
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <p className="font-display text-xl font-semibold tracking-tight text-ink">
                {aviso.titulo}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{aviso.texto}</p>
            </div>
            {aviso.linkHref && (
              <a
                href={aviso.linkHref}
                target={aviso.linkHref.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="inline-flex h-11 shrink-0 items-center gap-1.5 rounded-full bg-brand-700 px-6 text-sm font-medium text-white transition-colors hover:bg-brand-800"
              >
                {aviso.linkLabel}
                <ArrowUpRight size={15} weight="bold" />
              </a>
            )}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
