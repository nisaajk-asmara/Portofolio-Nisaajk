import { ArrowUpRight, Circle } from "lucide-react";
import type { Project } from "@/types/portfolio";
import { ExternalLink } from "@/components/ui/external-link";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Reveal } from "@/components/ui/reveal";

export function ProjectShowcase({
  project,
  reverse = false,
}: {
  project: Project;
  reverse?: boolean;
}) {
  const preview = (
    <div className="project-preview">
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-preview__link"
          aria-label={`Open ${project.title} website in a new tab`}
        >
          <PreviewContent project={project} />
          <span className="project-preview__open">Open live website <ArrowUpRight size={13} /></span>
        </a>
      ) : (
        <PreviewContent project={project} />
      )}
    </div>
  );

  return (
    <Reveal>
      <article className={`project-card${reverse ? " project-card--reverse" : ""}`}>
        <div className="project-card__copy">
          <p className="eyebrow">
            {project.year && <span>{project.year} / </span>}
            {project.category}
          </p>
          {project.liveUrl ? (
            <h3>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                {project.title}<ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </h3>
          ) : (
            <h3>{project.title}</h3>
          )}
          <p className="project-card__description">{project.description}</p>
          {project.technologies.length > 0 && (
            <div className="project-card__tags" aria-label="Technologies">
              {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
            </div>
          )}
          <div className="project-card__actions">
            {project.liveUrl ? (
              <ExternalLink href={project.liveUrl} className="button-link--dark">Live website</ExternalLink>
            ) : (
              <span className="project-coming-soon" aria-label={`${project.title}: coming soon`}>Coming soon</span>
            )}
            {project.githubUrl && <ExternalLink href={project.githubUrl}>GitHub</ExternalLink>}
            {project.caseStudyUrl && <ExternalLink href={project.caseStudyUrl}>Case study</ExternalLink>}
          </div>
        </div>
        {preview}
      </article>
    </Reveal>
  );
}

function PreviewContent({ project }: { project: Project }) {
  const image = (
    <ImagePlaceholder
      src={project.image}
      alt={`${project.title} project preview`}
      label={`${project.title.toUpperCase()} · PROJECT PREVIEW`}
      kind="project"
      className="project-preview__image"
    />
  );

  return (
    <>
      <div className="browser-bar" aria-hidden="true">
        <span><Circle /><Circle /><Circle /></span>
        <small>{project.liveUrl ? getHost(project.liveUrl) : "Project preview · Not a production screenshot"}</small>
      </div>
      {project.mobileImage ? (
        <div className="project-preview__devices">
          {image}
          <ImagePlaceholder
            src={project.mobileImage}
            alt={`${project.title} mobile project preview`}
            label={`${project.title.toUpperCase()} · MOBILE PREVIEW`}
            kind="project"
            className="project-preview__mobile-image"
            sizes="(max-width: 680px) 25vw, 12vw"
          />
        </div>
      ) : image}
    </>
  );
}

function getHost(url: string) {
  return url.replace(/^https?:\/\//, "").split(/[/?#]/, 1)[0];
}
