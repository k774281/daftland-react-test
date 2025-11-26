import React from "react";
import { motion } from "framer-motion";
import { fadeUp, tiltHover } from "../components/MotionUtils";
import "./ReviewCard.scss";

export default function ReviewCard({ name = "Alice", text }) {
  return (
    <motion.div
      className="review-card"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      whileHover={tiltHover.whileHover}
      whileTap={tiltHover.whileTap}
    >
      <div className="avatar">
        {name[0]}
      </div>

      <div className="body">
        <div className="meta">
          <strong>{name}</strong>
          <span className="stars">★★★★★</span>
        </div>

        <p>
          {text ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque."}
        </p>
      </div>
    </motion.div>
  );
}
