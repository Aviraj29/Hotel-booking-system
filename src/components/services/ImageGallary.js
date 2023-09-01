import React, { useState } from 'react';
import './ImageGallery.css'; 
      
  const ImageGallery = ({ imageData }) => {       
  const [showImages, setShowImages] = useState(10); // Show first 10 images by default  

  
  const handleShowMoreLess = () => {  
    setShowImages(prevShowImages => (prevShowImages === 10 ? imageData.length : 10));  
  };  
  
 return (                   

    <div className='service-container'>         
   {/*  */}
    <button className="show-button" onClick={handleShowMoreLess}>        
        {showImages === 10 ? 'Show More⇩' : 'Show Less⇧'}         
    </button>                 

    <h1 className='services'>Services</h1>  
    <div className="image-gallery">          


    {imageData.slice(0, showImages).map((image, index) => (

        <div key={index} className="image-item">        
          <img src={image.image} alt={image.name} />  
          <p>{image.name}</p> 
        </div>        
     ))} 
    </div>  
     

    </div>
  );
};
export default ImageGallery;














//syntx array/object name.(0,setShowImage) i.e 
// {imageData.slice(0, showImages).map((image, index) => (
  //syntax of slice:- 
  //array name.slice( begin value ,end value ) and last or end value not consider
  //if begins with undefined the slice begins from inex 0


  // The .map() method allows you to run a function on each item in the array, returning a new array as the result.
  //Map:- It create a new array by performing some operationon each array elements.