import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  ArrowUp,
  Mail,
  Heart,
} from "lucide-react";
import { personalInfo } from "./data/portfolioData";

const quickLinks = ["about", "experience", "skills", "projects", "contact"];

export default function Footer() {
  const socialLinks = [
    {
      label: "GitHub",
      href: personalInfo?.github,
      icon: Github,
      color:
        "hover:bg-[#24292e] hover:text-white dark:hover:bg-white dark:hover:text-[#24292e]",
      shadow: "hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]",
    },
    {
      label: "LinkedIn",
      href: personalInfo?.linkedin,
      icon: Linkedin,
      color: "hover:bg-[#0077b5] hover:text-white",
      shadow: "hover:shadow-[0_0_20px_rgba(0,119,181,0.3)]",
    },
    {
      label: "Instagram",
      href: personalInfo?.instagram,
      icon: Instagram,
      color:
        "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white",
      shadow: "hover:shadow-[0_0_20px_rgba(238,42,123,0.3)]",
    },
    {
      label: "Twitter",
      href: personalInfo?.twitter,
      icon: Twitter,
      color: "hover:bg-[#1da1f2] hover:text-white",
      shadow: "hover:shadow-[0_0_20px_rgba(29,161,242,0.3)]",
    },
  ].filter((link) => link.href);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative z-10 px-4 pb-6 pt-4 sm:px-6 lg:px-8">
      {/* Background Glow */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[200px] bg-[var(--section-glow)] opacity-40 z-[-1]" />

      <div className="section-container">
        <div className="surface-card relative overflow-hidden rounded-2xl border border-token py-6 px-6 sm:px-10 sm:py-8 backdrop-blur-md">
          {/* Decorative Glow */}
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-[var(--accent)] opacity-[0.04] blur-3xl" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[var(--accent-2)] opacity-[0.04] blur-3xl" />

          <div className="grid gap-8 lg:grid-cols-12">
            {/* About */}
            <div className="flex flex-col items-start gap-4 lg:col-span-5">
              <span className="badge-soft text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--success)] animate-pulse" />
                Available for Frontend & Full-Stack Development
              </span>

              <div>
                <h2 className="text-2xl font-bold uppercase tracking-[0.24em] text-[var(--text)]">
                  {personalInfo?.name}
                  <span className="text-[var(--accent)]">.</span>
                </h2>

                <p className="mt-1 text-xs uppercase tracking-widest text-soft">
                  Frontend & MERN Stack Developer
                </p>
              </div>

              <p className="max-w-sm text-sm leading-7 text-muted">
                Passionate Information Technology student specializing in
                Frontend and MERN Stack development. I enjoy building modern,
                responsive web applications with React.js, Next.js, and
                JavaScript while continuously improving my problem-solving
                skills through Data Structures and Algorithms.
              </p>

              {personalInfo?.email && (
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] transition hover:text-[var(--accent-2)]"
                >
                  <Mail size={16} />
                  {personalInfo.email}
                </a>
              )}
            </div>

            {/* Navigation */}
            <div className="flex flex-col gap-4 lg:col-span-3 lg:col-start-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-soft">
                Navigation
              </p>

              <nav className="flex flex-col gap-2.5">
                {quickLinks.map((link) => (
                  <button
                    key={link}
                    type="button"
                    onClick={() =>
                      document
                        .getElementById(link)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="group flex w-full max-w-[170px] items-center justify-between text-left text-sm font-semibold text-muted transition hover:text-[var(--text)]"
                  >
                    <span>
                      {link.charAt(0).toUpperCase() + link.slice(1)}
                    </span>

                    <span className="h-px w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-8" />
                  </button>
                ))}
              </nav>
            </div>

            {/* Social */}
            <div className="flex flex-col gap-4 lg:col-span-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-soft">
                Let's Connect
              </p>

              <p className="text-sm text-muted">
                Explore my projects, open-source contributions, and connect
                with me for internship or full-time opportunities.
              </p>

              <div className="mt-2 flex flex-wrap gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -4, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex h-11 w-11 items-center justify-center rounded-lg border border-token bg-[var(--bg-subtle)] text-muted transition-all duration-300 ${link.color} ${link.shadow}`}
                      title={link.label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-8 flex flex-col gap-4 border-t border-token pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-center gap-2 text-xs text-soft">
              <span>
                © {new Date().getFullYear()} {personalInfo?.name}. All rights
                reserved.
              </span>

              <span className="text-muted/40">•</span>

              <span className="flex items-center gap-1">
                Crafted with{" "}
                <Heart
                  size={12}
                  className="fill-red-500 text-red-500"
                />{" "}
                using React & Tailwind CSS
              </span>
            </p>

            <motion.button
              type="button"
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="button-secondary flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold shadow-token"
            >
              <span>Back to Top</span>
              <ArrowUp
                size={14}
                className="animate-bounce text-[var(--accent)]"
              />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}