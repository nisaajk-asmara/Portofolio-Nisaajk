import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { LeadershipSection } from "@/components/sections/leadership-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { PublicationsSection } from "@/components/sections/publications-section";
import { ResearchExperienceSection } from "@/components/sections/research-experience-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ResearchExperienceSection />
        <ProjectsSection />
        <PublicationsSection />
        <EducationSection />
        <LeadershipSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
