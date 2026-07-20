type WordmarkProps = {
  className?: string;
  lineClassName?: string;
};

/**
 * Wordmark tipográfico da Via Educação: serifado, versalete espaçado e um
 * traço fino por baixo, no mesmo espírito da identidade AMUN partilhada
 * com a Espalha Ideias e a Desporto Mais.
 */
export function Wordmark({ className, lineClassName }: WordmarkProps) {
  return (
    <span className="inline-flex flex-col items-start">
      <span className={className ?? "font-display text-xl tracking-[0.22em] text-ink"}>
        VIA EDUCAÇÃO
      </span>
      <span
        className={lineClassName ?? "mt-1 h-px w-8 bg-olive"}
        aria-hidden="true"
      />
    </span>
  );
}
