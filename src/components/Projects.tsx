import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, X, CheckCircle, Flame, ArrowRight, Shield, Info } from "lucide-react";
import { projectsData } from "../data";
import { Project } from "../types";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState("all");
  const [showDemoNotice, setShowDemoNotice] = useState(false);

  const categories = [
    { name: "All", id: "all" },
    { name: "MERN Stack", id: "Full Stack (MERN)" },
    { name: "Relational/SQL", id: "Full Stack (Relational)" },
    { name: "PHP Backends", id: "Legacy PHP Backend" },
  ];

  const filteredProjects = filter === "all"
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-900/20">
      {/* Background neon blur */}
      <div className="absolute top-[20%] left-[-10%] w-96 h-96 rounded-full bg-blue-500/10 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
            My Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
            Recent <span className="text-blue-500">Projects</span>
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4"></div>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-medium tracking-wide transition-all cursor-pointer ${
                filter === cat.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Project Card Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group rounded-3xl glass-card overflow-hidden flex flex-col hover:border-slate-700/60 transition-all duration-300 transform hover:-translate-y-1.5"
              >
                {/* Image Section */}
                <div className="relative aspect-video overflow-hidden bg-slate-950 border-b border-slate-850">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-cyan-400">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-display font-bold text-white mt-2 mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-850 text-slate-300 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Details CTA */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-blue-600 border border-slate-800 hover:border-blue-500 text-white font-semibold text-xs md:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer group-hover:shadow-[0_0_15px_rgba(37,99,235,0.2)]"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4 text-cyan-400 group-hover:text-white transition-colors" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* VIEW DETAILS MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl max-h-[85vh] bg-slate-900 border border-slate-800/80 rounded-3xl overflow-y-auto shadow-2xl shadow-black/80 z-10 text-slate-300 flex flex-col"
            >
              {/* Close Button Header */}
              <div className="sticky top-0 bg-slate-900/90 backdrop-blur-md px-6 py-4 border-b border-slate-800/60 z-20 flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                  Project Case Study
                </span>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    setShowDemoNotice(false);
                  }}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all cursor-pointer"
                  aria-label="Close details dialog"
                  id="modal-close-button"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Core Content */}
              <div className="p-6 md:p-8 space-y-8 flex-1">
                
                {/* Title and Badge */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-850 pb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight">
                      {selectedProject.title}
                    </h3>
                    <p className="text-xs md:text-sm font-semibold text-cyan-400 mt-1.5">
                      {selectedProject.category}
                    </p>
                  </div>
                  {/* Action Links */}
                  <div className="flex items-center gap-3">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-600 text-white text-xs font-semibold tracking-wide transition-all cursor-pointer"
                    >
                      <Github className="h-4 w-4 text-slate-400" />
                      GitHub Repo
                    </a>
                    {selectedProject.liveUrl.endsWith(".demo") || selectedProject.liveUrl === "#" ? (
                      <button
                        onClick={() => setShowDemoNotice(true)}
                        className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 hover:bg-slate-700 text-cyan-400 hover:text-cyan-300 text-xs font-semibold tracking-wide transition-all cursor-pointer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Demo Info
                      </button>
                    ) : (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-wide shadow-md shadow-blue-600/15 transition-all cursor-pointer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Animated Demo Notice Alert Banner */}
                <AnimatePresence>
                  {showDemoNotice && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -10 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -10 }}
                      className="p-5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs md:text-sm leading-relaxed flex items-start gap-3.5"
                    >
                      <Info className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <h5 className="font-semibold text-white tracking-tight">Intranet Secure Hosting</h5>
                        <p>
                          "{selectedProject.title}" is an administrative database system hosted securely on our university's local intranet servers for Computer Science & Engineering laboratories.
                        </p>
                        <p className="text-slate-400 text-xs mt-1">
                          Since it resides within a private internal network, live public routing is restricted. However, you can inspect the complete source code, relational tables, and API migrations in the linked <strong>GitHub Repository</strong>.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Cover Image */}
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/80">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* 1. Overview Section */}
                <div className="space-y-3">
                  <h4 className="text-lg font-display font-semibold text-white flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                    Overview
                  </h4>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                    {selectedProject.details.overview}
                  </p>
                </div>

                {/* 2. Architecture Section (For project 2 mostly) */}
                {selectedProject.details.architecture && (
                  <div className="space-y-3">
                    <h4 className="text-lg font-display font-semibold text-white flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                      System Architecture
                    </h4>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                      {selectedProject.details.architecture}
                    </p>
                  </div>
                )}

                {/* 3. Key Features List */}
                <div className="space-y-4">
                  <h4 className="text-lg font-display font-semibold text-white flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                    Core Features
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {selectedProject.details.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-slate-950 border border-slate-850/80 flex gap-3 items-start"
                      >
                        <CheckCircle className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                        <span className="text-xs md:text-sm text-slate-300 leading-normal">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Technology Stack Breakdown */}
                <div className="space-y-4">
                  <h4 className="text-lg font-display font-semibold text-white flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-purple-400"></span>
                    Technologies & Role
                  </h4>
                  <div className="space-y-3">
                    {selectedProject.details.techStackDetails.map((tech, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-slate-950/40 border border-slate-850 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                      >
                        <span className="font-mono text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                          {tech.name}
                        </span>
                        <span className="text-xs text-slate-400 max-w-xl text-left sm:text-right">
                          {tech.description}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5. Challenges & Solutions */}
                <div className="space-y-3 p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20">
                  <h4 className="text-sm font-mono uppercase tracking-widest text-amber-400 flex items-center gap-2">
                    <Flame className="h-4 w-4" />
                    Technical Challenge & Resolution
                  </h4>
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed mt-2">
                    {selectedProject.details.challenges}
                  </p>
                </div>

                {/* 6. Future Roadmap Improvements */}
                <div className="space-y-4 border-t border-slate-850 pt-6">
                  <h4 className="text-lg font-display font-semibold text-white flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                    Future Roadmap
                  </h4>
                  <ul className="space-y-2 text-xs md:text-sm text-slate-300 list-disc list-inside">
                    {selectedProject.details.futureImprovements.map((imp, idx) => (
                      <li key={idx} className="leading-relaxed">{imp}</li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Sticky footer for quick navigation closing */}
              <div className="sticky bottom-0 bg-slate-900/90 backdrop-blur-md px-6 py-4 border-t border-slate-800/60 z-20 flex justify-end">
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    setShowDemoNotice(false);
                  }}
                  className="px-6 py-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-600 text-white text-xs font-semibold cursor-pointer"
                >
                  Close Case Study
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
