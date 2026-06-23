import Reveal from "../ui/Reveal";
import Section from "../ui/Section";
import Button from "../ui/Button";
import SectionLabel from "../ui/SectionLabel";
import { cta } from "@/lib/content";

export default function BookSection() {
  return (
    <Section
      id="buch"
      className="relative overflow-hidden"
      spacing="pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-28"
    >
      {/* Violetter Tiefenschein */}
      <div
        aria-hidden
        className="absolute right-0 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 translate-x-1/3 rounded-full bg-violet/40 blur-[120px]"
      />

      <div className="container-x relative">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-14">
          {/* Buch-Visual */}
          <Reveal className="order-2 flex justify-center lg:order-1">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-10 rounded-full bg-gold/[0.13] blur-3xl animate-slow-pulse"
              />
              <div
                className="relative flex aspect-[3/4] w-64 flex-col justify-between rounded-r-md rounded-l-sm border border-gold/25 bg-gradient-to-br from-dark-blue to-violet/60 p-7 sm:w-72"
                style={{
                  boxShadow:
                    "0 40px 90px -40px rgba(0,0,0,0.9), inset 0 1px 0 0 rgba(214,183,106,0.18), 0 0 70px -34px rgba(214,183,106,0.4)",
                }}
              >
                <div className="flex justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-2xl text-gold">
                    ⟡
                  </span>
                </div>
                <div className="text-center">
                  <p className="font-heading text-3xl leading-tight text-soft-white">
                    7 Schlüssel des Bewusstseins
                  </p>
                  <div className="mx-auto my-4 h-px w-12 bg-gold-line opacity-70" />
                  <p className="text-sm tracking-[0.3em] text-gold/80">
                    AUREON THAL’EMAR
                  </p>
                </div>
                <p className="text-center text-xs uppercase tracking-[0.25em] text-muted">
                  Erscheint bald
                </p>
                {/* Buchrücken-Andeutung */}
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-2 rounded-l-sm bg-black/40"
                />
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <SectionLabel>Das Buch</SectionLabel>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 text-balance text-4xl leading-tight sm:text-5xl">
                7 Schlüssel des Bewusstseins
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted">
                Ein Buch für Menschen, die sich erinnern und bewusster leben
                möchten. Kein Ratgeber, der dir sagt, wer du sein sollst –
                sondern ein leiser Begleiter, der dich zu dem zurückführt, was
                du im Innersten längst bist.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-4 text-pretty leading-relaxed text-muted">
                Sieben Schlüssel, sieben Schwellen. Jeder öffnet einen Raum in
                dir, der auf deine Rückkehr gewartet hat.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button href="/buch" className="w-full sm:w-auto">
                  {cta.bookMore}
                </Button>
                <Button href="#newsletter" variant="ghost" className="w-full sm:w-auto">
                  {cta.bookSample}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
