//npm install react-hook-form

import React from 'react'
// import { useState } from 'react'
import { useForm } from 'react-hook-form'
// import HotelLocations from './HotelLocations'
import './EventForm.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faPhone, faEnvelope);


export default function EventForm() {
  const {register ,handleSubmit, formState : {errors}} = useForm()

  // const onClick = (e) =>{
  //   console.log(e)
  // }  
  const handleAlertClick = () => {
    window.alert('Thank you for filling out our form. We will keep your information safe.We are working on your request and will get in touch as soon as possible. !');
  };
 
  return (
   <>
   
 <div className="event-cont container  ">

<h1>Contact an Event Planner</h1>

         <hr/>



<div className="row">

{/* info form starts here */}
  <div className="col-8">
  
           <form  onSubmit={handleSubmit()}>
           <small style={{color:'red'}}>please enter all the fields to help you serve  better</small>
           <h3 className='event-title'> Event Details</h3>
          
           <div className="col-form-label ">
           <label className="col-form-label"> Location Of Event *
           <div className="form-group">
        <select className='event-opt'  >
          <option value="1">Pune</option>
          <option value="2">Mumbai</option>
          <option value="3">Bangalore</option>
         </select>   </div>   
         </label>
         </div> 

           <div className="col-form-label ">
              <label className="col-form-label"> Purpose Of Event *
              <div className="form-group">
              <select className='event-opt' >
                <option value="1">Wedding</option>
                <option value="2">Social Event</option>
                <option value="3">Meeting</option>
              </select>
              
            </div> </label>
            </div> 
          
            <div className="col-form-label ">
            <div className="form-group">
              <label className="col-form-label">Preferred  Date *</label>
              <input  type="date"  className= "form-control "  style = {{width:'65vh'}}  {...register("date", {
    required: 'please enter a valid  Preferred Date'
  })}/>
  {errors.date && (<small className='text-danger'>{errors.date.message}</small>)}
  
            </div> 
            </div>
    
  <div className="col-form-label ">
<div className="form-group">
  <label className="col-form-label">Number Of Guests:</label>
  <input  type="text"  className= "form-control " {...register("number", {
required: 'please enter a valid Number Of Guests'
})}/>
{errors.number && (<small className='text-danger'>{errors.number.message}</small>)}
</div>
</div>


            <h3 className='event-title'>Additional Requirements </h3>
            <div className="col-form-label ">
<input type="checkbox" id="req1" name="req1" value="accomodation"/>  &nbsp;
<label htmlFor="req1"> Accomodation</label><br/>
<input type="checkbox" id="req2" name="req2" value="banquet"/>  &nbsp;
<label htmlFor="req2"> Banquet</label><br/>
<input type="checkbox" id="req3" name="req3" value="audio"/>  &nbsp;
<label htmlFor="req3"> Sound & Audio</label>
</div> 


       
              <div className="col-form-label ">
                
              <h3 className='event-title'>Contact Info</h3>
            <div className="form-group">
              <label className="col-form-label">Full Name *</label>
              <input  type="text"  className= "form-control " {...register("name", {
    required: 'please enter  a valid Full Name'
  })}/>
  {errors.name && (<small className='text-danger'>{errors.date.message}</small>)}
            </div> </div>
         

            <div className="col-form-label ">
            <div className="form-group">
              <label className="col-form-label">Phone Number *</label>
              <input  type="text"  className= "form-control " {...register("mobile", {
    required: 'please enter a valid Mobile Number'
  })}/>
  {errors.mobile && (<small className='text-danger'>{errors.mobile.message}</small>)}
            </div> </div>
        
            <div className="col-form-label ">
            <div className="form-group">
              <label className="col-form-label">Email Id *</label>
              <input  type="text"  className= "form-control " {...register("email", {
    required: 'please enter a valid Email Id'
  })}/>
  {errors.email && (<small className='text-danger'>{errors.email.message}</small>)}
            </div> </div>  

      
        </form>
        </div>
        
{/* info form ends here */}



<div className="queries-con col-3">
  <h6>For any queries, please don’t hesitate to contact us:</h6>
<br/>
  {/* npm install @fortawesome/fontawesome-svg-core
npm install @fortawesome/free-solid-svg-icons
npm install @fortawesome/react-fontawesome */}
     <ul> <li><FontAwesomeIcon icon="phone" style={{ fontSize: '1.5em', color: 'green' }} /> &nbsp;</li>
     <span>123-456-7890</span>
      <br/>
      <li>
      <FontAwesomeIcon icon="envelope" style={{ fontSize: '1.5em', color: ' lightblue' }} />  &nbsp;    </li>
      <span>grandhotel27@gmail.com</span>
  
      </ul>
  </div>

  <div className="event-button ">   
  
<button  onClick={handleAlertClick}>Submit</button>

</div>
        </div>
      </div>

  
</>
       
  )
}
























