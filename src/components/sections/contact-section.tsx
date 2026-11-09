import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

export function ContactSection() {
  return (
    <section className="section section--contact" id="contact">
      <div className="container contact-layout">
        <div className="contact-copy">
          <SectionHeading number="10" eyebrow="A new beginning" title="Let’s build" accent="something meaningful." />
          <p>For opportunities, collaboration, or a conversation about software and research.</p>
          <a className="button-link button-link--dark" href={`mailto:${profile.email}`}>Let&apos;s connect <ArrowUpRight size={13} /></a>
        </div>
        <div className="contact-card">
          <p className="eyebrow">Contact details</p>
          <a href={`mailto:${profile.email}`}><Mail size={14} />{profile.email}<ArrowUpRight size={12} /></a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={14} />linkedin.com/in/khairunnisa-asmara<ArrowUpRight size={12} /></a>
          <a href={profile.links.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon />+62 822-8534-4045<ArrowUpRight size={12} /></a>
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer"><Github size={14} />github.com/nisaajk-asmara<ArrowUpRight size={12} /></a>
          <p className="contact-card__location"><MapPin size={14} />{profile.location}</p>
        </div>
      </div>
    </section>
  );
}
