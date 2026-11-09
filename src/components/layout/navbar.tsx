"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/profile";

const links = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Research", "#research"],
  ["Projects", "#projects"],
  ["Publications", "#publications"],
  ["Education", "#education"],
  ["Leadership", "#leadership"],
  ["Skills", "#skills"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label={`${profile.name}, home`}>
          <span className="brand__monogram">NS</span>
          <span className="brand__label">PORTFOLIO</span>
        </a>
        <div id="mobile-navigation" className={`navbar__links${open ? " navbar__links--open" : ""}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="navbar__mobile-cta" href="#contact" onClick={() => setOpen(false)}>
            Let&apos;s connect <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
        <a className="navbar__cta" href="#contact">
          Let&apos;s connect <ArrowUpRight size={13} aria-hidden="true" />
        </a>
        <button
          className="navbar__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>
    </header>
  );
}
