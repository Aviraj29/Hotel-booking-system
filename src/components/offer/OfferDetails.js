import React from 'react';
import './OfferDetails.css';
import { useNavigate } from 'react-router-dom';
             
const OfferDetails = ({ offer }) => {  
  const navigate = useNavigate(); 
  const handleBookNow = () => {
    navigate('/offer/selected-room', { state: { selectedOffer: offer } });
  };
      
  return (        
    <div className="offer-card">
      <div className="offer-image-container">
        <img src={offer.image} alt={offer.title} className="offer-image" />
      </div>
      <div className="offer-content">
        <h3 className="offer-title">{offer.title}</h3>
        <p className="room-details">Room ID: {offer.roomId}</p>     
        <p className="room-details">Room Name: {offer.roomName}</p>     
        <p className="offer-description">{offer.description}</p>    
        <div className="offer-details">                      
          <ul>
            {offer.details.map((detail, index) => (   
              <li key={index}>{detail}</li>         
               
            ))} 
          </ul>
        </div>
        <p className="offer-discount">Discount: {offer.discount}%</p>
        <p className="promo-code">Promo Code: {offer.promoCode}</p>
        <p className="promo-code">Price: {offer.price}</p>

        <button className="book-now-button" onClick={handleBookNow}>Book Now</button>
        
      </div>
    </div>
  );
};

export default OfferDetails;

