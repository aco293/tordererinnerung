import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Reveal from "../ui/Reveal";
import type { RealmCard } from "@/lib/content";

type RealmWhyProps = {
  title: string;
  cards: RealmCard[];
};

export default function RealmWhy({ title, cards }: RealmWhyProps) {
  return (
    <Section spacing="py-16 sm:py-20">
      <div className="container-x">
        <SectionHeading title={title} />
        <div className="mt-12 grid gap-5 sm:gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 90} className="h-full">
              <Card className="flex h-full flex-col rounded-2xl p-7">
                <h3 className="text-xl text-soft-white">{card.title}</h3>
                <p className="mt-3 text-pretty text-[0.95rem] leading-[1.7] text-muted">
                  {card.text}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
