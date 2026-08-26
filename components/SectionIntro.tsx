type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionIntro({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
}: SectionIntroProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className={`mb-3 text-xs font-extrabold uppercase tracking-[0.18em] ${light ? "text-maize" : "text-navy"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-[clamp(1.9rem,5vw,3rem)] font-extrabold leading-tight ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {intro ? (
        <p className={`mt-4 text-lg leading-8 ${light ? "text-white/78" : "text-slate"}`}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}
