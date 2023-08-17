import React,{ useState } from "react";
// import React from 'react'

const Qfinal2=({question,answer})=> {
    const[text,setText]=useState(false);
    const display=()=>{
        setText(!text)
    }
 return(
    <>
     <div className="question">
            <h2>{question}</h2>
            <p onClick={display}>+
                {/* {text?<i class="fa-light fa-sort-up"></i>:<i class="fa-light fa-sort-down"></i>}</p> */}
                </p>
        </div> 
        <div className="answers">
            
            {text && <p>{answer} </p>}
        </div>
    </>
 )
 
}
export default Qfinal2;