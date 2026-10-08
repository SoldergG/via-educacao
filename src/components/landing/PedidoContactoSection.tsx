import { PedidoForm } from "./PedidoForm";
import { RevealOnScroll } from "./RevealOnScroll";

export function PedidoContactoSection() {
  return (
    <section id="pedido-contacto" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6">
        <RevealOnScroll>
          <div className="rounded-3xl border border-border bg-paper p-8 sm:p-10">
            <p className="inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
              Vamos começar
            </p>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Pedido de contacto
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Preencha o formulário e entramos em contacto o mais brevemente possível.
            </p>
            <div className="mt-8">
              <PedidoForm
                tipo="contacto"
                successMessage="Pedido enviado com sucesso. Obrigado — entraremos em contacto brevemente."
                submitLabel="Enviar pedido"
              />
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
