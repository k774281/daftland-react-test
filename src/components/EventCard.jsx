import { motion } from 'framer-motion';
import { tiltHover, fadeUp } from '../components/MotionUtils';
import React from "react";
import "./EventCard.scss";

export default function EventCard({ img, title, date }) {
  return (
    <motion.div
      className="event-card"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      whileHover={tiltHover.whileHover}
      whileTap={tiltHover.whileTap}
    >
      <img
        src={img || "https://source.unsplash.com/random/400x250?party"}
        alt={title || "event"}
      />

      <div className="info">
        <h4>{title || "活動標題"}</h4>
        <p className="date">{date || "Oct 30, 2017"}</p>
      </div>
    </motion.div>
  );
}
