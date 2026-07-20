import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getNoticias } from "@/lib/content/queries";
import { PageHeader } from "@/components/landing/PageHeader";
import { RevealOnScroll } from "@/components/landing/RevealOnScroll";

export const metadata: Metadata = {
  title: "Notícias — Via Educação",
  description: "Arquivo de comunicados e novidades da Via Educação.",
};

export default async function NoticiasPage() {
  const noticias = await getNoticias();

  return (
    <>
      <PageHeader titulo="Notícias" intro="Arquivo de comunicados e novidades da Via Educação." />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {noticias.map((noticia, index) => (
              <RevealOnScroll key={noticia.slug} delay={(index % 6) * 0.06}>
                <Link
                  href={`/noticias/${noticia.slug}`}
                  className="group flex h-full flex-col overflow-hidden border border-border bg-paper transition-colors hover:border-olive"
                >
                  {noticia.imageSrc && (
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={noticia.imageSrc}
                        alt={noticia.imageAlt ?? ""}
                        fill
                        sizes="(min-width: 1024px) 360px, 90vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs uppercase tracking-[0.1em] text-ink-muted">
                      {noticia.dataNoticia}
                    </p>
                    <h2 className="mt-2 font-display text-lg text-ink">{noticia.titulo}</h2>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-muted">
                      {noticia.resumo}
                    </p>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
