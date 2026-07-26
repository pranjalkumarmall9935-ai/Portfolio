import React from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { BadgeCheck, Briefcase, GraduationCap, Mail, MapPin, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { personalInfo } from "./data/portfolioData";

const details = [
  { label: "Location", value: personalInfo?.city || "", icon: MapPin },
  { label: "Email", value: personalInfo?.email || "", icon: Mail },
  { label: "Education", value: personalInfo?.degree || personalInfo?.degreeMeta || "", icon: GraduationCap },
  { label: "Current Role", value: "React Native Developer", icon: Briefcase },
];

export default function AboutSection() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 110, damping: 20 });
  const smoothY = useSpring(pointerY, { stiffness: 110, damping: 20 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);

  const handlePortraitMove = (event) => {
    if (reduceMotion) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const resetPortraitTilt = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section id="about" className="section-shell">
      <div className="section-container">
        <SectionHeading
          kicker="About"
          title="React Native delivery experience across production, enterprise, and app-store workflows."
          description="My work sits where mobile architecture, product execution, and release quality meet: reusable UI systems, API-heavy screens, performance tuning, OTA updates, notifications, and Android plus iOS deployment workflows."
        />

        <div className="grid items-center gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <motion.div
            className="about-portrait surface-card-strong relative overflow-hidden rounded-lg p-3"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            style={reduceMotion ? undefined : { rotateX, rotateY }}
            onMouseMove={handlePortraitMove}
            onMouseLeave={resetPortraitTilt}
          >
            <div className="about-portrait-grid absolute inset-0" />
            <div className="about-portrait-light absolute inset-0" />
            <div className="relative z-10 overflow-hidden rounded-md">
              <img
                src={personalInfo.aboutImage}
                alt={`${personalInfo.name} working portrait`}
                className="aspect-[4/4.5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(0,0,0,0.42))]" />
            </div>

            <motion.div
              className="absolute bottom-6 left-6 right-6 z-20 rounded-lg border border-white/20 bg-black/42 p-4 text-white shadow-token backdrop-blur-xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.25 }}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                    Working style
                  </p>
                  <p className="mt-1 text-lg font-semibold">Figma to release, with clean handoffs</p>
                </div>
                <Wrench size={22} className="text-[var(--accent)]" />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="grid gap-5"
          >
            <div className="surface-card rounded-lg p-6 sm:p-7">
              <p className="text-sm leading-8 text-muted sm:text-base">
                {personalInfo?.summary || personalInfo?.description || ""}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {details.map(({ label, value, icon: Icon }) => (
                <div key={label} className="surface-card rounded-lg p-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-md bg-[var(--accent-gradient-soft)] p-3 text-[var(--accent)]">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-soft">
                        {label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-[var(--text)]">
                        {value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="surface-card rounded-lg p-6 sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-soft">
                Production strengths
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {(personalInfo?.aboutHighlights || [
                  "Clean Code Architecture",
                  "Performance Tuning",
                  "API Integration",
                  "State Management",
                  "Native Module Bridging"
                ]).map((item) => (
                  <span key={item} className="chip-soft">
                    <BadgeCheck size={13} />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
