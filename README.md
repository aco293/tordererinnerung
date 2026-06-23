# TorDerErinnerung

Eine moderne, mobile-first Website als digitales „Tor“ – ruhig, tief, mystisch und hochwertig.
Gebaut mit **Next.js (App Router)**, **TypeScript** und **Tailwind CSS**.

## Voraussetzungen

Auf diesem Rechner ist aktuell **kein Node.js installiert**. Installiere zuerst Node.js (LTS, ≥ 18.18):

- Download: https://nodejs.org/de/download
- Danach Terminal/PowerShell neu öffnen und prüfen:

```bash
node -v
npm -v
```

## Installation & Start

```bash
npm install
npm run dev
```

Dann im Browser öffnen: http://localhost:3000

Weitere Befehle:

```bash
npm run build   # Produktions-Build
npm run start   # Produktions-Server (nach build)
npm run lint    # Linting
```

## Designsystem

| Token        | Wert      | Verwendung                 |
| ------------ | --------- | -------------------------- |
| `background` | `#070B16` | Seitenhintergrund          |
| `dark-blue`  | `#0B1020` | Flächen / Tiefe            |
| `violet`     | `#2B214A` | Violette Tiefe / Glow      |
| `gold`       | `#D6B76A` | Lichtakzente / CTAs        |
| `soft-white` | `#F5F0E8` | Überschriften / Lichttext  |
| `muted`      | `#B8B3C7` | Fließtext / Sekundärtext   |

- **Überschriften:** Cormorant Garamond (`font-heading`)
- **Fließtext:** Inter (`font-body`)
- Fonts werden über `next/font/google` geladen (siehe `app/layout.tsx`).

## Routen

One-Page-Startseite plus funktionale Platzhalterseiten:

| Route                              | Inhalt                              |
| ---------------------------------- | ----------------------------------- |
| `/`                                | Startseite (alle Sektionen)         |
| `/buch`                            | „7 Schlüssel des Bewusstseins“      |
| `/kontakt`                         | Kontakt (E-Mail, Social)            |
| `/impressum`                       | Impressum (Platzhalter)             |
| `/datenschutz`                     | Datenschutz (Platzhalter)           |
| `/erkenntnisraeume/[slug]`         | 6 Erkenntnisraum-Seiten (statisch)  |

Navigation und Buttons scrollen auf der Startseite per Smooth-Scroll zur
jeweiligen Sektion; von Unterseiten wird zu `/#sektion` zurücknavigiert
(`components/ui/SectionLink.tsx`).

## Struktur

```
app/
  layout.tsx                        # Root-Layout, Fonts, Metadaten
  page.tsx                          # Startseite – setzt alle Sektionen zusammen
  not-found.tsx                     # Stilvolle 404-Seite
  globals.css                       # Tailwind + eigene Komponenten-Klassen
  buch/page.tsx
  kontakt/page.tsx
  impressum/page.tsx
  datenschutz/page.tsx
  erkenntnisraeume/[slug]/page.tsx  # Dynamische Erkenntnisraum-Seiten
components/
  Header.tsx              # Logo, Navigation, CTA, Mobile-Menü
  Hero.tsx                # Tor-Bogen, Sterne, Titel, CTAs
  IntroSection.tsx        # „Ein Ort zwischen Stille und Erkenntnis“
  Erkenntnisraeume.tsx    # 6 Karten → /erkenntnisraeume/[slug]
  BookSection.tsx         # „7 Schlüssel des Bewusstseins“
  MediaSection.tsx        # TikTok / YouTube Platzhalter
  ToroeffnerSection.tsx   # Poetische Impuls-Karten
  AboutSection.tsx        # Über Aureon Thal’Emar
  NewsletterSection.tsx   # E-Mail-Anmeldung (Frontend-Demo, mit Validierung)
  Footer.tsx              # Impressum, Datenschutz, Kontakt, Social
  PageShell.tsx           # Wiederverwendbares Layout für Unterseiten
  Starfield.tsx           # Dezentes Sternenfeld (CSS-Animation)
  ui/
    Reveal.tsx            # Fade-in beim Scrollen
    Section.tsx           # Einheitliche Abstände + scroll-mt
    SectionHeading.tsx    # Wiederverwendbare Sektions-Überschrift
    SectionLink.tsx       # Smooth-Scroll / cross-page Navigation
lib/
  content.ts        # Zentrale Platzhalter-Inhalte (v1, kein CMS)
```

## Hinweise zu v1

- **Keine CMS-Anbindung.** Alle Inhalte liegen als Platzhalter in `lib/content.ts`.
- **Newsletter** und **Medien** sind reine Frontend-Platzhalter ohne Backend.
- Animationen sind bewusst dezent (Fade-in, Glow, langsame Partikel) und
  respektieren `prefers-reduced-motion`.
- Social-Links und E-Mail in `lib/content.ts` anpassen, sobald verfügbar.
