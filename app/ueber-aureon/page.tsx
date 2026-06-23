import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Über Aureon Thal’Emar",
  description:
    "Aureon Thal’Emar versteht sich nicht als Lehrer, sondern als Begleiter – würdevoll, still und frei von Dogma.",
};

export default function UeberAureonPage() {
  return (
    <PageShell
      eyebrow="Über"
      title="Aureon Thal’Emar"
      description="Ein Begleiter, kein Lehrer. Worte aus Stille, Beobachtung und Vertrauen."
      symbol="A"
    >
      <Section spacing="pb-24 pt-4 sm:pb-28">
        <div className="container-x">
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <p className="text-pretty text-lg leading-[1.8] text-muted">
                Aureon Thal’Emar versteht sich nicht als Lehrer, sondern als
                Begleiter. Seine Worte entstehen aus Stille, Beobachtung und dem
                tiefen Vertrauen, dass jeder Mensch die Antworten bereits in sich
                trägt.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-4 text-pretty leading-[1.8] text-muted">
                TorDerErinnerung ist aus dem Wunsch entstanden, einen würdevollen
                Raum zu schaffen – frei von Dogma, frei von Lärm. Ein Ort, an dem
                Erinnerung beginnen darf.
              </p>
            </Reveal>
            <Reveal delay={240}>
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
      </Section>
    </PageShell>
  );
}
