import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "./data/portfolioData";

export default function MyPortfolio() {
  return (
    <section id="projects" className="section-shell">
      <div className="section-container">
        <SectionHeading
          kicker="Projects"
          title="Featured Projects"
          description="A collection of projects showcasing my skills in full-stack development, frontend engineering, and problem-solving."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card surface-card-strong overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              whileHover={{ y: -6 }}
            >
              <div className="relative overflow-hidden border-b border-token">
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-[16/10] w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-soft">
                      {project.role}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold text-[var(--text)]">
                      {project.title}
                    </h3>
                  </div>

                  <span className="rounded-md bg-[var(--accent-gradient-soft)] p-2 text-[var(--accent)]">
                    <ArrowUpRight size={16} />
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-muted">
                  {project.description}
                </p>

                {project.outcome && (
                  <p className="mt-4 border-l-2 border-[var(--accent)] pl-4 text-sm leading-7 text-[var(--text)]">
                    {project.outcome}
                  </p>
                )}

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {project.tech.map((tech) => (
                    <span key={tech} className="chip-soft">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="button-secondary"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="button-secondary"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}