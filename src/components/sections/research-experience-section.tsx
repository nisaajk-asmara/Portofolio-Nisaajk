import { researchExperience } from "@/data/research";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function ResearchExperienceSection() {
  return (
    <section className="section section--ivory" id="research">
      <div className="container">
        <SectionHeading
          number="04"
          eyebrow="Scholarly inquiry"
          title="Research"
          accent="experience."
          aside={<p className="editorial-note">&ldquo;Researching the questions behind<br />the systems.&rdquo;</p>}
        />
        <Reveal>
          <div className="research-panel">
            <div className="research-panel__heading">
              <span className="research-panel__badge">Academic Assistant</span>
              <span className="research-panel__period">2023 — 2026<br /><small>Indonesia</small></span>
            </div>
            <h3 className="research-panel__title">Freelance Research Assistant</h3>
            <p className="research-panel__subtitle">Self-Employed · Academic Advisory &amp; Empirical Methodology</p>
            <div className="research-records">
              {researchExperience.map((item) => (
                <details className="research-record" key={`${item.year}-${item.title}`}>
                  <summary>
                    <span className="research-record__year">{item.year}</span>
                    <span className="research-record__main">
                      <span className="research-record__type">{item.type}</span>
                      <span className="research-record__title">{item.institution || item.title}</span>
                    </span>
                    <span className="research-record__chevron" aria-hidden="true">⌄</span>
                  </summary>
                  <div className="research-record__body">
                    <p className="research-record__project">{item.project || item.title}</p>
                    <div className="tag-list">
                      {item.contributions.map((contribution) => <span key={contribution}>{contribution}</span>)}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
