"use server";

import { supabasePublic } from "@/lib/supabase/public";

export type PedidoState = { error?: string; success?: boolean };

type PedidoTipo = "contacto" | "formacao" | "recrutamento";

/**
 * Insere diretamente com a chave anon: a RLS de viaeducacao_pedidos só
 * permite insert (sem select/update/delete). O campo "empresa" é um
 * honeypot — invisível para humanos, normalmente preenchido por bots.
 * Substitui o reCAPTCHA Enterprise (quota esgotada no site antigo).
 */
export async function submeterPedidoAction(
  tipo: PedidoTipo,
  _prevState: PedidoState,
  formData: FormData
): Promise<PedidoState> {
  const honeypot = String(formData.get("empresa") ?? "");
  if (honeypot.trim() !== "") {
    return { success: true };
  }

  const nome = String(formData.get("nome") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const telefone = String(formData.get("telefone") ?? "").trim();
  const entidade = String(formData.get("entidade") ?? "").trim();
  const mensagem = String(formData.get("mensagem") ?? "").trim();

  if (!nome || !email) {
    return { error: "Preenche o nome e o email." };
  }

  const { error } = await supabasePublic.from("viaeducacao_pedidos").insert({
    tipo,
    nome,
    email,
    telefone,
    entidade,
    mensagem,
  });

  if (error) {
    return { error: "Não foi possível enviar o pedido. Tenta novamente." };
  }

  return { success: true };
}
