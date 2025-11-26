import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

//Data
import { productData } from "../data/Products";

import "swiper/css";
import "swiper/css/pagination";
import "./swiper.scss";

export default function ProductSwiper({ slides = [] }) {
  return (
    <div className="product-swiper">
      <Swiper
        modules={[Pagination]}
        pagination={{ type: 'custom',
          renderCustom: ( swiper, current ) => {
            return `<span class="custom-pagination">${current}</span>`;
          },
        }}
        spaceBetween={20}
        slidesPerView={1}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img src={new URL(slide.image, import.meta.url).href} />
              <h2>{slide.title}</h2>
              <p>{slide.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  ) 
}

export function Comment({ reviews = [] }) {
  return (
    <div className="review-card">
      <Swiper
        modules={[ Autoplay ]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <img src={review.avatar} alt={review.user} className="avatar" />
              <div className="info">
                <h4>{review.user}</h4>
                <div className="stars">{"⭐".repeat(review.rating)}</div>
              </div>
              <p className="comment">{review.comment}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  ) 
}