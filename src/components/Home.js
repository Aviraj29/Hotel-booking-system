import React from 'react'
// import Header from './header/Header'
import Bookingcard from './booking-card/Bookingcard'
import Rooms from './room-card/Rooms'
import Navbar from './navbar/Navbar'
import Qfinal from './faq/Qfinal'
import Rating from './faq/Rating'
import Icon from './services/Icon'
import Footer from './footer/Footer'

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className='bg_image'/>
        <Bookingcard/>
        <Rooms/>
        <Icon/>
        <Qfinal/>
        <Rating/>
        <Footer/>
        

    </>
  )
}
