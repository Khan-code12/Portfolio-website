import { useState, FormEvent, ChangeEvent } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare } from "lucide-react";
import { personalInfo } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/rayhankhan.cse9.bu@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject ? `Portfolio Contact: ${formData.subject}` : "New Portfolio Message!",
          message: formData.message,
          _honey: "" // Spam protection honeypot
        })
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        
        // Reset back to idle after a few seconds
        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === "error") setStatus("idle");
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Background glow node */}
      <div className="absolute bottom-[-10%] right-[5%] w-96 h-96 rounded-full bg-blue-600/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
            Contact <span className="text-blue-500">Me</span>
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Contact details */}
          <div className="lg:col-span-5 flex flex-col justify-start gap-8">
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white">
                Let's discuss your projects
              </h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Whether you have an upcoming project in mind, seek a dedicated intern/entry-level MERN developer, or simply wish to say hello—feel free to drop me a line!
              </p>
            </div>

            {/* Quick Details Cards */}
            <div className="space-y-4">
              
              {/* Email Card */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/50 hover:bg-slate-900 group transition-all"
              >
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 text-cyan-400 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest">Email</h4>
                  <p className="text-sm md:text-base font-semibold text-white mt-0.5">{personalInfo.email}</p>
                </div>
              </a>

              {/* Phone & WhatsApp Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-900 group transition-all"
                >
                  <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 rounded-xl group-hover:bg-cyan-500 group-hover:text-white transition-all">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest">Phone</h4>
                    <p className="text-xs md:text-sm font-semibold text-white mt-0.5">{personalInfo.phone}</p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${personalInfo.whatsapp.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/50 hover:bg-slate-900 group transition-all"
                >
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest">WhatsApp</h4>
                    <p className="text-xs md:text-sm font-semibold text-white mt-0.5">{personalInfo.whatsapp}</p>
                  </div>
                </a>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                <div className="p-3 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-xl">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest">Location</h4>
                  <p className="text-sm md:text-base font-semibold text-white mt-0.5">{personalInfo.location}</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Professional Glassmorphism Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-10 rounded-3xl glass-panel relative border border-slate-800"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Status Messages */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-3 text-sm"
                  >
                    <CheckCircle className="h-5 w-5 shrink-0" />
                    <span>Thank you! Your message has been sent successfully. I'll respond as soon as possible.</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm"
                  >
                    An error occurred while sending your message. Please try again or email directly at <a href="mailto:rayhankhan.cse9.bu@gmail.com" className="underline text-blue-400 hover:text-blue-300">rayhankhan.cse9.bu@gmail.com</a>.
                  </motion.div>
                )}

                {/* Name & Email Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Collaboration Proposal"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-500/10 hover:shadow-cyan-400/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>

              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
