import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

//styles
import "./store.scss";

export default function Store() {
  const stores = [
    {name:'忠孝店', addr:'台北市大安區忠孝東路四段248巷2弄1樓', time:'Mon-Sun 18:00-01:00'},
    {name:'信義店', addr:'台北市信義區松高路19號1樓', time:'Mon-Sun 18:00-01:00'},
    {name:'中山店', addr:'台北市信義區松壽路19號1樓', time:'Mon-Sun 18:00-01:00'},
    {name:'台中店', addr:'台中市西區英才路534號PARK2草悟廣場B1', time:'Mon-Sun 18:00-01:00'},
  ];

  return (
    <>
      <Header />
      <div className="store-page">        
        <div className="container">
          <h2>門市資訊</h2>
          {stores.map((s,i)=>(
          <div className="store" key={i}>
            <div className="map-placeholder">
              <div className="pin"></div>
            </div>
            <h3>{s.name}</h3>
            <p>{s.addr}</p>
            <p>{s.time}</p>
          </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}