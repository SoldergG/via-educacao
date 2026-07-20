"use client";

import { useActionState } from "react";
import { ImageUploadField } from "@/components/admin/ImageUploadField";
import type { SectionFormState } from "@/lib/admin/form-state";
import type { CartasEducativas } from "@/lib/content/types";
import { updateCartasEducativasAction } from "./actions";

const initialState: SectionFormState = {};

const inputClass =
  "mt-1.5 w-full border border-border bg-cream px-3 py-2 text-sm text-ink outline-none transition focus:border-orange focus:ring-2 focus:ring-orange-soft";

export function CartasEducativasForm({ content }: { content: CartasEducativas }) {
  const [state, action, pending] = useActionState(updateCartasEducativasAction, initialState);

  return (
    <form action={action} className="flex flex-col gap-5 border border-border bg-paper p-6">
      <div>
        <label className="block text-sm font-medium text-ink">Título</label>
        <input name="titulo" defaultValue={content.titulo} className={inputClass} />
      </div>
      <div>
        <label className="block text-sm font-medium text-ink">Texto de introdução</label>
        <textarea name="texto" defaultValue={content.texto} rows={3} className={inputClass} />
      </div>

      <div className="border-t border-border pt-5">
        <p className="font-display text-lg text-ink">Carta Educativa 2ª Geração</p>
        <div className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-ink">Texto do link</label>
            <input name="carta_cta_label" defaultValue={content.cartaCtaLabel} className={inputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink">Destino do link</label>
            <input name="carta_cta_href" defaultValue={content.cartaCtaHref} className={inputClass} />
          </div>
        </div>
        <div className="mt-4">
          <ImageUploadField name="carta_image" label="Imagem" currentImageSrc={content.cartaImageSrc} />
        </div>
      </div>

      <div className="border-t border-border pt-5">
        <p className="font-display text-lg text-ink">Projeto Educativo Municipal</p>
        <div className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-ink">Texto do link</label>
            <input name="pem_cta_label" defaultValue={content.pemCtaLabel} className={inputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink">Destino do link</label>
            <input name="pem_cta_href" defaultValue={content.pemCtaHref} className={inputClass} />
          </div>
        </div>
        <div className="mt-4">
          <ImageUploadField name="pem_image" label="Imagem" currentImageSrc={content.pemImageSrc} />
        </div>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-2 flex h-11 w-fit items-center justify-center bg-olive px-6 text-[13px] font-medium uppercase tracking-[0.12em] text-cream transition-colors hover:bg-olive-dark disabled:opacity-60"
      >
        {pending ? "A guardar…" : "Guardar"}
      </button>
      {state.error && <p className="text-sm text-orange-dark">{state.error}</p>}
      {state.success && <p className="text-sm text-olive">Guardado.</p>}
    </form>
  );
}
