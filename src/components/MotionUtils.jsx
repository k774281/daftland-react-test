
import { motion } from "framer-motion";

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: .8, ease: "easeOut" } }
};

export const tiltHover = {
  whileHover: { rotateX: 2, rotateY: -2, boxShadow: "0 0 18px rgba(255, 30, 225, 0.45)" },
};
