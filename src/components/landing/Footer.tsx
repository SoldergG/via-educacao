import { FacebookLogo } from "@phosphor-icons/react/dist/ssr";
import { Wordmark } from "./LogoMark";

const FOOTER_LINKS = [
  { label: "Sobre", href: "/#sobre" },
  { label: "E@Educa", href: "/#eeduca" },
  { label: "Parcerias", href: "/#parcerias" },
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
    <footer className="border-t border-border bg-cream-soft">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <Wordmark className="font-display text-base tracking-[0.2em] text-ink" />

        <nav className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] uppercase tracking-[0.1em] text-ink-muted hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Via Educação no Facebook"
          className="text-ink-muted hover:text-ink"
        >
          <FacebookLogo size={20} weight="light" />
        </a>
      </div>
      <div className="border-t border-border px-4 py-5 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs text-ink-muted">
            © {new Date().getFullYear()} Via Educação. Todos os direitos reservados. · Marca do
            grupo{" "}
            <a
              href="https://www.espalhaideias.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-ink"
            >
              Espalha Ideias
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
