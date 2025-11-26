import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import DrinkCard from "../components/DrinkCard";
import Footer from "../components/Footer";
import "../pages/pages.scss";

export default function HomepageSM(){
  return (
    <div className="page page-sm">
      <Header />
      <main>
        <Carousel />
        <section className="section container">
          <h2 className="section-title">本月精選</h2>
          <div className="grid">
            <DrinkCard title="Mojito" text="White Rum、薄荷、青檸、蘇打水" image="https://source.unsplash.com/collection/9924321/400x300?cocktail" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}