export type LinkTarget = {
  label: string;
  href: string;
};

export interface Profile {
  name: string;
  label: string;
  statement: string;
  description: string;
  email: string;
  location: string;
  links: {
    github: string;
    linkedin: string;
    whatsapp: string;
  };
}

export interface ExperienceRecord {
  category: string;
  period: string;
  role: string;
  organization: string;
  location?: string;
  description?: string;
  groups?: ExperienceGroup[];
  bullets?: string[];
  certificateImage?: string;
  certificateTitle?: string;
  certificateUrl?: string;
}

export interface ExperienceGroup {
  name: string;
  badge?: string;
  initiallyOpen?: boolean;
  items: ExperienceProject[];
}

export interface ExperienceProject {
  title: string;
  detail: string;
  badge?: string;
}

export interface Project {
  id: string;
  title: string;
  year: string;
  category: string;
  description: string;
  image: string;
  mobileImage?: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  caseStudyUrl: string;
  featured: boolean;
}

export type PlaceholderKind = "portrait" | "project" | "research" | "credential";

export interface ResearchItem {
  id: string;
  year: string;
  type: string;
  title: string;
  authors?: string[];
  institution?: string;
  publication?: string;
  description?: string;
  image?: string;
  url?: string;
  topics?: string[];
  urlIsPlaceholder?: boolean;
  page?: string;
}

export interface ResearchExperienceRecord {
  year: string;
  type: string;
  title: string;
  institution: string;
  project: string;
  contributions: string[];
}

export interface ActivityRecord {
  period: string;
  role: string;
  name: string;
  detail?: string;
  documentationImages?: string[];
  documentationUrl?: string;
  certificateImage?: string;
}

export interface EducationRecord {
  period: string;
  degree: string;
  field: string;
  institution: string;
  gpa: string;
  scale: string;
  credentialImage: string;
  languages: {
    name: string;
    level: string;
  }[];
}

export interface OrganizationRecord {
  period: string;
  category: string;
  abbreviation: string;
  name: string;
  role: string;
  description: string;
}

export interface SkillGroup {
  name: string;
  editorial: string;
  skills: string[];
}

export type Publication = ResearchItem;
