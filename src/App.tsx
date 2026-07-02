import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import EducationExperience from "./components/EducationExperience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0F172A] text-slate-50 selection:bg-blue-600/30 selection:text-cyan-300">
      {/* Dynamic Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <EducationExperience />
        <Projects />
        <Contact />
      </main>

      {/* Footer Area */}
      <Footer />

      {/* Scrolling utility */}
      <ScrollToTop />
    </div>
  );
}

