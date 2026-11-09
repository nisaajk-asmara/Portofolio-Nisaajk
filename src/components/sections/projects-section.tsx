import { projects } from "@/data/projects";
import { ProjectShowcase } from "@/components/ui/project-showcase";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProjectsSection() {
  return (
    <section className="section section--white" id="projects">
      <div className="container">
        <SectionHeading
          number="05"
          eyebrow="Selected work"
          title="Selected work."
          aside={<p className="editorial-note">Things I&apos;ve designed, built, and shipped.</p>}
        />
        <div className="project-list">
          {projects.map((project, index) => (
            <ProjectShowcase key={project.id} project={project} reverse={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
