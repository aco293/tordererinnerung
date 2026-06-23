/**
 * Die sechs Erkenntnisräume.
 * Zentrale Datenquelle für die Startseiten-Sektion, die Übersichtsseite
 * (/erkenntnisraeume) und die Einzelseiten (/erkenntnisraeume/[slug]).
 */

export type Realm = {
  slug: string;
  title: string;
  description: string;
  /** Dezentes Symbol als visueller Anker. */
  symbol: string;
};

export const realms: Realm[] = [
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

export function getRealm(slug: string): Realm | undefined {
  return realms.find((realm) => realm.slug === slug);
}
