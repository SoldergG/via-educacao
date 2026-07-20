import { supabasePublic } from "@/lib/supabase/public";
import type {
  Aviso,
  CartasEducativas,
  Certificacao,
  Contacto,
  Eeduca,
  EeducaSlug,
  Hero,
  Noticia,
  NoticiaResumo,
  OutroServico,
  OutroServicoSlug,
  Parceria,
  Seminario,
  SiteContent,
  Sobre,
} from "./types";

function assertRow<T>(row: T | null, label: string): T {
  if (!row) {
    throw new Error(`Conteúdo em falta na base de dados: ${label}`);
  }
  return row;
}

export async function getHero(): Promise<Hero> {
  const { data, error } = await supabasePublic
    .from("viaeducacao_hero")
    .select("*")
    .eq("id", 1)
    .single();
  if (error) throw error;
  const row = assertRow(data, "viaeducacao_hero");
  return {
    kicker: row.kicker,
    headline: row.headline,
    subheadline: row.subheadline,
    ctaLabel: row.cta_label,
    ctaHref: row.cta_href,
    imageSrc: row.image_path,
    imageAlt: row.image_alt,
  };
}

export async function getAviso(): Promise<Aviso> {
  const { data, error } = await supabasePublic
    .from("viaeducacao_aviso")
    .select("*")
    .eq("id", 1)
    .single();
  if (error) throw error;
  const row = assertRow(data, "viaeducacao_aviso");
  return {
    ativo: row.ativo,
    titulo: row.titulo,
    texto: row.texto,
    linkLabel: row.link_label,
    linkHref: row.link_href,
    imageSrc: row.image_path,
    imageAlt: row.image_alt,
  };
}

export async function getSobre(): Promise<Sobre> {
  const { data, error } = await supabasePublic
    .from("viaeducacao_sobre")
    .select("*")
    .eq("id", 1)
    .single();
  if (error) throw error;
  const row = assertRow(data, "viaeducacao_sobre");
  return {
    titulo: row.titulo,
    textoIntro: row.texto_intro,
    textoMissao: row.texto_missao,
    pontos: row.pontos ?? [],
    anoFundacao: row.ano_fundacao,
    imageSrc: row.image_path,
    imageAlt: row.image_alt,
  };
}

export async function getEeduca(): Promise<Eeduca[]> {
  const { data, error } = await supabasePublic
    .from("viaeducacao_eeduca")
    .select("*")
    .order("ordem", { ascending: true });
  if (error) throw error;
  return (data ?? []).map((row) => ({
    slug: row.slug as EeducaSlug,
    titulo: row.titulo,
    resumo: row.resumo,
    pontos: row.pontos ?? [],
    imageSrc: row.image_path,
    imageAlt: row.image_alt,
  }));
}

export async function getEeducaBySlug(slug: EeducaSlug): Promise<Eeduca | null> {
  const all = await getEeduca();
  return all.find((e) => e.slug === slug) ?? null;
}

export async function getCartasEducativas(): Promise<CartasEducativas> {
  const { data, error } = await supabasePublic
    .from("viaeducacao_cartas_educativas")
    .select("*")
    .eq("id", 1)
    .single();
  if (error) throw error;
  const row = assertRow(data, "viaeducacao_cartas_educativas");
  return {
    titulo: row.titulo,
    texto: row.texto,
    cartaCtaLabel: row.carta_cta_label,
    cartaCtaHref: row.carta_cta_href,
    cartaImageSrc: row.carta_image_path,
    pemCtaLabel: row.pem_cta_label,
    pemCtaHref: row.pem_cta_href,
    pemImageSrc: row.pem_image_path,
  };
}

export async function getOutrosServicos(): Promise<OutroServico[]> {
  const { data, error } = await supabasePublic
    .from("viaeducacao_outros_servicos")
    .select("*")
    .order("ordem", { ascending: true });
  if (error) throw error;
  return (data ?? []).map((row) => ({
    slug: row.slug as OutroServicoSlug,
    titulo: row.titulo,
    texto: row.texto,
    pontos: row.pontos ?? [],
    imageSrc: row.image_path,
    imageAlt: row.image_alt,
  }));
}

export async function getCertificacao(): Promise<Certificacao> {
  const { data, error } = await supabasePublic
    .from("viaeducacao_certificacao")
    .select("*")
    .eq("id", 1)
    .single();
  if (error) throw error;
  const row = assertRow(data, "viaeducacao_certificacao");
  return {
    texto: row.texto,
    imageSrc: row.image_path,
    imageAlt: row.image_alt,
    pdfUrl: row.pdf_url,
  };
}

function formatDataEvento(isoDate: string | null): string | null {
  if (!isoDate) return null;
  return new Intl.DateTimeFormat("pt-PT", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(isoDate));
}

export async function getSeminarios(): Promise<Seminario[]> {
  const { data, error } = await supabasePublic
    .from("viaeducacao_seminarios")
    .select("*")
    .eq("publicado", true)
    .order("ordem", { ascending: true });
  if (error) throw error;
  return (data ?? []).map((row) => ({
    id: row.id,
    titulo: row.titulo,
    dataEvento: formatDataEvento(row.data_evento),
    descricao: row.descricao,
    pdfUrl: row.pdf_url,
    imageSrc: row.image_path,
    imageAlt: row.image_alt,
  }));
}

export async function getParcerias(): Promise<Parceria[]> {
  const { data, error } = await supabasePublic
    .from("viaeducacao_parcerias")
    .select("*")
    .eq("publicado", true)
    .order("ordem", { ascending: true });
  if (error) throw error;
  return (data ?? []).map((row) => ({
    id: row.id,
    titulo: row.titulo,
    href: row.href,
    imageSrc: row.image_path,
    imageAlt: row.image_alt,
  }));
}

export async function getContacto(): Promise<Contacto> {
  const { data, error } = await supabasePublic
    .from("viaeducacao_contacto")
    .select("*")
    .eq("id", 1)
    .single();
  if (error) throw error;
  const row = assertRow(data, "viaeducacao_contacto");
  return {
    moradaLinha1: row.morada_linha1,
    moradaLinha2: row.morada_linha2,
    moradaLinha3: row.morada_linha3,
    telefone: row.telefone,
    telefoneAngola: row.telefone_angola,
    email: row.email,
    facebookUrl: row.facebook_url,
    googleMapsEmbedUrl: row.google_maps_url,
  };
}

function formatDataNoticia(isoDate: string | null): string {
  if (!isoDate) return "";
  return new Intl.DateTimeFormat("pt-PT", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(isoDate));
}

export async function getNoticias(): Promise<NoticiaResumo[]> {
  const { data, error } = await supabasePublic
    .from("viaeducacao_noticias")
    .select("titulo, slug, resumo, data_noticia, image_path, image_alt")
    .eq("publicado", true)
    .order("data_noticia", { ascending: false });
  if (error) throw error;
  return (data ?? []).map((row) => ({
    titulo: row.titulo,
    slug: row.slug,
    resumo: row.resumo,
    dataNoticia: formatDataNoticia(row.data_noticia),
    imageSrc: row.image_path,
    imageAlt: row.image_alt,
  }));
}

export async function getNoticiaBySlug(slug: string): Promise<Noticia | null> {
  const { data, error } = await supabasePublic
    .from("viaeducacao_noticias")
    .select("*")
    .eq("slug", slug)
    .eq("publicado", true)
    .single();
  if (error) return null;
  return {
    titulo: data.titulo,
    slug: data.slug,
    resumo: data.resumo,
    corpo: data.corpo,
    dataNoticia: formatDataNoticia(data.data_noticia),
    imageSrc: data.image_path,
    imageAlt: data.image_alt,
  };
}

export async function getSiteContent(): Promise<SiteContent> {
  const [hero, aviso, sobre, eeduca, parcerias, contacto] = await Promise.all([
    getHero(),
    getAviso(),
    getSobre(),
    getEeduca(),
    getParcerias(),
    getContacto(),
  ]);

  return { hero, aviso, sobre, eeduca, parcerias, contacto };
}
