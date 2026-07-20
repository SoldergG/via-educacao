export type Hero = {
  kicker: string;
  headline: string;
  subheadline: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
};

export type Aviso = {
  ativo: boolean;
  titulo: string;
  texto: string;
  linkLabel: string;
  linkHref: string;
  imageSrc: string;
  imageAlt: string;
};

export type Sobre = {
  titulo: string;
  textoIntro: string;
  textoMissao: string;
  pontos: string[];
  anoFundacao: number;
  imageSrc: string;
  imageAlt: string;
};

export type EeducaSlug = "geral" | "colegios" | "municipios";

export type Eeduca = {
  slug: EeducaSlug;
  titulo: string;
  resumo: string;
  pontos: string[];
  imageSrc: string;
  imageAlt: string;
};

export type CartasEducativas = {
  titulo: string;
  texto: string;
  cartaCtaLabel: string;
  cartaCtaHref: string;
  cartaImageSrc: string;
  pemCtaLabel: string;
  pemCtaHref: string;
  pemImageSrc: string;
};

export type OutroServicoSlug = "livro" | "consultoria-aec";

export type OutroServico = {
  slug: OutroServicoSlug;
  titulo: string;
  texto: string;
  pontos: string[];
  imageSrc: string;
  imageAlt: string;
};

export type Certificacao = {
  texto: string;
  imageSrc: string;
  imageAlt: string;
  pdfUrl: string;
};

export type Seminario = {
  id: string;
  titulo: string;
  dataEvento: string | null;
  descricao: string;
  pdfUrl: string;
  imageSrc: string;
  imageAlt: string;
};

export type Parceria = {
  id: string;
  titulo: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

export type Contacto = {
  moradaLinha1: string;
  moradaLinha2: string;
  moradaLinha3: string;
  telefone: string;
  telefoneAngola: string;
  email: string;
  facebookUrl: string;
  googleMapsEmbedUrl: string;
};

export type NoticiaResumo = {
  slug: string;
  titulo: string;
  resumo: string;
  dataNoticia: string;
  imageSrc: string | null;
  imageAlt: string | null;
};

export type Noticia = NoticiaResumo & {
  corpo: string;
};

export type SiteContent = {
  hero: Hero;
  aviso: Aviso;
  sobre: Sobre;
  eeduca: Eeduca[];
  parcerias: Parceria[];
  contacto: Contacto;
};
