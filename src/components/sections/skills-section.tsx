import { skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function SkillsSection() {
  return (
    <section className="section section--white" id="skills">
      <div className="container">
        <SectionHeading number="09" eyebrow="Technical capabilities" title="Technical" accent="capabilities." />
        <p className="skills-intro">Clean typographic skill architecture forged through production engineering at KPK and empirical academic research.</p>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.name} delay={index * 0.04}>
              <article className="skill-group">
                <div className="skill-group__heading">
                  <h3><span>{String(index + 1).padStart(2, "0")}</span> {group.name}</h3>
                  <em>{group.editorial}</em>
                </div>
                <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
