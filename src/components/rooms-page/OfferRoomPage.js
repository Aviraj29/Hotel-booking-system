import React,{useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function OfferRoomPage(){
  const location = useLocation();
  const selectedOffer = location.state?.selectedOffer;

  const [roomCount, setRoomCount] = useState(1);
  const navigate = useNavigate()

  if (!selectedOffer) {
    return <div>No room selected.</div>;
  } 
  const handleIncrement = () => {
    if (roomCount < selectedOffer.availableroom) {
    setRoomCount((prevCount) => prevCount + 1);
    }
  };

  const handleDecrement = () => {
    if (roomCount > 1) {
      setRoomCount((prevCount) => prevCount - 1);
    }
  };

  // const totalPrice = selectedOffer.price * roomCount;
  const totalPriceBeforeDiscount = selectedOffer.price * roomCount;
  const discountAmount = (totalPriceBeforeDiscount * selectedOffer.discount) / 100;
  const totalPriceAfterDiscount = totalPriceBeforeDiscount - discountAmount;

  return (
    <>
    <div className="container-fluid selected-room-info mt-4">
      <h2>Selected Offer</h2>
      <div className="room row">
        <div className="col md-8 left">
      <img className="room-img" src={selectedOffer.image} alt='room-i'/>
      <h5>Name: {selectedOffer.name} {selectedOffer.roomName}</h5>
      <h3>{selectedOffer.description}</h3>
      <ul>{selectedOffer.details.map((detail,index) =><li key={index} style={{color: 'grey'}}>{detail}</li>)}</ul>
      </div>
      <div className="col md-4 right">
        <div className="padding">
        <h5 style={{textAlign:'center'}}>Price detail</h5>
        <div className="spacebetween">
        <p className='left-detail'>Price per night :</p> <p className='right-detail'>₹ {selectedOffer.price}/-</p> </div>
        <div className="spacebetween">
        <p>Available Rooms :</p> <p>only {selectedOffer.availableroom - roomCount}</p></div>
        <div className='spacebetween'> <p className='left-detail'>No. of rooms selected:</p>
        <span className='right-detail'>
          <button className ='btn'onClick={handleDecrement}>-</button>
          <span>{roomCount}</span>
          <button className ='btn' onClick={handleIncrement}>+</button></span>
        </div>
        <div className="spacebetween">
        <p>Discount :</p> <p>{selectedOffer.discount}%</p></div>
        </div>
        <div className='spacebetween' style={{paddingTop:10 , paddingLeft:5, paddingRight:5, backgroundColor:'lightgrey'}}>
        <h5>Total Amount to be paid:</h5> <h6 style={{fontWeight:700}} >₹ {totalPriceAfterDiscount}/-</h6></div>
        </div>
        </div>

        <div className="guest-f mt-3">
      <button className='btn btn-success selected-button' onClick={()=>navigate('/payment', { state: { totalPriceAfterDiscount } })}>Continue</button>
        </div>
    </div>
    </>
  );
}; 

