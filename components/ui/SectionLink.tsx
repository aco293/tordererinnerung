"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type SectionLinkProps = {
  /** Ziel-Sektion auf der Startseite (ohne #). */
  section: string;
  children: React.ReactNode;
  className?: string;
  /** Optionaler Callback, z. B. um das Mobile-Menü zu schließen. */
  onNavigate?: () => void;
};

/**
 * Verlinkt auf eine Sektion der Startseite.
 * - Auf der Startseite: sanftes In-Page-Smooth-Scroll (respektiert scroll-mt).
 * - Auf Unterseiten: Navigation zu /#section, dort wird die Sektion angesprungen.
 */
export default function SectionLink({
  section,
  children,
  className = "",
  onNavigate,
}: SectionLinkProps) {
  const pathname = usePathname();
  const router = useRouter();
  const href = `/#${section}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onNavigate?.();
    if (pathname === "/") {
      const target = document.getElementById(section);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        // URL-Hash aktualisieren, ohne erneutes Springen.
        history.replaceState(null, "", href);
      }
    } else {
      // Von Unterseiten zur Startseite navigieren und Sektion anspringen.
      e.preventDefault();
      router.push(href);
    }
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
