import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./Carousel.scss";

const slides = [
  "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1763393434891-2a0c38d4e5a1?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1763633923452-1e3863b93b8a?q=80&w=875&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1763494984768-fe45006add3b?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

export default function Carousel() {
  const containerRef = useRef(null);
  // motion values for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useTransform(mouseX, [-200, 200], [-10, 10]);
  const y = useTransform(mouseY, [-200, 200], [-6, 6]);

  function handleMove(e) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    mouseX.set(e.clientX - cx);
    mouseY.set(e.clientY - cy);
  }

  return (
    <section className="hero" ref={containerRef} onMouseMove={handleMove}>
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 3200, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true,  renderBullet: (index, className) =>
        `<span class="${className}">
          <img src="${slides[index]}" />
        </span>` }}
        className="hero-swiper"
      >
        {slides.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="slide-wrap">
              <motion.div
                className="hero-bg"
                style={{
                  backgroundImage: `url(${img})`,
                  x: x,
                  y: y,
                  scale: 1.06
                }}
                transition={{ ease: "easeOut" }}
                aria-hidden="true"
              />
              <div className="hero-overlay" />
              <motion.div
                className="hero-content container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="kicker">NEO NOIR NIGHTS</h3>
                <h1 className="headline">MOHITO • NIGHT EDITION</h1>
                <p className="sub">Experience neon-lit mixology — where light meets flavour.</p>
                <button className="btn-primary">Reserve Now</button>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
