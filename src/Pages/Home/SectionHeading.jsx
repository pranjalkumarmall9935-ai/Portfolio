import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
}) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "";

  return (
    <motion.div
      className={`mb-12 flex flex-col ${alignment}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {kicker ? <span className="section-kicker">{kicker}</span> : null}
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-copy">{description}</p> : null}
    </motion.div>
  );
}
