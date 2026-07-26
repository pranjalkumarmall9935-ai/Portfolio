import React, { useState, forwardRef } from "react";
import {
  Check,
  ChevronDown,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { personalInfo } from "./data/portfolioData";

const topics = [
  { id: "", name: "Choose a topic" },
  { id: "internship", name: "Internship Opportunity" },
  { id: "job", name: "Full-Time Opportunity" },
  { id: "frontend", name: "Frontend Development" },
  { id: "mern", name: "MERN Stack Project" },
  { id: "opensource", name: "Open Source Collaboration" },
  { id: "portfolio", name: "Portfolio Discussion" },
  { id: "custom", name: "Other" },
];

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Instagram: Instagram,
  Twitter: Twitter,
};

const ContactMe = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: null, text: "" });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const socialLinks = [
    { label: "GitHub", href: personalInfo.github },
    { label: "LinkedIn", href: personalInfo.linkedin },
    { label: "Instagram", href: personalInfo.instagram },
    { label: "Twitter", href: personalInfo.twitter },
  ];

  return (
    <section id="contact" ref={ref} className="section-shell">
      <div className="section-container">
       <SectionHeading
  kicker="Contact"
  title="Let's build something amazing together."
  description="I'm an Information Technology student passionate about Frontend and MERN Stack development. Whether you have an internship, freelance project, collaboration, or just want to connect, I'd love to hear from you."
/>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-5">
            <div className="surface-card-strong rounded-lg p-6 sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-soft">
                Let&apos;s connect
              </p>
              <div className="mt-6 grid gap-4">
                <div className="flex items-center gap-4 rounded-lg border border-token bg-[var(--bg-subtle)] p-4">
                  <Mail className="text-[var(--accent)]" size={18} />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-soft">
                      Email
                    </p>
                    <p className="mt-1 text-sm font-medium text-[var(--text)] break-all">
                      {personalInfo.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-lg border border-token bg-[var(--bg-subtle)] p-4">
                  <Phone className="text-[var(--accent)]" size={18} />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-soft">
                      Phone
                    </p>
                    <p className="mt-1 text-sm font-medium text-[var(--text)]">
                      {personalInfo.phone}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map(({ label, href }) => {
                  const Icon = socialIcons[label];

                  return (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="button-secondary"
                    >
                      <Icon size={16} />
                      {label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="surface-card-strong rounded-lg p-6 sm:p-7">
            <form
              onSubmit={async (event) => {
                event.preventDefault();
                setStatus({ type: "sending", text: "Sending message..." });

                try {
                  const response = await fetch(
                    "https://formsubmit.co/ajax/pranjalkumarmall9935@gmail.com",
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                      },
                      body: JSON.stringify({
                        Name: formData.name,
                        Email: formData.email,
                        Topic: formData.topic === "custom" ? formData.customTopic : formData.topic,
                        Message: formData.message,
                      }),
                    }
                  );

                  const result = await response.json();

                  if (result.success === "true") {
                    setStatus({ type: "success", text: "Message sent successfully!" });
                    setFormData({ name: "", email: "", topic: "", customTopic: "", message: "" });
                    
                    setTimeout(() => {
                      setStatus({ type: null, text: "" });
                    }, 4000);
                  } else {
                    setStatus({ type: "error", text: "Failed to send message." });
                    setTimeout(() => {
                      setStatus({ type: null, text: "" });
                    }, 4000);
                  }
                } catch {
                  setStatus({ type: "error", text: "Something went wrong. Please try again." });
                  setTimeout(() => {
                    setStatus({ type: null, text: "" });
                  }, 4000);
                }
              }}
              className="space-y-5"
            >
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(event) =>
                  setFormData((current) => ({ ...current, name: event.target.value }))
                }
                required
                className="w-full rounded-lg border border-token bg-[var(--bg-subtle)] px-4 py-3.5 text-sm text-[var(--text)] outline-none transition placeholder:text-soft focus:border-[var(--border-strong)]"
              />

              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(event) =>
                  setFormData((current) => ({ ...current, email: event.target.value }))
                }
                required
                className="w-full rounded-lg border border-token bg-[var(--bg-subtle)] px-4 py-3.5 text-sm text-[var(--text)] outline-none transition placeholder:text-soft focus:border-[var(--border-strong)]"
              />

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex w-full items-center justify-between rounded-lg border border-token bg-[var(--bg-subtle)] px-4 py-3.5 text-left text-sm text-[var(--text)] outline-none transition placeholder:text-soft focus:border-[var(--border-strong)]"
                >
                  <span>
                    {topics.find((topic) => topic.id === formData.topic)?.name ||
                      "Choose a topic"}
                  </span>
                  <ChevronDown 
                    size={18} 
                    className="text-soft transition-transform duration-200" 
                    style={{ transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }} 
                  />
                </button>

                {isDropdownOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setIsDropdownOpen(false)} 
                    />
                    <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-lg border border-token bg-[var(--surface-strong)] shadow-token-strong">
                      {topics.map((topic) => {
                        const isSelected = topic.id === formData.topic;
                        return (
                          <button
                            key={topic.id || "default"}
                            type="button"
                            onClick={() => {
                              setFormData((current) => ({ ...current, topic: topic.id }));
                              setIsDropdownOpen(false);
                            }}
                            className="flex w-full items-center justify-between gap-3 cursor-pointer px-4 py-3 text-left text-sm text-muted hover:bg-[var(--accent-gradient-soft)] hover:text-[var(--text)] transition duration-150"
                          >
                            <span>{topic.name}</span>
                            {isSelected ? <Check size={16} className="text-[var(--accent)] shrink-0" /> : null}
                          </button>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>

              {formData.topic === "custom" && (
                <input
                  type="text"
                  placeholder="Specify custom topic"
                  value={formData.customTopic || ""}
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, customTopic: event.target.value }))
                  }
                  required
                  className="w-full rounded-lg border border-token bg-[var(--bg-subtle)] px-4 py-3.5 text-sm text-[var(--text)] outline-none transition placeholder:text-soft focus:border-[var(--border-strong)]"
                />
              )}

              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(event) =>
                  setFormData((current) => ({ ...current, message: event.target.value }))
                }
                required
                rows="6"
                className="w-full resize-none rounded-lg border border-token bg-[var(--bg-subtle)] px-4 py-3.5 text-sm text-[var(--text)] outline-none transition placeholder:text-soft focus:border-[var(--border-strong)]"
              />

              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.99 }}
                className="button-primary w-full"
              >
                Send Message
              </motion.button>

              <AnimatePresence>
                {status.type && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-sm font-semibold backdrop-blur-md ${
                      status.type === "success"
                        ? "border-[rgba(16,185,129,0.2)] bg-[rgba(16,185,129,0.06)] text-emerald-500"
                        : status.type === "error"
                        ? "border-[rgba(239,68,68,0.2)] bg-[rgba(239,68,68,0.06)] text-red-500"
                        : "border-token bg-[var(--bg-subtle)] text-muted"
                    }`}
                  >
                    {status.type === "success" && (
                      <Check size={16} className="shrink-0 text-emerald-500" />
                    )}
                    <span>{status.text}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactMe;
