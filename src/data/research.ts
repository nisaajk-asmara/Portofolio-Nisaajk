import type { ResearchExperienceRecord, ResearchItem } from "@/types/portfolio";

export const researchExperience: ResearchExperienceRecord[] = [
  {
    year: "2026",
    type: "Master's Thesis Proposal",
    title: "Master's Thesis Proposal",
    institution: "STIT Pringsewu",
    project:
      "Analysis of the Implementation of the Habituation Method in Dhuha Prayer Practice Learning for Fourth Grade Students at SD Negeri 2 Langkapura, Bandar Lampung.",
    contributions: [
      "Research Methodology",
      "Literature Review",
      "Research Gap Identification",
      "Proposal Writing",
    ],
  },
  {
    year: "2024",
    type: "Journal Publication",
    title: "Islamiconomic: Jurnal Ekonomi Islam",
    institution: "",
    project:
      "Promotion Strategies and Innovation of Korean Halal Products in Korean Dramas: Analyzing Purchase Decisions Through Purchase Interest in Palembang City.",
    contributions: [
      "Literature Review",
      "SmartPLS",
      "Quantitative Analysis",
      "Manuscript Preparation",
    ],
  },
  {
    year: "2023",
    type: "Master's Thesis",
    title: "Master's Thesis",
    institution: "UIN Raden Fatah Palembang",
    project: "",
    contributions: [
      "Research Framework",
      "Questionnaire Design",
      "Statistical Analysis",
      "Thesis Preparation",
    ],
  },
];

export const research: ResearchItem[] = [
  {
    id: "random-forest-umkm-thesis",
    year: "2025",
    type: "Undergraduate Thesis",
    title:
      "Penentuan Klasifikasi Lokasi Penjualan Strategis UMKM di Kota Palembang Menggunakan Algoritma Random Forest",
    authors: ["Asmara, K.A."],
    institution: "UIN Raden Fatah Palembang",
    image: "/images/research/random-forest-thesis.png",
    url: "https://repository.radenfatah.ac.id/51377/",
    topics: ["Random Forest", "Information Systems"],
  },
  {
    id: "technopex-pulau-kemaro",
    year: "2024",
    type: "Conference Publication",
    title:
      "Optimalisasi Profil Wisata Pulau Kemaro dengan Pendekatan Desain Grafis: Implementasi Canva di Dinas Pariwisata Kota Palembang",
    authors: ["Asmara, K.A."],
    publication: "Buku Abstrak Seminar Penelitian TECHNOPEX-ITI 2024",
    institution: "Institut Teknologi Indonesia",
    page: "515",
    image: "/images/research/technopex-publication.png",
    url: "https://www.scribd.com/document/799204605/OPTIMALISASI-DESAIN-WISATA-PULAU-KEMARO-PADA-DINAS-PARIWISATA-KOTA-PALEMBANG-DENGAN-MENGGUNAKAN-METODE-DESIGN-THINKING",
    topics: ["Tourism", "Graphic Design"],
  },
  {
    id: "korean-halal-promotion-research",
    year: "2024",
    type: "Research Contribution",
    title:
      "Promotion Strategies and Innovation of Korean Halal Products in Korean Dramas: Analyzing Purchase Decisions Through Purchase Interest in Palembang City",
    authors: [],
    publication: "Islamiconomic: Jurnal Ekonomi Islam",
    image: "/images/research/islamiconomic-journal.png",
    url: "https://journal.islamiconomic.or.id/index.php/ijei/article/view/666",
    topics: ["Quantitative Research", "SmartPLS"],
  },
];

export const publications = research;
