import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';  
import './CustomerReview.css';                             
    
  const CustomerReview = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState(''); 
  const [customerName, setCustomerName] = useState(''); 
  const [reviewsList, setReviewsList] = useState([]); 
  const [showThankYou, setShowThankYou] = useState(false);    

  const handleRatingChange = (value) => {            
    setRating(value);     
  }; 

  const handleReviewChange = (event) => {  
    setReview(event.target.value);  
  }; 
  
  const handleCustomerNameChange = (event) => {  
    setCustomerName(event.target.value);     
  };

  const handleSubmitReview = () => {
    const newReview = {
      customerName,
      rating,
      review,
    };

    setReviewsList([...reviewsList, newReview]); 

    setCustomerName('');  
    setRating(0); 
    setReview('');


    setShowThankYou(true);

    setTimeout(() => {
    setShowThankYou(false);  
    }, 3000); 
};

  return (              
    <div className="customer-review">
      <h3>Customer Review & Rating</h3>
      <input
        className="name-input"
        type="text"
        placeholder="Enter your name"
        value={customerName}                     
        onChange={handleCustomerNameChange}     // {/* */}
      />

      <h4>Rating :- </h4>
      <div className="rating-stars">

        {[1, 2, 3, 4, 5].map((starValue) => (  
          <FaStar
            key={starValue}  
            className={starValue <= rating ? 'star active-s' : 'star'} 

            onClick={() => handleRatingChange(starValue)}       // {/* */}
          />
        ))}

      </div>

      <textarea
        className="review-text"
        placeholder="Write your review..."
        value={review}  
        onChange={handleReviewChange}      // {/* */} 
      />

      <button className="submit-button" onClick={handleSubmitReview}>        {/* */}
        Submit Review
      </button>

      {showThankYou && <p className="thank-you">Thank you for your feedback!</p>}

      {reviewsList.length > 0 && (
        <div>
          <h4>Customer Reviews:</h4>
          <ul className='cust-ul'>
            {reviewsList.map((reviewData, index) => ( 

               <li className='cust-li' key={index}>    
                <div>Customer Name: {reviewData.customerName}</div>
                <div>Rating: {reviewData.rating}</div>
                <div>Review: {reviewData.review}</div>  
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};  

export default CustomerReview;

















































































































































































































































































// import React, { useState, useEffect } from 'react';
// import { FaStar } from 'react-icons/fa';
// import './CustomerReview.css';

// const CustomerReview = () => {
//   const [rating, setRating] = useState(0);
//   const [review, setReview] = useState('');
//   const [customerName, setCustomerName] = useState('');
//   const [reviewsList, setReviewsList] = useState([]);

//   useEffect(() => {
//     // Load existing reviews from localStorage
//     const storedReviews = localStorage.getItem('reviews');
//     if (storedReviews) {
//       setReviewsList(JSON.parse(storedReviews));
//     }
//   }, []);

//   const handleRatingChange = (value) => {
//     setRating(value);
//   };

//   const handleReviewChange = (event) => {
//     setReview(event.target.value);
//   };

//   const handleCustomerNameChange = (event) => {
//     setCustomerName(event.target.value);
//   };

//   const handleSubmitReview = () => {
//     const newReview = {
//       customerName,
//       rating,
//       review,
//     };

//     // Save the new review to the list of reviews
//     const updatedReviewsList = [...reviewsList, newReview];
//     setReviewsList(updatedReviewsList);

//     // Save the updated reviews list to localStorage
//     localStorage.setItem('reviews', JSON.stringify(updatedReviewsList));

//     // Clear the input fields and rating state after submission
//     setCustomerName('');
//     setRating(0);
//     setReview('');
//   };

//   return (
//     <div className="customer-review">
//       <h3>Customer Review & Rating</h3>
//       <div className="rating-stars">
//         {[1, 2, 3, 4, 5].map((starValue) => (
//           <FaStar
//             key={starValue}
//             className={starValue <= rating ? 'star active' : 'star'}
//             onClick={() => handleRatingChange(starValue)}
//           />
//         ))}
//       </div>
//       <textarea
//         className="review-text"
//         placeholder="Write your review..."
//         value={review}
//         onChange={handleReviewChange}
//       />
//       <input
//         className="name-input"
//         type="text"
//         placeholder="Enter your name"
//         value={customerName}
//         onChange={handleCustomerNameChange}
//       />
//       <button className="submit-button" onClick={handleSubmitReview}>
//         Submit Review
//       </button>
//       {reviewsList.length > 0 && (
//         <div>
//           <h4>Customer Reviews:</h4>
//           <ul>
//             {reviewsList.map((reviewData, index) => (
//               <li key={index} className="review-item">
//                 {/* Here, you can replace the placeholder image with the customer's actual image/icon */}
//                 <img
//                   src="https://via.placeholder.com/40"
//                   alt="Customer"
//                 />
//                 <div>
//                   <div>{reviewData.customerName}</div>
//                   <div>Rating: {reviewData.rating}</div>
//                   <div>Review: {reviewData.review}</div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CustomerReview;


