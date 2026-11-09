import { activities, organizations } from "@/data/leadership";
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
        <div className="activity-list">
          <p className="activity-list__heading">Academic Activities &amp; Symposiums Index</p>
          {activities.map((activity) => (
            <div className="activity-row" key={`${activity.period}-${activity.name}`}>
              <div className="activity-row__content">
                <span className="activity-row__period">{activity.period}</span>
                <div className="activity-row__main">
                  <span className="activity-row__role">{activity.role}</span>
                  <strong>{activity.name}</strong>
                  {activity.detail && <small>{activity.detail}</small>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
