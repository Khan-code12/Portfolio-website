import { motion } from "motion/react";
import { GraduationCap, Briefcase, Calendar, BookOpen, AlertCircle, Sparkles } from "lucide-react";
import { educationTimeline } from "../data";

export default function EducationExperience() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background glow node */}
      <div className="absolute bottom-10 left-[15%] w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* EDUCATION COLUMN (8 columns on lg) */}
          <div id="education-sub" className="lg:col-span-6 flex flex-col">
            <div className="flex items-center gap-3.5 mb-10 border-b border-slate-850 pb-4">
              <div className="p-3 bg-blue-500/10 border border-blue-500/20 text-cyan-400 rounded-2xl">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
                  Education
                </h2>
                <p className="text-xs text-slate-400 font-mono mt-1">Academic Background</p>
              </div>
            </div>

            <div className="relative border-l border-slate-800 pl-6 md:pl-8 space-y-12 flex-1">
              {educationTimeline.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Glowing Node Icon */}
                  <span className="absolute -left-[31px] md:-left-[39px] top-1 h-6 w-6 rounded-full bg-slate-950 border-2 border-blue-500 group-hover:border-cyan-400 shadow-[0_0_10px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_15px_rgba(6,182,212,0.6)] flex items-center justify-center transition-all duration-300">
                    <span className="h-2 w-2 rounded-full bg-blue-500 group-hover:bg-cyan-400 transition-colors"></span>
                  </span>

                  {/* Card Content */}
                  <div className="p-6 rounded-2xl glass-panel group-hover:border-slate-850 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400">
                        <Calendar className="h-3 w-3" />
                        {item.date}
                      </span>
                      {item.status && (
                        <span className="px-2.5 py-0.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 text-[10px] font-bold uppercase tracking-wider animate-pulse">
                          {item.status}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-display font-bold text-white group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-slate-300 mt-1">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">
                      {item.institution}
                    </p>

                    {/* Conditional list of details */}
                    {item.details && (
                      <ul className="mt-4 space-y-1.5 text-xs text-slate-400 list-disc list-inside">
                        {item.details.map((detail, dIdx) => (
                          <li key={dIdx}>{detail}</li>
                        ))}
                      </ul>
                    )}

                    {/* CSE Coursework Section */}
                    {item.coursework && (
                      <div className="mt-5">
                        <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1.5 mb-3">
                          <BookOpen className="h-3 w-3 text-cyan-400" />
                          Relevant Coursework
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {item.coursework.map((course) => (
                            <span
                              key={course}
                              className="px-2 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-[10px] md:text-xs font-medium"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* EXPERIENCE & CAREER READINESS COLUMN (6 columns on lg) */}
          <div id="experience" className="lg:col-span-6 flex flex-col">
            <div className="flex items-center gap-3.5 mb-10 border-b border-slate-850 pb-4">
              <div className="p-3 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-2xl">
                <Briefcase className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
                  Experience
                </h2>
                <p className="text-xs text-slate-400 font-mono mt-1">Professional History</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl glass-panel relative overflow-hidden flex flex-col justify-between h-full border border-slate-800/60"
            >
              {/* Background gradient blur */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/5 rounded-full blur-2xl -mr-12 -mt-12"></div>

              <div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono w-fit mb-6">
                  <AlertCircle className="h-3 w-3 shrink-0" />
                  Entry Level Search
                </div>

                <h3 className="text-xl font-display font-semibold text-white leading-tight mb-4">
                  Currently seeking Internship & Entry-Level Software Engineering Opportunities
                </h3>

                <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                  While preparing to graduate, I am actively sharpening my full-stack programming expertise and software engineering best practices. I actively translate my theoretical foundation from the classroom into practical engineering solutions.
                </p>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex gap-3">
                    <div className="p-1.5 bg-blue-500/10 border border-blue-500/20 text-cyan-400 rounded-lg h-fit shrink-0">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Full Stack Application Building</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Developing standard RESTful architectures, structural databases (PostgreSQL/MongoDB), and responsive frontends (React) to solve real problems.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex gap-3">
                    <div className="p-1.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 rounded-lg h-fit shrink-0">
                      <BookOpen className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Competitive Programming</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Consistently refining algorithms, spatial efficiency, and complex logic through routine practice in online judges.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-4 rounded-2xl bg-gradient-to-r from-blue-600/10 to-cyan-500/10 border border-blue-500/20 text-slate-300 text-xs leading-relaxed font-mono">
                🚀 Ready to contribute to engineering teams immediately! Capable of fast onboarding in MERN stack, TypeScript, and relational environments.
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
