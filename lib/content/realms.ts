/**
 * Die sechs Erkenntnisräume.
 * Zentrale Datenquelle für die Startseiten-Sektion, die Übersichtsseite
 * (/erkenntnisraeume) und die Einzelseiten (/erkenntnisraeume/[slug]).
 *
 * Räume mit `content` werden als vollwertige Inhaltsseite gerendert,
 * Räume ohne `content` bleiben (vorerst) Platzhalterseiten.
 */

export type RealmCard = {
  title: string;
  text: string;
};

export type RealmKey = {
  title: string;
  text: string;
};

export type RealmPractice = {
  title: string;
  intro: string;
  questions: string[];
  closing: string;
};

export type RealmLink = {
  slug: string;
  label: string;
};

export type RealmContent = {
  subtitle: string;
  heroDescription: string;
  intro: {
    title: string;
    paragraphs: string[];
  };
  why: {
    title: string;
    cards: RealmCard[];
  };
  keys: {
    title: string;
    items: RealmKey[];
  };
  practice: RealmPractice;
  quotes: {
    title: string;
    items: string[];
  };
  outro: {
    title: string;
    text: string;
  };
  /** Empfohlener nächster Raum. */
  next?: RealmLink;
};

export type Realm = {
  slug: string;
  title: string;
  description: string;
  /** Dezentes Symbol als visueller Anker. */
  symbol: string;
  /** Voller Seiteninhalt – fehlt er, wird eine Platzhalterseite gezeigt. */
  content?: RealmContent;
};

export const realms: Realm[] = [
  {
    slug: "bewusstsein",
    title: "Bewusstsein",
    description:
      "Der Raum, in dem du beginnst, dich selbst zu beobachten – ohne zu urteilen. Hier wird Wahrnehmung wieder wach.",
    symbol: "◯",
    content: {
      subtitle:
        "Der Raum, in dem du beginnst, dich selbst wieder wahrzunehmen.",
      heroDescription:
        "Bewusstsein ist nicht nur Denken. Es ist der stille Raum in dir, der erkennt, was geschieht, bevor du reagierst. Hier beginnt die Rückkehr zu Klarheit, innerer Präsenz und schöpferischer Verantwortung.",
      intro: {
        title: "Was bedeutet Bewusstsein?",
        paragraphs: [
          "Bewusstsein ist der Teil in dir, der beobachten kann. Es ist die Fähigkeit, Gedanken zu sehen, Gefühle wahrzunehmen und nicht vollständig mit ihnen zu verschmelzen.",
          "Viele Menschen leben im Automatismus: reagieren, funktionieren, leisten, vergleichen, weitermachen. Bewusstsein beginnt dort, wo du innehältst und bemerkst: Ich bin nicht nur meine Gedanken. Ich bin nicht nur meine Geschichte. Ich bin der Raum, in dem all das erscheint.",
          "Dieser Raum ist kein ferner Zustand. Er öffnet sich in kleinen Momenten: beim Atmen, beim ehrlichen Hinsehen, in der Stille, im Erkennen eines Musters, im bewussten Entscheiden.",
        ],
      },
      why: {
        title: "Warum dieser Raum wichtig ist",
        cards: [
          {
            title: "Du erkennst deine Muster",
            text: "Was unbewusst bleibt, wiederholt sich. Was bewusst wird, kann verwandelt werden.",
          },
          {
            title: "Du findest innere Klarheit",
            text: "Bewusstsein schafft Abstand zwischen Reiz und Reaktion. In diesem Abstand beginnt Freiheit.",
          },
          {
            title: "Du wirst schöpferischer",
            text: "Je bewusster du wahrnimmst, desto klarer kannst du wählen, welche Realität du durch deine Haltung mitgestaltest.",
          },
        ],
      },
      keys: {
        title: "Schlüsselgedanken",
        items: [
          {
            title: "Bewusstsein beginnt mit Beobachtung.",
            text: "Du musst nicht sofort verändern. Oft beginnt Wandlung damit, ehrlich zu sehen, was in dir geschieht.",
          },
          {
            title: "Gedanken sind Bewegungen, nicht deine ganze Identität.",
            text: "Ein Gedanke kann laut sein, ohne wahr zu sein. Bewusstsein erkennt den Unterschied.",
          },
          {
            title: "Gefühle sind Botschaften.",
            text: "Sie wollen nicht bekämpft werden. Sie wollen gesehen, verstanden und durchfühlt werden.",
          },
          {
            title: "Präsenz bringt dich zurück.",
            text: "Der gegenwärtige Moment ist der einzige Ort, an dem du wirklich handeln, fühlen und wählen kannst.",
          },
          {
            title: "Klarheit entsteht durch Stille.",
            text: "Nicht jede Antwort kommt durch mehr Nachdenken. Manche Antworten erscheinen, wenn der innere Lärm leiser wird.",
          },
        ],
      },
      practice: {
        title: "Kleine Bewusstseinsübung",
        intro:
          "Setze dich für einen Moment ruhig hin. Atme langsam ein und aus. Frage dich nicht, was du leisten musst. Frage dich nur:",
        questions: [
          "Was nehme ich gerade in mir wahr?",
          "Welcher Gedanke ist laut, aber vielleicht nicht wahr?",
          "Was würde ich wählen, wenn ich aus Ruhe statt aus Angst handeln würde?",
        ],
        closing:
          "Schon diese drei Fragen können ein Tor öffnen. Nicht, weil sie alles lösen, sondern weil sie dich zurück in die bewusste Wahrnehmung bringen.",
      },
      quotes: {
        title: "Worte für diesen Raum",
        items: [
          "Du bist nicht jeder Gedanke, der durch dich zieht. Du bist der Raum, der ihn sehen kann.",
          "Bewusstsein beginnt dort, wo du nicht mehr automatisch wirst, sondern anwesend.",
          "Stille ist nicht leer. Sie ist der Ort, an dem du dich wieder hörst.",
        ],
      },
      outro: {
        title: "Ein Raum, den du immer wieder betreten kannst",
        text: "Bewusstsein ist kein Ziel, das du erreichen musst. Es ist ein Raum, den du immer wieder betreten kannst. Jedes ehrliche Wahrnehmen, jedes bewusste Atmen und jedes Innehalten bringt dich näher zu dir selbst.",
      },
      next: { slug: "frequenz", label: "Frequenz & Schwingung" },
    },
  },
  {
    slug: "frequenz",
    title: "Frequenz & Schwingung",
    description:
      "Alles schwingt. Lerne, die feinen Töne zu hören, die dein inneres Feld stimmen und dich klären.",
    symbol: "≈",
    content: {
      subtitle:
        "Der Raum, in dem du erkennst, wie dein innerer Zustand nach außen wirkt.",
      heroDescription:
        "Frequenz beschreibt die Qualität deines inneren Feldes: deine Gedanken, Gefühle, Worte, Entscheidungen und deine Ausrichtung. Was du in dir trägst, beeinflusst, wie du die Welt wahrnimmst und wie du ihr begegnest.",
      intro: {
        title: "Was bedeutet Frequenz?",
        paragraphs: [
          "Frequenz ist kein abstrakter Begriff. Du kennst sie aus deinem Alltag. Ein Raum kann schwer wirken oder leicht. Ein Mensch kann Unruhe ausstrahlen oder Frieden. Ein Wort kann verletzen oder öffnen.",
          "Deine Frequenz ist die Summe dessen, was in dir aktiv ist: Gedanken, Gefühle, Überzeugungen, Erinnerungen, Körperzustand, Worte und innere Ausrichtung.",
          "Wenn du deine Frequenz bewusster wahrnimmst, beginnst du zu erkennen, welche Zustände dich stärken und welche dich von dir selbst entfernen. Es geht nicht darum, immer positiv zu sein. Es geht darum, ehrlich zu spüren, was in dir schwingt.",
        ],
      },
      why: {
        title: "Warum dieser Raum wichtig ist",
        cards: [
          {
            title: "Du spürst deinen Zustand klarer",
            text: "Wenn du deine eigene Schwingung wahrnimmst, erkennst du früher, was dich nährt und was dich erschöpft.",
          },
          {
            title: "Du wählst bewusster",
            text: "Worte, Musik, Orte, Menschen und Gedanken beeinflussen dein Feld. Bewusstsein macht diese Einflüsse sichtbar.",
          },
          {
            title: "Du wirkst aus deiner Mitte",
            text: "Eine klare Frequenz bedeutet nicht Perfektion. Sie bedeutet, dass du dich immer wieder in deine innere Ausrichtung zurückführst.",
          },
        ],
      },
      keys: {
        title: "Schlüsselgedanken",
        items: [
          {
            title: "Alles, was du oft denkst, hinterlässt Spuren.",
            text: "Wiederholte Gedanken formen deine Wahrnehmung. Deine Wahrnehmung beeinflusst deine Realität.",
          },
          {
            title: "Worte tragen Energie.",
            text: "Wie du mit dir sprichst, verändert dein inneres Feld. Härte verschließt. Wahrheit mit Mitgefühl öffnet.",
          },
          {
            title: "Dein Körper ist Teil deiner Frequenz.",
            text: "Schlaf, Atmung, Bewegung, Nahrung und Ruhe beeinflussen, wie klar du dich fühlen kannst.",
          },
          {
            title: "Resonanz zeigt dir etwas.",
            text: "Was dich stark berührt, spiegelt oft etwas in dir: eine Sehnsucht, eine Wunde, eine Erinnerung oder eine Wahrheit.",
          },
          {
            title: "Frequenz ist wandelbar.",
            text: "Kein Zustand ist endgültig. Du kannst dein Feld durch Atmung, Klarheit, Umgebung, Musik, Natur und bewusste Entscheidungen verändern.",
          },
        ],
      },
      practice: {
        title: "Kleine Frequenzübung",
        intro:
          "Halte kurz inne und spüre deinen aktuellen Zustand, ohne ihn zu bewerten.",
        questions: [
          "Welche Qualität hat mein inneres Feld gerade: eng, ruhig, schwer, klar, unruhig oder offen?",
          "Was hat meine Frequenz heute beeinflusst?",
          "Was würde mein Feld jetzt sanft anheben, ohne mich zu überfordern?",
        ],
        closing:
          "Manchmal reicht ein Glas Wasser, ein tiefer Atemzug, ein ehrlicher Gedanke oder ein Moment in Stille, um dein Feld wieder klarer werden zu lassen.",
      },
      quotes: {
        title: "Worte für diesen Raum",
        items: [
          "Deine Frequenz ist nicht das, was du behauptest. Sie ist das, was du ausstrahlst, wenn du ehrlich bist.",
          "Nicht alles, was laut ist, ist kraftvoll. Manches Licht wirkt leise.",
          "Du musst nicht höher schwingen, um wertvoll zu sein. Du darfst nur ehrlicher spüren, was dich zurück zu dir führt.",
        ],
      },
      outro: {
        title: "Eine Einladung, achtsamer zu werden",
        text: "Frequenz & Schwingung erinnern dich daran, dass dein innerer Zustand Bedeutung hat. Nicht als Druck, perfekt zu sein, sondern als Einladung, achtsamer mit dem zu werden, was du denkst, fühlst, sprichst und wählst.",
      },
      next: { slug: "innere-erinnerung", label: "Innere Erinnerung" },
    },
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
