import Link from "next/link";

type Variant = "primary" | "ghost";

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  ghost: "btn-ghost",
};

type BaseProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps & {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

type ButtonAsLink = BaseProps & {
  href: string;
  /** target nur für externe Links sinnvoll. */
  target?: string;
  rel?: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Einheitlicher Button/CTA. Nutzt die bestehenden Designklassen
 * (.btn-primary / .btn-ghost), damit das Erscheinungsbild identisch bleibt.
 *
 * - ohne href            -> <button>
 * - href "#..."          -> In-Page-Anker (nativer Smooth-Scroll)
 * - href "http(s)://..." -> externer Link (neuer Tab)
 * - href "/..."          -> interner Link via next/link
 */
export default function Button(props: ButtonProps) {
  const { variant = "primary", className = "", children } = props;
  const classes = `${variantClass[variant]}${className ? ` ${className}` : ""}`;

  if (props.href === undefined) {
    return (
      <button
        type={props.type ?? "button"}
        onClick={props.onClick}
        className={classes}
      >
        {children}
      </button>
    );
  }

  const { href } = props;
  const isAnchor = href.startsWith("#");
  const isExternal = /^https?:\/\//.test(href);

  if (isAnchor || isExternal) {
    return (
      <a
        href={href}
        target={props.target ?? (isExternal ? "_blank" : undefined)}
        rel={props.rel ?? (isExternal ? "noopener noreferrer" : undefined)}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
