
const roomData =[
    {
      name:'Family Rooms',
      price:'1200 - 1700',
      image:'images/rooms/family-room.webp',
      desc:'Host colleagues or friends in the separate living room of this suite, and then unwind with a soak in the whirlpool.',
    },
    {
      name:'Delux Rooms',
      price:'1000 - 1400',
      image:'images/rooms/delux-room.webp',
      desc:'Enjoy a delicious meal from room service while watching a movie on the flat-screen TV in our Deluxe Room.',
    },
    {
      name:'Superior Rooms',
      price:'2000 - 2700',
      image:'images/rooms/superior-room.webp',
      desc:'After a long flight, stretch out on the plush king bed in our Superior Room with a drink from the minibar.',
    },
    {
      name:'AC Rooms',
      price:'1200 - 1800',
      image:'images/rooms/ac-room.webp',
      desc:'Host colleagues or friends in the separate living room of this suite, and then unwind with a soak in the whirlpool.',
    },
    {
      name:'Presidential Rooms',
      price:'3000 - 4000',
      image:'images/rooms/non-ac-room.webp',
      desc:'After a long flight, stretch out on the plush king bed in our Presidential Room with a drink from the minibar.',
    },
  ]

export  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
export default roomData;