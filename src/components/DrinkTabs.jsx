import React from 'react';
import '../components/drinktabs.scss';

const tabs = ["清爽口感", "果香調性", "經典酒款", "煙燻風味", "微苦韻味"];

export default function DrinkTabs({value,onChange}){ 
  return <div className="drink-tabs">
    {tabs.map(t=>(
  <button key={t} className={`tab ${t===value?'active':''}`} onClick={()=>onChange(t)}>{t}</button>
  ))}</div>; 
}
