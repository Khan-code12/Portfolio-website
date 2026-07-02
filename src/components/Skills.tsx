import { useState, ReactNode } from "react";
import { motion } from "motion/react";
import {
  FileCode, Palette, Wind, Layers, Code, Cpu, Zap, Server, Terminal, Link,
  ShieldCheck, Database, GitBranch, Github, Laptop, CheckSquare, Lightbulb,
  MessageSquare, Users, Award, Clock, Play, RefreshCw, Table, Activity,
  Globe, Key, UserCheck, Sliders, AlertTriangle, Lock, Cookie, Calendar,
  DatabaseBackup, HardDrive, GitFork, Network, Maximize2, Workflow, Search,
  Filter, ArrowDown, Settings, Package, GitMerge, Compass, Grid, Heart,
  FileText, Binary, Boxes, Smartphone, EyeOff, BadgeCheck, Share2,
  CloudLightning, Cloud, Sparkles, MessageCircle, Brain, Folder, Fingerprint,
  Bot, Shuffle, TrendingUp, Flame, Box, BookOpen, BrainCircuit, RotateCcw
} from "lucide-react";
import { skillCategories } from "../data";
import { Skill } from "../types";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const iconMap: Record<string, ReactNode> = {
    Html5: <FileCode className="h-5 w-5 text-amber-500" />,
    Css3: <Palette className="h-5 w-5 text-blue-500" />,
    Wind: <Wind className="h-5 w-5 text-sky-400" />,
    Layers: <Layers className="h-5 w-5 text-indigo-400" />,
    Code: <Code className="h-5 w-5 text-yellow-500" />,
    Cpu: <Cpu className="h-5 w-5 text-cyan-400" />,
    Zap: <Zap className="h-5 w-5 text-yellow-400" />,
    Server: <Server className="h-5 w-5 text-emerald-400" />,
    Terminal: <Terminal className="h-5 w-5 text-slate-300" />,
    Link: <Link className="h-5 w-5 text-teal-400" />,
    ShieldCheck: <ShieldCheck className="h-5 w-5 text-rose-400" />,
    Database: <Database className="h-5 w-5 text-emerald-500" />,
    DatabaseBackup: <DatabaseBackup className="h-5 w-5 text-green-500" />,
    Coins: <Layers className="h-5 w-5 text-amber-400" />,
    SquarePlay: <Play className="h-5 w-5 text-red-500" />,
    Settings: <Settings className="h-5 w-5 text-slate-400" />,
    GitBranch: <GitBranch className="h-5 w-5 text-orange-500" />,
    Github: <Github className="h-5 w-5 text-white" />,
    Laptop: <Laptop className="h-5 w-5 text-cyan-500" />,
    CheckSquare: <CheckSquare className="h-5 w-5 text-emerald-400" />,
    Figma: <Palette className="h-5 w-5 text-pink-500" />,
    Lightbulb: <Lightbulb className="h-5 w-5 text-yellow-300" />,
    MessageSquare: <MessageSquare className="h-5 w-5 text-sky-500" />,
    Users: <Users className="h-5 w-5 text-indigo-400" />,
    Award: <Award className="h-5 w-5 text-amber-500" />,
    Clock: <Clock className="h-5 w-5 text-teal-400" />,
    RefreshCw: <RefreshCw className="h-5 w-5 text-sky-500" />,
    Table: <Table className="h-5 w-5 text-indigo-500" />,
    Activity: <Activity className="h-5 w-5 text-rose-500" />,
    Globe: <Globe className="h-5 w-5 text-emerald-400" />,
    Key: <Key className="h-5 w-5 text-yellow-400" />,
    UserCheck: <UserCheck className="h-5 w-5 text-cyan-400" />,
    Sliders: <Sliders className="h-5 w-5 text-slate-400" />,
    AlertTriangle: <AlertTriangle className="h-5 w-5 text-amber-500" />,
    Lock: <Lock className="h-5 w-5 text-rose-500" />,
    Cookie: <Cookie className="h-5 w-5 text-amber-600" />,
    Calendar: <Calendar className="h-5 w-5 text-sky-400" />,
    HardDrive: <HardDrive className="h-5 w-5 text-slate-400" />,
    GitFork: <GitFork className="h-5 w-5 text-orange-400" />,
    Network: <Network className="h-5 w-5 text-cyan-400" />,
    Maximize2: <Maximize2 className="h-5 w-5 text-indigo-400" />,
    Workflow: <Workflow className="h-5 w-5 text-blue-400" />,
    SearchCode: <Search className="h-5 w-5 text-indigo-400" />,
    Filter: <Filter className="h-5 w-5 text-cyan-400" />,
    ArrowDownAZ: <ArrowDown className="h-5 w-5 text-slate-300" />,
    Package: <Package className="h-5 w-5 text-amber-400" />,
    GitMerge: <GitMerge className="h-5 w-5 text-orange-400" />,
    Compass: <Compass className="h-5 w-5 text-rose-400" />,
    Grid: <Grid className="h-5 w-5 text-violet-400" />,
    Heart: <Heart className="h-5 w-5 text-rose-500" />,
    FileText: <FileText className="h-5 w-5 text-sky-400" />,
    Binary: <Binary className="h-5 w-5 text-blue-500" />,
    Boxes: <Boxes className="h-5 w-5 text-indigo-400" />,
    Smartphone: <Smartphone className="h-5 w-5 text-emerald-400" />,
    EyeOff: <EyeOff className="h-5 w-5 text-rose-400" />,
    BadgeCheck: <BadgeCheck className="h-5 w-5 text-emerald-400" />,
    Share2: <Share2 className="h-5 w-5 text-teal-400" />,
    CloudLightning: <CloudLightning className="h-5 w-5 text-cyan-400" />,
    Cloud: <Cloud className="h-5 w-5 text-sky-400" />,
    Play: <Play className="h-5 w-5 text-emerald-400" />,
    Sparkles: <Sparkles className="h-5 w-5 text-yellow-300" />,
    MessageCircle: <MessageCircle className="h-5 w-5 text-sky-400" />,
    Brain: <Brain className="h-5 w-5 text-pink-400" />,
    FolderSearch: <Folder className="h-5 w-5 text-indigo-400" />,
    Search: <Search className="h-5 w-5 text-sky-400" />,
    Fingerprint: <Fingerprint className="h-5 w-5 text-teal-400" />,
    Bot: <Bot className="h-5 w-5 text-indigo-400" />,
    Shuffle: <Shuffle className="h-5 w-5 text-slate-400" />,
    TrendingUp: <TrendingUp className="h-5 w-5 text-rose-400" />,
    Flame: <Flame className="h-5 w-5 text-orange-500" />,
    Box: <Box className="h-5 w-5 text-slate-400" />,
    BookOpen: <BookOpen className="h-5 w-5 text-emerald-400" />,
    BrainCircuit: <Cpu className="h-5 w-5 text-cyan-400" />,
    FileJson: <FileCode className="h-5 w-5 text-indigo-400" />,
    Chrome: <Globe className="h-5 w-5 text-emerald-400" />,
    Container: <Box className="h-5 w-5 text-sky-400" />,
  };

  const getIcon = (iconName: string) => {
    return iconMap[iconName] || <Code className="h-5 w-5 text-blue-400" />;
  };

  const getExperienceLevel = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Learning";
  };

  // Stats Counters as requested
  const statsCounters = [
    {
      value: "25+",
      label: "Technologies Learned",
      desc: "In-depth expertise across modern stacks",
      gradient: "from-blue-500 to-cyan-400",
      icon: <Cpu className="h-6 w-6 text-cyan-400 animate-pulse" />
    },
    {
      value: "50+",
      label: "Programming Problems Solved",
      desc: "Strong logical, analytical & coding skills",
      gradient: "from-purple-500 to-pink-500",
      icon: <Award className="h-6 w-6 text-pink-400" />
    },
    {
      value: "10+",
      label: "Full Stack Projects Built",
      desc: "Robust production-ready web apps",
      gradient: "from-emerald-500 to-teal-400",
      icon: <Zap className="h-6 w-6 text-emerald-400" />
    },
    {
      value: "∞",
      label: "Always Learning",
      desc: "Upgrading daily with new technologies",
      gradient: "from-amber-500 to-orange-500",
      icon: <Flame className="h-6 w-6 text-orange-400" />
    }
  ];

  const filteredCategories = activeCategory === "all"
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Decorative gradient backgrounds */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-indigo-600/5 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/30">
            Professional Competencies
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
            Expertise & <span className="text-blue-500">Skills Portfolio</span>
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mt-4"></div>
          <p className="text-slate-400 max-w-2xl mt-4 text-sm md:text-base">
            An overview of technical disciplines, languages, frameworks, and modern methodologies I leverage to design clean, high-performance software.
          </p>
        </div>

        {/* 1. Interactive Counter Cards with Floating Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {statsCounters.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl relative overflow-hidden group shadow-lg shadow-slate-950/50"
            >
              {/* Highlight background glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 rounded-full blur-2xl group-hover:bg-blue-600/15 transition-all duration-300"></div>
              
              {/* Top Row with icon and dynamic gradient indicator */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800/50">
                  {stat.icon}
                </div>
                <div className={`h-1.5 w-12 bg-gradient-to-r ${stat.gradient} rounded-full`}></div>
              </div>

              {/* Stat Value & Label */}
              <div className="space-y-1">
                <h4 className={`text-3xl font-display font-extrabold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  {stat.value}
                </h4>
                <p className="text-sm font-semibold text-slate-200 tracking-tight leading-snug">
                  {stat.label}
                </p>
                <p className="text-xs text-slate-400 font-medium">
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2. Professional Category Filter Navigator */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16 max-w-4xl mx-auto">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer ${
              activeCategory === "all"
                ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25"
                : "bg-slate-900/80 border border-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-900"
            }`}
          >
            All Disciplines ({skillCategories.length})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25"
                  : "bg-slate-900/80 border border-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-900"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* 3. Categorized Skill Bento Cards with Animated Borders and Glowing Effects */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCategories.map((cat, catIdx) => (
            <motion.div
              layout
              key={cat.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Math.min(catIdx * 0.05, 0.3) }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] backdrop-blur-xl"
            >
              {/* Dynamic animated neon-glowing top-right border accent */}
              <div className="absolute top-0 right-0 w-32 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute top-0 right-0 h-32 w-[2px] bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Title Header */}
              <h4 className="text-lg font-display font-bold text-white border-b border-slate-800/60 pb-4 mb-6 flex items-center justify-between">
                <span className="bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-400 transition-all duration-300">
                  {cat.title}
                </span>
                <span className="text-xs bg-slate-950/80 px-2.5 py-1 rounded-md border border-slate-800/50 text-slate-400 font-mono">
                  {cat.skills.length} skills
                </span>
              </h4>

              {/* Skill Items List */}
              <div className="space-y-6 flex-1">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="group/item">
                    {/* Icon, Title, Level Info */}
                    <div className="flex items-center justify-between text-sm mb-2">
                      <div className="flex items-center gap-2.5 text-slate-300 group-hover/item:text-white transition-colors">
                        <span className="transition-transform duration-300 group-hover/item:scale-110">
                          {getIcon(skill.iconName)}
                        </span>
                        <span className="font-semibold text-[13px] md:text-sm tracking-tight text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 group-hover/item:text-cyan-400 transition-colors">
                          {getExperienceLevel(skill.level)}
                        </span>
                        <span className="font-mono text-xs font-bold text-slate-400 group-hover/item:text-cyan-300 transition-colors">
                          {skill.level}%
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-900/60 p-[1px]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
