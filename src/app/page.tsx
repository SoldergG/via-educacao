import { getSiteContent } from "@/lib/content/queries";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { AvisoBanner } from "@/components/landing/AvisoBanner";
import { Servicos } from "@/components/landing/Servicos";
import { Processo } from "@/components/landing/Processo";
import { Sobre } from "@/components/landing/Sobre";
import { EeducaOverview } from "@/components/landing/EeducaOverview";
import { Parcerias } from "@/components/landing/Parcerias";
import { Contacto } from "@/components/landing/Contacto";
import { PedidoContactoSection } from "@/components/landing/PedidoContactoSection";
import { Footer } from "@/components/landing/Footer";

export const revalidate = 60;

export default async function Home() {
  const siteContent = await getSiteContent();

  const anos = new Date().getFullYear() - siteContent.sobre.anoFundacao;
  const stats = [
    { valor: `${anos}`, label: "anos de experiência" },
    { valor: "16", label: "concelhos com e@educa®" },
    { valor: "≈20 000", label: "crianças abrangidas" },
  ];

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero content={siteContent.hero} stats={stats} />
        <AvisoBanner aviso={siteContent.aviso} />
        <Servicos />
        <Processo />
        <EeducaOverview eeduca={siteContent.eeduca} />
        <Sobre content={siteContent.sobre} />
        <Parcerias parcerias={siteContent.parcerias} />
        <Contacto content={siteContent.contacto} />
        <PedidoContactoSection />
      </main>
      <Footer facebookUrl={siteContent.contacto.facebookUrl} />
    </div>
  );
}
