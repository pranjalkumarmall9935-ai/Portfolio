import React from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  BellRing,
  Boxes,
  Download,
  Gauge,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Shield,
  ShieldCheck,
  Smartphone,
  Store,
  Zap,
} from "lucide-react";
import { personalInfo } from "./data/portfolioData";

const metricIcons = [Smartphone, Store, Gauge];

const deliverySignals = [
  { label: "Release", value: "Store-ready" },
  { label: "Stack", value: "RN + APIs" },
  { label: "Scale", value: "Enterprise" },
];

const heroSceneBadges = [
  {
    title: "Cross-platform",
    value: "Android + iOS",
    icon: Smartphone,
    className: "left-[4%] top-[12%] w-40 p-4",
  },
  {
    title: "Release flow",
    value: "OTA + stores",
    icon: BellRing,
    className: "right-[2%] top-[52%] w-44 p-4",
  },
  {
    title: "Architecture",
    value: "Scalable state",
    icon: Boxes,
    className: "left-[18%] bottom-[3%] w-44 p-4",
  },
];

export default function HeroSection({ onContactClick }) {
  const defaultImpactMetrics = [
    { value: "3+", label: "Internships completed", detail: "Hands-on industry experience building real-world apps" },
    { value: "15+", label: "Projects completed", detail: "Spanning React Native, Next.js, and 3D web apps" },
    { value: "500+", label: "LeetCode solved", detail: "Consistent DSA problem solver & competitive programmer" }
  ];

  const defaultProfileHighlights = [
    "Cross-platform App Delivery (Android & iOS)",
    "Figma-to-Code UI Precision",
    "Automated OTA & App Store CI/CD Pipelines"
  ];

  const impactMetrics = personalInfo?.impactMetrics || defaultImpactMetrics;
  const profileHighlights = personalInfo?.profileHighlights || defaultProfileHighlights;

  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 120, damping: 18 });
  const smoothY = useSpring(pointerY, { stiffness: 120, damping: 18 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [7, -7]);
  const spotlightX = useTransform(smoothX, [-0.5, 0.5], ["38%", "62%"]);
  const spotlightY = useTransform(smoothY, [-0.5, 0.5], ["38%", "62%"]);

  const fadeUp = {
    initial: { opacity: 0, y: reduceMotion ? 0 : 28 },
    animate: { opacity: 1, y: 0 },
  };

  const handleProfileMove = (event) => {
    if (reduceMotion) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const resetProfileTilt = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      id="hero"
      className="bg-hero relative flex min-h-screen items-start overflow-hidden px-4 pb-14 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-mesh absolute inset-0" />
        <div className="hero-ambient absolute inset-0" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent" />
      </div>

      <div className="section-container grid items-start gap-12 lg:grid-cols-[1.02fr_0.98fr] xl:gap-16">
        <motion.div
          className="relative z-10"
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.08 }}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
            <span className="badge-soft mb-6">
              <span className="h-2 w-2 rounded-full bg-[var(--success)]" />
              {personalInfo?.status || "Open to opportunities"}
            </span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-soft"
          >
            Production React Native engineer
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="max-w-3xl text-[clamp(2.75rem,8vw,4.5rem)] font-semibold leading-[1.03] text-[var(--text)] lg:text-[clamp(4rem,5.4vw,5rem)]"
          >
            {personalInfo?.name}
            <span className="block text-gradient-brand">
              {personalInfo?.headline || personalInfo?.tagline || ""}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg"
          >
            {personalInfo?.summary || personalInfo?.description || ""}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="mt-6 flex flex-wrap gap-2.5"
          >
            {(personalInfo?.heroBadges || ["React Native", "React.js", "TypeScript", "Android & iOS"]).map((badge) => (
              <span key={badge} className="badge-soft">
                <ShieldCheck size={14} />
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <motion.a
              href={personalInfo?.resume || "/Kishan_Resume.pdf"}
              target="_blank"
              rel="noreferrer"
              className="button-resume"
              whileHover={reduceMotion ? undefined : { y: -3, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={18} />
              View Resume
            </motion.a>
            <motion.button
              type="button"
              onClick={onContactClick}
              className="button-secondary"
              whileHover={reduceMotion ? undefined : { y: -3, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={18} />
              Contact Me
            </motion.button>
            <motion.a
              href={personalInfo?.github || "#"}
              target="_blank"
              rel="noreferrer"
              className="button-secondary h-[46px] w-[46px] !p-0"
              whileHover={reduceMotion ? undefined : { y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="GitHub"
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              href={personalInfo?.linkedin || "#"}
              target="_blank"
              rel="noreferrer"
              className="button-secondary h-[46px] w-[46px] !p-0"
              whileHover={reduceMotion ? undefined : { y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </motion.a>
          </motion.div>


        </motion.div>

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
        >
          <motion.div
            className="hero-device-scene"
            style={
              reduceMotion
                ? undefined
                : {
                    "--spotlight-x": spotlightX,
                    "--spotlight-y": spotlightY,
                  }
            }
          >


            <motion.div
              className="profile-frame hero-device hero-device-main immersive-panel"
              style={reduceMotion ? undefined : { rotateX, rotateY }}
              onMouseMove={handleProfileMove}
              onMouseLeave={resetProfileTilt}
              animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent dark:via-white/20" />
              <div className="hero-device-screen rounded-[20px] p-3 sm:p-4">
                <div className="rounded-md border border-[rgba(0,0,0,0.06)] dark:border-white/10 bg-[rgba(15,118,110,0.015)] dark:bg-[rgba(255,255,255,0.03)] p-4 backdrop-blur-sm sm:p-5">
                  <div className="flex flex-col gap-2">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-soft">
                        Profile
                      </p>
                      <h2 className="mt-1 text-xl font-semibold text-[var(--text)] sm:text-2xl">
                        React  Developer
                      </h2>
                    </div>
                    <div className="flex">
                      <span className="badge-soft">
                        <MapPin size={14} />
                        {personalInfo.city}
                      </span>
                    </div>
                  </div>

                  <div className="profile-photo-stage relative mt-5 flex h-52 sm:h-60 items-end justify-center overflow-hidden rounded-lg border border-[rgba(0,0,0,0.06)] dark:border-white/10 bg-[var(--accent-gradient-soft)] p-0">
                    <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.34),rgba(255,255,255,0.04)_42%,rgba(17,24,39,0.08))] dark:bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02)_42%,rgba(0,0,0,0.16))]" />
                    <motion.img
                      src={personalInfo.profileImage}
                      alt={`${personalInfo.name} profile`}
                      className="relative z-10 h-full max-h-full w-full object-contain object-bottom scale-110 drop-shadow-[0_34px_42px_rgba(15,23,42,0.28)]"
                      animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>

                  <div className="delivery-stack mt-5 grid grid-cols-3 gap-2">
                    {personalInfo.impactMetrics.map((item, index) => {
                      const Icon = metricIcons[index] || Smartphone;

                      return (
                        <motion.div
                          key={item.label}
                          className="delivery-tile rounded-lg border border-token bg-[var(--surface)] p-3"
                          animate={
                            reduceMotion
                              ? undefined
                              : { y: [0, index % 2 === 0 ? -4 : 4, 0] }
                          }
                          transition={{
                            duration: 4 + index,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <Icon size={15} className="mb-2 text-[var(--accent)]" />
                          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-soft leading-tight">
                            {item.label.replace(" completed", "").replace(" solved", "")}
                          </p>
                          <p className="mt-1 text-xs font-bold text-[var(--text)]">
                            {item.value}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>

                  <div className="mt-6 grid gap-3">
                    {personalInfo.profileHighlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-3 rounded-lg border border-token bg-[var(--surface)] px-4 py-3"
                      >
                        <ShieldCheck size={16} className="shrink-0 text-[var(--accent)]" />
                        <span className="text-sm text-muted leading-tight">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
