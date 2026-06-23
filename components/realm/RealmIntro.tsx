import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

type RealmIntroProps = {
  title: string;
  paragraphs: string[];
};

export default function RealmIntro({ title, paragraphs }: RealmIntroProps) {
  return (
    <Section spacing="pt-6 pb-16 sm:pt-8 sm:pb-20">
      <div className="container-x">
        <div className="mx-auto max-w-2xl">
          <SectionHeading title={title} align="left" />
          <div className="mt-6 space-y-5">
            {paragraphs.map((text, i) => (
              <Reveal key={i} delay={i * 90}>
                <p className="text-pretty text-base leading-[1.85] text-muted sm:text-lg">
                  {text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
