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
    content: {
      subtitle:
        "Der Raum, in dem du dich an das erinnerst, was nie wirklich verloren war.",
      heroDescription:
        "Innere Erinnerung ist kein Zurückschauen in die Vergangenheit. Es ist das leise Wiedererkennen dessen, was in dir immer schon da war: deine innere Stimme, dein Wissen, dein Wesen. Hier geht es nicht ums Lernen, sondern ums Erinnern.",
      intro: {
        title: "Was bedeutet innere Erinnerung?",
        paragraphs: [
          "Vieles, was du suchst, hast du nie wirklich verloren. Es ist nur unter Lärm, Gewohnheit und fremden Erwartungen leiser geworden. Innere Erinnerung ist die Bewegung, mit der du dich diesem Leisen wieder zuwendest.",
          "Es ist ein Unterschied, ob du dir etwas Neues aneignest oder ob du dich an etwas erinnerst, das schon zu dir gehört. Das eine fühlt sich nach Anstrengung an, das andere nach Heimkommen.",
          "Diese Erinnerung kommt selten als laute Erkenntnis. Sie zeigt sich in einem stillen Ja, in einem Moment der Klarheit, in dem Gefühl, dass etwas in dir längst wusste, was richtig ist.",
        ],
      },
      why: {
        title: "Warum dieser Raum wichtig ist",
        cards: [
          {
            title: "Du vertraust dir wieder",
            text: "Innere Erinnerung stärkt das Gespür dafür, dass du eigene Antworten in dir trägst – nicht statt anderer Stimmen, aber neben ihnen.",
          },
          {
            title: "Du findest zurück zu dir",
            text: "Zwischen all den Rollen und Erwartungen liegt etwas, das schlicht du bist. Erinnerung räumt den Weg dorthin frei.",
          },
          {
            title: "Du wirst stiller und klarer",
            text: "Wer sich erinnert, muss weniger suchen. Vieles beruhigt sich, wenn das Eigene wieder spürbar wird.",
          },
        ],
      },
      keys: {
        title: "Schlüsselgedanken",
        items: [
          {
            title: "Du musst nichts werden, was du nicht bist.",
            text: "Erinnerung ist kein Umbau deiner selbst. Sie ist das Freilegen dessen, was schon da ist.",
          },
          {
            title: "Deine Intuition ist eine leise Sprache.",
            text: "Sie drängt selten. Sie wartet, bis es still genug ist, um gehört zu werden.",
          },
          {
            title: "Sehnsucht ist ein Hinweis.",
            text: "Was dich immer wieder ruft, zeigt oft, woran du dich erinnern darfst.",
          },
          {
            title: "Nicht jede fremde Stimme ist deine.",
            text: "Manche Überzeugungen hast du übernommen, nicht gewählt. Erinnerung hilft, den Unterschied zu fühlen.",
          },
          {
            title: "Heimkommen ist ein Weg, kein einzelner Moment.",
            text: "Du erinnerst dich nicht ein einziges Mal, sondern immer wieder – ein Stück näher bei jedem Mal.",
          },
        ],
      },
      practice: {
        title: "Kleine Erinnerungsübung",
        intro:
          "Werde einen Moment still und lege eine Hand auf deine Brust. Atme ruhig und stelle dir nicht die Frage, was du tun sollst, sondern was du eigentlich schon weißt.",
        questions: [
          "Wann habe ich mich zuletzt ganz wie ich selbst gefühlt?",
          "Welche leise Wahrheit kenne ich, höre aber oft über sie hinweg?",
          "Was würde sich verändern, wenn ich meiner inneren Stimme ein wenig mehr vertraue?",
        ],
        closing:
          "Du musst die Antworten nicht erzwingen. Es genügt, die Fragen offen zu lassen und zu bemerken, was sich in dir regt.",
      },
      quotes: {
        title: "Worte für diesen Raum",
        items: [
          "Du suchst nicht nach etwas Fremdem. Du erinnerst dich an etwas Eigenes.",
          "Was wirklich zu dir gehört, geht nicht verloren. Es wird nur still.",
          "Heimkommen heißt nicht, irgendwo anzukommen, sondern aufzuhören, dich selbst zu verlassen.",
        ],
      },
      outro: {
        title: "Ein Wiedererkennen, kein Erwerb",
        text: "Innere Erinnerung lädt dich ein, dir selbst wieder zuzuhören. Nicht um jemand anderes zu werden, sondern um dem näherzukommen, der du im Kern längst bist.",
      },
      next: { slug: "schatten-klarheit", label: "Schatten & Klarheit" },
    },
  },
  {
    slug: "schatten-klarheit",
    title: "Schatten & Klarheit",
    description:
      "Das Licht braucht den Schatten, um zu erkennen. Ein würdevoller Weg durch das, was verborgen liegt.",
    symbol: "☾",
    content: {
      subtitle:
        "Der Raum, in dem du dem begegnest, was du lange gemieden hast – mit Würde statt Urteil.",
      heroDescription:
        "Schatten sind nicht das Böse in dir. Sie sind die Teile, die du nicht sehen wolltest oder durftest. Wer ihnen mit Klarheit und Mitgefühl begegnet, gewinnt nicht weniger Licht, sondern mehr Ganzheit.",
      intro: {
        title: "Was bedeuten Schatten & Klarheit?",
        paragraphs: [
          "Der Schatten ist all das, was wir an uns abgelehnt, verdrängt oder versteckt haben – oft, weil es einmal nicht erwünscht war. Er ist nicht dein Feind. Er ist ein Teil von dir, der lange im Dunkeln warten musste.",
          "Klarheit entsteht nicht, indem wir den Schatten bekämpfen, sondern indem wir ihn anschauen. Was gesehen wird, verliert seine ungewollte Macht. Was im Dunkeln bleibt, wirkt unbemerkt weiter.",
          "Dieser Raum ist eine Einladung zur Ehrlichkeit, nicht zur Härte. Du musst nicht alles auf einmal ansehen. Es genügt, einen kleinen Teil ins Licht zu halten – ruhig und ohne dich zu verurteilen.",
        ],
      },
      why: {
        title: "Warum dieser Raum wichtig ist",
        cards: [
          {
            title: "Du gewinnst Ganzheit",
            text: "Was du integrierst, musst du nicht länger verbergen. Energie, die im Verstecken lag, wird wieder frei.",
          },
          {
            title: "Du reagierst gelassener",
            text: "Vieles, was uns überrollt, kommt aus ungesehenen Anteilen. Wer sie kennt, wird ruhiger.",
          },
          {
            title: "Du begegnest anderen milder",
            text: "Was wir an uns annehmen, müssen wir bei anderen nicht mehr bekämpfen.",
          },
        ],
      },
      keys: {
        title: "Schlüsselgedanken",
        items: [
          {
            title: "Der Schatten ist nicht falsch, nur ungesehen.",
            text: "Er bittet nicht um Bekämpfung, sondern um Aufmerksamkeit.",
          },
          {
            title: "Was du bei anderen stark ablehnst, kann auf dich zeigen.",
            text: "Starke Reaktionen sind oft Spiegel. Sie laden ein, genauer hinzusehen.",
          },
          {
            title: "Mitgefühl trägt weiter als Urteil.",
            text: "Du gehst tiefer mit dir, wenn du dich nicht verurteilst, sondern verstehst.",
          },
          {
            title: "Licht und Schatten gehören zusammen.",
            text: "Es geht nicht darum, nur hell zu sein, sondern echt – und damit ganz.",
          },
          {
            title: "Du musst nicht alles allein tragen.",
            text: "Manches darf in Begleitung angeschaut werden. Sich Unterstützung zu suchen, ist ein Zeichen von Stärke.",
          },
        ],
      },
      practice: {
        title: "Kleine Schattenübung",
        intro:
          "Denke an eine Situation, in der du heftiger reagiert hast, als es nötig schien. Atme ruhig und betrachte sie ohne Vorwurf, als würdest du einem Teil von dir zuhören.",
        questions: [
          "Welches Gefühl lag wirklich unter meiner Reaktion?",
          "Welcher Teil in mir wollte gesehen oder geschützt werden?",
          "Wie würde ich mit diesem Teil sprechen, wenn ich ihn als jüngeres Ich vor mir hätte?",
        ],
        closing:
          "Sei sanft mit dem, was auftaucht. Und wenn etwas zu schwer wird, um es allein zu tragen, ist es klug und stark, dir vertraute Begleitung an deine Seite zu holen.",
      },
      quotes: {
        title: "Worte für diesen Raum",
        items: [
          "Dein Schatten ist kein Feind. Er ist ein Teil von dir, der lange im Dunkeln warten musste.",
          "Was du ansiehst, verliert seine ungewollte Macht.",
          "Du wirst nicht heller, indem du den Schatten verleugnest, sondern indem du ihn würdigst.",
        ],
      },
      outro: {
        title: "Ganz werden statt nur hell",
        text: "Schatten & Klarheit erinnern dich daran, dass es nicht darum geht, makellos zu sein, sondern ehrlich und ganz. Jeder Teil, den du ins Licht holst, bringt dich näher zu dir selbst.",
      },
      next: { slug: "erde-zeichen-portale", label: "Erde, Zeichen & Portale" },
    },
  },
  {
    slug: "erde-zeichen-portale",
    title: "Erde, Zeichen & Portale",
    description:
      "Die Welt spricht in Zeichen. Lerne, die stillen Hinweise zu lesen, die dir den Weg weisen.",
    symbol: "⟡",
    content: {
      subtitle:
        "Der Raum, in dem du die stille Sprache der Welt um dich herum wieder lesen lernst.",
      heroDescription:
        "Die Welt spricht nicht nur in Worten. Sie spricht in Zeichen, Begegnungen, Mustern und Momenten. Dieser Raum lädt dich ein, achtsamer hinzusehen – geerdet, nüchtern und doch offen für das, was sich zeigt.",
      intro: {
        title: "Was bedeuten Erde, Zeichen & Portale?",
        paragraphs: [
          "Erde steht für Verbundenheit und Boden unter den Füßen. Bevor wir nach oben streben, dürfen wir ankommen – im Körper, im Moment, im wirklichen Leben.",
          "Zeichen sind keine Befehle und keine Magie, die dir Verantwortung abnimmt. Sie sind leise Hinweise: ein wiederkehrendes Thema, eine Begegnung zur rechten Zeit, ein Gefühl, das dich innehalten lässt.",
          "Portale sind Schwellen – Übergänge zwischen einem Davor und einem Danach. Manchmal merkst du erst später, dass ein stiller Moment der Beginn von etwas war.",
        ],
      },
      why: {
        title: "Warum dieser Raum wichtig ist",
        cards: [
          {
            title: "Du lebst aufmerksamer",
            text: "Wer auf Zeichen achtet, lebt wacher. Nicht abergläubisch, sondern präsent für das, was gerade ist.",
          },
          {
            title: "Du fühlst dich verbunden",
            text: "Erde erinnert dich, dass du Teil von etwas Größerem bist – nicht getrennt, sondern eingebunden.",
          },
          {
            title: "Du erkennst Übergänge",
            text: "Schwellen wollen bewusst betreten werden. Wer sie bemerkt, geht achtsamer durch Veränderung.",
          },
        ],
      },
      keys: {
        title: "Schlüsselgedanken",
        items: [
          {
            title: "Erde dich, bevor du deutest.",
            text: "Hinweise lesen sich klarer aus einem ruhigen, geerdeten Zustand heraus.",
          },
          {
            title: "Zeichen ersetzen deine Entscheidung nicht.",
            text: "Sie können dich erinnern oder bestätigen. Wählen darfst weiterhin du.",
          },
          {
            title: "Wiederholung trägt Bedeutung.",
            text: "Was immer wieder auftaucht, lädt ein, genauer hinzusehen.",
          },
          {
            title: "Die Natur ist eine stille Lehrerin.",
            text: "Zyklen, Jahreszeiten und Stille zeigen ein Maß, das uns im Alltag oft verloren geht.",
          },
          {
            title: "Schwellen verdienen Aufmerksamkeit.",
            text: "Anfänge und Abschiede sind Portale. Sie bewusst zu betreten, gibt ihnen Würde.",
          },
        ],
      },
      practice: {
        title: "Kleine Erdungsübung",
        intro:
          "Setz oder stell dich für einen Moment ruhig hin und spüre den Kontakt zum Boden. Atme tief und richte deine Aufmerksamkeit nach unten, bevor du nach innen oder außen schaust.",
        questions: [
          "Wo stehe ich gerade wirklich – körperlich, im Leben, im Moment?",
          "Welches Zeichen oder Thema begegnet mir in letzter Zeit immer wieder?",
          "Stehe ich gerade an einer Schwelle, die ich bewusster betreten könnte?",
        ],
        closing:
          "Du musst nichts überdeuten. Es genügt, wacher hinzusehen und der Welt zuzutrauen, dass sie leise mit dir spricht.",
      },
      quotes: {
        title: "Worte für diesen Raum",
        items: [
          "Die Welt spricht in Zeichen. Du musst nur leise genug werden, um sie zu hören.",
          "Erde dich zuerst. Aus festem Boden liest sich der Himmel klarer.",
          "Jede Schwelle ist ein stilles Tor. Es liegt an dir, ob du achtsam hindurchgehst.",
        ],
      },
      outro: {
        title: "Geerdet und offen zugleich",
        text: "Erde, Zeichen & Portale erinnern dich daran, mit beiden Füßen im Leben zu stehen und zugleich offen zu bleiben für das Leise. Aufmerksamkeit verwandelt den Alltag in einen Weg voller stiller Hinweise.",
      },
      next: { slug: "innere-reisen", label: "Innere Reisen" },
    },
  },
  {
    slug: "innere-reisen",
    title: "Innere Reisen",
    description:
      "Geführte Räume der Stille und Imagination, die dich tiefer in dein eigenes Wesen begleiten.",
    symbol: "✶",
    content: {
      subtitle:
        "Der Raum, in dem du nach innen reist – in Stille, Atem und innere Bilder.",
      heroDescription:
        "Manche Wege führen nicht nach außen, sondern nach innen. Innere Reisen sind ruhige Räume aus Atem, Stille und Vorstellungskraft, in denen du dir selbst tiefer begegnen kannst – ohne Ziel, ohne Druck.",
      intro: {
        title: "Was sind innere Reisen?",
        paragraphs: [
          "Eine innere Reise ist kein Ausflug in eine andere Welt. Sie ist eine bewusste Hinwendung nach innen – getragen von Atem, Ruhe und der Kraft deiner Vorstellung.",
          "Du brauchst dafür keine besondere Fähigkeit. Es genügt die Bereitschaft, langsamer zu werden und dem zu folgen, was in der Stille auftaucht: ein Bild, ein Gefühl, eine leise Bewegung.",
          "Innere Reisen wollen nichts erzwingen. Sie öffnen einen Raum, in dem du dich erholen, klären und dir selbst näherkommen darfst – in deinem eigenen Tempo.",
        ],
      },
      why: {
        title: "Warum dieser Raum wichtig ist",
        cards: [
          {
            title: "Du kommst zur Ruhe",
            text: "In der Stille darf dein System sich beruhigen. Vieles ordnet sich, wenn der äußere Lärm verstummt.",
          },
          {
            title: "Du begegnest dir tiefer",
            text: "Innere Bilder zeigen oft, was Worte nicht fassen. Sie sprechen die Sprache des Gefühls.",
          },
          {
            title: "Du schöpfst neue Kraft",
            text: "Wer regelmäßig nach innen geht, kehrt klarer und gesammelter in den Alltag zurück.",
          },
        ],
      },
      keys: {
        title: "Schlüsselgedanken",
        items: [
          {
            title: "Der Atem ist dein Anker.",
            text: "Er führt dich immer wieder zurück in die Gegenwart, wenn die Gedanken abschweifen.",
          },
          {
            title: "Bilder sind eine eigene Sprache.",
            text: "Was in der Stille auftaucht, will nicht analysiert, sondern wahrgenommen werden.",
          },
          {
            title: "Es gibt nichts zu erreichen.",
            text: "Eine innere Reise hat kein Ziel außer dem Da-Sein. Schon das genügt.",
          },
          {
            title: "Sicherheit kommt zuerst.",
            text: "Geh nur so tief, wie es sich stimmig anfühlt. Du darfst jederzeit die Augen öffnen und zurückkehren.",
          },
          {
            title: "Rückkehr gehört dazu.",
            text: "Eine Reise endet nicht im Innen. Du bringst, was du findest, sanft mit in dein Leben.",
          },
        ],
      },
      practice: {
        title: "Kleine innere Reise",
        intro:
          "Setz dich bequem hin, schließe wenn du magst die Augen und atme einige Male langsam und tief. Lass deine Aufmerksamkeit von außen nach innen wandern.",
        questions: [
          "Wie fühlt sich mein Atem an, wenn ich ihm einfach nur folge?",
          "Wenn mein innerer Raum ein Ort wäre – wie sähe er gerade aus?",
          "Was tut mir gut, bevor ich langsam wieder zurückkehre?",
        ],
        closing:
          "Nimm dir am Ende einen Moment, spüre deinen Körper und den Boden, und kehre in deinem Tempo zurück. Was du erlebt hast, darf leise mit dir gehen.",
      },
      quotes: {
        title: "Worte für diesen Raum",
        items: [
          "Manche Wege führen nicht hinaus, sondern hinein.",
          "In der Stille beginnst du zu hören, was im Lärm verstummt war.",
          "Du musst nirgendwo hin. Es genügt, anzukommen, wo du schon bist.",
        ],
      },
      outro: {
        title: "Ein Weg nach innen",
        text: "Innere Reisen erinnern dich daran, dass Stille kein Mangel ist, sondern ein Raum. Je öfter du ihn betrittst, desto vertrauter wird der Weg zu dir selbst.",
      },
      next: { slug: "bewusstsein", label: "Bewusstsein" },
    },
  },
];

export function getRealm(slug: string): Realm | undefined {
  return realms.find((realm) => realm.slug === slug);
}
