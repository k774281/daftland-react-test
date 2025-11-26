//React 
import React from "react";
import {useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";

//Components
import Header from "../components/Header";
import ProductSwiper from "../components/Swiper";
import { Comment } from "../components/Swiper";
import Footer from "../components/Footer";

//Data
import { productData } from "../data/Products";

//Styles
import "./productsDetail.scss";

export default function ProductsDetail() {
  const {id} = useParams();
  const navigate = useNavigate();
  const product = productData[id];

  const { slides, details, reviews, more: morethen } = product;
  if(!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
    <Header />
      <div className="product-detail-page">      
        <div className="container">
          <ProductSwiper slides={slides} />

          <Comment reviews={reviews} />

          <section className="ingredient-section">
            <h3>健康成分標示</h3>

            <ul>
              {details.map((i, idx) => (
                <li key={idx}>
                  <span className="icon">{i.icon}</span>
                  {i.text}
                </li>
              ))}
            </ul>
          </section>
          <section className="flavor-combo">
            <h3>無酒精風味組合</h3>
            <p>
              新鮮水果香調與酸甜氣泡，採用真實原料…
            </p>

            <div className="combo-images">
              <img src="/images/c1.png" alt="" />
              <img src="/images/c2.png" alt="" />
              <img src="/images/c3.png" alt="" />
              <img src="/images/c4.png" alt="" />
            </div>
          </section>
          <section className="more-products">
            <h3>別急著走<br />我們還有更多</h3>

            <div className="products">
              {morethen.map((i, idx) => (
                <div className="item" key={idx}>
                  <img src={i.image} alt={i.name} />
                  <p>{i.name}</p>
                  <div className="rating">◇◇◇</div>
                </div>
              ))}
            </div>
          </section>

          <button className="btn-sm" onClick={() => navigate(-1)}>返回</button>
        
        </div>
      </div>
      <Footer />    
    </>
  );
}
