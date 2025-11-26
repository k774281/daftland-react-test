import React from 'react';
import { motion } from 'framer-motion';
import '../components/drinkmodal.scss';

export default function DrinkModal({item,onClose}){ if(!item) return null; return (
  <motion.div className="drink-modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose}>
    <motion.div className="drink-modal" initial={{scale:0.98, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:0.28}} onClick={(e)=>e.stopPropagation()}>
      <button className="modal-close" onClick={onClose}>×</button>
      <div className="modal-body">
        <img src={item.image} alt={item.title}/>
        <div className="info">
          <h2>{item.title}</h2>
          <p>{item.description || 'A crafted cocktail.'}</p>
          <p className="meta">ABV: {item.abv}</p>
        </div>
      </div>
    </motion.div>
  </motion.div>
); }
