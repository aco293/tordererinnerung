import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <Reveal className={`flex max-w-2xl flex-col gap-5 ${alignment}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-balance text-3xl leading-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {align === "center" && (
        <span className="h-px w-16 bg-gold-line opacity-70" aria-hidden />
      )}
      {intro && (
        <p className="text-pretty text-base leading-relaxed text-muted sm:text-lg">
          {intro}
        </p>
      )}
    </Reveal>
  );
}
