import { ArrowUpRight } from "lucide-react";
import type { ResearchItem } from "@/types/portfolio";

export function PublicationItem({ publication }: { publication: ResearchItem }) {
  const source = [
    publication.publication,
    publication.institution,
    publication.page && `p. ${publication.page}`,
  ].filter(Boolean).join(" · ");

  return (
    <article className="publication-item">
      <div className="publication-item__meta">
        <span>{publication.year}</span>
        <small>{publication.type}</small>
      </div>
      <div className="publication-item__details">
        {publication.authors && publication.authors.length > 0 && (
          <p className="publication-item__author">{publication.authors.join(", ")}</p>
        )}
        <h3>
          {publication.url ? (
            <a href={publication.url} target="_blank" rel="noopener noreferrer">
              {publication.title}
            </a>
          ) : publication.title}
        </h3>
        {source && <p className="publication-item__source">{source}</p>}
        {publication.topics && publication.topics.length > 0 && (
          <div className="publication-item__topics">
            {publication.topics.map((topic) => <span key={topic}>{topic}</span>)}
          </div>
        )}
      </div>
      <div className="publication-item__actions">
        {publication.url ? (
          <>
            <a
              className="publication-item__link"
              href={publication.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View research <ArrowUpRight size={13} aria-hidden="true" />
            </a>
            {publication.urlIsPlaceholder && (
              <small className="publication-item__placeholder-note">Temporary test link</small>
            )}
          </>
        ) : (
          <span className="publication-item__link publication-item__link--quiet">Details pending</span>
        )}
      </div>
    </article>
  );
}
