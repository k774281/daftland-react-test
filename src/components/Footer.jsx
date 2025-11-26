import React from "react";
import "./Footer.scss";

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <div className="brand">Draft Land</div>
          <p className="copyright">Copyright© {new Date().getFullYear()} DRAFT LAND CO., LTD.</p>
        </div>
      </div>
    </footer>
  );
}