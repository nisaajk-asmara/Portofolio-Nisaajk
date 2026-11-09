import { ChevronDown, Circle } from "lucide-react";
import type { ExperienceRecord } from "@/types/portfolio";
import { DocumentModal } from "@/components/ui/document-modal";

export function ExperienceItem({ experience }: { experience: ExperienceRecord }) {
  const isPrimary = Boolean(experience.groups?.length);

  return (
    <article className={`experience-item${isPrimary ? " experience-item--primary" : " experience-item--compact"}`}>
      {isPrimary ? (
        <>
          <div className="experience-card__topline">
            <span className="experience-card__category">{experience.category}</span>
            <span className="experience-card__period">{experience.period}</span>
          </div>
          <div className="experience-card__heading">
            <h3>{experience.role}</h3>
            <p>{experience.organization}</p>
          </div>
          {experience.description && <p className="experience-card__description">{experience.description}</p>}
          <div className="experience-groups">
            {experience.groups?.map((group) => (
              <details className="experience-group" key={group.name} open={group.initiallyOpen}>
                <summary>
                  <Circle className="experience-group__dot" size={7} aria-hidden="true" />
                  <strong>{group.name}</strong>
                  {group.badge && <span className="status-badge">{group.badge}</span>}
                  <ChevronDown className="experience-group__chevron" size={13} aria-hidden="true" />
                </summary>
                <ul>
                  {group.items.map((item) => (
                    <li key={`${group.name}-${item.title}-${item.detail}`}>
                      <span>{item.title}</span>
                      <small>{item.detail}</small>
                      {item.badge && <em>{item.badge}</em>}
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="experience-card__topline">
            <span className="experience-card__category">{experience.category}</span>
            <span className="experience-card__period">
              {experience.period}{experience.location && ` · ${experience.location}`}
            </span>
          </div>
          <div className="experience-card__heading">
            <h3>{experience.role}</h3>
            <p>{experience.organization}</p>
          </div>
          {experience.description && <p className="experience-card__description">{experience.description}</p>}
        </>
      )}
      {experience.certificateImage && experience.certificateTitle && (
        <div className="experience-card__credential">
          <DocumentModal
            buttonLabel="View credential"
            title={experience.certificateTitle}
            organization={experience.organization}
            images={[experience.certificateImage]}
            originalUrl={experience.certificateUrl}
          />
        </div>
      )}
    </article>
  );
}
