import React from "react";
import { Routes, Route } from "react-router-dom";
import HomepageLG from "./pages/HomepageLG";
import Drinks from "./pages/Drinks";
import ProductsDetail from "./pages/ProductsDetail";
import Store from "./pages/Store";
import CursorGlow from "./components/CursorGlow";
import "./App.scss";

export default function App() {
  return (
    <>
      <CursorGlow />
      <Routes>
        <Route path="/" element={<HomepageLG />} />
        <Route path="/Drinks" element={<Drinks />} />
        <Route path="/products/:id" element={<ProductsDetail />} />
        <Route path="/Stores" element={< Store />} />
      </Routes>    
    </>
  )
}