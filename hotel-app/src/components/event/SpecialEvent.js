import React from 'react'
import {events,venues} from './specialEventData'
import './SpecialEvent.css'
import {Link} from 'react-router-dom'



 
export default function SpecialEvent() {
 


  return (
    <>
<div className='event-item'>

  <div className='special-event'>

  </div>
 <h1 className='event-h' >PLAN YOUR EVENT WITH GRAND HOTEL </h1>
{/* special events starts here */}
<div className=" event-section row row-cols-1 row-cols-md-3 ">
  {events.map((eve)=>{
    return(<>
    <div  className="col w-5"  key={eve.id}> <div className="card">
      <img src= {eve.image} alt='eve'/>
      <div className="card-body">
        <h5 className="card-title">{eve.title} </h5>
        <p className="card-text">{eve.desc}</p>
      </div>

    </div>
  </div>
    </>
    )
  })} 
  {/* <button  >Special Offers</button> */}

</div>

{/* special events ends here */}

{/* venue starts here */}
<div className='venue-item'>
<div style={{marginBottom:'80px' ,marginRight: '120px'}}><h1>VENUES</h1></div>
   {venues.map((item)=>{
    return(
      <>
     
        <div className="content-con row" key={item.id}>
      <div className='hotel1-item col-4'>
        <img src= {item.image} alt='hotel'/>
        </div>
        <div className="hotel-item col-6" >
          <h3>{item.name}</h3>
          <h5>{item.hotel}</h5>
        <p>{item.desc}</p>
        <p>{item.point1}</p>
        <div> <b>Dimensions </b> : {item.dimension} &nbsp; <b>Area </b>: {item.area} <br/>
        <b>Guest Entry Point:</b>{item.entry}
        </div> 
        <p><b>Max Capacity :</b>{item.capacity}</p>

        <Link to ='/eventform'>
        <button type="button" className='request-button'>Request Quote</button>
        </Link>
        </div> 
  
      </div>
      </>)
  })}
  </div>

{/* venue ends here */}
    

      </div>
    </>
  );
}























