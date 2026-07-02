import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X, Printer, Copy, Check, Mail, Phone, MapPin, ExternalLink,
  Briefcase, GraduationCap, Award, Flame, Laptop, ShieldCheck,
  CheckCircle, Globe
} from "lucide-react";
import { personalInfo, educationTimeline, projectsData, skillCategories } from "../data";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);
  const printAreaRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = async () => {
    const resumeText = `
========================================
CURRICULUM VITAE - ${personalInfo.name.toUpperCase()}
========================================
Title: ${personalInfo.title}
Email: ${personalInfo.email}
Phone / WhatsApp: ${personalInfo.phone}
Location: ${personalInfo.location}
Website Portfolio: ${window.location.origin}

SUMMARY:
${personalInfo.bio}

EDUCATION:
${educationTimeline.map(edu => `
- ${edu.title} (${edu.subtitle})
  Institution: ${edu.institution}
  Duration: ${edu.date} ${edu.status ? `[${edu.status}]` : ""}
  ${edu.coursework ? `Coursework: ${edu.coursework.join(", ")}` : ""}
  ${edu.details ? `Details:\n  ${edu.details.map(d => `* ${d}`).join("\n  ")}` : ""}
`).join("\n")}

CORE TECHNICAL SKILLS:
${skillCategories.map(cat => `
[${cat.title}]
${cat.skills.map(s => `  * ${s.name} (${s.level}%)`).join("\n")}
`).join("\n")}

KEY PROJECTS:
${projectsData.map(proj => `
- ${proj.title} [${proj.category}]
  Description: ${proj.description}
  GitHub: ${proj.githubUrl}
  Details: ${proj.details.overview}
  Core Features:
  ${proj.details.features.map(f => `  * ${f}`).join("\n  ")}
`).join("\n")}
    `.trim();

    try {
      await navigator.clipboard.writeText(resumeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy resume text:", err);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-5xl h-[90vh] bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90 backdrop-blur-md z-20">
              <div className="flex items-center gap-2.5">
                <div className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                  Interactive CV / Resume
                </span>
              </div>
              <div className="flex items-center gap-2">
                {/* Copy Text Button */}
                <button
                  onClick={handleCopyText}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white text-xs font-medium transition-all cursor-pointer"
                  title="Copy CV Plain Text to Clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400 animate-scale" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      Copy Plain Text
                    </>
                  )}
                </button>

                {/* Print Button */}
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium shadow-md shadow-blue-600/15 transition-all cursor-pointer"
                  title="Print / Save as PDF"
                >
                  <Printer className="h-3.5 w-3.5" />
                  Print CV / PDF
                </button>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all cursor-pointer ml-1"
                  aria-label="Close dialog"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Document Area */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-slate-950/40">
              
              {/* Document Wrapper - This ID matches the print style */}
              <div
                id="print-resume-area"
                ref={printAreaRef}
                className="bg-slate-900 border border-slate-800/80 p-6 md:p-12 rounded-2xl shadow-xl space-y-10 print:p-0 print:border-none print:shadow-none print:bg-white text-slate-300 print:text-black"
              >
                {/* PRINT-ONLY HEADER ACCENT */}
                <div className="hidden print:block border-b-4 border-black pb-4 mb-8">
                  <h1 className="text-4xl font-bold tracking-tight uppercase">{personalInfo.name}</h1>
                  <p className="text-lg font-medium text-slate-700 uppercase tracking-wider mt-1">{personalInfo.title}</p>
                </div>

                {/* 1. Header Contact Info (Grid) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 border-b border-slate-800/60 print:border-black print:pb-6">
                  {/* Name, Title, Bio */}
                  <div className="space-y-3 print:hidden">
                    <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
                      {personalInfo.name}
                    </h2>
                    <p className="text-cyan-400 font-mono text-sm tracking-wide font-medium uppercase">
                      {personalInfo.title}
                    </p>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed pr-4">
                      {personalInfo.bio}
                    </p>
                  </div>

                  {/* Contact Links */}
                  <div className="space-y-3 bg-slate-950/40 border border-slate-850 p-4 rounded-xl print:bg-white print:border-none print:p-0 flex flex-col justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm font-mono text-slate-300 print:text-black">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-cyan-400 shrink-0 print:text-black" />
                        <span className="truncate">{personalInfo.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-emerald-400 shrink-0 print:text-black" />
                        <span>{personalInfo.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-rose-400 shrink-0 print:text-black" />
                        <span>{personalInfo.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-blue-400 shrink-0 print:text-black" />
                        <span>Bangladesh</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Education (Academic Background) */}
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider flex items-center gap-2.5 pb-2 border-b border-slate-800/60 print:text-black print:border-black">
                    <GraduationCap className="h-5 w-5 text-blue-400 shrink-0 print:hidden" />
                    Education
                  </h3>
                  <div className="space-y-6">
                    {educationTimeline.map((edu) => (
                      <div key={edu.id} className="relative pl-0 md:pl-4 print:pl-0">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h4 className="text-base font-bold text-slate-100 print:text-black">
                            {edu.title}
                          </h4>
                          <span className="text-xs font-mono font-semibold text-cyan-400 print:text-black">
                            {edu.date} {edu.status ? `(${edu.status})` : ""}
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-slate-300 mt-0.5 print:text-black">
                          {edu.subtitle}
                        </p>
                        <p className="text-xs text-slate-500 font-medium print:text-slate-600">
                          {edu.institution}
                        </p>
                        {edu.coursework && (
                          <div className="mt-2 flex flex-wrap gap-1 print:mt-1">
                            {edu.coursework.map((course) => (
                              <span
                                key={course}
                                className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 text-[10px] md:text-xs print:bg-transparent print:border-none print:text-black print:pl-0 print:pr-2 print:after:content-[','] last:print:after:content-none font-mono"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        )}
                        {edu.details && (
                          <ul className="mt-2 space-y-1 text-xs text-slate-400 list-disc list-inside print:text-black">
                            {edu.details.map((detail, dIdx) => (
                              <li key={dIdx}>{detail}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Skills Matrix */}
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider flex items-center gap-2.5 pb-2 border-b border-slate-800/60 print:text-black print:border-black">
                    <Laptop className="h-5 w-5 text-cyan-400 shrink-0 print:hidden" />
                    Technical Expertise
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 print:grid-cols-2 print:gap-4">
                    {skillCategories.map((cat) => (
                      <div key={cat.id} className="space-y-2">
                        <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-slate-800/40 pb-1 print:text-black print:border-black">
                          {cat.title}
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {cat.skills.slice(0, 8).map((skill) => (
                            <span
                              key={skill.name}
                              className="px-2 py-1 rounded bg-slate-950 border border-slate-850 text-slate-300 text-xs font-medium print:bg-transparent print:border-none print:text-black print:p-0 print:after:content-[','] last:print:after:content-none"
                            >
                              {skill.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Projects (Major Case Studies) */}
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider flex items-center gap-2.5 pb-2 border-b border-slate-800/60 print:text-black print:border-black">
                    <Briefcase className="h-5 w-5 text-emerald-400 shrink-0 print:hidden" />
                    Major Software Projects
                  </h3>
                  <div className="space-y-6">
                    {projectsData.map((proj) => (
                      <div key={proj.id} className="space-y-2 relative pl-0 md:pl-4 print:pl-0">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h4 className="text-base font-bold text-slate-100 print:text-black">
                            {proj.title}
                          </h4>
                          <span className="text-xs font-mono font-semibold text-cyan-400 print:text-black">
                            {proj.category}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed print:text-slate-700">
                          {proj.description}
                        </p>
                        <div className="text-xs text-slate-400 print:text-black">
                          <strong>Core Features Built:</strong>
                          <ul className="list-disc list-inside pl-2 mt-1 space-y-0.5">
                            {proj.details.features.slice(0, 3).map((f, fIdx) => (
                              <li key={fIdx}>{f}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2 font-mono">
                          {proj.technologies.map((t) => (
                            <span
                              key={t}
                              className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 text-[10px] print:text-black print:border-none print:bg-transparent print:p-0 print:after:content-[','] last:print:after:content-none"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5. Career Objectives / Closing Footer */}
                <div className="pt-4 border-t border-slate-800/60 print:border-black text-center text-xs text-slate-500 font-mono print:text-black">
                  Self-attested CV of Rayhan Khan. Actively updated in real-time.
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
