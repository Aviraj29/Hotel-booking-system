import React, { useRef, useState } from "react";  
import "./ContactForm.css";
import emailjs from "@emailjs/browser";  // npm install @emailjs/browser --save  ////EmailJS a/c 
                                         //npm i @emailjs/browser 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";    //npm i @fortawesome/react-fontawesome
import {faPhone,faMapMarkerAlt,faEnvelope} from "@fortawesome/free-solid-svg-icons";    //npm i --save @fortawesome/free-solid-svg-icons
import {faTwitter, faYoutube, faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";  //npm install @fortawesome/free-brands-svg-icons
            
                  
const ContactForm = () => {    
 
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);   

  const sendEmail = (e) => {  
  e.preventDefault(); 

    emailjs
      .sendForm("service_9jvaamc", "template_1mw1kfu", form.current, "9icvfX6KfTGzUtutZ")  
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true); 

          setTimeout(() => {
            setIsSubmitted(false); 
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div>            
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form ref={form} onSubmit={sendEmail}>
        

        <label htmlFor="user_name">Full Name:</label>
        <input type="text" placeholder='Full Name' name='user_name' required/>
        <label htmlFor="user_email">Email:</label> 
        <input type="email" placeholder='Email' name='user_email' required/> 
        <label htmlFor="phone">Phone No:</label> 
        <input type="number" placeholder='Phone' name='phone' required/>      

         <div className="form-group">
            <label htmlFor="message ">Message : </label>
            <textarea id="message " name="message" required></textarea>
          </div>

          <button className="contact-but" type="submit">Submit</button>
          {isSubmitted && <p>Your message has been successfully sent!</p>}
        </form>
      </div>

      <div className="contact-form">
          <h3>Get In Touch</h3>
          <div className="contact-info">
            <div className="contact-text">
              <p>
               <FontAwesomeIcon icon={faPhone} /> Phone: +1-123-456-7890
             </p>
            </div>
          </div>
          <div className="contact-info">
            <div className="contact-text">
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Address: 123 Main St, Pune, India </p>
           </div>
          </div>
          <div className="contact-info">
            <div className="contact-text">
              <p>
                <FontAwesomeIcon icon={faEnvelope} /> Email: resv.pune@grandhotel.com
              </p>
            </div>
          </div>

          <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />  
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} />    
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />    
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />    
            </a>
          </div>
        </div>
      </div>
   );
  };

 export default ContactForm;  







    
















































































































































































