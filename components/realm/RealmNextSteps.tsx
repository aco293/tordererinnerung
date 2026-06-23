import Section from "../ui/Section";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import type { RealmLink } from "@/lib/content";

type RealmNextStepsProps = {
  title: string;
  text: string;
  next?: RealmLink;
};

export default function RealmNextSteps({
  title,
  text,
  next,
}: RealmNextStepsProps) {
  return (
    <Section spacing="pt-16 pb-24 sm:pt-20 sm:pb-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl leading-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-[1.8] text-muted sm:text-lg">
            {text}
          </p>

          <div className="mt-9 flex w-full max-w-sm flex-col items-center gap-3.5 sm:mx-auto sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
            <Button href="/erkenntnisraeume" variant="ghost" className="w-full sm:w-auto">
              Zurück zu den Erkenntnisräumen
            </Button>
            {next && (
              <Button href={`/erkenntnisraeume/${next.slug}`} className="w-full sm:w-auto">
                Nächsten Raum betreten: {next.label}
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
