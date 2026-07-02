import { MouseEvent } from "react";
import { Github, Linkedin, Facebook, ArrowUp } from "lucide-react";
import { personalInfo } from "../data";

export default function Footer() {
  const handleQuickScroll = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const yOffset = -80;
      const y = target.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const getYear = () => {
    return new Date().getFullYear() || 2026;
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        
        {/* Branding (6 columns) */}
        <div className="md:col-span-6 space-y-4">
          <a
            href="#home"
            onClick={(e) => handleQuickScroll(e, "#home")}
            className="font-display font-bold text-2xl tracking-tight text-white inline-block cursor-pointer"
          >
            Rayhan <span className="text-cyan-400">Khan</span>
          </a>
          <p className="text-slate-500 text-sm max-w-sm">
            Building scalable web applications with passion. Specialized in the MERN Stack and relational database workflows.
          </p>
        </div>

        {/* Quick Links (3 columns) */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "Skills", href: "#skills" },
              { name: "Projects", href: "#projects" },
              { name: "Contact", href: "#contact" },
            ].map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleQuickScroll(e, link.href)}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links (3 columns) */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
            Social Networks
          </h4>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/rayhankhan-cse"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-all"
              aria-label="GitHub Account"
              id="footer-social-github"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/rayhan-khan-bu"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-all"
              aria-label="LinkedIn Account"
              id="footer-social-linkedin"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://facebook.com/rayhankhan.cse"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-all"
              aria-label="Facebook Account"
              id="footer-social-facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Copywrite Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-slate-900 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
        <p>
          &copy; {getYear()} Rayhan Khan. All Rights Reserved.
        </p>
        <p className="font-mono">
          Designed & Engineered with ❤️ in Bangladesh
        </p>
      </div>
    </footer>
  );
}
