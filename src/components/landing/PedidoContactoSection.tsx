import { PedidoForm } from "./PedidoForm";
import { RevealOnScroll } from "./RevealOnScroll";

export function PedidoContactoSection() {
  return (
    <section id="pedido-contacto" className="bg-cream-soft py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <RevealOnScroll>
          <h2 className="font-display text-3xl text-ink sm:text-4xl">Pedido de contacto</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            Preenche o formulário e entramos em contacto o mais brevemente possível.
          </p>
          <div className="mt-8">
            <PedidoForm
              tipo="contacto"
              successMessage="Pedido enviado com sucesso. Obrigado — entraremos em contacto brevemente."
              submitLabel="Enviar pedido"
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
