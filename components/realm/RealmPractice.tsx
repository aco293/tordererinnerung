import Section from "../ui/Section";
import Card from "../ui/Card";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";
import type { RealmPractice as RealmPracticeData } from "@/lib/content";

export default function RealmPractice({
  title,
  intro,
  questions,
  closing,
}: RealmPracticeData) {
  return (
    <Section spacing="py-16 sm:py-20">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl">
          <Card className="rounded-3xl p-8 sm:p-10">
            <SectionLabel>Praxis &amp; Reflexion</SectionLabel>
            <h2 className="mt-4 text-balance text-3xl leading-tight sm:text-4xl">
              {title}
            </h2>
            <p className="mt-5 text-pretty leading-[1.8] text-muted sm:text-lg">
              {intro}
            </p>

            <ul className="mt-7 space-y-4">
              {questions.map((q, i) => (
                <li key={i} className="flex gap-4">
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/70"
                  />
                  <span className="text-pretty font-heading text-xl font-light leading-snug text-soft-white">
                    {q}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 h-px w-16 bg-gold-line opacity-60" />
            <p className="mt-6 text-pretty leading-[1.8] text-muted">
              {closing}
            </p>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
