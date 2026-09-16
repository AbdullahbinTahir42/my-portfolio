import { Brain, Terminal, Cpu, Database, Server } from 'lucide-react';

export const personalDetails = {
  name: 'Abdullah Tahir',
  role: 'AI Engineer & Full-Stack Builder',
  email: 'abdullahtahir4200@gmail.com',
  phone: '+923045972323',
  linkedin: 'https://www.linkedin.com/in/abdullahbintahirsuleman/',
  github: 'https://github.com/AbdullahbinTahir42',
  portfolio: 'https://abdullahbintahir.vercel.app',
  about: 'I design and ship AI-powered products and reliable web experiences that turn complex ideas into practical, production-ready solutions. My work spans agentic systems, retrieval pipelines, APIs, and modern frontend interfaces built for real users.'
};

export const skills = [
  { name: 'Machine Learning', icon: Brain },
  { name: 'Computer Vision', icon: Brain },
  { name: 'LangChain & CrewAI', icon: Cpu },
  { name: 'Python', icon: Terminal },
  { name: 'FastAPI', icon: Server },
  { name: 'Django', icon: Database },
  { name: 'SQL / PostgreSQL', icon: Database },
  { name: 'React & Frontend', icon: Terminal },
  { name: 'Agentic AI', icon: Brain }
];

export const experience = [
  {
    role: 'AI Engineering',
    company: 'Paklogics',
    date: 'Mar 2026 - Present',
    desc: 'Building production-ready AI systems, including retrieval pipelines, agent-based experiences, and FastAPI services that connect intelligent features to real product workflows.'
  },
  {
    role: 'ML Intern',
    company: 'Developer Hub Corporation',
    date: 'Jul 2025 - Sep 2025',
    desc: 'Developed and evaluated machine learning prototypes on real datasets, helping turn experimentation into more reliable, reusable implementation patterns.'
  },
  {
    role: 'Backend Developer Intern',
    company: 'DK Recruitment',
    date: 'Feb 2025 – Aug 2025',
    desc: 'Delivered scalable backend solutions with Django and FastAPI, supporting clean APIs and efficient application integrations.'
  }
];

export const education = [
  {
    degree: 'BS Artificial Intelligence',
    school: 'National Textile University, Faisalabad',
    date: 'Sep 2023 – Present'
  }
];

export const projects = [
  {
    title: 'Autonomous Voice AI Assistant',
    category: 'AI Project',
    desc: 'Engineered an autonomous voice AI assistant integrating local LLM inference, GPU-accelerated speech recognition (Whisper), neural TTS, and dynamic tools.',
    github: 'https://github.com/AbdullahbinTahir42/AIVoiceAutomationAgent',
    demo: null,
    tech: ['LangGraph', 'FastAPI', 'Python']
  },
  {
    title: 'Autonomous AI Marketing Crew',
    category: 'AI Project',
    desc: 'Architected a multi-agent workflow that automates campaign planning, research, and execution steps with greater consistency and speed.',
    github: 'https://github.com/AbdullahbinTahir42/crew_ai/tree/master/markinting-crew',
    demo: null,
    tech: ['CrewAI', 'Python', 'AI Agents']
  },
  {
    title: 'Breast Cancer Detection',
    category: 'Computer Vision',
    desc: 'Fine-tuned a ResNet50 model for mammogram-based breast cancer detection using the King Abdulaziz University dataset, achieving 84.5% accuracy.',
    github: 'https://github.com/AbdullahbinTahir42/Mammographic_using_ResNet50',
    demo: null,
    tech: ['PyTorch', 'ResNet50', 'Computer Vision']
  },
  {
    title: 'A/O Levels Exam Prep Platform',
    category: 'AI / Backend',
    desc: 'Built AI-powered APIs for structured exam-paper generation and automated evaluation; developed an OCR pipeline for mathematics papers.',
    github: null,
    demo: null,
    tech: ['FastAPI', 'OCR', 'AI APIs']
  },
  {
    title: 'Llama 3.1 Fine-Tuning',
    category: 'AI / LLM',
    desc: 'Fine-tuned a Llama 3.1 8B model using Unsloth for structured roadmap generation and published the model weights to Hugging Face.',
    github: null,
    demo: null,
    tech: ['Unsloth', 'LLaMA', 'Hugging Face']
  },
  {
    title: 'Prospect Automation',
    category: 'Automation',
    desc: 'Built an automation pipeline to identify target prospects and deliver personalized web pages at scale.',
    github: null,
    demo: null,
    tech: ['Clay', 'n8n', 'Supabase']
  },
  {
    title: 'AI Portfolio Assistant',
    category: 'AI Project',
    desc: 'Built a conversational assistant that answers portfolio questions using retrieval-based prompting and structured knowledge.',
    github: 'https://github.com/AbdullahbinTahir42/my_Ai',
    demo: '/chat',
    tech: ['LangChain', 'RAG', 'React']
  },
  {
    title: 'AI News Analysis Tool',
    category: 'AI Project',
    desc: 'Created a retrieval-first news analysis experience that helps users explore article collections and ask specific questions quickly.',
    github: 'https://github.com/AbdullahbinTahir42/EquityNewsSearchTool',
    demo: 'https://newsearchtool.streamlit.app/',
    tech: ['Gemini', 'FAISS', 'Streamlit']
  },
  {
    title: 'Resume Analyzer',
    category: 'AI Project',
    desc: 'Developed an NLP-driven workflow utilizing a Decision Tree Classifier and Tokenization to extract resume insights and support more structured hiring-fit analysis.',
    github: 'https://github.com/AbdullahbinTahir42/3rd-Semester-project',
    demo: null,
    tech: ['NLP', 'Python', 'ML']
  },
  {
    title: 'HR Job Portal API',
    category: 'API / FastAPI',
    desc: 'Implemented a FastAPI backend for a remote job portal with secure endpoints and AI-assisted resume parsing capabilities.',
    github: 'https://github.com/AbdullahbinTahir42/remote_job',
    demo: null,
    tech: ['FastAPI', 'Gemini API', 'JWT']
  },
  {
    title: 'HR Job Portal Frontend',
    category: 'React',
    desc: 'Designed a responsive React interface with Tailwind styling and authentication flows built for a smooth user journey.',
    github: 'https://github.com/AbdullahbinTahir42/frontend',
    demo: 'https://hr.growvy.online/',
    tech: ['React', 'Tailwind', 'Auth']
  },
  {
    title: 'E-commerce Store API',
    category: 'API / FastAPI',
    desc: 'Built a complete e-commerce backend with cart management, order handling, and reliable API structure for growth.',
    github: 'https://github.com/AbdullahbinTahir42/loja_backend',
    demo: null,
    tech: ['FastAPI', 'PostgreSQL', 'Stripe']
  },
  {
    title: 'E-commerce Store Frontend',
    category: 'React',
    desc: 'Created a modern storefront experience with React and Redux, combining strong UX details with production-ready UI structure.',
    github: 'https://github.com/AbdullahbinTahir42/loja_frontend',
    demo: null,
    tech: ['React', 'Redux', 'Tailwind']
  },
  {
    title: 'Inventory Management System',
    category: 'API / FastAPI',
    desc: 'Delivered a FastAPI inventory platform for product tracking, CRUD workflows, and dependable backend operations.',
    github: 'https://github.com/AbdullahbinTahir42/inventory_system_FastAPI',
    demo: null,
    tech: ['FastAPI', 'SQLAlchemy', 'SQLite']
  },
  {
    title: 'IoT Monitoring System',
    category: 'IoT / Full-Stack',
    desc: 'Built a hardware monitoring system connecting an ESP32 microcontroller to a FastAPI backend and Supabase database using MQTT.',
    github: null,
    demo: null,
    tech: ['ESP32', 'MQTT', 'FastAPI']
  },
  {
    title: 'Online Study App',
    category: 'Web App',
    desc: 'Built a Django-based study platform where learners can create topic-focused rooms and collaborate around shared goals.',
    github: 'https://github.com/AbdullahbinTahir42/studyapp',
    demo: null,
    tech: ['Django', 'Python', 'Web']
  },
  {
    title: 'Space Invader Game',
    category: 'Game Dev',
    desc: 'Designed a polished 2D arcade experience in Python with object-oriented gameplay systems and responsive controls.',
    github: 'https://github.com/AbdullahbinTahir42/SpaceInvader',
    demo: null,
    tech: ['Python', 'Pygame', 'OOP']
  },
  {
    title: 'Candy Crush Clone',
    category: 'C++',
    desc: 'Created a lightweight match-three prototype in C++ focused on game logic, state flow, and interactive design.',
    github: 'https://github.com/AbdullahbinTahir42/First-Semester',
    demo: null,
    tech: ['C++', 'Logic', 'Game Dev']
  },
  {
    title: 'Finance Tracker',
    category: 'Python',
    desc: 'Built a personal finance tracker that logs transactions and turns raw activity into clear visual summaries.',
    github: 'https://github.com/AbdullahbinTahir42/LearnPython',
    demo: null,
    tech: ['Python', 'Matplotlib', 'Pandas']
  }
];
