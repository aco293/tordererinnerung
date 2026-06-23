import Header from "./Header";
import Footer from "./Footer";
import Starfield from "../ui/Starfield";
import Button from "../ui/Button";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";
import { cta } from "@/lib/content";

type PageShellProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Symbol über dem Titel (z. B. Erkenntnisraum-Zeichen). */
  symbol?: string;
  /** Optionaler weiterer Inhalt unterhalb des Hero-Bereichs. */
  children?: React.ReactNode;
};

/**
 * Einheitliches Layout für alle Unterseiten:
 * gleicher Header/Footer, ruhiger Hero, „Zurück zum Tor“.
 * Hält die (Platzhalter-)Seiten DRY und im selben Premium-Stil.
 */
export default function PageShell({
  eyebrow,
  title,
  description,
  symbol = "⟡",
  children,
}: PageShellProps) {
  return (
    <>
      <Header />
      <main>
        {/* Ruhiger Hero-Bereich */}
        <section className="relative flex min-h-[60svh] items-center justify-center overflow-hidden px-6 pb-16 pt-32 sm:pt-40">
          <Starfield count={40} />
          <div
            aria-hidden
            className="absolute left-1/2 top-1/4 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px] animate-slow-pulse"
          />
          <div
            aria-hidden
            className="absolute left-1/2 top-0 h-[20rem] w-full -translate-x-1/2 bg-radial-glow"
          />

          <div className="container-x relative z-10 flex flex-col items-center text-center">
            <Reveal>
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 text-2xl text-gold">
                {symbol}
              </span>
            </Reveal>
            {eyebrow && (
              <Reveal delay={100}>
                <SectionLabel className="mt-6 block">{eyebrow}</SectionLabel>
              </Reveal>
            )}
            <Reveal delay={150}>
              <h1 className="mt-5 text-balance text-4xl leading-tight text-glow sm:text-5xl md:text-6xl">
                {title}
              </h1>
            </Reveal>
            {description && (
              <Reveal delay={250}>
                <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
                  {description}
                </p>
              </Reveal>
            )}
            <Reveal delay={350}>
              <Button href="/" variant="ghost" className="mt-9">
                <span aria-hidden>←</span> {cta.backToGate}
              </Button>
            </Reveal>
          </div>
        </section>

        {children}
      </main>
      <Footer />
    </>
  );
}
