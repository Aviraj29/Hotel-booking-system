import React from 'react';
import ImageGallery from './ImageGallary'; 

const imageData = [    
{             
    name:"Accessibility",
    image:'images/icon/accessibility.png'        
},                   
          
{          
    name:"Bar",    
    image:'images/icon/bar.png'         
},

 {
    name:"Bussiness Lounge",
    image:'images/icon/bussiness.png'
},

{
    name:"Cost",
    image:'images/icon/cost.png' 
},
 
{
    name:"On-Site-Dining",
    image:'images/icon/dining.png'  
},
{
    name:"Dry Cleaning",
    image:'images/icon/dry.png'
},
{
    name:"Express Cheack-Out",
    image:'images/icon/express.png'
},
{
    name:"Fitness-Center",
    image:'images/icon/fitness.png'
},
{
    name:"Hair Salon",
    image:'images/icon/hair.png'           
},
{
    name:"Laundry Service",
    image:'images/icon/laundry.png'
},
{     
    name:"Meeting Facilities",
    image:'images/icon/meeting.png'
},
{
    name:"Valet Parking",
    image:'images/icon/parking.png'
},
{
    name:"Outdoor Pool",
    image:'images/icon/pool.png'
},
{
    name:"Room Service",
    image:'images/icon/room.png'
},

{
    name:"Running Trails",
    image:'images/icon/running.png'
},
{          
    name:"Room Service",
    image:'images/icon/service.png' 
},
{
    name:"spa",
    image:'images/icon/spa.png'
},
{        
    name:"steam Room",
    image:'images/icon/steam.png'  
},
{
    name:"Luggage-Storage",
    image:'images/icon/storage.png'
},
{
    name:"Wifi",
    image:'images/icon/wifi.png'  
},     
            

];


const Icon = () => {               
    return (  
      <div>
       <ImageGallery imageData = {imageData} />      {/* // & It passes imageData array as prop method name imageData */}
       </div>   
    );
};

export default Icon;    



