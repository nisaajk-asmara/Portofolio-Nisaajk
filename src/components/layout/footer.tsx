import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <span>© {new Date().getFullYear()} · {profile.name}</span>
        <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn <ArrowUpRight size={12} aria-hidden="true" />
        </a>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
