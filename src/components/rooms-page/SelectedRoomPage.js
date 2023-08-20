import React,{useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function SelectedRoomPage(){
  const location = useLocation();
  const selectedRoom = location.state?.selectedRoom;
  const selectedFromDate = location.state?.selectedFromDate;
  const selectedToDate = location.state?.selectedToDate;
  const daysOfStay = location.state?.daysOfStay || 1;
  const navigate = useNavigate()

  // const selectedOffer = location.state?.selectedOffer;

  const [roomCount, setRoomCount] = useState(1);
  // if (!selectedOffer) {
  //   return <div>No offer selected.</div>;
  // }
  if (!selectedRoom) {
    return <div>No room selected.</div>;
  } 
  const handleIncrement = () => {
    if (roomCount < selectedRoom.availableroom) {
    setRoomCount((prevCount) => prevCount + 1);
    }
  };

  const handleDecrement = () => {
    if (roomCount > 1) {
      setRoomCount((prevCount) => prevCount - 1);
    }
  };

  const totalAmount = selectedRoom.price * roomCount *daysOfStay;
  // const totalAmountBeforeDiscount = selectedRoom.price * roomCount;
  // const discountAmount = (totalAmountBeforeDiscount * selectedRoom.discount) / 100;
  // const totalAmountAfterDiscount = totalAmountBeforeDiscount - discountAmount;

  return (
    <>
    <div className="container-fluid selected-room-info mt-4">
      <h2>Selected Room</h2>
      <div className="room row">
        <div className="col md-8 left">
          {/* <h3>Check-in :{selectedFromDate}  Check-out: {selectedToDate}</h3> */}
        
          {selectedFromDate && (
          <p>Check-in : {selectedFromDate}</p>
        )}
        {selectedToDate && (
          <p>Check-out : {selectedToDate}</p>
        )}
        days stay: {daysOfStay}
      <img className="room-img" src={selectedRoom.image} alt='room-i'/>
      <h5>Name: {selectedRoom.name}</h5>
      <h3>{selectedRoom.description}</h3>
      {/* <ul>{selectedRoom.details.map((detail,index) =><li key={index} style={{color: 'grey'}}>{detail}</li>)}</ul> */}
      </div>

      <div className="col md-4 right">
        <div className="padding">
        <h5 style={{textAlign:'center'}}>Price detail</h5>
        <div className="spacebetween">
        <p className='left-detail'>Price per night :</p> <p className='right-detail'>₹ {selectedRoom.price}/-</p> </div>
        <div className="spacebetween">
        <p>Available Rooms :</p> <p>only {selectedRoom.availableroom - roomCount}</p></div>
        <div className='spacebetween'> <p className='left-detail'>No. of rooms selected:</p>
        <span className='right-detail'>
          <button className ='btn'onClick={handleDecrement}>-</button>
          <span>{roomCount}</span>
          <button className ='btn' onClick={handleIncrement}>+</button></span>
        </div>
        {/* <p>Discount: {selectedRoom.discount}%</p> */}
        </div>
        <div className='spacebetween' style={{paddingTop:10 , paddingLeft:5, paddingRight:5, backgroundColor:'lightgrey'}}>
        <h5>Total Amount to be paid:</h5> <h6 style={{fontWeight:700}} >₹ {totalAmount}/-</h6></div>
        </div>
        </div>

        <div className="guest-f mt-3">
      <button className='btn btn-success selected-button' onClick={()=>navigate('/payment', { state: { totalAmount } })}>Continue</button>
        </div>
    </div>
    </>
  );
};

