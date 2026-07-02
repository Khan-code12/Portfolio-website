import { motion } from "motion/react";
import { Terminal, BrainCircuit, Sparkles, Trophy, BookOpen, Layers } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const hobbies = [
    { name: "Cricket", details: "Loves playing and analyzing matches" },
    { name: "Competitive Programming", details: "Solving algorithm puzzles" },
    { name: "Learning Tech Stack", details: "Exploring frameworks like Next.js" },
    { name: "Reading Tech Blogs", details: "Staying updated on system designs" },
    { name: "Watching Football", details: "Big fan of tactical club matches" },
  ];

  const personalityTraits = [
    { name: "Curious Learner", desc: "Always exploring the 'why' behind systems" },
    { name: "Problem Solver", desc: "Fascinated by core data structures & algorithms" },
    { name: "Team Player", desc: "Engages in peer code reviews and collaboration" },
    { name: "Self Motivated", desc: "Drives learning schedules and builds solo platforms" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
            Get to know me
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4"></div>
        </div>

        {/* Bento Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Main Programming Journey Column */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-8 p-8 md:p-10 rounded-3xl glass-panel relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-600/10 transition-colors duration-500"></div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 text-cyan-400 rounded-xl">
                  <Terminal className="h-6 w-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-display font-semibold text-white">
                  My Programming Journey
                </h3>
              </div>

              <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
                <p>
                  I started my programming journey deep inside the world of <strong>C++</strong>, where I developed a strong foundation in <strong>Data Structures and Algorithms (DSA)</strong>. Solving puzzles and coding algorithmic challenges taught me how to think analytically and write highly optimized code.
                </p>
                <p>
                  As my desire to build real-world systems grew, I shifted towards modern web development. I quickly adopted the web development stack starting from standard structural layouts in <strong>HTML</strong> and responsive styling with <strong>CSS</strong> and <strong>Tailwind</strong>, moving up to interactive client systems using <strong>JavaScript</strong> and <strong>React</strong>.
                </p>
                <p>
                  Today, I specialized as a full-stack engineer, utilizing <strong>Node.js</strong> and <strong>Express</strong> to architect powerful REST APIs. I enjoy interfacing with robust relational data models in <strong>PostgreSQL</strong> via <strong>Prisma ORM</strong> as well as schema-less storage systems using <strong>MongoDB</strong>.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/40 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400 mr-2">Core stacks mastered:</span>
              {["C++", "React", "Node.js", "Express", "MongoDB", "PostgreSQL", "Prisma"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Personality Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 p-8 rounded-3xl glass-panel relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-2xl -ml-16 -mb-16"></div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-xl">
                  <BrainCircuit className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-display font-semibold text-white">Personality</h3>
              </div>

              <div className="space-y-4">
                {personalityTraits.map((trait) => (
                  <div key={trait.name} className="flex gap-3">
                    <div className="h-5 w-5 mt-0.5 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 shrink-0">
                      <Sparkles className="h-3 w-3 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{trait.name}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{trait.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* What I Love Building Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 p-8 rounded-3xl glass-panel relative overflow-hidden flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-xl">
                  <Layers className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-display font-semibold text-white">What I Love Building</h3>
              </div>

              <ul className="space-y-3.5 text-sm text-slate-300">
                {[
                  "Full Stack Web Applications",
                  "Secure REST APIs",
                  "Stateless JWT Auth Systems",
                  "Dynamic Dashboard Frameworks",
                  "Responsive UI Components",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Hobbies Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-8 p-8 rounded-3xl glass-panel relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="absolute top-1/2 right-0 w-48 h-48 bg-purple-500/5 rounded-full blur-2xl -mr-12 -mt-24"></div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl">
                  <Trophy className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-display font-semibold text-white">Hobbies</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.name}
                    className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/60 hover:border-slate-700/80 transition-all flex items-start gap-3"
                  >
                    <div className="mt-1 h-2 w-2 rounded-full bg-emerald-400 shrink-0"></div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-200">{hobby.name}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{hobby.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
