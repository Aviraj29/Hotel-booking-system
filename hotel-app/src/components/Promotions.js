import React from 'react';
import OfferDetails from './OfferDetails';  
import offerData from './OfferData';
// import './Promotions.css';  

const Promotions = () => {
  return (
    <section className="promotions-section">
      <h2>Offers</h2>

      <div className="promotion-grid">            
        {offerData.map((offer, index) => (  

        <OfferDetails key ={index} offer={offer} />   
        ))}
      </div>  

    </section>
  );
};   

export default Promotions;


