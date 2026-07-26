import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { achievements } from "./data/portfolioData";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="section-shell">
      <div className="section-container">
        <SectionHeading
          kicker="Achievements"
          title="Competitive Programming Profiles"
          description="My coding journey across LeetCode, GeeksforGeeks, and Codeforces showcases consistent problem-solving skills and competitive programming experience."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="achievement-card surface-card-strong rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Top Row */}
              <div className="flex items-center justify-between">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="h-12 w-12 object-contain"
                />

                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary inline-flex items-center gap-2"
                >
                  <ExternalLink size={15} />
                  View Profile
                </a>
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-semibold text-[var(--text)]">
                {achievement.title}
              </h3>

              {/* Metric */}
              <p className="mt-2 text-sm font-semibold text-[var(--accent)]">
                {achievement.metric}
              </p>

              {/* Description */}
              <p className="mt-4 text-sm leading-7 text-muted">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}