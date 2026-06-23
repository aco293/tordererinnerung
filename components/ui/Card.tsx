import type { ElementType, ComponentPropsWithoutRef } from "react";

type CardOwnProps<T extends ElementType> = {
  /** Zugrunde liegendes Element/Komponente (div, a, li, blockquote, Link …). */
  as?: T;
  /** Sanfter Hover-Effekt (anheben + Goldakzent). */
  interactive?: boolean;
  className?: string;
  children?: React.ReactNode;
};

type CardProps<T extends ElementType> = CardOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof CardOwnProps<T>>;

/**
 * Premium-Glaskarte. Kapselt die bestehenden Designklassen
 * (.glass / .glass-hover) – Look bleibt identisch, nur zentral wiederverwendbar.
 * Rundung/Padding/Layout bestimmt der Aufrufer über className.
 */
export default function Card<T extends ElementType = "div">({
  as,
  interactive = false,
  className = "",
  children,
  ...rest
}: CardProps<T>) {
  const Tag = as ?? "div";
  const classes = `glass${interactive ? " glass-hover" : ""}${
    className ? ` ${className}` : ""
  }`;

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}
