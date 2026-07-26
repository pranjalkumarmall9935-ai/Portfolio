import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, CalendarRange, BadgeCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education } from "./data/portfolioData";

export default function EducationSection() {
  return (
    <section id="education" className="section-shell">
      <div className="section-container">
        <SectionHeading
          kicker="Education"
title="Academic foundation in Information Technology and software development."
description="My Information Technology background has strengthened my skills in programming, data structures, algorithms, databases, operating systems, and computer networks, providing a solid foundation for building efficient and scalable software solutions."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {education.map((item, index) => (
            <motion.div
              key={item.title}
              className="surface-card-strong rounded-lg p-6 flex flex-col justify-between"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div>
                <div className="inline-flex rounded-md bg-[var(--accent-gradient-soft)] p-3 text-[var(--accent)]">
                  <GraduationCap size={24} />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-soft">
                  {item.period}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-[var(--text)]">
                  {item.institution}
                </h3>
                <p className="mt-2 text-sm font-semibold text-[var(--accent)]">
                  {item.title}
                </p>
                <p className="mt-1 text-xs text-muted">
                  {item.subtitle}
                </p>
                
                {item.extra && (
                  <ul className="mt-4 space-y-2 text-xs text-muted">
                    {item.extra.map((ex) => (
                      <li key={ex} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-6 border-t border-token pt-4 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-soft">
                  {item.gradeLabel}
                </span>
                <span className="text-sm font-bold text-[var(--text)]">
                  {item.grade}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
