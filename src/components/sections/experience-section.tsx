import { experiences } from "@/data/experience";
import { ExperienceItem } from "@/components/ui/experience-item";
import { Reveal } from "@/components/ui/reveal";

export function ExperienceSection() {
  return (
    <section className="section section--blush" id="experience">
      <div className="container">
        <div className="experience-layout">
          <div className="experience-intro">
            <p className="eyebrow"><span>03</span> / Career timeline</p>
            <h2 className="section-title">Professional<br />Experience</h2>
            <p>High-impact engineering within Indonesia&apos;s premier anti-corruption commission, paired with university instruction and public-sector IT operations.</p>
            <span className="experience-availability"><span aria-hidden="true" /> Active Position · Public Sector Internship</span>
          </div>
          <div className="experience-list">
            {experiences.map((experience, index) => (
              <Reveal key={`${experience.role}-${experience.period}`} delay={index * 0.04}>
                <ExperienceItem experience={experience} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
