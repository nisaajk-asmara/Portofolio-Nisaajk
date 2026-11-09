import { education } from "@/data/education";
import { DocumentModal } from "@/components/ui/document-modal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function EducationSection() {
  return (
    <section className="section section--blush" id="education">
      <div className="container">
        <SectionHeading number="07" eyebrow="Education & credentials" title="Education &" accent="credentials." />
        <div className="education-layout">
          <Reveal className="education-record">
            <div className="education-record__meta"><span>{education.period}</span><span>{education.degree}</span></div>
            <h3>{education.degree} in {education.field}</h3>
            <p>{education.institution}</p>
            <div className="education-record__gpa"><span>GPA</span><strong>{education.gpa} <small>/ {education.scale}</small></strong></div>
            <div className="language-list">
              <p className="eyebrow">Languages</p>
              {education.languages.map((language) => (
                <div key={language.name}><span>{language.name}</span><span>{language.level}</span></div>
              ))}
            </div>
          </Reveal>
          <Reveal className="credential-preview credential-preview--document">
            <p className="eyebrow">Academic credential</p>
            <h3>Bachelor&apos;s degree</h3>
            <p>UIN Raden Fatah Palembang · 2025</p>
            <DocumentModal
              buttonLabel="View credential"
              title={`${education.degree} in ${education.field}`}
              organization={education.institution}
              images={[education.credentialImage]}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
