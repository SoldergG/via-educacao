"use client";

import { useActionState } from "react";
import { ImageUploadField } from "@/components/admin/ImageUploadField";
import type { SectionFormState } from "@/lib/admin/form-state";
import type { Sobre } from "@/lib/content/types";
import { updateSobreAction } from "./actions";

const initialState: SectionFormState = {};

const inputClass =
  "mt-1.5 w-full border border-border bg-cream px-3 py-2 text-sm text-ink outline-none transition focus:border-orange focus:ring-2 focus:ring-orange-soft";

export function SobreForm({ sobre }: { sobre: Sobre }) {
  const [state, action, pending] = useActionState(updateSobreAction, initialState);

  return (
    <form action={action} className="flex flex-col gap-5 border border-border bg-paper p-6">
      <div>
        <label className="block text-sm font-medium text-ink">Título da secção</label>
        <input name="titulo" defaultValue={sobre.titulo} className={inputClass} />
      </div>
      <div>
        <label className="block text-sm font-medium text-ink">Texto de introdução</label>
        <textarea
          name="texto_intro"
          defaultValue={sobre.textoIntro}
          rows={4}
          className={inputClass}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-ink">Missão</label>
        <textarea
          name="texto_missao"
          defaultValue={sobre.textoMissao}
          rows={3}
          className={inputClass}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-ink">Pontos/estatísticas (um por linha)</label>
        <textarea
          name="pontos"
          defaultValue={sobre.pontos.join("\n")}
          rows={4}
          className={inputClass}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-ink">Ano de fundação</label>
        <input
          name="ano_fundacao"
          type="number"
          defaultValue={sobre.anoFundacao}
          className={`${inputClass} max-w-[10rem]`}
        />
      </div>
      <ImageUploadField name="image" label="Imagem" currentImageSrc={sobre.imageSrc} />
      <div>
        <label className="block text-sm font-medium text-ink">Texto alternativo da imagem</label>
        <input name="image_alt" defaultValue={sobre.imageAlt} className={inputClass} />
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
