import { gateOpeners } from "@/lib/content";
import SectionHeading from "../ui/SectionHeading";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Reveal from "../ui/Reveal";

export default function GateOpenersSection() {
  return (
    <Section id="toroeffner" className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-[20rem] w-[40rem] -translate-x-1/2 bg-radial-glow opacity-70"
      />

      <div className="container-x relative">
        <SectionHeading
          eyebrow="Toröffner"
          title="Kleine Schlüssel für diesen Moment"
          intro="Lies langsam. Manchmal genügt ein einziger Satz, um eine Tür in dir zu öffnen."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2 sm:gap-6">
          {gateOpeners.map((item, i) => (
            <Reveal key={i} delay={i * 100} className="h-full">
              <Card
                as="blockquote"
                interactive
                className="relative flex h-full items-center rounded-2xl p-7 sm:p-8"
              >
                <span
                  aria-hidden
                  className="absolute left-5 top-2 select-none font-heading text-4xl leading-none text-gold/25"
                >
                  „
                </span>
                <p className="relative pl-3 font-heading text-lg font-light leading-snug text-soft-white sm:pl-4 sm:text-2xl">
                  {item.text}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
