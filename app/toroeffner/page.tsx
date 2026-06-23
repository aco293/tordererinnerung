import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import { gateOpeners } from "@/lib/content";

export const metadata: Metadata = {
  title: "Toröffner",
  description:
    "Kurze poetische Impulse aus dem Tor – kleine Schlüssel für diesen Moment.",
};

export default function ToroeffnerPage() {
  return (
    <PageShell
      eyebrow="Toröffner"
      title="Kleine Schlüssel für diesen Moment"
      description="Lies langsam. Manchmal genügt ein einziger Satz, um eine Tür in dir zu öffnen."
      symbol="✶"
    >
      <Section spacing="pb-24 pt-4 sm:pb-28">
        <div className="container-x">
          <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2 sm:gap-6">
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
    </PageShell>
  );
}
