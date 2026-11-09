import type { ExperienceRecord } from "@/types/portfolio";

export const experiences: ExperienceRecord[] = [
  {
    category: "Public Institution · Primary Role",
    period: "August 2026 — Present",
    role: "Junior Developer",
    organization: "Komisi Pemberantasan Korupsi (KPK)",
    description:
      "Frontend and backend development, application testing, and internal product support.",
    groups: [
      {
        name: "E-Learning KPK",
        badge: "Internal",
        items: [
          {
            title: "E-Learning Aparatur Sipil Negara (ASN) Berintegritas 2026",
            detail: "Developed frontend and backend features.",
            badge: "Internal / Restricted",
          },
          {
            title:
              "E-Learning Pelatihan Integritas dan Manajemen Penyuluhan Anti Korupsi (PRIMA)",
            detail: "Developed frontend and backend features.",
            badge: "Internal / Restricted",
          },
        ],
      },
      {
        name: "ACLC KPK",
        badge: "Public & Internal",
        items: [
          {
            title: "Praktisi",
            detail: "Developed frontend and backend features.",
          },
          {
            title: "#JadiPaham Konflik Kepentingan",
            detail: "Public version.",
            badge: "Public",
          },
          {
            title: "#JadiPaham Konflik Kepentingan",
            detail: "Restricted version.",
            badge: "Restricted",
          },
        ],
      },
      {
        name: "Portal KPK",
        badge: "Internal",
        items: [
          {
            title: "User guide documentation",
            detail: "Created user guide documentation for internal KPK Portal.",
            badge: "Internal",
          },
        ],
      },
      {
        name: "HRIS KPK",
        badge: "Internal",
        items: [
          {
            title: "FAQ page UI/UX and functionality",
            detail:
              "Designed FAQ page UI/UX using Figma; developed frontend and backend functionality.",
            badge: "Internal",
          },
        ],
      },
      {
        name: "Application Testing & UAT",
        badge: "UAT",
        items: [
          {
            title: "TINA · ASYANA · NEW HRIS",
            detail: "Conducted user acceptance testing (UAT).",
            badge: "UAT",
          },
        ],
      },
    ],
  },
  {
    category: "Academic Institution",
    period: "2025",
    role: "Teaching Assistant · Entrepreneurship",
    organization: "Universitas Islam Negeri Raden Fatah Palembang",
    location: "Palembang",
    description:
      "Managed academic data and reports, and assisted in evaluating entrepreneurship projects.",
    certificateImage: "/images/credentials/teaching-assistant-certificate.png",
    certificateTitle: "Teaching Assistant · Entrepreneurship",
    certificateUrl: "",
  },
  {
    category: "Public Sector Internship",
    period: "2024",
    role: "IT Support Staff Intern",
    organization: "Palembang City Tourism Office",
    location: "Palembang",
    description:
      "Validated tourism data and supported database maintenance and daily IT operations.",
    certificateImage: "/images/credentials/tourism-office-certificate.png",
    certificateTitle: "IT Support Staff Internship",
    certificateUrl: "",
  },
// kalo mau nambah pengalaman, tambahin aja di bawah ini, contoh:
// {
//   category: "Freelance",
//   period: "2026",
//   role: "Web Developer",
//   organization: "Nama Perusahaan",
//   location: "Palembang",
//   description: "Membuat dan memelihara website perusahaan.",
// }

];
