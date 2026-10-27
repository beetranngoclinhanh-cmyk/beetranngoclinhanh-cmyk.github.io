import { getEvidence } from "./evidence";
import dashboard from "../assets/linh-anh/sim-lse.jpg";
import poster from "../assets/linh-anh/wico-poster.jpg";
import communityImage from "../assets/linh-anh/community.jpg";
import analysis from "../assets/linh-anh/sim-lse-analysis.pdf";
import researchPaper from "../assets/linh-anh/green-consumer-research.pdf";
import resume from "../assets/linh-anh/linh-anh-resume.docx?url";

export const profile = {
  name: "Trần Ngọc Linh Anh",
  email: "beetranngoclinhanh@gmail.com",
  resume,
  school: "Foreign Language Specialized School",
  location: "Hanoi, Vietnam",
};
export const navigation = [
  { id: "about", label: "About" },
  { id: "work", label: "Selected work" },
  { id: "research", label: "Research" },
  { id: "journey", label: "My journey" },
  { id: "community", label: "Beyond the numbers" },
] as const;
export const interests = [
  "Data science",
  "Analytics",
  "Business",
  "Economics",
  "Statistics",
  "Finance",
];
export const projects = [
  {
    id: "sim-lse",
    category: "DATA ANALYTICS / 2026",
    title: "When more sales don’t mean more profit.",
    context: "SIM-LSE Data Analytics Challenge · Team Cheesy Wings",
    question: "What was hiding behind a business’s growing revenue?",
    contribution:
      "With a teammate, I built Tableau charts and dashboards, explored customer and product patterns, and shaped recommendations in a Canva presentation.",
    finding:
      "Our analysis connected a revenue–profit disconnect to excessive discounting, particularly in the Tables category. We proposed pricing controls and a more selective approach to customer incentives.",
    tools: ["Tableau", "Consumer analytics", "Business strategy"],
    image: dashboard,
    alt: "Tableau scatter plot showing lower profit margins at higher discount rates in the SIM-LSE analysis.",
    href: analysis,
    linkLabel: "Explore the analysis",
    format: "PDF",
  },
  {
    id: "wico",
    category: "DATA/FINANCE / 2026",
    title: "A portfolio that responds to change.",
    context: "World Invention Creativity Olympics · Team project",
    question:
      "How can a portfolio adapt when traditional diversification breaks down?",
    contribution:
      "I joined a five-member team exploring dynamic portfolio optimisation, connecting financial questions with data analysis and model comparison.",
    finding:
      "Our team poster describes early-warning signals and portfolio rebalancing informed by correlation, oil and yield data. Backtesting compared alternative models and highlighted that added complexity does not always improve results.",
    tools: ["Quantitative finance", "Backtesting", "Model comparison"],
    image: poster,
    alt: "Team poster for Dynamic Portfolio Optimization, showing methodology, model comparisons and conclusions.",
    href: poster,
    linkLabel: "Read the team poster",
    format: "JPG",
  },
] as const;
export const research = [
  {
    id: "green",
    date: "JUN – SEP 2026",
    title: "Can digital rewards encourage greener choices?",
    role: "Co-author · Consumer behaviour research",
    text: "I helped design a survey of Hanoi residents and worked with behavioural data in Excel to explore gamification, digital payments and sustainable consumption. The co-authored paper reports 103 valid responses and a wider statistical analysis using Stata.",
    href: researchPaper,
    label: "Read the co-authored paper",
  },
  {
    id: "hust",
    date: "JUN 2025 – MAR 2026",
    title: "Learning the foundations of machine learning.",
    role: "Research assistant · Hanoi University of Science and Technology",
    text: "Supported literature reviews and dataset organisation with Professor Dao Phuong Nam, and joined weekly theoretical seminars on algorithmic testing.",
    href: null,
    label: null,
  },
  {
    id: "vast",
    date: "JUN – DEC 2025",
    title: "Looking for patterns in network traffic.",
    role: "Research assistant · Vietnam Academy of Science and Technology",
    text: "Analysed network-traffic data for security anomalies and helped prepare diagnostic reports for a detection and prevention research project.",
    href: null,
    label: null,
  },
] as const;
export const experience = [
  {
    company: "F88",
    role: "Data Analyst",
    date: "AUG 2026 – PRESENT",
    text: "Explored consumer behaviour using the Dunnhumby household dataset during team training, and developed customer-segmentation dashboards in Tableau.",
  },
  {
    company: "Inforplus",
    role: "Data Science / Business Intelligence",
    date: "JUN – AUG 2026",
    text: "Supported core-banking user acceptance testing across pilot loan accounts, using DBeaver to check data integrity and flag anomalies.",
  },
  {
    company: "Woori Bank",
    role: "Investment Banking Assistant",
    date: "JUN – AUG 2025",
    text: "Supported investment reviews with five-year financial-statement analysis and equity research in Excel.",
  },
] as const;
export const awards = [
  {
    year: "2026",
    title: "Siam International Math & Science Olympics",
    detail: "Gold Prize \u00b7 National round",
    evidence: getEvidence("evidence-25"),
  },
  {
    year: "2026",
    title: "World Invention Creativity Olympics",
    detail: "Gold Prize \u00b7 Finance / Data Science",
    evidence: getEvidence("evidence-10"),
  },
  {
    year: "2026",
    title: "John Locke Global Essay Prize",
    detail: "Commendation \u00b7 Economics",
    evidence: getEvidence("evidence-23"),
  },
  {
    year: "2026",
    title: "FDB Talent",
    detail: "Top 5 finalist \u00b7 High school category",
    evidence: getEvidence("evidence-06"),
  },
  {
    year: "2025",
    title: "CNN Natural Sciences Fun Fair",
    detail: "Third Prize \u00b7 Physics",
    evidence: getEvidence("evidence-14"),
  },
  {
    year: "2023",
    title: "Internet Olympiad English",
    detail: "Bronze Award \u00b7 National round",
    evidence: getEvidence("evidence-03"),
  },
] as const;
export const skills = [
  {
    title: "My analytical toolkit",
    text: "Tableau · Excel (basic financial-statement analysis) · Python (basic)",
  },
  {
    title: "What I’m developing",
    text: "Banking · Investment research · Data analytics · Quantitative finance — intermediate domain knowledge",
  },
  {
    title: "How I connect",
    text: "Vietnamese (native) · English (fluent) · Chinese (intermediate) · Debate · Teamwork",
  },
];
export const community = [
  {
    title: "Making the numbers serve a purpose.",
    role: "Head of Finance · Aria Project",
    date: "MAR – AUG 2026",
    text: "Managed financial planning and fundraising for the “Viet Nam Tinh Hoa” concert, which welcomed 200+ attendees and raised VND 40 million for MSD Vietnam community initiatives.",
  },
  {
    title: "Care, with a little organisation.",
    role: "Vice Head of Finance · Medpius",
    date: "OCT 2024 – PRESENT",
    text: "Supported accounting and sponsor relationships for youth health initiatives, alongside a wellness puzzle competition engaging 50 participants.",
  },
  {
    title: "Behind every stage, a team.",
    role: "Leader of Logistics · CNN Vibrant Stage",
    date: "MAR 2026",
    text: "Led a 20-member logistics division and managed a VND 27 million production budget for a performance that won First Prize.",
  },
];
export const volunteering = {
  image: communityImage,
  alt: "Two volunteers planting a young tree in a green rural setting during the Bản Miền community activity.",
  text: "In Bản Miền, Ba Vì, I joined residents in community improvements, from solar-powered streetlights to greener spaces. With Keep Vietnam Clean, I also took part in World Cleanup Day in Hanoi.",
};
