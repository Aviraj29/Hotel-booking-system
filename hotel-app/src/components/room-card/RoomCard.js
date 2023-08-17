import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function RoomCard(props) {
  const navigate = useNavigate()
  return (
    <div className="room-card">
      <div className="room-details">
        <img className="room-image" src={props.image} alt="" />
        <h2 className='room-name'>{props.name}</h2>
        <h3 className='room-price'>Price: {props.price}</h3>
        <p className='room-desc'>{props.descpriction}</p>
        <button onClick={()=>navigate('/res')} className='room-button btn btn-light'>Book</button>
      </div>
    </div>
  );
}
 