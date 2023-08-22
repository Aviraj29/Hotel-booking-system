import React from 'react';
import './ServiceSection.css';   
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
//npm install react-responsive-carousel 


     
const ServiceSection = () => {
  const services = [
    {           
      title: 'Swimming Pool',
      description: 'Enjoy our beautiful swimming pool.',
      image:'images/hotel/swi-pool.jpg' ,
    },
 
    {
      title: 'Fitness Center',
      description: 'Stay fit in our state-of-the-art fitness center.',
      image:'images/hotel/fitness.jpg' ,
       
    },     

    {
      title: 'Spa',
      description: 'Relax and unwind in our luxurious spa.', 
      image:'images/hotel/spa.jpg' ,
    },

    {             
      title:"Elevator/Lift",
      description: 'Elevators provide easy access to different floors and ensure guests can navigate the hotel conveniently.',
      image:'images/hotel/lift.jpg'        
    },    

    {             
        title:"Loby",
        description: 'The lobby is the main entry and reception area of the hotel where guests check-in, check-out, and interact with the hotel staff.',
        image:'images/hotel/loby.jpg'        
    },    

    {             
        title:"Laundry Service",
        description: 'Hotels offer laundry facilities or services to ensure guests have access to clean clothes during their stay.',
        image:'images/hotel/laundry.jpg'        
    }, 
    
    {             
        title:"Satellite/Cable TV",
        description: 'Hotel rooms are equipped with televisions offering a variety of satellite or cable channels for entertainment.',
        image:'images/hotel/tv.jpg'        
    },

    {             
        title:"Coffee/Tea Maker in Rooms",
        description: ' Rooms may include coffee and tea-making facilities for guests to enjoy a hot beverage in their room.',
        image:'images/hotel/coffee.jpg'        
    }, 

    {             
        title:"24-Hour Front Desk",
        description: ' The front desk operates 24/7, providing around-the-clock assistance and support for guests.',
        image:'images/hotel/desk.jpg'        
    }, 

    {             
        title:"Parking/Car Park",
        description: ' Hotels often offer parking facilities for guests who arrive with their vehicles.',
        image:'images/hotel/parking.jpg'        
    }, 

    {             
        title:"Mini-Bar",
        description: ' Mini-bars in hotel rooms provide a selection of snacks and beverages for guests convenience, typically at an additional cost.',
        image:'images/hotel/minibar.jpg'        
    }, 

    {             
        title:"Wi-Fi/Internet Access",
        description: ' Hotels offer internet access, usually through Wi-Fi, to keep guests connected during their stay.',
        image:'images/hotel/wifi.png'        
    }, 

    {             
        title:"Restaurant",
        description: ' Hotels typically have on-site restaurants that offer a variety of cuisines and dining options for guests. It can range from casual dining to fine dining experiences, serving breakfast, lunch, and dinner.',
        image:'images/hotel/restarant.jpg'        
    }, 

    {             
        title:"Bar/Lounge",
        description: ' The hotel bar or lounge is a relaxing space for guests to enjoy beverages, cocktails, and sometimes light snacks. It a social area where guests can unwind and socialize.',
        image:'images/hotel/loungebar.jpg'        
    }, 

    {             
        title:"Room Service",
        description: 'Room service allows guests to order food and beverages to be delivered to their rooms. It provides convenience for those who prefer to dine in the comfort of their own space.',
        image:'images/hotel/roomser.jpg'        
    },

    {             
        title:"Business Center",
        description: 'A business center is equipped with computers, printers, and other office amenities, providing a workspace for guests who need to attend to business-related tasks.',
        image:'images/hotel/business-centre.jpg'        
    }, 

  ]; 

  return (

 <section className="service-section">
      <h2>Available Services</h2>

      <div className="service-carousel"> 
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000} // Adjust the interval time in milliseconds
        >
          {services.map((service, index) => (
            <div className="service-item" key={index}>
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}; 



export default ServiceSection;





















