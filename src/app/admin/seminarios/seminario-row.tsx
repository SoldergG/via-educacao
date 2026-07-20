"use client";

import Link from "next/link";
import { ConfirmDeleteButton } from "@/components/admin/ConfirmDeleteButton";
import { deleteSeminarioAction, toggleSeminarioPublicadoAction } from "./actions";

type SeminarioRowData = {
  id: string;
  titulo: string;
  data_evento: string | null;
  publicado: boolean;
};

export function SeminarioRow({ seminario }: { seminario: SeminarioRowData }) {
  return (
    <div className="flex items-center justify-between gap-4 border border-border bg-paper p-4">
      <div>
        <p className="font-display text-lg text-ink">{seminario.titulo}</p>
        <p className="text-xs text-ink-muted">{seminario.data_evento ?? "sem data"}</p>
      </div>
      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2 text-xs uppercase tracking-[0.08em] text-ink-muted">
          <input
            type="checkbox"
            defaultChecked={seminario.publicado}
            onChange={(event) => toggleSeminarioPublicadoAction(seminario.id, event.target.checked)}
          />
          Publicado
        </label>
        <Link
          href={`/admin/seminarios/${seminario.id}/editar`}
          className="h-8 border border-border px-3 text-xs uppercase tracking-[0.08em] text-ink-muted transition-colors hover:border-olive hover:text-olive"
        >
          Editar
        </Link>
        <ConfirmDeleteButton action={() => deleteSeminarioAction(seminario.id)} />
      </div>
    </div>
  );
}
