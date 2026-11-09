# Khairunnisa Ayu Asmara | Personal Portfolio

Personal portfolio website showcasing my work and experience as a **Full-Stack Developer** with an additional background in **Information Systems Research, Data Analysis, and Academic Research**.

## About

This portfolio highlights my professional experience, software projects, research and publications, academic background, leadership activities, and technical capabilities.

My work includes frontend and backend development, REST API integration, database management, responsive web development, application testing, UI implementation, and quantitative research.

## Featured Projects

### TaskFlow

A full-stack task and workflow management platform designed for organizing projects, tasks, and workflows.

**Status:** In Development

### Festival SMANDA CERDAS 2027

A responsive event website developed for SMAN 2 Kota Lubuklinggau.

- **Live Website:** https://smandallg-cerdas-2027.vercel.app/
- **GitHub:** https://github.com/nisaajk-asmara/smanda-cerdas-2027

## Research & Publications

Portfolio research includes work related to:

- Information Systems
- Machine Learning
- Random Forest
- Quantitative Research
- Statistical Analysis
- Data Analysis

### Undergraduate Thesis

**Penentuan Klasifikasi Lokasi Penjualan Strategis UMKM di Kota Palembang Menggunakan Algoritma Random Forest**

UIN Raden Fatah Palembang, 2025

Research Repository:

https://repository.radenfatah.ac.id/51377/

## Tech Stack

### Frontend

- JavaScript
- TypeScript
- React
- Next.js
- Vue.js
- Quasar Framework
- Tailwind CSS

### Backend & Database

- REST API
- PostgreSQL
- Prisma ORM
- SQL

### Development Tools

- Git & GitHub
- Visual Studio Code
- Postman
- Figma
- Vercel
- Microsoft 365

### Data & Research

- Microsoft Excel
- Power BI
- SPSS
- SmartPLS

## Architecture

Portfolio content is separated from UI components and managed through centralized data files.

```text
src/
├── app/
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── data/
│   ├── profile.ts
│   ├── projects.ts
│   ├── research.ts
│   ├── experience.ts
│   ├── education.ts
│   ├── leadership.ts
│   └── skills.ts
├── lib/
└── types/
```

This structure makes new projects, publications, and experience easier to add without redesigning the website.

## Adding a New Project

1. Add project screenshots to:

```text
public/images/projects/<project-name>/
```

2. Add the project information to:

```text
src/data/projects.ts
```

3. The project will automatically appear in the **Selected Work** section.

## Adding Research or Publications

1. Add the publication preview to:

```text
public/images/research/
```

2. Add the research information to:

```text
src/data/research.ts
```

The new research item will automatically appear in the portfolio.

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The portfolio runs locally at:

```text
http://localhost:2244
```

## Production Build

```bash
npm run build
```

## Responsive Design

The portfolio uses a mobile-first responsive design and is optimized for different viewport sizes, including:

- Smartphones
- Tablets and iPad-class devices
- Windows laptops
- MacBook-class displays
- Desktop monitors

The layout adapts based on viewport size rather than specific device models.

## Privacy

Some professional experience relates to internal or restricted organizational systems.

This public portfolio does not include confidential source code, credentials, private endpoints, internal application screenshots, or restricted organizational information.

Academic credentials displayed publicly should also have sensitive identifiers, signatures, QR codes, and document numbers removed or redacted.

## Contact

**Khairunnisa Ayu Asmara**  
Full-Stack Developer & Researcher  
South Jakarta, Indonesia

- LinkedIn: https://linkedin.com/in/khairunnisa-asmara
- GitHub: https://github.com/nisaajk-asmara
- Email: khairunnisaa.asmara@gmail.com

## License

This repository contains personal portfolio content, original project materials, design assets, and research-related information.

Please do not reproduce or redistribute personal content, documents, research materials, or design assets without permission.