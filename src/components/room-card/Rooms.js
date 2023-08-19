import RoomCard from './RoomCard'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Rooms.css'
import roomData from './roomData';
import { responsive } from './roomData';


export default function Rooms() {
  
  const rooms =roomData.map(item =>
    <RoomCard name={item.name} price={item.price} image={item.image} descpriction={item.desc}/> )
  
  return (
    <>
      <div className="outer-room">
        <div className="inner-room">
          <h1 className='room-h'>Rooms</h1>
          <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000}>
            {rooms}
          </Carousel>
        </div>
      </div>
    </>
  );
}
