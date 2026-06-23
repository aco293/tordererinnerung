import Reveal from "./ui/Reveal";
import Section from "./ui/Section";

export default function AboutSection() {
  return (
    <Section
      id="ueber"
      className="relative"
      spacing="pt-16 pb-10 sm:pt-20 sm:pb-12 lg:pt-28 lg:pb-16"
    >
      <div className="container-x">
        <div className="grid items-center gap-10 sm:gap-12 md:grid-cols-[auto,1fr] md:gap-14">
          {/* Portrait-Platzhalter */}
          <Reveal className="flex justify-center md:justify-start">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-5 rounded-full bg-gold/[0.12] blur-2xl animate-slow-pulse"
              />
              {/* Goldener Doppelring mit sanftem Glow */}
              <div
                className="relative flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-violet/55 to-dark-blue sm:h-52 sm:w-52"
                style={{
                  boxShadow:
                    "0 0 0 1px rgba(214,183,106,0.45), 0 0 0 8px rgba(214,183,106,0.06), 0 30px 60px -30px rgba(0,0,0,0.8), inset 0 1px 0 rgba(214,183,106,0.2)",
                }}
              >
                <span className="font-heading text-6xl text-gold/85">A</span>
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <Reveal>
              <span className="eyebrow">Über</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 text-balance text-4xl leading-tight sm:text-5xl">
                Aureon Thal’Emar
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-[1.8] text-muted">
                Aureon Thal’Emar versteht sich nicht als Lehrer, sondern als
                Begleiter. Seine Worte entstehen aus Stille, Beobachtung und dem
                tiefen Vertrauen, dass jeder Mensch die Antworten bereits in sich
                trägt.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-4 max-w-2xl text-pretty leading-[1.8] text-muted">
                TorDerErinnerung ist aus dem Wunsch entstanden, einen würdevollen
                Raum zu schaffen – frei von Dogma, frei von Lärm. Ein Ort, an dem
                Erinnerung beginnen darf.
              </p>
            </Reveal>
            {/* Signatur-Zitat */}
            <Reveal delay={400}>
              <figure className="mt-9 border-l border-gold/30 pl-5">
                <blockquote className="font-heading text-2xl font-light italic leading-snug text-soft-white">
                  „Ich zeige dir keinen Weg. Ich halte nur das Tor für dich
                  offen.“
                </blockquote>
                <figcaption className="mt-3 text-sm tracking-[0.25em] text-gold/80">
                  — AUREON THAL’EMAR
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
