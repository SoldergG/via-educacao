import { FacebookLogo } from "@phosphor-icons/react/dist/ssr";
import { Wordmark } from "./LogoMark";

const FOOTER_LINKS = [
  { label: "Serviços", href: "/#servicos" },
  { label: "Abordagem", href: "/#abordagem" },
  { label: "E@Educa", href: "/#eeduca" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Contactos", href: "/#contactos" },
  { label: "Notícias", href: "/noticias" },
  { label: "Certificações", href: "/certificacoes" },
  { label: "Formação", href: "/formacao" },
  { label: "Recrutamento", href: "/recrutamento" },
  { label: "Seminários & Eventos", href: "/seminarios" },
  { label: "Cartas Educativas", href: "/cartas-educativas" },
  { label: "Outros Serviços", href: "/outros-servicos" },
];

export function Footer({ facebookUrl }: { facebookUrl: string }) {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-3">
          <Wordmark />
          <p className="max-w-[32ch] text-sm leading-relaxed text-ink-muted">
            Consultoria e gestão educativa para autarquias e colégios em Portugal.
          </p>
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Via Educação no Facebook"
            className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-brand-400 hover:text-brand-700"
          >
            <FacebookLogo size={18} weight="light" />
          </a>
        </div>

        <nav className="grid grid-cols-2 gap-x-8 gap-y-2.5 sm:grid-cols-3">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="border-t border-border px-6 py-5">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs text-ink-muted">
            © {new Date().getFullYear()} Via Educação. Todos os direitos reservados. · Marca do
            grupo{" "}
            <a
              href="https://www.espalhaideias.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-ink"
            >
              Espalha Ideias
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
