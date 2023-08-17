import React, { useState } from 'react'
import {FaStar} from "react-icons/fa"
import './rating.css'
import Comment1 from './Comment1';
export default function Rating() {
    const colors={
        orange:"#FF4500",
        grey:"#1E90FF"
    }
    const stars=Array(5).fill(0);
    const [currentvalue,setCurrentvalue]=useState(0);
    const [hoverValue,setHoverValue]=useState(undefined);
    const handleClick=value=>{
        setCurrentvalue(value)
    }; 
  
    const handleMouseOver=value=>{
        setHoverValue(value)
    }
    const handleMouseLeave=()=>{
        setHoverValue(undefined)
    }
  return (
    <div className='container'>
      <h2 className='container_id'>Rate Us Now!!!!!</h2> <br />
      <div className='stars'>
{stars.map((_,index )=>{
    return(
<FaStar key={index} size={40} style={{
    marginRight:10,
    cursor:"pointer"
}}
color={(hoverValue||currentvalue)>index?colors.orange:colors.grey}
onClick={()=>handleClick(index + 1)}
onMouseOver={()=>handleMouseOver(index +1)}
onMouseLeave={handleMouseLeave}
/>
    )
})}
      </div>
      <br />
      <h2>Rating is    {currentvalue} Stars</h2>
      {/* <textarea className='textarea' placeholder="Write a feedback" ></textarea>
      <button className='Submit'>Submit</button> */}<br></br>
      <Comment1 />
      
    </div>
  )
}


