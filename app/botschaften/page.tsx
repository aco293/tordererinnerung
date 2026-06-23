import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import { mediaItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Botschaften",
  description:
    "Stille Impulse aus dem Tor – auf TikTok und YouTube. Inhalte folgen in Kürze.",
};

export default function BotschaftenPage() {
  return (
    <PageShell
      eyebrow="Botschaften aus dem Tor"
      title="Worte, die nachklingen"
      description="Stille Impulse für unterwegs – auf TikTok und YouTube. Das Medienarchiv wächst nach und nach."
      symbol="≈"
    >
      <Section spacing="pb-24 pt-4 sm:pb-28">
        <div className="container-x">
          {/* TODO: Vor Veröffentlichung mit echten TikTok-/YouTube-Inhalten ersetzen (Platzhalter). */}
          <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
            {mediaItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 100} className="h-full">
                <Card
                  as="a"
                  href={item.href}
                  interactive
                  className="group flex h-full flex-col overflow-hidden rounded-2xl"
                >
                  <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br from-violet/45 via-dark-blue to-background">
                    <span className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_50%_45%,rgba(214,183,106,0.22),transparent_62%)]" />
                    <span
                      aria-hidden
                      className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background/70 to-transparent"
                    />
                    <span
                      className="relative flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-500 group-hover:scale-110 group-hover:border-gold/70"
                      style={{ boxShadow: "0 0 30px -6px rgba(214,183,106,0.45)" }}
                    >
                      <span className="ml-0.5 text-lg">▶</span>
                    </span>
                    <span className="absolute left-4 top-4 rounded-full border border-gold/20 bg-background/60 px-3 py-1 text-xs tracking-wide text-gold/90 backdrop-blur">
                      {item.platform}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-xl">{item.title}</h2>
                    <p className="mt-2 text-pretty text-sm leading-[1.7] text-muted">
                      {item.description}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm text-gold/70 transition-colors group-hover:text-gold">
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 rounded-full bg-gold/60"
                      />
                      Bald verfügbar
                    </span>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
