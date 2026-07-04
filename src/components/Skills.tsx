import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Code2, Monitor, Server, Database, Cpu, Cloud, Terminal, 
  Layers, Sparkles, Shield, Bookmark, CheckCircle2 
} from "lucide-react";

interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconColor: string;
  borderColor: string;
  glowColor: string;
  badgeBg: string;
  badgeText: string;
  badgeHoverBorder: string;
  skills: string[];
  filterGroup: "all" | "core" | "ai-backend" | "infra";
}

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<"all" | "core" | "ai-backend" | "infra">("all");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filterTabs = [
    { id: "all", label: "All Expertises" },
    { id: "ai-backend", label: "AI & Backend" },
    { id: "core", label: "Frontend & Architecture" },
    { id: "infra", label: "DevOps & Databases" },
  ] as const;

  const skillCategories: SkillCategory[] = [
    {
      id: "languages",
      title: "Core Languages",
      description: "Foundational programming and scripting languages for building reliable full-stack applications.",
      icon: <Code2 className="h-5 w-5" />,
      iconColor: "text-amber-400",
      borderColor: "group-hover:border-amber-500/30",
      glowColor: "rgba(245, 158, 11, 0.05)",
      badgeBg: "bg-amber-500/5",
      badgeText: "text-amber-200 group-hover:text-amber-100",
      badgeHoverBorder: "hover:border-amber-500/30 hover:bg-amber-500/10",
      filterGroup: "core",
      skills: ["TypeScript", "JavaScript (ES6+)", "SQL"]
    },
    {
      id: "ai-engineering",
      title: "AI Engineering",
      description: "Building intelligent applications using large language models, agent frameworks, vector space semantic search, and automation.",
      icon: <Cpu className="h-5 w-5" />,
      iconColor: "text-purple-400",
      borderColor: "group-hover:border-purple-500/30",
      glowColor: "rgba(168, 85, 247, 0.05)",
      badgeBg: "bg-purple-500/5",
      badgeText: "text-purple-200 group-hover:text-purple-100",
      badgeHoverBorder: "hover:border-purple-500/30 hover:bg-purple-500/10",
      filterGroup: "ai-backend",
      skills: [
        "OpenAI API",
        "LangChain",
        "Retrieval-Augmented Generation (RAG)",
        "Vector Embeddings",
        "Semantic Search",
        "pgvector",
        "AI Chatbot Development",
        "Prompt Engineering",
        "n8n Automation"
      ]
    },
    {
      id: "backend",
      title: "Backend Engineering",
      description: "Architecting secure, scale-ready APIs, solid user authentication strategies, and integrated payment processors.",
      icon: <Server className="h-5 w-5" />,
      iconColor: "text-cyan-400",
      borderColor: "group-hover:border-cyan-500/30",
      glowColor: "rgba(34, 211, 238, 0.05)",
      badgeBg: "bg-cyan-500/5",
      badgeText: "text-cyan-200 group-hover:text-cyan-100",
      badgeHoverBorder: "hover:border-cyan-500/30 hover:bg-cyan-500/10",
      filterGroup: "ai-backend",
      skills: [
        "Node.js",
        "Express.js",
        "REST API Development",
        "JWT Authentication",
        "Role-Based Access Control (RBAC)",
        "Prisma ORM",
        "Zod Validation",
        "Nodemailer",
        "Cloudinary",
        "Stripe API"
      ]
    },
    {
      id: "frontend",
      title: "Frontend Engineering",
      description: "Crafting beautiful, pixel-perfect, highly responsive interfaces optimized for performance and fluid UX transitions.",
      icon: <Monitor className="h-5 w-5" />,
      iconColor: "text-pink-400",
      borderColor: "group-hover:border-pink-500/30",
      glowColor: "rgba(236, 72, 153, 0.05)",
      badgeBg: "bg-pink-500/5",
      badgeText: "text-pink-200 group-hover:text-pink-100",
      badgeHoverBorder: "hover:border-pink-500/30 hover:bg-pink-500/10",
      filterGroup: "core",
      skills: [
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "Shadcn UI",
        "TanStack Query",
        "TanStack Table",
        "Axios"
      ]
    },
    {
      id: "database",
      title: "Database Architecture",
      description: "Structuring, indexing, and optimizing structured datasets to maximize query throughput and schema safety.",
      icon: <Database className="h-5 w-5" />,
      iconColor: "text-emerald-400",
      borderColor: "group-hover:border-emerald-500/30",
      glowColor: "rgba(16, 185, 129, 0.05)",
      badgeBg: "bg-emerald-500/5",
      badgeText: "text-emerald-200 group-hover:text-emerald-100",
      badgeHoverBorder: "hover:border-emerald-500/30 hover:bg-emerald-500/10",
      filterGroup: "infra",
      skills: [
        "PostgreSQL",
        "Prisma ORM",
        "Database Design",
        "ER Diagram",
        "SQL Query Optimization"
      ]
    },
    {
      id: "devops",
      title: "DevOps & Cloud Systems",
      description: "Managing containerized applications, automating release workflows, and orchestrating secure cloud deployments.",
      icon: <Cloud className="h-5 w-5" />,
      iconColor: "text-blue-400",
      borderColor: "group-hover:border-blue-500/30",
      glowColor: "rgba(59, 130, 246, 0.05)",
      badgeBg: "bg-blue-500/5",
      badgeText: "text-blue-200 group-hover:text-blue-100",
      badgeHoverBorder: "hover:border-blue-500/30 hover:bg-blue-500/10",
      filterGroup: "infra",
      skills: [
        "Docker",
        "Docker Compose",
        "Nginx",
        "AWS EC2",
        "AWS S3",
        "GitHub Actions",
        "CI/CD"
      ]
    },
    {
      id: "tools",
      title: "Developer Workspaces",
      description: "Leveraging key orchestration systems, inspection suites, and IDE environments to accelerate workflow velocities.",
      icon: <Terminal className="h-5 w-5" />,
      iconColor: "text-teal-400",
      borderColor: "group-hover:border-teal-500/30",
      glowColor: "rgba(20, 184, 166, 0.05)",
      badgeBg: "bg-teal-500/5",
      badgeText: "text-teal-200 group-hover:text-teal-100",
      badgeHoverBorder: "hover:border-teal-500/30 hover:bg-teal-500/10",
      filterGroup: "infra",
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "PgAdmin",
        "Beekeeper Studio"
      ]
    },
    {
      id: "software-engineering",
      title: "Software Engineering & Patterns",
      description: "Executing modern production architectural paradigms, secure flows, and clean maintainable code principles.",
      icon: <Layers className="h-5 w-5" />,
      iconColor: "text-indigo-400",
      borderColor: "group-hover:border-indigo-500/30",
      glowColor: "rgba(99, 102, 241, 0.05)",
      badgeBg: "bg-indigo-500/5",
      badgeText: "text-indigo-200 group-hover:text-indigo-100",
      badgeHoverBorder: "hover:border-indigo-500/30 hover:bg-indigo-500/10",
      filterGroup: "core",
      skills: [
        "Authentication & Authorization",
        "API Integration",
        "RESTful Architecture",
        "MVC Architecture",
        "Error Handling",
        "File Upload",
        "Payment Gateway Integration",
        "Email Verification",
        "OTP Authentication",
        "Responsive Web Design",
        "Clean Code",
        "Scalable Application Development"
      ]
    }
  ];

  const filteredCategories = skillCategories.filter(
    (cat) => activeFilter === "all" || cat.filterGroup === activeFilter
  );

  return (
    <section id="skills" className="py-28 relative overflow-hidden bg-[#050811] border-b border-slate-900/80">
      {/* Background radial gradient glows representing the glassmorphic ambient environment */}
      <div className="absolute top-1/4 left-1/12 w-[600px] h-[600px] rounded-full bg-cyan-950/10 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/12 w-[600px] h-[600px] rounded-full bg-purple-950/10 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-cyan-300 font-bold">
              Technical Matrix
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight">
            Technical Skills
          </h2>
          
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Organized tech-stack of language masteries, AI architectures, database schematics, DevOps procedures, and reliable software engineering patterns.
          </p>
        </div>

        {/* Dynamic Category Group Filter Bar */}
        <div className="flex flex-wrap justify-center items-center gap-2">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4.5 py-2 rounded-xl text-xs font-mono tracking-wide border transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 border-cyan-500 text-white shadow-lg shadow-cyan-500/15"
                  : "bg-slate-950/60 hover:bg-slate-900 border-slate-850 hover:border-slate-700 text-slate-400 hover:text-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Grid - Glassmorphism Bento Grid Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                style={{
                  boxShadow: hoveredSkill ? `0 4px 30px rgba(0, 0, 0, 0.4)` : ""
                }}
                className={`group p-8 rounded-3xl bg-slate-900/20 backdrop-blur-md border border-slate-850/60 ${category.borderColor} transition-all duration-300 relative overflow-hidden flex flex-col justify-between`}
              >
                {/* Micro-glow localized backdrop */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 20%, ${category.glowColor}, transparent 70%)`
                  }}
                />

                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2.5 rounded-xl bg-slate-950 border border-slate-800 ${category.iconColor}`}>
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-display font-extrabold text-slate-100 group-hover:text-white transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  {/* Category Description */}
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium">
                    {category.description}
                  </p>
                </div>

                {/* Skill Badges Wrapper */}
                <div className="flex flex-wrap gap-2.5 mt-6 z-10 relative">
                  {category.skills.map((skill) => {
                    const isHovered = hoveredSkill === skill;
                    return (
                      <motion.span
                        key={skill}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        whileHover={{ scale: 1.04 }}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-850 bg-slate-950/70 text-xs font-semibold tracking-wide transition-all duration-200 cursor-default ${category.badgeText} ${category.badgeHoverBorder}`}
                      >
                        <CheckCircle2 className={`h-3 w-3 shrink-0 transition-opacity duration-200 ${
                          isHovered ? "opacity-100 text-cyan-400" : "opacity-40"
                        }`} />
                        {skill}
                      </motion.span>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Summary Showcase Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-950/10 via-slate-950/40 to-cyan-950/10 border border-slate-850/60 text-center space-y-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.02),transparent_60%)]" />
          <h4 className="text-base font-display font-bold text-white relative z-10">
            Recruiter Quick Peek
          </h4>
          <p className="text-slate-400 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed relative z-10">
            Fully proficient in writing robust type-safe code, developing AI agents via deep embeddings, creating structured database designs with PostgreSQL/Prisma, and setting up automated CI/CD microservices with AWS and Docker.
          </p>
        </div>

      </div>
    </section>
  );
}
