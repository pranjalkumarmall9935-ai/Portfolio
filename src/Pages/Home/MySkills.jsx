import React from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  Code2,
  Database,
  Layers3,
  MonitorSmartphone,
  Puzzle,
  Wrench,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skills } from "./data/portfolioData";

const iconMap = {
  "Programming Languages": Code2,
  "Frameworks & Libraries": Layers3,
  "Tools & Technologies": Wrench,
  "Soft Skills": Puzzle,
  Interests: MonitorSmartphone,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <div className="section-container">
        <SectionHeading
          kicker="Skills"
          title="Mobile delivery stack organized around real production responsibilities."
          description="The skill groups map directly to React Native delivery: interface systems, API state, backend services, cloud integrations, release tooling, and core engineering fundamentals."
        />

        <div className="skills-grid grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {Object.entries(skills).map(([category, items], index) => {
            const Icon = iconMap[category] || Code2;

            return (
              <motion.div
                key={category}
                className="skill-card surface-card rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                whileHover={{ y: -5, rotateX: 1, rotateY: -1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-md bg-[var(--accent-gradient-soft)] p-3 text-[var(--accent)]">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text)]">
                    {category}
                  </h3>
                </div>

                <div className="mt-4 h-px bg-[linear-gradient(90deg,rgba(15,118,110,0.45),rgba(37,99,235,0.14),transparent)] dark:bg-[linear-gradient(90deg,rgba(45,212,191,0.5),rgba(96,165,250,0.16),transparent)]" />

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {items.map((skill) => (
                    <span key={skill} className="chip-soft">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
