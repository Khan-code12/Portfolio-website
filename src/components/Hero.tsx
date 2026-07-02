import { useState, useEffect, MouseEvent } from "react";
import { motion } from "motion/react";
import { ArrowRight, Download, Github, Linkedin, Facebook, Twitter, Mail } from "lucide-react";
import { personalInfo, socialLinks } from "../data";
import ResumeModal from "./ResumeModal";

// Custom dynamic typing effect hook
function useTypingEffect(words: string[], speed: number = 100, delay: number = 2000) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const activeWord = words[currentWordIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, speed / 2);
    } else {
      timer = setTimeout(() => {
        setCurrentText(activeWord.slice(0, currentText.length + 1));
      }, speed);
    }

    if (!isDeleting && currentText === activeWord) {
      timer = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, speed, delay]);

  return currentText;
}

export default function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const typingWords = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Backend Developer",
    "Problem Solver",
  ];
  const typedText = useTypingEffect(typingWords, 80, 1500);

  // Map icon strings to Lucide components
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "Github":
        return <Github className="h-5 w-5" />;
      case "Linkedin":
        return <Linkedin className="h-5 w-5" />;
      case "Facebook":
        return <Facebook className="h-5 w-5" />;
      case "Twitter":
        return <Twitter className="h-5 w-5" />;
      case "Mail":
        return <Mail className="h-5 w-5" />;
      default:
        return <Mail className="h-5 w-5" />;
    }
  };

  const handleContactScroll = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      const yOffset = -80;
      const y = contactSection.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center pt-24 overflow-hidden"
    >
      {/* Background Glows & Particle Simulation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] left-[5%] w-96 h-96 rounded-full bg-blue-600/15 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-[15%] right-[5%] w-96 h-96 rounded-full bg-cyan-500/15 blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
        
        {/* Subtle grid accent */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b1a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b1a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10 py-12 md:py-20">
        {/* Left Info Column */}
        <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs md:text-sm font-mono tracking-widest uppercase mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for Opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl xl:text-7xl font-display font-bold text-white tracking-tight leading-none mb-4"
          >
            <span className="block text-slate-300 text-xl md:text-2xl font-mono tracking-normal mb-2 font-normal">
              Hi, I'm
            </span>
            {personalInfo.name}
          </motion.h1>

          {/* Animated Typing Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-10 md:h-14 flex items-center mb-6"
          >
            <h2 className="text-xl md:text-3xl font-semibold bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent font-display">
              {typedText}
              <span className="text-cyan-400 font-normal animate-[pulse_1s_infinite] ml-1">|</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl mb-10 text-center lg:text-left"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => setIsResumeOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-medium shadow-lg shadow-blue-500/20 hover:shadow-cyan-400/20 transform hover:-translate-y-0.5 transition-all text-sm tracking-wide cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </button>
            <button
              onClick={handleContactScroll}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 hover:bg-slate-850 text-white font-medium transform hover:-translate-y-0.5 transition-all text-sm tracking-wide cursor-pointer"
            >
              Contact Me
              <ArrowRight className="h-4 w-4 text-cyan-400" />
            </button>
          </motion.div>
        </div>

        {/* Right Photo Column */}
        <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="relative"
          >
            {/* Glowing Backdrop Circle */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 blur-2xl opacity-40 animate-pulse-slow"></div>

            {/* Profile Picture Frame with custom floating and glowing classes */}
            <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-blue-600 via-purple-600 to-cyan-400 shadow-[0_0_50px_rgba(37,99,235,0.3)] animate-float">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-950 bg-slate-950">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </div>
            </div>

            {/* Decorative orbit items */}
            <div className="absolute -top-4 -right-4 bg-slate-900/90 border border-slate-700 p-3 rounded-2xl shadow-lg z-20 flex items-center gap-2 animate-float font-mono text-xs text-cyan-400">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              React & Node
            </div>
            <div className="absolute -bottom-2 -left-6 bg-slate-900/90 border border-slate-700 p-3 rounded-2xl shadow-lg z-20 flex items-center gap-2 animate-float font-mono text-xs text-blue-400" style={{ animationDelay: "1.5s" }}>
              📍 Barishal, BD
            </div>
          </motion.div>
        </div>
      </div>

      {/* Social Links Row */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="w-full max-w-7xl mx-auto px-6 md:px-12 border-t border-slate-800/30 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 z-10"
      >
        <div className="text-slate-500 font-mono text-xs tracking-wider uppercase">
          Connect with me
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`h-11 w-11 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 bg-slate-900/40 transition-all duration-300 transform hover:-translate-y-1 ${social.color}`}
              aria-label={`Visit ${social.platform} of Rayhan Khan`}
              id={`social-${social.platform.toLowerCase()}`}
            >
              {getSocialIcon(social.icon)}
            </a>
          ))}
        </div>
      </motion.div>

      {/* CV / Resume Interactive Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
}
