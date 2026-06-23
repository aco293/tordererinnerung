/**
 * Grundlegende Site-Metadaten und zentrale CTA-Texte.
 * Einzige Quelle der Wahrheit für Markenname, Beschreibung und Buttons.
 */

export const siteConfig = {
  /** Markenname – immer exakt so schreiben: TorDerErinnerung */
  name: "TorDerErinnerung",
  tagline:
    "Ein Raum für Bewusstsein, innere Klarheit und die Rückkehr zu dem, was in dir nie verloren ging.",
  description:
    "TorDerErinnerung ist ein digitaler Raum für Menschen, die tiefer fühlen, bewusster sehen und sich wieder mit ihrer inneren Wahrheit verbinden möchten.",
  author: "Aureon Thal’Emar",
  locale: "de_DE",
  // TODO: Vor Veröffentlichung mit der echten Domain ersetzen.
  url: "https://tordererinnerung.de",
  // TODO: Vor Veröffentlichung mit echter Kontakt-E-Mail ersetzen (Platzhalter).
  contactEmail: "kontakt@tordererinnerung.de",
  social: {
    // TODO: Vor Veröffentlichung mit echten Kanal-Links ersetzen (Platzhalter).
    tiktok: "#",
    youtube: "#",
  },
} as const;

/** Wiederkehrende Button-/CTA-Texte zentral pflegbar. */
export const cta = {
  enterGate: "Das Tor betreten",
  discoverRealms: "Erkenntnisräume entdecken",
  backToGate: "Zurück zum Tor",
  bookMore: "Mehr über das Buch erfahren",
  bookSample: "Leseprobe vormerken",
  enterRealm: "Raum betreten",
  newsletterSubmit: "Verbinden",
} as const;
