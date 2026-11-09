import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

export function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-section__inner">
        <div className="hero-copy">
          <p className="eyebrow"><span>01</span> / Full-stack developer & researcher</p>
          <h1 className="hero-name">
            <span>Khairunnisa</span>
            <em>Ayu Asmara<span className="hero-name__degree">, S.Kom</span></em>
          </h1>
          <p className="hero-role">{profile.label}</p>
          <blockquote>{profile.statement}</blockquote>
          <p className="hero-description">{profile.description}</p>
          <div className="hero-actions">
            <a className="button-link button-link--dark" href="#projects">View my work <ArrowDownRight size={13} /></a>
            <a className="button-link" href="#research">View research <ArrowDownRight size={13} /></a>
          </div>
          <div className="hero-socials" aria-label="Social links">
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer"><Github size={14} /> GitHub <ArrowUpRight size={11} /></a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={14} /> LinkedIn <ArrowUpRight size={11} /></a>
            <a href={`mailto:${profile.email}`}><Mail size={14} /> Email <ArrowUpRight size={11} /></a>
            <a href={profile.links.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> WhatsApp <ArrowUpRight size={11} /></a>
          </div>
        </div>
        <div className="hero-portrait">
          <div className="hero-portrait__top"><span>PROFILE / 2026</span><span>JAKARTA, INDONESIA</span></div>
          <ImagePlaceholder
            src="/images/profile/khairunnisa-portrait.jpg"
            alt={`Portrait of ${profile.name}`}
            label="PROFESSIONAL PORTRAIT"
            className="hero-portrait__image"
            kind="portrait"
            priority
            sizes="(max-width: 760px) 90vw, 40vw"
          />
          <div className="hero-portrait__caption"><span>{profile.name}</span><span>Portfolio / 2026</span></div>
        </div>
      </div>
    </section>
  );
}
