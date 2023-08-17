import React, { useState } from 'react'
import './RoomsFilter.css'
import RoomsCard from './RoomsCard';
import rooms from './roomsData';
import { useLocation } from 'react-router-dom';

export default function RoomsFilter() { 

  const [roomType,setRoomType]=useState(rooms);
  const location = useLocation()
  const selectedFromDate = location.state?.selectedFromDate;
  const selectedToDate = location.state?.selectedToDate;
  const daysOfStay = location.state?.daysOfStay || 1;


  const filterResultType=(roomdata)=>{
    const result = rooms.filter((data)=>{
      return data.type===roomdata;
    });
    setRoomType(result);
  }
  const filterResultGuest=(roomdata)=>{
    const result = rooms.filter((data)=>{
       return data.guests===roomdata;
    });
    setRoomType(result);
    console.log(result)
    console.log(roomdata)
  }

  const room = roomType.map(data =>
    <RoomsCard key={data.id} image={data.image} name={data.name} price={data.price} guests={data.guests} size={data.size} availableroom={data.availableroom} discount={data.discount} selectedFrom={selectedFromDate} selectedTo={selectedToDate} daysOfStay={daysOfStay} />)

  return (
    <>
    <h1 className='text-center mt-3'>Search Rooms</h1>
    <div className='container-fluid'>
      <div className="row mt-5 mx-5">
        <div className="col-md-3">
          <form className='form-check'>
            <h4>Room type</h4>
            <div>
            <input className="form-check-input" type="radio" name="flexRadioDefault" value={roomType} onChange={()=>setRoomType(rooms)}  />
            <label className="form-check-label"><h5>All</h5></label></div>
            <div>
            <input className="form-check-input" type="radio" name="flexRadioDefault" value={roomType} onChange={()=>filterResultType('Family')} />
            <label  className="form-check-label"><h5>Family</h5></label></div>
            <div>
            <input className="form-check-input" type="radio" name="flexRadioDefault" value={roomType} onChange={()=>filterResultType('Delux')} />
            <label  className="form-check-label"><h5>Delux</h5></label></div>
            <div>
            <input className="form-check-input" type="radio" name="flexRadioDefault" value={roomType} onChange={()=>filterResultType('Superior')} />
            <label  className="form-check-label"><h5>Superior</h5></label></div>
            <div>
            <input className="form-check-input" type="radio" name="flexRadioDefault" value={roomType} onChange={()=>filterResultType('Presidential')} />
            <label  className="form-check-label"><h5>Presidential</h5></label></div>
         </form>

         {/* <p>You selected - {roomType}</p> */}
         <form className='form-check mt-4'>
            <h4>Max. Guests</h4>
            <div>
            <input className="form-check-input" type="radio" name="flexRadioDefault" value={roomType} onChange={()=>filterResultGuest(2)}   />
            <label className="form-check-label"><h5>2</h5></label></div>
            <div>
            <input className="form-check-input" type="radio" name="flexRadioDefault" value={roomType} onChange={()=>filterResultGuest(3)} />
            <label  className="form-check-label"><h5>3</h5></label></div>
            <div>
            <input className="form-check-input" type="radio" name="flexRadioDefault" value={roomType} onChange={()=>filterResultGuest(4)} />
            <label  className="form-check-label"><h5>4</h5></label></div>
           
         </form>

        </div>
        <div className="col-md-9">
          <div className="row">
            
            {room}
                    
          </div>

        </div>
      </div>
    </div>

    </>
  )
}
