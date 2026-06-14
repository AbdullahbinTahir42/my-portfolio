import { Code, Terminal, Cpu, Database, Layout, Server, Brain, Gamepad2, ShoppingCart, Briefcase } from 'lucide-react';

export const personalDetails = {
  name: "Abdullah Tahir",
  role: "AI Engineer",
  email: "abdullahtahir4200@gmail.com",
  phone: "+923045972323",
  linkedin: "https://www.linkedin.com/in/abdullahbintahirsuleman/",
  github: "https://github.com/AbdullahbinTahir42",
  about: "Dynamic AI Developer dedicated to building autonomous systems and scalable, intelligent applications that solve complex real-world problems. Experienced in architecting autonomous workflows (LangChain, CrewAI), designing custom Retrieval-Augmented Generation (RAG) pipelines, and deploying robust AI models as highly scalable APIs."
};

export const skills = [
  { name: "Machine Learning", icon: Brain },
  { name: "LangChain & CrewAI", icon: Cpu },
  { name: "Python", icon: Terminal },
  { name: "FastAPI", icon: Server },
  { name: "Django", icon: Database },
  { name: "SQL / PostgreSQL", icon: Database },
  { name: "Agentic AI", icon: Brain },
  ];

export const experience = [
   {
    role: "AI Engineering",
    company: "Paklogics",
    date: "Mar 2026 - Present",
    desc: "Build and deploy production-ready AI solutions, specializing in architecting robust RAG pipelines and developing computer vision systems. Implement advanced AI-driven features to solve complex, real-world problems and elevate overall system capabilities. Also builing APIs using FastAPI to serve ML models and enable seamless integration with frontend applications."
  },
  {
    role: "ML Intern",
    company: "Developer Hub Corporation",
    date: "Jul 2025 - Sep 2025",
    desc: "Engineered Scikit-learn predictive models on real-world datasets to optimize the end-to-end AI development lifecycle. Collaborated with technical teams on domain-specific tasks to accelerate machine learning integrations."
  },
  {
    role: "Backend Developer Intern",
    company: "DK Recruitment",
    date: "Feb 2025 – Aug 2025",
    desc: "Developed web-based applications and built scalable REST APIs utilizing Django and FastAPI."
  }
];

export const education = [
  {
    degree: "BS Artificial Intelligence",
    school: "National Textile University, Faisalabad",
    date: "Sep 2023 – Present"
  }
];

// ALL 13 PROJECTS FROM YOUR ORIGINAL PORTFOLIO
export const projects = [
  {
    title: "Autonomous AI Marketing Crew",
    category: "AI Project",
    desc: "Multi-agent system built with CrewAI that automates end-to-end marketing campaigns.",
    github: "https://github.com/AbdullahbinTahir42/crew_ai/tree/master/markinting-crew",
    demo: null,
    tech: ["CrewAI", "Python", "AI Agents"]
  },
  {
    title: "AI Portfolio Assistant",
    category: "AI Project",
    desc: "Conversational AI built with LangChain/Resume data to answer questions about me.",
    github: "https://github.com/AbdullahbinTahir42/my_Ai",
    demo: "/chat", // Internal Link
    tech: ["LangChain", "RAG", "React"]
  },
  {
    title: "AI News Analysis Tool",
    category: "AI Project",
    desc: "RAG-powered tool using Gemini & FAISS for Q&A over web articles.",
    github: "https://github.com/AbdullahbinTahir42/EquityNewsSearchTool",
    demo: "https://newsearchtool.streamlit.app/",
    tech: ["Gemini", "FAISS", "Streamlit"]
  },
  {
    title: "Resume Analyzer",
    category: "AI Project",
    desc: "ML tool to analyze resumes, extract data, and assess job fit using NLP.",
    github: "https://github.com/AbdullahbinTahir42/3rd-Semester-project",
    demo: null,
    tech: ["NLP", "Python", "ML"]
  },
  {
    title: "Inventory Management System",
    category: "API / FastAPI",
    desc: "Built with FastAPI, SQLAlchemy & SQLite to manage product inventory.",
    github: "https://github.com/AbdullahbinTahir42/inventory_system_FastAPI",
    demo: null,
    tech: ["FastAPI", "SQLAlchemy", "SQLite"]
  },
  {
    title: "Online Study App",
    category: "Web App",
    desc: "Django backend app where users can create topic-based rooms for study.",
    github: "https://github.com/AbdullahbinTahir42/studyapp",
    demo: null,
    tech: ["Django", "Python", "Web"]
  },
  {
    title: "Space Invader Game",
    category: "Game Dev",
    desc: "2D game developed in Python using Pygame with object-oriented design.",
    github: "https://github.com/AbdullahbinTahir42/SpaceInvader",
    demo: null,
    tech: ["Python", "Pygame", "OOP"]
  },
  {
    title: "Candy Crush Clone",
    category: "C++",
    desc: "A simplified Candy Crush-style game created in C++ (1st semester project).",
    github: "https://github.com/AbdullahbinTahir42/First-Semester",
    demo: null,
    tech: ["C++", "Logic", "Game Dev"]
  },
  {
    title: "Finance Tracker",
    category: "Python",
    desc: "Basic finance tracker that logs transactions and visualizes them with plots.",
    github: "https://github.com/AbdullahbinTahir42/LearnPython",
    demo: null,
    tech: ["Python", "Matplotlib", "Pandas"]
  },
  {
    title: "HR Job Portal API",
    category: "API / FastAPI",
    desc: "FastAPI backend for a job portal featuring AI resume parsing with Gemini.",
    github: "https://github.com/AbdullahbinTahir42/remote_job",
    demo: null,
    tech: ["FastAPI", "Gemini API", "JWT"]
  },
  {
    title: "HR Job Portal Frontend",
    category: "React",
    desc: "Responsive React UI with Tailwind CSS featuring secure authentication.",
    github: "https://github.com/AbdullahbinTahir42/frontend",
    demo: "https://hr.growvy.online/",
    tech: ["React", "Tailwind", "Auth"]
  },
  {
    title: "E-commerce Store API",
    category: "API / FastAPI",
    desc: "Complete FastAPI backend for an online store with cart and order processing.",
    github: "https://github.com/AbdullahbinTahir42/loja_backend",
    demo: null,
    tech: ["FastAPI", "PostgreSQL", "Stripe"]
  },
  {
    title: "E-commerce Store Frontend",
    category: "React",
    desc: "Modern React UI with Tailwind CSS and Redux for browsing products.",
    github: "https://github.com/AbdullahbinTahir42/loja_frontend",
    demo: null,
    tech: ["React", "Redux", "Tailwind"]
  }
];