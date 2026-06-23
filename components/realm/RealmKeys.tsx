import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Reveal from "../ui/Reveal";
import type { RealmKey } from "@/lib/content";

type RealmKeysProps = {
  title: string;
  items: RealmKey[];
};

export default function RealmKeys({ title, items }: RealmKeysProps) {
  return (
    <Section spacing="py-16 sm:py-20">
      <div className="container-x">
        <SectionHeading title={title} />
        <div className="mx-auto mt-12 grid max-w-3xl gap-4">
          {items.map((key, i) => (
            <Reveal key={key.title} delay={i * 70}>
              <Card className="flex gap-5 rounded-2xl p-6 sm:p-7">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 font-heading text-lg text-gold">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-heading text-xl text-soft-white">
                    {key.title}
                  </h3>
                  <p className="mt-2 text-pretty leading-[1.75] text-muted">
                    {key.text}
                  </p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
