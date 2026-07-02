import { Project, SkillCategory, TimelineItem, SocialLink } from "./types";

import avatarImg from "./assets/images/rayhan_profile_pic_uploaded.png";
import libraryImg from "./assets/images/library_project_mockup_1783009670804.jpg";
import footballImg from "./assets/images/football_project_mockup_1783009684168.jpg";
import inventoryImg from "./assets/images/inventory_project_mockup_1783009701910.jpg";

export const personalInfo = {
  name: "Rayhan Khan",
  title: "Full Stack Developer",
  email: "rayhankhan.cse9.bu@gmail.com",
  phone: "+8801743353969", // Updated BD format phone
  whatsapp: "+8801743353969", // Updated WhatsApp
  location: "Barishal, Bangladesh",
  bio: "I build modern, scalable and user-friendly web applications using the MERN Stack. I enjoy solving real-world problems through clean code and beautiful user experiences.",
  avatar: avatarImg,
  resumeUrl: "#", // Clickable placeholder as requested
};

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/rayhankhan-cse", // Standard placeholder for Rayhan
    icon: "Github",
    color: "hover:text-[#F8FAFC] hover:shadow-[0_0_15px_rgba(248,250,252,0.4)] hover:border-slate-300",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/md-rayhan-khan-05b18a316?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: "Linkedin",
    color: "hover:text-[#0A66C2] hover:shadow-[0_0_15px_rgba(10,102,194,0.4)] hover:border-blue-500",
  },
  {
    platform: "Facebook",
    url: "https://www.facebook.com/md.rayhan.khan.996881",
    icon: "Facebook",
    color: "hover:text-[#1877F2] hover:shadow-[0_0_15px_rgba(24,119,242,0.4)] hover:border-blue-600",
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/rayhankhan_cse",
    icon: "Twitter",
    color: "hover:text-[#1DA1F2] hover:shadow-[0_0_15px_rgba(29,161,242,0.4)] hover:border-cyan-400",
  },
  {
    platform: "Email",
    url: "mailto:rayhankhan.cse9.bu@gmail.com",
    icon: "Mail",
    color: "hover:text-[#EA4335] hover:shadow-[0_0_15px_rgba(234,67,53,0.4)] hover:border-red-500",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    skills: [
      { name: "HTML5", level: 95, iconName: "Html5" },
      { name: "CSS3", level: 90, iconName: "Css3" },
      { name: "JavaScript (ES6+)", level: 95, iconName: "Code" },
      { name: "TypeScript", level: 85, iconName: "FileJson" },
      { name: "React.js", level: 90, iconName: "Cpu" },
      { name: "Next.js (App Router)", level: 85, iconName: "Zap" },
      { name: "Tailwind CSS", level: 95, iconName: "Wind" },
      { name: "Bootstrap", level: 85, iconName: "Layers" },
      { name: "ShadCN UI", level: 80, iconName: "Palette" },
      { name: "Responsive Design", level: 95, iconName: "Monitor" },
      { name: "React Hook Form", level: 85, iconName: "CheckSquare" },
      { name: "TanStack Query", level: 82, iconName: "RefreshCw" },
      { name: "TanStack Table", level: 80, iconName: "Table" },
      { name: "Axios", level: 90, iconName: "Link" },
      { name: "Framer Motion", level: 85, iconName: "Activity" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 88, iconName: "Server" },
      { name: "Express.js", level: 90, iconName: "Terminal" },
      { name: "REST API Development", level: 92, iconName: "Globe" },
      { name: "JWT Authentication", level: 90, iconName: "ShieldCheck" },
      { name: "Authentication & Authorization", level: 92, iconName: "Key" },
      { name: "Role Based Access Control (RBAC)", level: 88, iconName: "UserCheck" },
      { name: "Middleware", level: 90, iconName: "Sliders" },
      { name: "Error Handling", level: 88, iconName: "AlertTriangle" },
      { name: "API Security", level: 85, iconName: "Lock" },
      { name: "Cookie Authentication", level: 88, iconName: "Cookie" },
      { name: "Session Management", level: 85, iconName: "Clock" },
      { name: "Server Actions", level: 82, iconName: "Zap" },
      { name: "Cron Jobs", level: 80, iconName: "Calendar" },
    ],
  },
  {
    id: "database",
    title: "Database & ORM",
    skills: [
      { name: "MongoDB", level: 88, iconName: "Database" },
      { name: "PostgreSQL", level: 82, iconName: "DatabaseBackup" },
      { name: "SQL", level: 85, iconName: "HardDrive" },
      { name: "Prisma ORM", level: 85, iconName: "Coins" },
      { name: "Database Design", level: 88, iconName: "GitFork" },
      { name: "ER Diagram", level: 85, iconName: "Network" },
      { name: "Normalization", level: 82, iconName: "Maximize2" },
      { name: "Database Relationships", level: 88, iconName: "Workflow" },
      { name: "Pagination", level: 90, iconName: "Layers" },
      { name: "Advanced Querying", level: 82, iconName: "SearchCode" },
      { name: "Filtering", level: 88, iconName: "Filter" },
      { name: "Sorting", level: 88, iconName: "ArrowDownAZ" },
    ],
  },
  {
    id: "programming",
    title: "Programming Languages",
    skills: [
      { name: "C", level: 85, iconName: "SquarePlay" },
      { name: "C++", level: 90, iconName: "Settings" },
      { name: "JavaScript", level: 95, iconName: "Code" },
      { name: "TypeScript", level: 85, iconName: "FileJson" },
      { name: "SQL", level: 85, iconName: "HardDrive" },
    ],
  },
  {
    id: "software_eng",
    title: "Software Engineering",
    skills: [
      { name: "Object Oriented Programming (OOP)", level: 90, iconName: "Package" },
      { name: "Data Structures", level: 88, iconName: "GitMerge" },
      { name: "Algorithms", level: 85, iconName: "Compass" },
      { name: "Problem Solving", level: 90, iconName: "Lightbulb" },
      { name: "Design Patterns", level: 80, iconName: "Grid" },
      { name: "Modular Architecture", level: 85, iconName: "Cpu" },
      { name: "Clean Code", level: 90, iconName: "Heart" },
      { name: "Requirement Analysis", level: 85, iconName: "FileText" },
      { name: "Software Architecture", level: 80, iconName: "Binary" },
      { name: "System Design", level: 80, iconName: "Boxes" },
    ],
  },
  {
    id: "auth_security",
    title: "Authentication & Security",
    skills: [
      { name: "JWT", level: 92, iconName: "ShieldCheck" },
      { name: "Bcrypt", level: 90, iconName: "Lock" },
      { name: "Email Verification", level: 88, iconName: "Mail" },
      { name: "OTP Authentication", level: 85, iconName: "Smartphone" },
      { name: "Google OAuth", level: 85, iconName: "Chrome" },
      { name: "Refresh Token", level: 88, iconName: "RefreshCw" },
      { name: "Protected Routes", level: 92, iconName: "EyeOff" },
      { name: "Role Permission System", level: 88, iconName: "Users" },
      { name: "Secure Cookies", level: 85, iconName: "Cookie" },
      { name: "Input Validation (Zod)", level: 90, iconName: "BadgeCheck" },
    ],
  },
  {
    id: "cloud_devops",
    title: "Cloud & DevOps",
    skills: [
      { name: "Git", level: 90, iconName: "GitBranch" },
      { name: "GitHub", level: 92, iconName: "Github" },
      { name: "Docker", level: 80, iconName: "Container" },
      { name: "Docker Compose", level: 78, iconName: "Boxes" },
      { name: "Nginx", level: 75, iconName: "Share2" },
      { name: "Cloudinary", level: 85, iconName: "CloudLightning" },
      { name: "AWS (Learning)", level: 50, iconName: "Cloud" },
      { name: "CI/CD (GitHub Actions)", level: 75, iconName: "Play" },
      { name: "Linux Basics", level: 80, iconName: "Terminal" },
    ],
  },
  {
    id: "ai_tech",
    title: "AI & Modern Technologies",
    skills: [
      { name: "OpenAI API", level: 82, iconName: "Sparkles" },
      { name: "Prompt Engineering", level: 88, iconName: "MessageCircle" },
      { name: "AI Integration", level: 85, iconName: "Brain" },
      { name: "LangChain", level: 70, iconName: "Link" },
      { name: "RAG (Retrieval Augmented Generation)", level: 72, iconName: "FolderSearch" },
      { name: "Semantic Search", level: 75, iconName: "Search" },
      { name: "Embeddings", level: 78, iconName: "Fingerprint" },
      { name: "LLM Basics", level: 80, iconName: "Bot" },
      { name: "n8n Automation", level: 75, iconName: "Shuffle" },
      { name: "AI Chat Applications", level: 82, iconName: "MessageSquare" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    skills: [
      { name: "VS Code", level: 95, iconName: "Laptop" },
      { name: "Postman", level: 90, iconName: "CheckSquare" },
      { name: "GitHub Desktop", level: 92, iconName: "Github" },
      { name: "Figma", level: 80, iconName: "Figma" },
      { name: "PgAdmin", level: 82, iconName: "Database" },
      { name: "Beekeeper Studio", level: 80, iconName: "HardDrive" },
      { name: "MongoDB Compass", level: 88, iconName: "Compass" },
      { name: "Chrome DevTools", level: 90, iconName: "Terminal" },
    ],
  },
  {
    id: "learning",
    title: "Currently Learning",
    skills: [
      { name: "Advanced Next.js", level: 85, iconName: "TrendingUp" },
      { name: "Docker & Containerization", level: 80, iconName: "Container" },
      { name: "AWS Cloud", level: 60, iconName: "Cloud" },
      { name: "Microservices", level: 70, iconName: "Network" },
      { name: "AI-powered Web Applications", level: 85, iconName: "BrainCircuit" },
      { name: "System Design", level: 75, iconName: "Grid" },
      { name: "Scalable Backend Architecture", level: 75, iconName: "Server" },
    ],
  },
  {
    id: "soft_skills",
    title: "Soft Skills",
    skills: [
      { name: "Problem Solving", level: 95, iconName: "Lightbulb" },
      { name: "Critical Thinking", level: 90, iconName: "Brain" },
      { name: "Communication", level: 92, iconName: "MessageSquare" },
      { name: "Team Collaboration", level: 95, iconName: "Users" },
      { name: "Leadership", level: 85, iconName: "Award" },
      { name: "Quick Learning", level: 92, iconName: "Zap" },
      { name: "Adaptability", level: 92, iconName: "RefreshCw" },
      { name: "Time Management", level: 88, iconName: "Clock" },
      { name: "Self Motivation", level: 95, iconName: "Flame" },
    ],
  },
];

export const educationTimeline: TimelineItem[] = [
  {
    id: "edu-1",
    title: "Bachelor of Science (B.Sc.)",
    subtitle: "Department of Computer Science & Engineering",
    institution: "University of Barisal",
    date: "2022 - Present",
    status: "Running",
    coursework: [
      "Data Structures",
      "Algorithms",
      "Database Management",
      "Computer Networks",
      "Software Engineering",
      "Operating Systems",
      "Web Engineering",
      "Computer Architecture",
    ],
  },
  {
    id: "edu-2",
    title: "Higher Secondary Certificate (HSC)",
    subtitle: "Science Background",
    institution: "Barisal College",
    date: "2019 - 2021",
    details: ["Graduated with an outstanding academic record", "Focused on Mathematics, Physics, and ICT studies"],
  },
];

export const projectsData: Project[] = [
  {
    id: "project-1",
    title: "Library Management System",
    category: "Full Stack (MERN)",
    description: "A full stack library management platform with authentication, book management and borrowing features.",
    image: libraryImg,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/rayhankhan-cse/library-management-system",
    liveUrl: "https://library-rayhan.netlify.app",
    details: {
      overview: "A premium digital archive and library automation software that replaces traditional manual paper tracking. Designed specifically to handle authentication, real-time book availability updates, and dynamic borrowing history tracking.",
      features: [
        "Secure User Authentication and role management (Admin vs. Student)",
        "Comprehensive CRUD book catalog manager for administrators",
        "Interactive borrow-and-return workflows with automated overdue alerts",
        "Responsive, state-managed search and filtering catalog",
      ],
      techStackDetails: [
        { name: "React", description: "Provides a responsive, client-side SPA experience with state management" },
        { name: "Node.js & Express", description: "Handles scalable middleware and RESTful endpoints for operations" },
        { name: "MongoDB", description: "Flexible document-based storage for catalogs and borrow receipts" },
        { name: "JWT", description: "Enforces stateless secure authentication in API requests" },
      ],
      challenges: "Implementing a race-condition-free borrowing transaction system where multiple students might request the final copy of a book concurrently. This was resolved by using MongoDB atomic transactions and checking absolute stock counts prior to recording a borrowing event.",
      futureImprovements: [
        "Incorporate automatic email notifications using Nodemailer for upcoming return deadlines",
        "Add a PDF reader module to read digital books directly inside the platform",
        "Generate automated Excel reports of weekly borrowing statistics",
      ],
    },
  },
  {
    id: "project-2",
    title: "Football Ticket Booking System",
    category: "Full Stack (Relational)",
    description: "Users can browse football matches, reserve seats and purchase tickets.",
    image: footballImg,
    technologies: ["React", "Express", "PostgreSQL", "Prisma"],
    githubUrl: "https://github.com/rayhankhan-cse/football-ticket-booking",
    liveUrl: "https://football-tickets-rayhan.netlify.app",
    details: {
      overview: "A modern reservation engine for sports fans to secure matchday tickets. Features an interactive SVG stadium map with a real-time responsive seat-selection modal and immediate database lock mechanisms.",
      features: [
        "Visual stadium layouts mapping distinct ticket classes (VIP, Premium, Standard)",
        "Immediate seat status updates avoiding overbooking scenarios",
        "Dynamic match schedules filtered by league, date, and stadium capacity",
        "Interactive ticketing summaries featuring clean print-friendly layouts and QR codes",
      ],
      techStackDetails: [
        { name: "React & Tailwind CSS", description: "Engineered for complex stadium mapping grids and visual animations" },
        { name: "Express.js API", description: "Provides high-throughput routing logic and validates transaction parameters" },
        { name: "PostgreSQL", description: "Relational schema ensures rigid data integrity for tickets, fans, and transactions" },
        { name: "Prisma ORM", description: "Safeguards type-safe queries, migration control, and complex table relationships" },
      ],
      challenges: "Managing seat locks during the active selection phase to prevent two users from booking the exact same seat at the same time. Resolved this by introducing brief transient seat locking sessions and using PostgreSQL transaction isolation levels.",
      futureImprovements: [
        "Incorporate SSLCommerz or Stripe payments for true financial processing",
        "Integrate real-time notification alerts when seat prices drop for specific matches",
        "Add 3D visual preview angles of selected stadium seats",
      ],
      architecture: "Client-Server architecture. The client handles visual state, caching, and ticket configurations. The server enforces matching parameters, manages seat status sessions, and processes transactions against PostgreSQL using Prisma client transactions.",
    },
  },
  {
    id: "project-3",
    title: "Peripheral Inventory Management System",
    category: "Legacy PHP Backend",
    description: "Manage computer laboratory peripheral devices including CRUD operations and inventory tracking.",
    image: inventoryImg,
    technologies: ["PHP", "MySQL"],
    githubUrl: "https://github.com/rayhankhan-cse/peripheral-inventory",
    liveUrl: "https://inventory-php-rayhan.demo",
    details: {
      overview: "An administrative tool designed specifically for university computer laboratories to manage peripheral devices. Facilitates seamless hardware audits, tracking assigned equipment states, and reporting broken inventory.",
      features: [
        "Administrative dashboard showing totals of functional, broken, and repaired units",
        "Full CRUD interface to log mouse, keyboard, monitor, and motherboard assets",
        "Track assignment statuses detailing exactly which laboratory room or computer unit has which device",
        "Fast CSV exporting of the current lab inventory for administrative reviews",
      ],
      techStackDetails: [
        { name: "Core PHP", description: "Handles request routing, rendering, and database connections safely" },
        { name: "MySQL Database", description: "Stores relational schemas for laboratory devices, locations, and logs" },
        { name: "AdminLTE template / Bootstrap CSS", description: "Provides a responsive administrative interface layout" },
      ],
      challenges: "Developing custom SQL queries that perform multiple table joins to consolidate records across peripherals, room locations, and personnel, while maintaining rapid loading times. Solved by writing indexes on highly queried tables.",
      futureImprovements: [
        "Migrate the backend layer to Node.js / Express for modularity and asynchronous operations",
        "Integrate dynamic barcode/QR code scanners to label physical devices and search them instantly",
        "Implement a ticketing form so laboratory instructors can log device failure reports",
      ],
    },
  },
];
