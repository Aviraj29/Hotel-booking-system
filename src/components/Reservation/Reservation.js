import { useState } from "react";
import React from "react";
import "./Reservation.css";
import { useNavigate } from "react-router-dom";

export default function Reservation() {
  const currentDate = new Date().toISOString().substring(0, 10);
  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() +1)
  const nextDate1 = nextDate.toISOString().substring(0, 10);
  console.log('Current Date:'+ currentDate);
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);
  const [selectedFromDate, setSelectedFromDate] = useState(currentDate);  
  const [selectedToDate, setSelectedToDate] = useState(nextDate1); 
  

  const navigate = useNavigate();

  const handleCheck = () => {
    const daysOfStay = calculateDateDifference(selectedFromDate, selectedToDate)
    navigate("/rooms", { state: { selectedFromDate,selectedToDate,daysOfStay}});
  };

  const handelIncrement = () => {
    setCount(count + 1);
  }; 
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const counthandleInc = () => { 
    setCounter(counter + 1);
  };

  const counthandleDec = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const handleFromDate = (event)=>{
    setSelectedFromDate(event.target.value)
  }
  const handleToDate = (event)=>{
    setSelectedToDate(event.target.value)
  }

  function calculateDateDifference(fromDate, toDate) {
    const startDate = new Date(fromDate);
    const endDate = new Date(toDate);
    const timeDifference = endDate - startDate;
    const daysDifference = timeDifference / (1000 * 3600 * 24);
    return daysDifference;
  }
  

  return (

    <div className="reservation_section ">

  {/* place and hotel section starts here */}
   
    <div>
      <div className="reservation_tag">
        <p>Reservations</p>
      </div>
      <div className="from-section row">
        <form >  Place
          <select className="select-form">
            <option selected>Select location</option>
            <option value="1">Pune</option>
            <option value="2">Mumbai</option>
            <option value="2">Bangalore</option>
          </select>
        </form>
      </div>
      <div className="from-section  row">
        <form >Hotel
          <select className="select-form">
          <option selected>Hotel Grand</option>
          </select>
        </form>
      </div>
    </div>

      {/* place and hotel section ends here */}

{/* Date( From) section starts here */}
      <div className="contain-section ">
         <p>From</p>
              <div className="row-date "> <input type="date" value={selectedFromDate} onChange={handleFromDate}  /></div>  
         <div className="row-date  ">  To </div>
          <div className="row-date "> <input type="date" value={selectedToDate} onChange={handleToDate}  /></div>
      </div>
  {/* Date( From) section ends here */} 


{/* Room section starts here */}
      <div className="conatiner ">

        <div className="row-span row ">
          <div className="col-2  "> Adult</div>
          <div className="col-2 "> Children (0-12years) </div>
        </div>

        <div className="item_handle row">
          <div className="room-item col-1 "> Rooms </div>
          <div className=" handle-count col-2 ">
            <button className = 'count-button' onClick={handleDecrement} style={{fontSize: '34px' }}>-</button>
            <div className="count-item">{count}</div>
            <button className = 'count-button' onClick={handelIncrement}  style={{fontSize: '26px' }}>+</button>
          </div>

          <div className="handle-count col-2 ">
            <button  className = 'count-button' onClick={counthandleDec}  style={{fontSize: '34px' }}>-</button>
            <div className="count-item">{counter}</div>
            <button className = 'count-button' onClick={counthandleInc}  style={{fontSize: '26px' }}>+</button>
          </div>
        </div>
      </div>
      {/* Room section ends here */}


{/* promo code and check availability section starts here */}
      <div className="input-group1">
        <input type="text" placeholder=" Enter Promo Code" style={{textAlign:"center", width:270, borderRadius:6 , fontSize:18, borderColor:"lightblue"}} />
        &nbsp;&nbsp;
        <button onClick={handleCheck} className="button-item " type="button" style={{borderRadius:6,}}>
          Check Availability
        </button>
      </div>

{/* promo code and check availability section ends here */}

{/* {selectedFromDate && (
  <p style={{marginTop:10}}>Selected From Date: {selectedFromDate}</p>
)}
{selectedToDate && (
  <p style={{ marginTop:10}}>Selected To Date: {selectedToDate}</p>
)}

{selectedFromDate && selectedToDate && (
  <p style={{ marginTop:10}}> No. of days stay in hotel : {calculateDateDifference(selectedFromDate, selectedToDate)}
  </p>
)} */}


    </div> 
  );
}
 


















