"use client";

import { useActionState } from "react";
import { ImageUploadField } from "@/components/admin/ImageUploadField";
import type { SectionFormState } from "@/lib/admin/form-state";

const inputClass =
  "mt-1.5 w-full border border-border bg-cream px-3 py-2 text-sm text-ink outline-none transition focus:border-orange focus:ring-2 focus:ring-orange-soft";

export type SeminarioFormValues = {
  titulo: string;
  data_evento: string | null;
  descricao: string;
  pdf_url: string;
  image_path: string | null;
  image_alt: string;
};

export function SeminarioForm({
  action,
  initialValues,
  submitLabel,
}: {
  action: (state: SectionFormState, formData: FormData) => Promise<SectionFormState>;
  initialValues: SeminarioFormValues;
  submitLabel: string;
}) {
  const [state, formAction, pending] = useActionState(action, {});

  return (
    <form action={formAction} className="flex flex-col gap-5 border border-border bg-paper p-6">
      <div>
        <label className="block text-sm font-medium text-ink">Título</label>
        <input name="titulo" defaultValue={initialValues.titulo} className={inputClass} required />
      </div>
      <div>
        <label className="block text-sm font-medium text-ink">Data</label>
        <input
          name="data_evento"
          type="date"
          defaultValue={initialValues.data_evento ?? ""}
          className={`${inputClass} max-w-[12rem]`}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-ink">Descrição</label>
        <textarea name="descricao" defaultValue={initialValues.descricao} rows={3} className={inputClass} />
      </div>
      <div>
        <label className="block text-sm font-medium text-ink">Link para o PDF do programa (opcional)</label>
        <input name="pdf_url" defaultValue={initialValues.pdf_url} className={inputClass} />
      </div>
      <ImageUploadField name="image" label="Imagem" currentImageSrc={initialValues.image_path} />
      <div>
        <label className="block text-sm font-medium text-ink">Texto alternativo da imagem</label>
        <input name="image_alt" defaultValue={initialValues.image_alt} className={inputClass} />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-2 flex h-11 w-fit items-center justify-center bg-olive px-6 text-[13px] font-medium uppercase tracking-[0.12em] text-cream transition-colors hover:bg-olive-dark disabled:opacity-60"
      >
        {pending ? "A guardar…" : submitLabel}
      </button>
      {state.error && <p className="text-sm text-orange-dark">{state.error}</p>}
      {state.success && <p className="text-sm text-olive">Guardado.</p>}
    </form>
  );
}
