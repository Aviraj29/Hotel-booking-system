import React from 'react'
import { useState } from 'react';
import './login.css'
import { useNavigate } from 'react-router-dom';


export default function LogIn() {
  const navigate = useNavigate()
    const[email,setEmail]=useState(""); 
	const[passw,setPassw]=useState("");
  const togglePassword = () => {
    setPassw(!passw);
  };
    
        const handleSubmit =(e)=>{ 
            e.preventDefault();
            alert ("form Submitted");

        
    }
      return (
         
        <div id='log'>
          <form onSubmit={handleSubmit}>
           <label className='sign-label'>Email:
              <input className='sign-input' type="email"  name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value) }required/>
            </label> <br/>    
                <br/>
                <label className='sign-label'> Password:
                <input type={passw ? "text" : "password"} required/> </label><br /><br />
    <label className='sign-show' type="checkbox">Show password?</label>
          <input className='sign-input' id="checkbox" type="checkbox" checked={passw} onChange={togglePassword}/><br></br>
           
              <button onClick={()=>navigate('/')} className='signin' type="submit">Sign In</button>
          </form>
        </div>
      )
    
}
