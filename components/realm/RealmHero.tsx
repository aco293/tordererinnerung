import Link from "next/link";
import Starfield from "../ui/Starfield";
import Button from "../ui/Button";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";
import type { RealmLink } from "@/lib/content";

type RealmHeroProps = {
  symbol: string;
  title: string;
  subtitle: string;
  description: string;
  next?: RealmLink;
};

/**
 * Hero für Erkenntnisraum-Inhaltsseiten.
 * Übernimmt den ruhigen Look von PageShell (Sterne, Glow, Symbol),
 * ergänzt um Breadcrumb, Untertitel und zwei sanfte CTAs.
 */
export default function RealmHero({
  symbol,
  title,
  subtitle,
  description,
  next,
}: RealmHeroProps) {
  return (
    <section className="relative flex min-h-[70svh] items-center justify-center overflow-hidden px-6 pb-16 pt-32 sm:pt-40">
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
        {/* Breadcrumb */}
        <Reveal>
          <nav
            aria-label="Brotkrümel-Navigation"
            className="mb-7 text-xs tracking-wide text-muted"
          >
            <Link
              href="/erkenntnisraeume"
              className="transition-colors hover:text-soft-white"
            >
              Erkenntnisräume
            </Link>
            <span aria-hidden className="mx-2 text-gold/50">
              /
            </span>
            <span className="text-soft-white/80">{title}</span>
          </nav>
        </Reveal>

        <Reveal delay={80}>
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 text-2xl text-gold">
            {symbol}
          </span>
        </Reveal>
        <Reveal delay={150}>
          <SectionLabel className="mt-6 block">Erkenntnisraum</SectionLabel>
        </Reveal>
        <Reveal delay={200}>
          <h1 className="mt-5 text-balance text-4xl leading-tight text-glow sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={280}>
          <p className="mt-5 max-w-xl text-balance font-heading text-xl font-light leading-snug text-soft-white/90 sm:text-2xl">
            {subtitle}
          </p>
        </Reveal>
        <Reveal delay={360}>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        </Reveal>

        <Reveal delay={440}>
          <div className="mt-9 flex w-full max-w-sm flex-col items-center gap-3.5 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
            <Button href="/erkenntnisraeume" variant="ghost" className="w-full sm:w-auto">
              <span aria-hidden>←</span> Zurück zu den Erkenntnisräumen
            </Button>
            {next && (
              <Button href={`/erkenntnisraeume/${next.slug}`} className="w-full sm:w-auto">
                Nächsten Raum betreten
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
