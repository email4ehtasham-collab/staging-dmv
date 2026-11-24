import { ReactNode } from "react";

type SectionHeadingAlign = "left" | "center";
type SectionHeadingSize = "default" | "large";
type SectionHeadingTone = "default" | "inverse";

interface SectionHeadingProps {
  id?: string;
  eyebrow?: ReactNode;
  title: ReactNode;
  text?: ReactNode;
  align?: SectionHeadingAlign;
  size?: SectionHeadingSize;
  tone?: SectionHeadingTone;
  className?: string;
  children?: ReactNode;
}

export default function SectionHeading({
  id,
  eyebrow,
  title,
  text,
  align = "left",
  size = "default",
  tone = "default",
  className = "",
  children,
}: SectionHeadingProps) {
  const classes = [
    "section-heading",
    align,
    size === "large" ? "section-heading--lg" : "",
    tone === "inverse" ? "section-heading--inverse" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      {eyebrow ? <div className="section-heading__eyebrow">{eyebrow}</div> : null}
      <h2 id={id} className="section-heading__title">
        {title}
      </h2>
      {text ? <p className="section-heading__text">{text}</p> : null}
      {children}
    </div>
  );
}
