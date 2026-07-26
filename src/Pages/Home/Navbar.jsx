import React, { useContext, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../../App";

const navItems = [
  { label: "About", id: "about" },
  { label: "Education", id: "education" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Achievements", id: "achievements" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-lg border border-token bg-[var(--bg-elevated)] px-4 shadow-token backdrop-blur-xl sm:px-6">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-left"
        >
          <span className="block text-xs font-semibold uppercase tracking-[0.24em] text-soft">
            Portfolio
          </span>
          
        </button>

        <div className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className="rounded-lg px-4 py-2 text-sm font-medium text-muted transition hover:bg-white/40 hover:text-[var(--text)] dark:hover:bg-white/5"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-token bg-[var(--bg-subtle)] text-[var(--text)] transition hover:border-[var(--border-strong)]"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-token bg-[var(--bg-subtle)] text-[var(--text)] transition hover:border-[var(--border-strong)] lg:hidden"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 max-w-6xl rounded-lg border border-token bg-[var(--bg-elevated)] p-3 shadow-token-strong backdrop-blur-xl lg:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className="block w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-muted transition hover:bg-white/40 hover:text-[var(--text)] dark:hover:bg-white/5"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
