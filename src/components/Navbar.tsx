import { useState, useEffect, MouseEvent } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    // Scroll state for translucent background
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Active link highlighting via IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // triggers when section occupies the viewport center
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    menuItems.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const yOffset = -80; // height of the sticky navbar
      const y = target.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-navbar py-4 shadow-lg shadow-black/10" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-white">
            Rayhan <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">Khan</span>
          </span>
          <span className="h-2 w-2 rounded-full bg-cyan-400 group-hover:animate-ping"></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1">
          {menuItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-blue-600/20 text-cyan-400 border border-blue-500/30"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[72px] h-screen bg-slate-950/95 backdrop-blur-xl border-t border-slate-800/40 transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 gap-3">
          {menuItems.map((item, index) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                style={{ transitionDelay: `${index * 50}ms` }}
                className={`p-4 rounded-xl text-base font-semibold tracking-wide transition-all ${
                  isActive
                    ? "bg-blue-600/30 text-cyan-400 border-l-4 border-cyan-400 pl-6"
                    : "text-slate-300 hover:bg-slate-800/30 hover:text-white pl-4"
                }`}
              >
                {item.name}
              </a>
            );
          })}
          <div className="mt-8 px-4 flex flex-col gap-2">
            <span className="text-xs text-slate-500 uppercase tracking-widest font-mono">Available For Work</span>
            <span className="text-sm font-mono text-cyan-400">rayhankhan.cse9.bu@gmail.com</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
