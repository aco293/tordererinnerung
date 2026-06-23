import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Reveal from "../ui/Reveal";

type RealmQuotesProps = {
  title: string;
  items: string[];
};

export default function RealmQuotes({ title, items }: RealmQuotesProps) {
  return (
    <Section className="relative overflow-hidden" spacing="py-16 sm:py-20">
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-[18rem] w-[40rem] -translate-x-1/2 bg-radial-glow opacity-70"
      />
      <div className="container-x relative">
        <SectionHeading title={title} />
        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2 sm:gap-6">
          {items.map((quote, i) => (
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
                  {quote}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
