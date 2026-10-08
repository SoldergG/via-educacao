type WordmarkProps = {
  className?: string;
};

/**
 * Mosaico de quadrados em escada, recriado a partir do logótipo da Via
 * Educação, com a escala de verdes da marca (menta claro -> teal profundo).
 * Usado como símbolo no header/footer e como elemento gráfico do hero.
 */
export function MosaicMark({
  size = 28,
  className,
}: {
  size?: number;
  className?: string;
}) {
  // (coluna, linha a partir da base) -> tom da escala
  const squares: [number, number, string][] = [
    [0, 0, "#c3e0d7"],
    [1, 0, "#a9d3c7"],
    [1, 1, "#73baa8"],
    [2, 0, "#73baa8"],
    [2, 1, "#24a58c"],
    [2, 2, "#008d6a"],
    [3, 0, "#24a58c"],
    [3, 1, "#008d6a"],
    [3, 2, "#00795a"],
    [3, 3, "#0e5240"],
  ];
  const s = 7; // lado do quadrado
  const step = 8.5;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 33 33"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {squares.map(([col, row, fill]) => (
        <rect
          key={`${col}-${row}`}
          x={col * step}
          y={(3 - row) * step}
          width={s}
          height={s}
          rx={1}
          fill={fill}
        />
      ))}
    </svg>
  );
}

/**
 * Logótipo horizontal: símbolo em mosaico + wordmark em sans, registo
 * moderno e sóbrio de consultora.
 */
export function Wordmark({ className }: WordmarkProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <MosaicMark size={26} />
      <span className="font-display text-[1.05rem] font-semibold tracking-tight text-ink">
        Via Educação
      </span>
    </span>
  );
}
