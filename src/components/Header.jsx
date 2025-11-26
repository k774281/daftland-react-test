import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {

  const menuList = [
    { title: "首頁", path: "/" },
    { title: "所有酒單", path: "/Drinks" },
    { title: "門市資訊", path: "/Stores" },
    { title: "活動與快閃", path: "/Events" },
    { title: "線上預約", path: "/Booking" },
    { title: "品牌概念", path: "/About" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <header className={`site-header ${open ? "open" : ""}`}>
      <div className="header-inner">

        <div className="logo">Draft Land</div>

        {/* Hamburger Button */}
        <button 
          className="hamburger" 
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation */}
        <nav className={`main-nav ${open ? "show" : ""}`}>
          { menuList.map(menu => (
            <Link key={menu.title} to={menu.path}>{menu.title}</Link>
          )) }
        </nav>
      </div>
    </header>
  );
}
