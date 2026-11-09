import { research } from "@/data/research";
import { PublicationItem } from "@/components/ui/publication-item";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function PublicationsSection() {
  return (
    <section className="section section--champagne" id="publications">
      <div className="container">
        <SectionHeading
          number="06"
          eyebrow="Selected writing"
          title="Research &"
          accent="publications."
          aside={<p className="editorial-note">&ldquo;Ideas earn their footprint only after they&apos;re tested.&rdquo;</p>}
        />
        <div className="publication-list">
          {research.map((publication, index) => (
            <Reveal key={publication.id} delay={index * 0.04} hover>
              <PublicationItem publication={publication} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
