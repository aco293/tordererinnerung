/**
 * Zentrale Platzhalter-Inhalte für TorDerErinnerung (v1.1).
 * Hier können Texte gepflegt werden, bis später ggf. ein CMS angebunden wird.
 */

export type NavLink = {
  label: string;
  /** Anker-ID der Sektion auf der Startseite (ohne #). */
  section: string;
};

/**
 * Navigationspunkte verweisen auf Sektionen der Startseite.
 * Als href wird `/#<section>` genutzt, damit Links auch von Unterseiten
 * zurück zur passenden Stelle der Startseite führen.
 */
export const navLinks: NavLink[] = [
  { label: "Erkenntnisräume", section: "erkenntnisraeume" },
  { label: "Das Buch", section: "buch" },
  { label: "Botschaften", section: "medien" },
  { label: "Über Aureon", section: "ueber" },
];

export type Erkenntnisraum = {
  slug: string;
  title: string;
  description: string;
  symbol: string;
};

export const erkenntnisraeume: Erkenntnisraum[] = [
  {
    slug: "bewusstsein",
    title: "Bewusstsein",
    description:
      "Der Raum, in dem du beginnst, dich selbst zu beobachten – ohne zu urteilen. Hier wird Wahrnehmung wieder wach.",
    symbol: "◯",
  },
  {
    slug: "frequenz",
    title: "Frequenz & Schwingung",
    description:
      "Alles schwingt. Lerne, die feinen Töne zu hören, die dein inneres Feld stimmen und dich klären.",
    symbol: "≈",
  },
  {
    slug: "innere-erinnerung",
    title: "Innere Erinnerung",
    description:
      "Nichts muss neu erschaffen werden. Was du suchst, war immer in dir – es wartet nur darauf, erinnert zu werden.",
    symbol: "❖",
  },
  {
    slug: "schatten-klarheit",
    title: "Schatten & Klarheit",
    description:
      "Das Licht braucht den Schatten, um zu erkennen. Ein würdevoller Weg durch das, was verborgen liegt.",
    symbol: "☾",
  },
  {
    slug: "erde-zeichen-portale",
    title: "Erde, Zeichen & Portale",
    description:
      "Die Welt spricht in Zeichen. Lerne, die stillen Hinweise zu lesen, die dir den Weg weisen.",
    symbol: "⟡",
  },
  {
    slug: "innere-reisen",
    title: "Innere Reisen",
    description:
      "Geführte Räume der Stille und Imagination, die dich tiefer in dein eigenes Wesen begleiten.",
    symbol: "✶",
  },
];

export function getErkenntnisraum(slug: string): Erkenntnisraum | undefined {
  return erkenntnisraeume.find((r) => r.slug === slug);
}

export type Toroeffner = {
  text: string;
};

export const toroeffner: Toroeffner[] = [
  {
    text: "Atme. Was du suchst, sucht dich bereits.",
  },
  {
    text: "Stille ist keine Leere – sie ist der Raum, in dem du dich hörst.",
  },
  {
    text: "Du musst nicht werden. Du darfst dich erinnern.",
  },
  {
    text: "Jeder Schatten trägt ein Licht, das auf dich gewartet hat.",
  },
];

export type MediaItem = {
  platform: "TikTok" | "YouTube";
  title: string;
  description: string;
  href: string;
};

export const mediaItems: MediaItem[] = [
  {
    platform: "TikTok",
    title: "Kurze Impulse aus dem Tor",
    description:
      "Tägliche Gedanken und stille Erinnerungen – sanft, klar und tief.",
    href: "#",
  },
  {
    platform: "YouTube",
    title: "Geführte innere Reisen",
    description:
      "Längere Räume der Stille, Meditationen und Gespräche über Bewusstsein.",
    href: "#",
  },
  {
    platform: "TikTok",
    title: "Zeichen & Portale",
    description:
      "Beobachtungen über die stille Sprache der Welt um uns herum.",
    href: "#",
  },
];

export const socialLinks = {
  tiktok: "#",
  youtube: "#",
  email: "kontakt@tordererinnerung.de",
};
