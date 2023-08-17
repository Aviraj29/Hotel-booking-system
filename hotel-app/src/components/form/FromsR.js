import React, { useState } from 'react'
import './Forms.css'

const FromsR = () => {

    const [userRegistration,setUserRegistration] = useState({
         username:'',
         email:'',
         phone:''
    });
    
    const [records,setRecords] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
    

    setUserRegistration({...userRegistration, [name]: value });
    }
    const handleSubmit = (e) => {
       e.preventDefault();
       const newRecord = {...userRegistration,id: new Date().getTime().toString()}
       console.log(records);
       setRecords([...records,newRecord]);
       console.log(records);

       setUserRegistration({username:'',email:'',phone:''});
    }
  return (
   <div className="allform">
   <form className='userform' action="" onSubmit={handleSubmit}>
    <div className='innerform'>
        <label htmlFor='username'>Full name:</label>
        <input type="text" placeholder='Enter your full name'
        value={userRegistration.username} 
        onChange={handleInput} 
        name='username' id='username' />
    </div>
    <div className='innerform'>
        <label htmlFor='email'>email:</label>
        <input type='email' placeholder='Enter your email'
        value={userRegistration.email} 
        onChange={handleInput}
        name='email' id='email' />
    </div>
    <div>
        <label htmlFor='Phone'>phone:</label>
        <input type='tel' placeholder='Enter phone number'
        value={userRegistration.phone} 
        onChange={handleInput}
        name='phone' id='phone' />
    </div>
    <button className='btn btn-info' type='submit'>Registration</button>
   </form>
   <div>
    {
        records.map((curElem) => {
            const {id, username, email, phone, } = curElem;
            return(
                <div className='showData' key={id}>
                   <p>{username}</p>
                   <p>{email}</p>
                   <p>{phone}</p>
                   {/* <p>{curElem.username}</p> */}
                </div>    

            )
        }) 
    }
   </div>
   </div>
  )
}

export default FromsR