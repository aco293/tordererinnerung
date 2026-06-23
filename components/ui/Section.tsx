type SectionProps = {
  id?: string;
  children: React.ReactNode;
  /** Zusätzliche Klassen, z. B. für Hintergrund-Ebenen (relative, overflow-hidden …). */
  className?: string;
  /** Vertikale Innenabstände. Default sorgt für ruhigen, aber nicht leeren Rhythmus. */
  spacing?: string;
};

/**
 * Einheitlicher Sektions-Wrapper:
 * - konsistente vertikale Abstände (mobil kompakter, Desktop großzügiger)
 * - scroll-mt, damit der Sticky-Header keine Überschriften verdeckt
 */
export default function Section({
  id,
  children,
  className = "",
  spacing = "py-16 sm:py-20 lg:py-28",
}: SectionProps) {
  return (
    <section
      id={id}
      // scroll-mt > Header-Höhe (4.5rem), damit Titel beim Anspringen
      // mit etwas Luft unter dem Sticky-Header beginnen.
      className={`scroll-mt-24 lg:scroll-mt-28 ${spacing} ${className}`}
    >
      {children}
    </section>
  );
}
