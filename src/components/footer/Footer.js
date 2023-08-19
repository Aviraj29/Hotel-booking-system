 import React from "react"
 import "./Footer.css"; 
         
 import { useState } from "react";
 import{FaTwitter, FaInstagram, FaYoutube , FaFacebook , FaLinkedin,FaPhone,FaMailBulk} from "react-icons/fa";

 const Footer = () => {  
 const [email,setEmail] = useState('')   

 const handleEmailChange = (e)=>{  
 setEmail(e.target.value);   

 };  

 const handleSubscribe = () => {    
  alert(`Subscribe with email: ${email}`);  
  setEmail('');   
  // console.log('Subscribe email:', email);    
 }   
          
return(
<footer>
    <div className="container grid grid-four-column">      
      <div className="footer-about">            
        <h1 className="footer-h1">The Grand Hotel Pune</h1>
        <p className="footer-p">Pune, Banglore Road , Near Balewadi Sports Complex , Balewadi ,  Pune 411045</p>      
    </div>
   

<div className="footer-subscribe">
    <li className="footer-li"><FaMailBulk className="mailbulk"/>  resv.pune@grandhotel.com</li>
    <li className="footer-li"><FaMailBulk className="mailbulk"/>  resv.astrevmgr.pune@grandhotel.com</li>
    <li className="footer-li"> <FaPhone className="phone"/> +91 9169166789 | Central Reservation </li>
</div>

    <div className="footer-social">
       <h4 className="get-heading">Get In Touch</h4>   
    <div className="footer-social-icons">

      <div>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
         <FaTwitter className="twitter"/>    
      </a>  
      </div>

     <div>
       <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="instagram"/>  
        </a> 
      </div>

      <div>
      <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
        <FaYoutube className="youtube"/>
        </a>
      </div>

      <div>
       <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="facebook"/> 
        </a>
      </div>

     <div>  
       <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"> 
        <FaLinkedin className="linkedin"/>   
        </a>  
      </div>

    </div>
</div>

{/*  */}
<div className="footer-contact">
<input type="email" placeholder="Enter Your Email" value={email} onChange={handleEmailChange} className="email-input" />

<button onClick={handleSubscribe} className="subscribe-button">Subscribe</button> 
</div>
                       

 <div className="footer-bottom-section">
    <hr/>
    <div className="container grid grid-two-column">
       <p className="footer-p">Home The Grand Hotel Pune Exclusive Offers Facilities Rewards Hotel Directory Virtual Tour Blog Queries about Pune Media Privacy Policy </p>

       <p className="footer-p">Tika Utsav Wedding Venue in pune Bussiness Hotel in pune Manage Booking</p>
       <p className="footer-p">Sitemap Simplotel-Hotel Website Design & Booking Engine</p>
  </div>
</div> 
  
</div>
</footer>     
);
};

export default Footer;  






























