import Starfield from "../ui/Starfield";
import Button from "../ui/Button";
import SectionLabel from "../ui/SectionLabel";
import { cta } from "@/lib/content";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-24"
    >
      {/* Hintergrund-Ebenen */}
      <Starfield count={52} />

      {/* Sanfter goldener Lichtschein, der durch das Tor scheint
          – auf kleinen Screens bewusst zurückhaltender. */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/3 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.07] blur-[90px] animate-slow-pulse sm:h-[34rem] sm:w-[34rem] sm:bg-gold/10 sm:blur-[120px]"
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-[24rem] w-full -translate-x-1/2 bg-radial-glow"
      />

      {/* Das stilisierte Tor (Bogen) */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-0 h-[22rem] w-[15rem] -translate-x-1/2 -translate-y-1/2 rounded-t-full border border-gold/10 sm:h-[36rem] sm:w-[24rem] sm:border-gold/15"
        style={{
          boxShadow:
            "inset 0 0 70px -22px rgba(214,183,106,0.3), 0 0 110px -45px rgba(214,183,106,0.35)",
        }}
      />

      <div className="container-x relative z-10 flex flex-col items-center text-center">
        <SectionLabel className="mb-6 animate-fade-in">
          Willkommen am Tor
        </SectionLabel>

        <h1 className="animate-fade-in-up text-balance text-[2.75rem] leading-[1.05] text-glow sm:text-6xl md:text-7xl lg:text-8xl">
          Tor<span className="text-gold">Der</span>Erinnerung
        </h1>

        <p
          className="mt-7 max-w-2xl text-balance text-lg font-light leading-relaxed text-soft-white/90 animate-fade-in-up sm:text-xl md:text-2xl"
          style={{ animationDelay: "150ms" }}
        >
          Ein Raum für Bewusstsein, innere Klarheit und die Rückkehr zu dem, was
          in dir nie verloren ging.
        </p>

        <p
          className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          Hier beginnt kein neuer Glaube. Hier beginnt Erinnerung.
          TorDerErinnerung ist ein digitaler Raum für Menschen, die tiefer
          fühlen, bewusster sehen und sich wieder mit ihrer inneren Wahrheit
          verbinden möchten.
        </p>

        <div
          className="mt-10 flex w-full max-w-sm flex-col items-center gap-3.5 animate-fade-in-up sm:max-w-none sm:flex-row sm:justify-center sm:gap-4"
          style={{ animationDelay: "450ms" }}
        >
          <Button href="#intro" className="w-full sm:w-auto">
            {cta.enterGate}
          </Button>
          <Button href="#erkenntnisraeume" variant="ghost" className="w-full sm:w-auto">
            {cta.discoverRealms}
          </Button>
        </div>
      </div>

      {/* Scroll-Hinweis */}
      <div
        aria-hidden
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-fade-in sm:bottom-8"
        style={{ animationDelay: "900ms" }}
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-gold/30 p-1.5">
          <span className="h-2 w-1 animate-drift rounded-full bg-gold/70" />
        </span>
      </div>
    </section>
  );
}
