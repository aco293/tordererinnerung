/**
 * Navigationsdaten.
 * - navLinks: Anker auf der Startseite (One-Page, Smooth-Scroll).
 * - discoverLinks / legalLinks: eigenständige Unterseiten (Footer).
 */

/** Header-Navigation – verweist auf Sektionen der Startseite (ohne #). */
export type NavLink = {
  label: string;
  /** Anker-ID der Sektion auf der Startseite. */
  section: string;
};

export const navLinks: NavLink[] = [
  { label: "Erkenntnisräume", section: "erkenntnisraeume" },
  { label: "Das Buch", section: "buch" },
  { label: "Botschaften", section: "medien" },
  { label: "Über Aureon", section: "ueber" },
];

/** Eigenständige Seiten (Footer-Spalten). */
export type PageLink = {
  label: string;
  href: string;
};

export const discoverLinks: PageLink[] = [
  { label: "Erkenntnisräume", href: "/erkenntnisraeume" },
  { label: "Das Buch", href: "/buch" },
  { label: "Botschaften", href: "/botschaften" },
  { label: "Toröffner", href: "/toroeffner" },
  { label: "Über Aureon", href: "/ueber-aureon" },
];

export const legalLinks: PageLink[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "Kontakt", href: "/kontakt" },
];
