import React from "react";
import "./BookingForm.scss";

export default function BookingForm(){
  return (
    <div className="booking-wrap">
      <div className="container">
        <h2>線上預約</h2>
        <form className="booking-form">
          <div className="row">
            <input placeholder="姓名" />
            <input placeholder="電話" />
          </div>
          <div className="row">
            <input placeholder="日期" />
            <input placeholder="人數" />
          </div>
          <textarea placeholder="備註(選填)" />
          <button className="btn-primary">送出預約</button>
        </form>
      </div>
    </div>
  );
}