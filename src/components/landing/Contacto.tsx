import { Envelope, FacebookLogo, MapPin, Phone, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { Contacto as ContactoContent } from "@/lib/content/types";
import { RevealOnScroll } from "./RevealOnScroll";

export function Contacto({ content }: { content: ContactoContent }) {
  return (
    <section id="contactos" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <RevealOnScroll>
          <p className="inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            Falar connosco
          </p>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.1]">
            Contactos
          </h2>
          <p className="mt-5 max-w-[50ch] text-lg leading-relaxed text-ink-muted">
            Autarquias, colégios e agrupamentos podem contactar-nos diretamente.
          </p>

          <div className="mt-9 flex flex-col gap-5">
            <div className="flex items-start gap-3.5">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <MapPin size={18} weight="light" />
              </span>
              <p className="text-sm leading-relaxed text-ink">
                {content.moradaLinha1}
                <br />
                {content.moradaLinha2}
                <br />
                {content.moradaLinha3}
              </p>
            </div>
            <div className="flex items-center gap-3.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <Phone size={18} weight="light" />
              </span>
              <div className="flex flex-col text-sm text-ink">
                <a href={`tel:${content.telefone.replace(/\s/g, "")}`}>
                  Portugal: {content.telefone}
                </a>
                {content.telefoneAngola && (
                  <a href={`tel:${content.telefoneAngola.replace(/\s/g, "")}`}>
                    Angola: {content.telefoneAngola}
                  </a>
                )}
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <Envelope size={18} weight="light" />
              </span>
              <a href={`mailto:${content.email}`} className="text-sm text-ink">
                {content.email}
              </a>
            </div>
            <div className="flex items-center gap-3.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <FacebookLogo size={18} weight="light" />
              </span>
              <a
                href={content.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink"
              >
                Facebook
              </a>
            </div>
          </div>

          <a
            href="#pedido-contacto"
            className="mt-9 inline-flex h-12 items-center gap-2 rounded-full bg-brand-700 px-7 text-sm font-medium text-white transition-colors hover:bg-brand-800"
          >
            Fazer um pedido de contacto
            <ArrowRight size={16} weight="bold" />
          </a>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="h-full min-h-[380px] w-full overflow-hidden rounded-3xl border border-border">
            <iframe
              src={content.googleMapsEmbedUrl}
              title="Localização da Via Educação em Algés"
              className="h-full w-full min-h-[380px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
