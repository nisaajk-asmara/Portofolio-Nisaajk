import { Reveal } from "@/components/ui/reveal";

const areas = [
  ["01", "Software Engineering", "Building and maintaining frontend and backend applications."],
  ["02", "Information Systems", "Connecting technology, people, and organizational needs."],
  ["03", "Data & Analytics", "Working with data through analysis and visualization."],
  ["04", "Academic Research", "Investigating questions with structured research methods."],
];

export function AboutSection() {
  return (
    <section className="section section--white" id="about">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span>02</span> / An interdisciplinary practice</p>
            <h2 className="section-title about-title">
              <span>Programmer</span>
              <em>Meets</em>
              <span>Research.</span>
            </h2>
          </div>
        </div>
        <div className="about-intro">
          <p>I work at the intersection of software engineering, information systems, data, and academic research.</p>
        </div>
        <div className="identity-grid">
          {areas.map(([number, title, description], index) => (
            <Reveal key={title} delay={index * 0.06}>
              <article className="identity-item">
                <span className="identity-item__number">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
