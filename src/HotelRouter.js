import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import RoomsFilter from './components/rooms-page/RoomsFilter'

// import Rooms from './components/room-card/Rooms'
// import Header from './components/header/Header'
import Home from './components/Home'
import SelectedRoomPage from './components/rooms-page/SelectedRoomPage'
import Promotions from './components/Promotions'
import Reservation from './components/Reservation'
import OfferRoomPage from './components/rooms-page/OfferRoomPage'
import Header from './components/header/Header'
import LogIn from './components/login/LogIn'
import SpecialEvent from './components/event/SpecialEvent'
import EventForm from './components/event/EventForm'


export default function HotelRouter() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<OnlyHeader/>}/>

        <Route path='/login' element={<LogIn/>}/>
         
        <Route path='/' element={<Navbar/>}>    
        <Route path='/res' element={<Reservation/>}/>
        {/* <Route path="/selected-room" element={<SelectedRoomPage/>} /> */}
        <Route path='/rooms' element={<RoomsFilter/>}/>
        <Route path="/rooms/selected-room" element={<SelectedRoomPage/>} />
        <Route path='/offer' element={<Promotions/>}/>
        <Route path="/offer/selected-room" element={<OfferRoomPage/>} />
        <Route path='/event' element={<SpecialEvent/>}/>
        <Route path='/eventform' element={<EventForm/>}/>

         
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  ) 
}
function OnlyHeader() {
  return (
    <>
      <Header />
      {/* <Navbar /> */}
      <Routes>
        <Route index element={<Home />} />
        
      </Routes>
    </>
  );
}
