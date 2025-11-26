import React from 'react';

//Data
import { productData } from "../data/Products";

import DrinkCard from './DrinkCard';
import '../components/drinkgrid.scss';



export default function DrinkGrid({items={}, onOpen=()=>{}}){ 
  console.log("DrinkGrid items =", items);
  return <div className="drink-grid">
    {items.map(it=> <DrinkCard key={it.id} id={it.id} title={it.title} image={it.image} text={it.tags?.join(' · ')} onClick={()=>onOpen(it)} />)}</div>; 
    
  }
