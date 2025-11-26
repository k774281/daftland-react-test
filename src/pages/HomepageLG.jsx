import React from "react";
import Header from "../components/Header";
import CursorGlow from "../components/CursorGlow";
import Carousel from "../components/Carousel";
import DrinkCard from "../components/DrinkCard";
import RecommendCard from "../components/RecommendCard";
import ReviewCard from "../components/ReviewCard";
import EventCard from "../components/EventCard";
import BookingForm from "../components/BookingForm";
import ContactBlock from "../components/ContactBlock";
import Footer from "../components/Footer";

import "../pages/pages.scss";

export default function HomepageLG(){
  return (
    <div className="page page-lg">
      <Header />
      <main>
        <Carousel />
        <section className="section container">
          <h2 className="section-title">本月精選</h2>
          <div className="grid grid-3">
            <DrinkCard title="Mojito" text="White Rum、薄荷、青檸、蘇打水" image="https://source.unsplash.com/collection/9924321/400x300?cocktail" />
            <DrinkCard title="Espresso Martini" text="Vodka、Espresso、Kahlua" image="https://source.unsplash.com/collection/9924321/401x300?espresso" />
            <DrinkCard title="Virgin Mojito" text="無酒精版，清爽可口" image="https://source.unsplash.com/collection/9924321/402x300?drink" />
          </div>
        </section>
        < CursorGlow />
        <section className="section recommend container">
          <h2 className="section-title">本月推薦</h2>
          <div className="grid grid-3">
            <RecommendCard title="Vodka - Absolut" text="產地：瑞典 / 40%" />
            <RecommendCard title="Gin - Bombay" text="英式杜松香氣" />
            <RecommendCard title="Rum - Bacardi" text="經典朗姆" />
          </div>
        </section>

        <section className="section container reviews">
          <h2 className="section-title">社群互動</h2>
          <div className="grid grid-3">
            <ReviewCard name="Alice" />
            <ReviewCard name="Bob" />
            <ReviewCard name="Cici" />
          </div>
        </section>

        <section className="section container events">
          <h2 className="section-title">活動與快閃</h2>
          <div className="grid grid-3">
            <EventCard title="Rainbow SHOTS SET" img="https://source.unsplash.com/random/401x250?shots" />
            <EventCard title="Heineken Party" img="https://source.unsplash.com/random/402x250?party" />
            <EventCard title="Cocktail Night" img="https://source.unsplash.com/random/403x250?cocktail" />
          </div>
        </section>

        <BookingForm />

        <ContactBlock />

      </main>

      <Footer />
    </div>
  );
}