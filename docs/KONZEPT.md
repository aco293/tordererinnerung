# Website-Konzept – TorDerErinnerung

**Version:** 1.0
**Stand:** 23.06.2026
**Status:** Konzeptphase – Grundlage für die Weiterentwicklung

> Dieses Dokument definiert das vollständige Konzept der Website, bevor weiter
> entwickelt wird. Es ist die gemeinsame Referenz für Inhalt, Design und Ausbau.

---

## 1. Grundidee der Website

### Was ist TorDerErinnerung?

TorDerErinnerung ist kein klassischer Blog und keine gewöhnliche Homepage,
sondern ein **digitales Tor** – ein ruhiger, würdevoller Raum für Bewusstsein,
innere Klarheit und Erinnerung.

Die Leitidee: *„Hier beginnt kein neuer Glaube. Hier beginnt Erinnerung."*
Die Website verkauft keine Lehre und überzeugt von nichts. Sie lädt ein,
langsamer zu werden und sich wieder mit der eigenen inneren Wahrheit zu
verbinden.

Hinter dem Projekt steht **Aureon Thal'Emar** – als Begleiter, nicht als Lehrer.

### Welche Wirkung soll die Website haben?

- **Sofortige emotionale Wirkung** beim ersten Öffnen – ein Gefühl von Tiefe,
  Ruhe und Hochwertigkeit.
- **Vertrauen** schaffen: seriös, klar, würdevoll – bewusst *keine*
  Sektenwirkung, keine grelle Esoterik.
- **Entschleunigung**: Der Besucher soll atmen, verweilen, nicht gehetzt werden.
- **Sanfte Hinführung** zu Buch, Erkenntnisräumen und Newsletter – ohne
  aggressive Verkaufsflächen.

### Welche Besucher sollen angesprochen werden?

- Menschen, die **tiefer fühlen** und bewusster leben möchten.
- Menschen auf einem **spirituell-philosophischen Weg**, die Würde und Klarheit
  schätzen.
- **TikTok-/YouTube-Publikum** (mobile-first!), das über kurze Impulse kommt und
  hier den ruhigen „Heimathafen" findet.
- Menschen, die sensibel auf Übertreibung, Druck und Kitsch reagieren – und
  deshalb Seriosität suchen.

---

## 2. Designrichtung

### Visuelle Sprache

Modern, klar, würdevoll, premium. Ein „digitales Tor" mit viel Weißraum,
feinen Lichtakzenten und ruhiger Tiefe. Mystisch, aber nicht verspielt.

### Farben

| Token        | Wert      | Rolle                          |
| ------------ | --------- | ------------------------------ |
| Background   | `#070B16` | Tiefes Nachtblau, Grundfläche  |
| Dark Blue    | `#0B1020` | Flächen, Tiefe                 |
| Violet       | `#2B214A` | Violette Tiefe, Glow           |
| Gold         | `#D6B76A` | Lichtakzente, CTAs, Symbole    |
| Soft White   | `#F5F0E8` | Überschriften, Lichttext       |
| Muted        | `#B8B3C7` | Fließtext, Sekundärtext        |

Prinzip: dunkle, tiefe Basis + sparsame goldene Lichtpunkte. Gold ist kostbar
und wird **dosiert** eingesetzt.

### Typografie

- **Überschriften:** Cormorant Garamond – edel, klassisch, ruhig.
- **Fließtext:** Inter – klar, modern, gut lesbar.
- Großzügige Zeilenhöhen, viel Luft, kein gedrängter Satz.

### Animationen

Nur dezent und bedeutungsvoll:
- sanftes Fade-in beim Scrollen (Reveal)
- weiche Glow-Effekte (langsames Pulsieren)
- langsame, ruhige Partikel/Sterne
- respektiert `prefers-reduced-motion`

**Keine** aggressiven, schnellen oder überladenen Effekte.

### Bildwelt (für später)

- Symbolisch statt plakativ: Tor, Bogen, Licht, Sterne, Schwellen, Wasser,
  Erde, geometrische Andeutungen.
- Eher abstrakt, atmosphärisch, dunkel-elegant.
- **Kein** Stockfoto-Kitsch, keine generischen „Wellness"-Bilder, keine grellen
  Mandalas oder Regenbogenfarben.

### Stimmung

Ruhig · tief · sakral-modern · vertrauenswürdig · zeitlos · premium.

### Was vermieden werden soll

- grelle Farben, Neon, Regenbogen-Esoterik
- überladene Effekte, blinkende Elemente, schnelle Animationen
- Sektenwirkung, Heilsversprechen, Druck, Countdown-Verkauf
- Stockfoto-Klischees, Kitsch, esoterische Überfrachtung
- zu viel Text, gedrängte Layouts

---

## 3. Seitenstruktur (wachsendes System)

Die Website ist als **One-Page-Startseite** plus eigenständige Unterseiten
angelegt – so kann sie organisch wachsen.

```
/                                  Startseite (One-Page, alle Sektionen)
/erkenntnisraeume                  Übersicht aller Räume (Phase 2)
/erkenntnisraeume/bewusstsein      Einzelraum
/erkenntnisraeume/frequenz         Einzelraum
/erkenntnisraeume/innere-erinnerung
/erkenntnisraeume/schatten-klarheit
/erkenntnisraeume/erde-zeichen-portale
/erkenntnisraeume/innere-reisen
/buch                              Buchseite „7 Schlüssel des Bewusstseins"
/botschaften                       Medienarchiv (TikTok/YouTube) (Phase 4)
/toroeffner                        Sammlung poetischer Impulse (optional eigene Seite)
/ueber                             Über Aureon Thal'Emar
/newsletter                        Anmeldung / Bestätigung (optional eigene Seite)
/kontakt                           Kontakt
/impressum                         Rechtliches
/datenschutz                       Rechtliches
```

**Aktueller Stand (gebaut, v1.2):** `/`, `/buch`, `/kontakt`, `/impressum`,
`/datenschutz` und die sechs `/erkenntnisraeume/[slug]`-Seiten existieren als
Platzhalter im finalen Design. Eine eigene Übersichtsseite `/erkenntnisraeume`
sowie `/botschaften`, `/toroeffner` und `/newsletter` als eigene Seiten sind
für spätere Phasen vorgesehen (aktuell als Sektionen auf der Startseite).

### Hinweis zur Navigation

- Startseite = One-Page mit Smooth-Scroll-Ankern.
- Unterseiten = eigenständig, mit gleichem Header/Footer, „Zurück zum Tor".
- Navigation und Buttons funktionieren cross-page (von Unterseiten zurück zur
  passenden Sektion der Startseite).

---

## 4. Startseiten-Aufbau (ideale Reihenfolge)

1. **Hero** – „TorDerErinnerung", Untertitel, kurze Einführung, zwei CTAs
   („Das Tor betreten", „Erkenntnisräume entdecken"). Tor-Bogen, Sterne, Glow.
2. **Intro** – „Ein Ort zwischen Stille und Erkenntnis". Ruhiger Brückentext,
   der die Haltung setzt.
3. **Erkenntnisräume** – sechs Karten als Einladung, je ein Zugang nach innen.
4. **Buch** – „7 Schlüssel des Bewusstseins". Früh sichtbar, edel inszeniert.
5. **Botschaften** – Medienvorschau (TikTok/YouTube), „Worte, die nachklingen".
6. **Toröffner** – kurze poetische Impulse als Zitatkarten.
7. **Über Aureon** – würdevoller, persönlicher Abschnitt mit Signatur-Zitat.
8. **Newsletter** – „Empfange Impulse aus dem Tor", ruhige Anmeldung.
9. **Footer** – Seiten-Links (Impressum, Datenschutz, Kontakt), Social, Leitsatz.

**Begründung der Reihenfolge:** Erst Wirkung (Hero) → Haltung (Intro) →
inhaltliche Tiefe (Räume) → Angebot (Buch) → lebendige Präsenz (Botschaften) →
Innehalten (Toröffner) → Vertrauen/Person (Über) → sanfte Bindung (Newsletter).

---

## 5. Die sechs Erkenntnisräume

> Jeder Raum ist ein **Zugang**, kein Kurs. Ton: einladend, nie belehrend.
> Symbole sind bereits im Design verankert.

### 1. Bewusstsein  ◯
- **Ziel:** Wahrnehmung wecken; sich selbst beobachten ohne Urteil.
- **Beschreibung:** Der Raum, in dem du beginnst, dich selbst zu sehen – klar
  und mild.
- **Mögliche Themen:** Achtsamkeit, Präsenz, Gewahrsein, der Beobachter,
  Gegenwärtigkeit, Ego vs. Bewusstsein.
- **Spätere Inhalte:** Einführungstext, geführte Reflexionen, kurze Übungen,
  Impuls-Karten, ggf. Audio.

### 2. Frequenz & Schwingung  ≈
- **Ziel:** Das eigene innere Feld wahrnehmen und klären.
- **Beschreibung:** Alles schwingt – lerne, die feinen Töne zu hören, die dich
  stimmen.
- **Mögliche Themen:** Resonanz, Energie, Stimmung als Schwingung, Klang,
  Umfeld & Einfluss, Selbstregulation.
- **Spätere Inhalte:** Texte, Klang-/Audio-Impulse, einfache Energieübungen,
  Reflexionsfragen.

### 3. Innere Erinnerung  ❖
- **Ziel:** Erkennen, dass nichts neu erschaffen werden muss – nur erinnert.
- **Beschreibung:** Was du suchst, war immer in dir.
- **Mögliche Themen:** Intuition, inneres Wissen, Wesenskern, Rückverbindung,
  Vertrauen, „nach Hause kommen".
- **Spätere Inhalte:** vertiefende Essays, Erinnerungs-Impulse,
  Journaling-Fragen.

### 4. Schatten & Klarheit  ☾
- **Ziel:** Würdevoller Umgang mit dem Verborgenen; Licht durch Schatten.
- **Beschreibung:** Das Licht braucht den Schatten, um zu erkennen.
- **Mögliche Themen:** Schattenarbeit, Annahme, Heilung, Muster, Projektion,
  Selbstmitgefühl, Integration.
- **Spätere Inhalte:** behutsame Texte, geführte Selbstbegegnung, klare
  Abgrenzung zu therapeutischen Versprechen (Hinweis-Disclaimer).

### 5. Erde, Zeichen & Portale  ⟡
- **Ziel:** Die stille Sprache der Welt lesen lernen.
- **Beschreibung:** Die Welt spricht in Zeichen – lerne, die Hinweise zu deuten.
- **Mögliche Themen:** Synchronizität, Symbole, Natur, Zyklen, Orte, Schwellen,
  Verbindung zur Erde.
- **Spätere Inhalte:** Beobachtungs-Texte, Symbol-Sammlung, Naturimpulse.

### 6. Innere Reisen  ✶
- **Ziel:** Tiefer in das eigene Wesen begleiten – Stille & Imagination.
- **Beschreibung:** Geführte Räume der Stille und inneren Bilder.
- **Mögliche Themen:** Meditation, Imagination, geführte Reisen, Atem, Stille,
  innere Landschaften.
- **Spätere Inhalte:** **Audio-Meditationen** (Kern dieses Raums), geführte
  Texte, später ggf. Video.

---

## 6. Inhaltliche Tonalität

Die Sprache von TorDerErinnerung ist:

- **ruhig** – kein Druck, kein Tempo
- **tief** – Substanz statt Effekt
- **würdevoll** – respektvoll, edel
- **einladend** – „du darfst", nie „du musst"
- **nicht dogmatisch** – keine absolute Wahrheit, kein Glaubenssystem
- **nicht überladen** – Klarheit vor Fülle
- **spirituell-philosophisch** – reflektiert, nicht beliebig
- **klar und vertrauenswürdig** – verständlich, seriös

**Schreib-Leitlinien:**
- Anrede per „du", warm und nah.
- Kurze, atmende Sätze. Viel Weißraum auch im Text.
- Bilder und Metaphern (Tor, Schwelle, Licht) statt Fachjargon.
- Keine Heils-/Heilungsversprechen, keine Garantien, kein Verkaufsdruck.
- Bei sensiblen Themen (Schatten) klarer, ruhiger Hinweis statt Therapieersatz.

---

## 7. Entwicklungsphasen

| Phase | Inhalt | Status |
| ----- | ------ | ------ |
| **1** | Starke Startseite + Platzhalterseiten im finalen Design | ✅ weitgehend fertig (v1.2) |
| **2** | Echte Inhalte für die sechs Erkenntnisräume + Übersichtsseite `/erkenntnisraeume` | offen |
| **3** | Buchbereich ausbauen: Detailseite, Leseprobe, Vormerkung/Interesse | offen |
| **4** | Medienarchiv „Botschaften": echte TikTok-/YouTube-Einbindung, Filter | offen |
| **5** | Newsletter (echte Anbindung) + Community-Ansätze | offen |
| **6** | Meditationen/Audio, Kurse oder Shop (Innere Reisen als Startpunkt) | offen |

**Phase 1 – Detail (Ist-Zustand):**
Startseite mit allen Sektionen, Smooth-Scroll, responsive/mobile-first, sechs
Erkenntnisraum-Platzhalter, Buch-/Kontakt-/Impressum-/Datenschutz-Seiten,
404-Seite. Design final poliert (v1.2).

**Phase 2 – Empfehlung für den Aufbau:**
Pro Raum eine klare Inhaltsstruktur (Einführung → 3–5 Impulse/Texte →
optional eine Übung). Inhalte zentral pflegbar halten (Datenstruktur statt
verstreutem Markup), damit ohne CMS gearbeitet werden kann.

**Wichtig für später:** Eine CMS-Anbindung ist für v1 **bewusst nicht** geplant.
Sie wird erst relevant, wenn regelmäßig (nicht-technische) Inhalte gepflegt
werden – frühestens ab Phase 2/4.

---

## 8. Konkrete Empfehlung

### Was als Nächstes gebaut werden soll
1. **Phase 2 starten – echte Inhalte für die Erkenntnisräume.** Das ist das
   inhaltliche Herz. Beginnen mit **2 Pilot-Räumen** (Empfehlung:
   *Bewusstsein* und *Innere Erinnerung*), um Tonalität und Seitenstruktur
   einmal sauber zu definieren, bevor alle sechs gefüllt werden.
2. **Inhaltsstruktur/Datenmodell** für Räume festlegen (Einführung, Abschnitte,
   Impulse) – damit die restlichen Räume schnell folgen können.
3. **Texte zuerst, dann Technik.** Erst die Inhalte schreiben (Tonalität!),
   dann ins bestehende Design gießen.

### Was noch nicht gebaut werden soll
- **Kein** CMS, **kein** Shop, **keine** echten Audio-/Kurs-Funktionen (Phase 6).
- **Keine** echte Newsletter-/Mailanbindung, solange Phase 2 nicht steht
  (das Formular bleibt vorerst visuell).
- **Keine** komplexe Medien-Einbindung – Botschaften bleiben vorerst Platzhalter.
- Keine neuen Effekte/Animationen „weil es geht".

### Was am bestehenden Design bleiben soll
- Gesamte **visuelle Sprache**: Nachtblau, Gold, violette Tiefe, Glow, Sterne.
- **Typografie** (Cormorant Garamond + Inter) und großzügiger Weißraum.
- **Hero, Buchbereich, Über-Aureon, Toröffner** – bereits sehr stark.
- **Mobile-first**-Ausrichtung und dezente Animationen.

### Was verbessert / ergänzt werden soll (inhaltlich, nicht technisch jetzt)
- Echte, würdevolle **Texte** statt Platzhalter (Räume, Buch, Über Aureon).
- **Bildwelt** definieren und behutsam einführen (symbolisch, dunkel-elegant).
- **Übersichtsseite `/erkenntnisraeume`** ergänzen, sobald Inhalte existieren.
- Bei „Schatten & Klarheit" einen **ruhigen Hinweis** (kein Therapieersatz).

---

## Anhang – Leitsatz

> *„Ich zeige dir keinen Weg. Ich halte nur das Tor für dich offen."*
> — Aureon Thal'Emar
