import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DrinkTabs from '../components/DrinkTabs';
import DrinkGrid from '../components/DrinkGrid';
import DrinkModal from '../components/DrinkModal';
import '../pages/drinks.scss';

export default function Drinks(){
  const [selected,setSelected]=useState(null);
  const [active,setActive]=useState('清爽口感');
  const allDrinks=[
    {id:1,title:'Smoky Old Fashioned',image:'https://source.unsplash.com/800x800/?cocktail,old-fashioned',tags:['Smoky','Bitter'],abv:'12%'},
    {id:2,title:'Citrus Highball',image:'https://source.unsplash.com/800x800/?cocktail,highball',tags:['Citrus','Fresh'],abv:'6%'},
    {id:3,title:'Neon Negroni',image:'https://source.unsplash.com/800x800/?cocktail,negroni',tags:['Bitter','Fruity'],abv:'14%'},
    {id:4,title:'Smoky Old Fashioned',image:'https://source.unsplash.com/800x800/?cocktail,old-fashioned',tags:['Smoky','Bitter'],abv:'12%'},
    {id:5,title:'Citrus Highball',image:'https://source.unsplash.com/800x800/?cocktail,highball',tags:['Citrus','Fresh'],abv:'6%'},
    {id:6,title:'Neon Negroni',image:'https://source.unsplash.com/800x800/?cocktail,negroni',tags:['Bitter','Classic'],abv:'14%'},
    {id:7,title:'Smoky Old Fashioned',image:'https://source.unsplash.com/800x800/?cocktail,old-fashioned',tags:['Smoky','Bitter'],abv:'12%'},
    {id:8,title:'Citrus Highball',image:'https://source.unsplash.com/800x800/?cocktail,highball',tags:['Classic','Fresh'],abv:'6%'},
    {id:9,title:'Neon Negroni',image:'https://source.unsplash.com/800x800/?cocktail,negroni',tags:['Classic','Fruity'],abv:'14%'}
  ];

  const tabDatas={
    '清爽口感':item=>item.tags.includes('Fresh'),
    '果香調性':item=>item.tags.includes('Fruity'),
    '經典酒款':item=>item.tags.includes('Classic'),
    '煙燻風味':item=>item.tags.includes('Smoky'),
    '微苦韻味':item=>item.tags.includes('Bitter'),
    '柑橘香氣':item=>item.tags.includes('Citrus'),
  };
  
  const filterFn = tabDatas[active] || (()=>true);
  const displayData = allDrinks.filter(filterFn);

  return (
    <>
      <Header />
      <main className="drinks-page">
        <section className="container section-filter">
          <DrinkTabs value={active} onChange={setActive} />
        </section>
        <section className="container section-list">
          <DrinkGrid items={displayData} onOpen={setSelected} />
        </section>
      </main>
      <Footer />
      {selected && <DrinkModal item={selected} onClose={()=>setSelected(null)} />}
    </>
  )
}
