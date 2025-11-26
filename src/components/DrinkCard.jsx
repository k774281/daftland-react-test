import React from "react";
import {Link} from 'react-router-dom';

//Animation
import { motion } from 'framer-motion';
import { tiltHover, fadeUp } from '../components/MotionUtils';

//styles
import "./DrinkCard.scss";

export default function DrinkCard({ id, title, text, image }) {
  return (
    <motion.article
      className="drink-card"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      whileHover={tiltHover.whileHover}
      whileTap={tiltHover.whileTap}
    >
      <div className="thumb">
        <img 
          src={image || "https://source.unsplash.com/400x400/?cocktail"} 
          alt={title || "drink"} 
        />
      </div>

      <div className="meta">
        <h4>{title || "Signature Drink"}</h4>
        <p>{text || "A special blend of flavors crafted to elevate your night."}</p>
        <Link to={`/products/${id}`} className="btn-sm">VIEW MORE</Link>
      </div>
    </motion.article>
  );
}
