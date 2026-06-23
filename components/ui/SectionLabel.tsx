type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Kleines goldenes Label über Überschriften (ehem. „eyebrow").
 * Zentralisiert das Erscheinungsbild der Kapitel-Marker.
 */
export default function SectionLabel({
  children,
  className = "",
}: SectionLabelProps) {
  return (
    <span className={`eyebrow${className ? ` ${className}` : ""}`}>
      {children}
    </span>
  );
}
