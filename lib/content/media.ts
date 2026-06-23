/**
 * Medien-Platzhalter („Botschaften aus dem Tor").
 * TODO: Vor Veröffentlichung mit echten TikTok-/YouTube-Inhalten ersetzen.
 */

export type MediaItem = {
  platform: "TikTok" | "YouTube";
  title: string;
  description: string;
  /** Platzhalter-Link, bis echte Inhalte verknüpft sind. */
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
    description: "Beobachtungen über die stille Sprache der Welt um uns herum.",
    href: "#",
  },
];
