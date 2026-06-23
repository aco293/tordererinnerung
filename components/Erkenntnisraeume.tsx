import Link from "next/link";
import { erkenntnisraeume } from "@/lib/content";
import SectionHeading from "./ui/SectionHeading";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";

export default function Erkenntnisraeume() {
  return (
    <Section id="erkenntnisraeume" className="relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="Erkenntnisräume"
          title="Sechs Wege, die nach innen führen"
          intro="Jeder Raum ist ein Zugang. Du musst keinem Pfad folgen – wähle den, der dich gerade ruft."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {erkenntnisraeume.map((raum, i) => (
            <Reveal key={raum.slug} delay={i * 80} className="h-full">
              <Link
                href={`/erkenntnisraeume/${raum.slug}`}
                className="glass glass-hover group flex h-full flex-col rounded-2xl p-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/25 text-xl text-gold transition-all duration-500 group-hover:border-gold/60 group-hover:shadow-glow">
                  {raum.symbol}
                </span>
                <h3 className="mt-6 text-2xl">{raum.title}</h3>
                <p className="mt-3 text-pretty text-[0.95rem] leading-[1.7] text-muted">
                  {raum.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm text-gold/70 transition-all duration-300 group-hover:gap-3 group-hover:text-gold">
                  Raum betreten <span aria-hidden>→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
