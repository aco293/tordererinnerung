import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "7 Schlüssel des Bewusstseins – TorDerErinnerung",
  description:
    "Ein Buch für Menschen, die sich erinnern und bewusster leben möchten. Sieben Schlüssel, sieben Schwellen.",
};

const schluessel = [
  "Wahrnehmung – wieder wirklich sehen",
  "Stille – dem inneren Raum begegnen",
  "Frequenz – sich neu stimmen",
  "Erinnerung – das Eigene wiederfinden",
  "Schatten – das Verborgene würdigen",
  "Klarheit – ohne Lärm entscheiden",
  "Rückkehr – verkörpern, was du bist",
];

export default function BuchPage() {
  return (
    <PageShell
      eyebrow="Das Buch"
      title="7 Schlüssel des Bewusstseins"
      description="Kein Ratgeber, der dir sagt, wer du sein sollst – sondern ein leiser Begleiter, der dich zu dem zurückführt, was du im Innersten längst bist."
    >
      <Section spacing="pb-24 pt-4 sm:pb-28">
        <div className="container-x">
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <p className="text-pretty text-lg leading-relaxed text-muted">
                „7 Schlüssel des Bewusstseins“ ist eine Einladung, langsamer zu
                werden. Jeder Schlüssel öffnet eine Schwelle in dir – einen Raum,
                der auf deine Rückkehr gewartet hat.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <ul className="mt-10 grid gap-3">
                {schluessel.map((s, i) => (
                  <li
                    key={s}
                    className="glass flex items-center gap-4 rounded-xl px-5 py-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/30 text-sm text-gold">
                      {i + 1}
                    </span>
                    <span className="text-soft-white/90">{s}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={200}>
              <div className="glass mt-10 rounded-2xl p-7 text-center">
                <p className="text-sm uppercase tracking-[0.25em] text-gold/80">
                  Erscheint bald
                </p>
                <p className="mt-3 text-pretty leading-relaxed text-muted">
                  Das Buch befindet sich in Vorbereitung. Trage dich ein, um eine
                  stille Nachricht zu erhalten, sobald es so weit ist – und um
                  dir eine Leseprobe vorzumerken.
                </p>
                <Link href="/#newsletter" className="btn-primary mt-6">
                  Leseprobe vormerken
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
