import React from "react";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Building2,
  CalendarRange,
  Gem,
  MapPinned,
  Rocket,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experience, personalInfo } from "./data/portfolioData";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-shell">
      <div className="section-container">
        <SectionHeading
          kicker="Experience"
          title="Hands-on experience building cross-platform products in real delivery environments."
          description="The timeline below reflects the exact chronology of my recent mobile development work, with emphasis on production ownership, enterprise app delivery, and Android plus iOS release experience."
        />

        <div className="mb-10 grid gap-4 md:grid-cols-3">
          {personalInfo.impactMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="timeline-card surface-card rounded-lg p-5"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
            >
              <div className="flex items-center gap-3">
                <span className="rounded-md bg-[var(--accent-gradient-soft)] p-2 text-[var(--accent)]">
                  <Rocket size={18} />
                </span>
                <p className="text-2xl font-semibold text-[var(--text)]">
                  {metric.value}
                </p>
              </div>
              <p className="mt-3 text-sm font-semibold text-[var(--text)]">
                {metric.label}
              </p>
              <p className="mt-1 text-xs leading-5 text-soft">{metric.detail}</p>
            </motion.div>
          ))}
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="timeline-line absolute bottom-0 left-4 top-0 w-px md:left-1/2 md:-translate-x-1/2" />

          {experience.map((item, index) => (
            <motion.div
              key={`${item.company}-${item.role}`}
              className="timeline-item relative mb-8 grid gap-4 pl-10 md:grid-cols-2 md:pl-0"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <div className="timeline-dot absolute left-4 top-8 md:left-1/2 md:top-10" />
              <div
                className={`timeline-connector absolute left-4 top-10 md:top-12 ${
                  index % 2 === 0 ? "md:left-1/2 md:right-auto" : "md:right-1/2 md:left-auto"
                }`}
              />

              <div className={`hidden md:block ${index % 2 === 0 ? "md:pr-10 md:order-1" : "md:pl-10 md:order-2"}`} />

              <div className={`relative ${index % 2 === 0 ? "md:pl-10 md:order-2" : "md:pr-10 md:order-1"}`}>
                <div className="timeline-card surface-card-strong relative rounded-lg p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <span className="badge-soft">
                        <BriefcaseBusiness size={14} />
                        {item.role || item.title}
                      </span>
                      <h3 className="mt-4 text-2xl font-semibold text-[var(--text)]">
                        {item.company}
                      </h3>
                    </div>
                    <div className="rounded-lg border border-token bg-[var(--bg-subtle)] px-4 py-2 text-sm font-medium text-muted">
                      {item.type || "Remote"}
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-4 text-sm text-muted">
                    <span className="inline-flex items-center gap-2">
                      <CalendarRange size={16} className="text-[var(--accent)]" />
                      {item.duration || item.dates}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <MapPinned size={16} className="text-[var(--accent)]" />
                      {item.location || "Remote"}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Building2 size={16} className="text-[var(--accent)]" />
                      {item.company}
                    </span>
                  </div>

                  <div 
                    className="mt-6 text-sm leading-7 text-muted experience-description"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />

                  {item.credential ? (
                    <div className="mt-5 flex items-center gap-3 rounded-lg border border-token bg-[var(--bg-subtle)] px-4 py-3 text-sm font-semibold text-[var(--text)]">
                      <Gem size={16} className="text-[var(--accent-2)]" />
                      {item.credential}
                    </div>
                  ) : null}

                  {item.skills?.length ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span key={skill} className="chip-soft">
                          {skill}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
