"use client";

import { useActionState } from "react";
import { submeterPedidoAction, type PedidoState } from "@/app/actions/pedido";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-border bg-bg px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100";

const initialState: PedidoState = {};

type PedidoFormProps = {
  tipo: "contacto" | "formacao" | "recrutamento";
  entidadeLabel?: string;
  mensagemLabel?: string;
  successMessage: string;
  submitLabel: string;
};

export function PedidoForm({
  tipo,
  entidadeLabel,
  mensagemLabel = "Mensagem",
  successMessage,
  submitLabel,
}: PedidoFormProps) {
  const action = submeterPedidoAction.bind(null, tipo);
  const [state, formAction, pending] = useActionState(action, initialState);

  if (state.success) {
    return (
      <p className="rounded-2xl border border-brand-200 bg-brand-50 p-6 text-sm text-brand-800">
        {successMessage}
      </p>
    );
  }

  return (
    <form action={formAction} className="relative flex flex-col gap-5">
      <input
        type="text"
        name="empresa"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="pointer-events-none absolute -left-[9999px] top-0 h-0 w-0 opacity-0"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-ink">Nome *</label>
          <input type="text" name="nome" required className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink">Email *</label>
          <input type="email" name="email" required className={inputClass} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-ink">Telefone</label>
          <input type="tel" name="telefone" className={inputClass} />
        </div>
        {entidadeLabel && (
          <div>
            <label className="block text-sm font-medium text-ink">{entidadeLabel}</label>
            <input type="text" name="entidade" className={inputClass} />
          </div>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-ink">{mensagemLabel}</label>
        <textarea name="mensagem" rows={5} className={inputClass} />
      </div>

      {state.error && <p className="text-sm text-brand-700">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="mt-2 flex h-12 w-fit items-center justify-center rounded-full bg-brand-700 px-8 text-sm font-medium text-white transition-colors hover:bg-brand-800 disabled:opacity-60"
      >
        {pending ? "A enviar…" : submitLabel}
      </button>
    </form>
  );
}
