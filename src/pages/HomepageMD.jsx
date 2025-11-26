import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import DrinkCard from "../components/DrinkCard";
import Footer from "../components/Footer";
import "../pages/pages.scss";

export default function HomepageMD(){
  return (
    <div className="page page-md">
      <Header />
      <main>
        <Carousel />
        <section className="section container">
          <h2 className="section-title">本月精選</h2>
          <div className="grid grid-3">
            <DrinkCard title="Mojito" text="White Rum、薄荷、青檸、蘇打水" image="https://source.unsplash.com/collection/9924321/400x300?cocktail" />
            <DrinkCard title="Espresso Martini" text="Vodka、Espresso、Kahlua" image="https://source.unsplash.com/collection/9924321/401x300?espresso" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}