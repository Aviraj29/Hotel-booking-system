// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import React from "react";
import { useNavigate } from "react-router-dom";

export default function RoomsCard(props) {
  const navigate = useNavigate(); 

  const handleRoomSelect = (name, price, availableroom, image ) => {
    const selectedRoom = { name, price, availableroom , image};
    navigate('/rooms/selected-room', { state: { selectedRoom, selectedFromDate: props.selectedFrom, selectedToDate: props.selectedTo, daysOfStay: props.daysOfStay  } }); 
  };
  
  return (
    <div className="col-md-4 mb-4" key={props.id}>
      <div className="card">
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <h6>Price : {props.price}/- per night</h6>
          <h6>Size : {props.size} ft²</h6>
          <h6 className="card-text">Max.guests : {props.guests}</h6>
          <p>Available Rooms: {props.availableroom}</p>
          {/* <button className="btn btn-primary" onClick={props.onBookNow}>
            Book Now!
          </button> */}
          <button className="btn btn-primary" onClick={() => handleRoomSelect(props.name, props.price, props.availableroom, props.image )}>
      Select Now!
    </button>
        </div>
      </div>
    </div>
  );
}
 