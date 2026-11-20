import { organizations } from "@/data/leadership";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function LeadershipSection() {
  return (
    <section className="section section--ivory" id="leadership">
      <div className="container">
        <SectionHeading number="08" eyebrow="Leadership & involvement" title="Leadership &" accent="academic activities." centered />
        <div className="organization-grid">
          {organizations.map((organization, index) => (
            <Reveal key={organization.abbreviation} delay={index * 0.04}>
              <article className="organization-card">
                <div className="organization-card__topline">
                  <p>{organization.abbreviation} · {organization.category}</p>
                  <span>{organization.period}</span>
                </div>
                <h3>{organization.role}</h3>
                <p className="organization-card__name">{organization.name} ({organization.abbreviation})</p>
                <p className="organization-card__description">{organization.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
