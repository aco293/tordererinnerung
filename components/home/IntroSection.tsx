import Reveal from "../ui/Reveal";
import Section from "../ui/Section";
import SectionLabel from "../ui/SectionLabel";

export default function IntroSection() {
  return (
    <Section id="intro" className="relative">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel>Ein Ort zwischen Stille und Erkenntnis</SectionLabel>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-7 text-balance font-heading text-2xl font-light leading-snug text-soft-white sm:text-3xl md:text-4xl">
              Manche Räume betritt man nicht, um etwas Neues zu lernen –
              sondern um sich an das zu erinnern, was man immer schon wusste.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className="mx-auto mt-7 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
              TorDerErinnerung ist kein lauter Ort. Es ist ein stiller. Ein Raum,
              der dir nichts verkaufen und dich von nichts überzeugen möchte.
              Er lädt dich nur ein, langsamer zu werden, tiefer zu atmen und
              wieder hinzuhören – nach innen.
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mx-auto mt-10 h-px w-24 bg-gold-line opacity-60" />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
