import type { ReactNode } from "react";

export function SectionHeading({
  number,
  eyebrow,
  title,
  accent,
  aside,
  centered = false,
}: {
  number: string;
  eyebrow: string;
  title: string;
  accent?: string;
  aside?: ReactNode;
  centered?: boolean;
}) {
  return (
    <div className={`section-heading${centered ? " section-heading--centered" : ""}`}>
      <div>
        <p className="eyebrow">
          <span>{number}</span> / {eyebrow}
        </p>
        <h2 className="section-title">
          {title}
          {accent && <> <em>{accent}</em></>}
        </h2>
      </div>
      {aside && <div className="section-heading__aside">{aside}</div>}
    </div>
  );
}
