"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CaretDown, List, X, ArrowRight } from "@phosphor-icons/react";
import { Wordmark } from "./LogoMark";

const ANCHOR_LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Abordagem", href: "#abordagem" },
  { label: "E@Educa", href: "#eeduca" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contactos", href: "#contactos" },
];

const MAIS_LINKS = [
  { label: "Notícias", href: "/noticias" },
  { label: "Certificações", href: "/certificacoes" },
  { label: "Formação", href: "/formacao" },
  { label: "Recrutamento", href: "/recrutamento" },
  { label: "Seminários & Eventos", href: "/seminarios" },
  { label: "Cartas Educativas", href: "/cartas-educativas" },
  { label: "Outros Serviços", href: "/outros-servicos" },
];

const AREA_CLIENTE_HREF = "https://www.cedis.pt/home.asp";

export function Header() {
  const [open, setOpen] = useState(false);
  const [maisOpen, setMaisOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6">
        <Link href={onHome ? "#top" : "/"} className="shrink-0">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {ANCHOR_LINKS.map((link) => (
            <a
              key={link.href}
              href={onHome ? link.href : `/${link.href}`}
              className="text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setMaisOpen(true)}
            onMouseLeave={() => setMaisOpen(false)}
          >
            <button
              type="button"
              aria-expanded={maisOpen}
              className="flex items-center gap-1 text-sm text-ink-muted transition-colors hover:text-ink"
            >
              Mais
              <CaretDown size={12} weight="bold" />
            </button>
            {maisOpen && (
              <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 overflow-hidden rounded-2xl border border-border bg-paper p-2 shadow-[0_12px_40px_-12px_rgba(19,33,28,0.18)]">
                {MAIS_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-lg px-3 py-2.5 text-sm text-ink-muted transition-colors hover:bg-surface hover:text-ink"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={AREA_CLIENTE_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block rounded-lg border-t border-border px-3 py-2.5 text-sm text-brand-700 transition-colors hover:bg-surface"
                >
                  Área de Cliente
                </a>
              </div>
            )}
          </div>
        </nav>

        <div className="hidden lg:block">
          <a
            href={onHome ? "#pedido-contacto" : "/#pedido-contacto"}
            className="inline-flex h-11 items-center gap-2 rounded-full bg-brand-700 px-6 text-sm font-medium text-white transition-colors hover:bg-brand-800"
          >
            Pedido de contacto
            <ArrowRight size={15} weight="bold" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center text-ink lg:hidden"
        >
          {open ? <X size={22} weight="light" /> : <List size={22} weight="light" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-bg px-6 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col">
            {ANCHOR_LINKS.map((link) => (
              <a
                key={link.href}
                href={onHome ? link.href : `/${link.href}`}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3.5 text-sm text-ink-muted"
              >
                {link.label}
              </a>
            ))}
            {MAIS_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3.5 text-sm text-ink-muted"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={AREA_CLIENTE_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="border-b border-border py-3.5 text-sm text-brand-700 last:border-b-0"
            >
              Área de Cliente
            </a>
          </nav>
          <a
            href={onHome ? "#pedido-contacto" : "/#pedido-contacto"}
            onClick={() => setOpen(false)}
            className="mt-4 flex h-11 items-center justify-center rounded-full bg-brand-700 text-center text-sm font-medium text-white"
          >
            Pedido de contacto
          </a>
        </div>
      )}
    </header>
  );
}
