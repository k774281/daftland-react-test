import { motion } from "framer-motion";
import { tiltHover, fadeUp } from "../components/MotionUtils";
import React from "react";
import "./RecommendCard.scss";

export default function RecommendCard({ title, text }) {
  return (
    <motion.div
      className="recommend-card"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      whileHover={tiltHover.whileHover}
      whileTap={tiltHover.whileTap}
    >
      <div className="icon">🍾</div>

      <h4>{title || "Recommended Drink"}</h4>

      <p>
        {text ||
          "Try our signature cocktail — a perfect blend of flavors to elevate your night."}
      </p>
    </motion.div>
  );
}
