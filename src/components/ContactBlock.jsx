import React from "react";
import "./ContactBlock.scss";

export default function ContactBlock(){
  return (
    <div className="contact-block">
      <div className="container">
        <h3>聯絡我們</h3>
        <div className="contacts-grid">
          <div className="contact-item">
            <h4>忠孝店</h4>
            <p>台北市大安區忠孝路 ...</p>
            <p>02-12345678</p>
          </div>
          <div className="contact-item">
            <h4>信義店</h4>
            <p>台北市信義區信義路 ...</p>
            <p>02-87654321</p>
          </div>
          <div className="contact-item">
            <h4>台中店</h4>
            <p>台中市西屯區 ...</p>
            <p>04-12345678</p>
          </div>
        </div>
      </div>
    </div>
  );
}