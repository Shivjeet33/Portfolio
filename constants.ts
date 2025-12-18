import { Project, Experience } from './types';

export const EMAIL = "shivjeetnavare10@gmail.com";
export const PHONE = "+91 9322589040";
export const LINKEDIN = "https://linkedin.com/in/shivjeet-navre";
export const GITHUB = "https://github.com/Shivjeet33";

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: "Graphic Design Intern",
    company: "Optifyx Technology PVT. LTD.",
    period: "Jan 2025 - Feb 2025",
    description: "Designed high-quality marketing assets and collaborated with technical teams.",
    details: [
      "Utilized Canva & Figma to deliver graphics under strict deadlines.",
      "Collaborated with technical teams for design adaptability.",
    ]
  },
  {
    id: 2,
    role: "Team Lead & UI/UX Designer",
    company: "Academic Project",
    period: "2024 - Present",
    description: "Led the 'Intelligent Localization and Severity Estimation of Vehicle Damages' project.",
    details: [
      "Spearheaded a cross-functional team of 4 (Frontend/Backend).",
      "Managed the end-to-end product lifecycle from research to prototype."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "finance-tracker",
    title: "Personal Finance Tracker",
    category: "Mobile App Design",
    tagline: "Mobile finance tracker for managing daily expenses.",
    overview: "A comprehensive mobile application designed to help students and young professionals track small daily expenses and manage their budgets effectively.",
    role: "UI/UX Designer",
    duration: "4 Weeks",
    tools: ["Figma", "User Research", "Prototyping"],
    problem: "Students often struggle to track small, recurring expenses, leading to budget overruns. Existing apps are often too complex or cluttered for quick, on-the-go entry.",
    solution: "I designed a minimalist dashboard focusing on quick-entry transactions and visual goal tracking. The solution evolved from low-fidelity sketches to high-fidelity interactive prototypes emphasizing clarity and speed.",
    heroImage: "https://picsum.photos/id/160/1200/600",
    images: ["https://picsum.photos/id/20/800/600", "https://picsum.photos/id/180/800/600"]
  },
  {
    id: "acadamia-drive",
    title: "Acadamia Drive",
    category: "Brand Identity",
    tagline: "Complete visual identity for an educational institute.",
    overview: "A rebranding project for a local educational institute aiming to modernize their public image and attract a wider demographic.",
    role: "Brand Designer",
    duration: "3 Weeks",
    tools: ["Adobe Illustrator", "Photoshop", "Figma"],
    problem: "The institute's previous branding was outdated and inconsistent across platforms, failing to communicate trust and educational excellence.",
    solution: "Developed a cohesive brand system including a new logo, business cards, and promotional assets. The design language focuses on 'clean aesthetics' using a trustworthy blue palette to symbolize growth and reliability.",
    heroImage: "https://picsum.photos/id/24/1200/600",
    images: ["https://picsum.photos/id/48/800/600", "https://picsum.photos/id/60/800/600"]
  },
  {
    id: "marvel-posters",
    title: "Marvel Edition Posters",
    category: "Visual Design",
    tagline: "Dynamic ad posters focusing on color theory.",
    overview: "A creative exploration series designing promotional posters for Marvel characters, focusing heavily on color psychology and dynamic composition.",
    role: "Visual Designer",
    duration: "2 Weeks",
    tools: ["Photoshop", "Canva"],
    problem: "Creating engagement in a saturated market requires visuals that instantly convey emotion and character traits without relying solely on text.",
    solution: "Applied advanced color theory to match character archetypes (e.g., aggressive reds for anti-heroes, noble blues for leaders). Used hero-based aesthetics with bold typography to create impact.",
    heroImage: "https://picsum.photos/id/324/1200/600",
    images: ["https://picsum.photos/id/450/800/800", "https://picsum.photos/id/500/800/800"]
  }
];
