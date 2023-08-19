import React from "react";
import "./Header.css";
import HeaderItems from "./HeaderItems";

const icons = [
    "fa-brands fa-twitter",
    "fa-brands fa-facebook",
    "fa-brands fa-youtube",
    "fa-brands fa-whatsapp", 
  ]; 
 
export default function Header() { 
  const icon = icons.map((i) => <HeaderItems icon={i} />);
  return (
    <header>
      <div className="container-fluid">
        <div className="detail">
          <ul className="iconname">
            <HeaderItems icon="fa-solid fa-location-dot" headerName="India" />
            <HeaderItems icon="fa-regular fa-envelope" headerName="info@hotel.com"/>
          </ul>

          <div className="hotel">
            <h2><HeaderItems headerName="Book your stay & enjoy a luxury experience" /></h2>
          </div>

          <div className="icon">
            <ul className="icons"> {icon} </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
