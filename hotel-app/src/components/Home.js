import React from 'react'
// import Header from './header/Header'
import Bookingcard from './booking-card/Bookingcard'
import Rooms from './room-card/Rooms'
import Navbar from './navbar/Navbar'
import Qfinal from './faq/Qfinal'
import Rating from './faq/Rating'

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className='image'/>
        <Bookingcard/>
        <Rooms/>
        <Qfinal/>
        <Rating/>
        

    </>
  )
}
