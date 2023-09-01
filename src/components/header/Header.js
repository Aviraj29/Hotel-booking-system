import React from "react";
import "./Header.css";
import HeaderItems from "./HeaderItems";

const icons = [
  {
    icon:"fa-brands fa-twitter",
    link:'https://twitter.com/',
    color: '#00aced'
  },
  {
    icon:"fa-brands fa-facebook",
    link:'https://www.facebook.com/',
    color: '#3b5998'

  },
  {
    icon:"fa-brands fa-youtube",
    link:'https://www.youtube.com/',
    color: '#bb0000'

  },
  {
    icon:"fa-brands fa-instagram",
    link:'https://www.instagram.com/',
    color: '#bc2a8d'

  },

     
  ]; 
 
export default function Header() { 
  const icon = icons.map((i) => <HeaderItems icon={i.icon} link={i.link} color={i.color} />);
  return (
    <header>
      <div className="container-fluid">
        <div className="detail">
          <ul className="iconname">
            <li> <i className="fa-solid fa-location-dot"></i>&nbsp;India</li>
            <li><a href="mailto:hotelgrand@gmail.com?subject=Mail from our Website"> <i className="fa fa-envelope" aria-hidden="true"></i></a>&nbsp;hotelgrand@gmail.com</li>
          </ul>

          <div className="hotel">
            <h2 style={{color:"grey"}}>Book your stay & enjoy a luxury experience</h2>
          </div>

          <div className="icon">
            <ul className="icons"> 
            {icon}
              
             </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
