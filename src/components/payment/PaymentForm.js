import React, { useState} from 'react';
import './PaymentForm.css';   
import { ListGroup, ListGroupItem} from 'react-bootstrap';
import { FaCreditCard, FaRegCreditCard, FaCcMastercard, FaCcAmex, FaMobileAlt,FaHandHoldingUsd,FaUniversity,FaGooglePay} from 'react-icons/fa';               
import { useLocation } from 'react-router-dom';
// import { FaCreditCard, FaRegCreditCard, FaCcMastercard, FaCcAmex, FaMobileAlt,FaHandHoldingUsd,FaGooglePay} from 'react-icons/fa';                 //npm i react-icons
                                  //npm install react-icons --save
                                 //npm install react-bootstrap bootstrap@5.1.3  
  
  const PaymentForm = () => {                
  // const [fullName, setFullName] = useState('');                             
  // const [email, setEmail] = useState('');  
  // const [phone, setPhone] = useState('');               
  const [totalPrice, setTotalPrice] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedCardOption, setSelectedCardOption] = useState(''); 
  const [cardNumber, setCardNumber] = useState(''); 
  const [upiId, setUPIId] = useState('');  
  const [paymentSuccess, setPaymentSuccess] = useState(false); 
  const [showPayLaterMessage, setShowPayLaterMessage] = useState(false); 
  const location = useLocation()
  const totalAmount = location.state?.totalAmount || '';
  const totalPriceAfterDiscount = location.state?.totalPriceAfterDiscount || '';
const handlePayLater = () => {
  // if (fullName && email && phone && totalPrice)
  if (totalAmount || totalPrice || totalPriceAfterDiscount )
   {  
    setShowPayLaterMessage(true);
    setTimeout(() => {
      setShowPayLaterMessage(false);       
      clearForm();  
    }, 4000);
  }
};
 
const handlePayment = () => {
    if (
      // fullName &&
      // email &&
      // phone &&
      (totalAmount || totalPriceAfterDiscount) && 

      selectedOption &&
      ((selectedOption === 'atm' && cardNumber) ||
        (selectedOption === 'upi' && upiId) ||
        (selectedOption === 'netBanking') || 
        (selectedOption === 'googlePay' && upiId)))  
     {
      setPaymentSuccess(true);
      setTimeout(() => {
        setPaymentSuccess(false);     
        clearForm();
      }, 5000);
    }
  };

const clearForm = () => {
    // setFullName('');
    // setEmail('');
    // setPhone('');
    setTotalPrice('');
    setSelectedOption('');
    setSelectedCardOption('');
    setCardNumber('');
    setUPIId('');  
  };

  return (
  
    <div className="payment-form">
      <h2 className='payment-h2'>Payment Details</h2>
     
      {/* <div className="input-group">
        <label>Enter Your Full Name :</label>  
        
       <input 
        type="text"      
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder="Enter your full name"
        required/>           
      </div> */}

      {/* <div className="input-group">
       <label>Email Address :</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address" 
        required/>
      </div> */}

      {/* <div className="input-group">  
      <label>Mobile Number :</label>             
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Enter your mobile number"
        required/>
      </div> */}

      <div className="input-group">
      <label className='payment-label'>Total Price :</label>
      <input
        type="number"
        value={totalAmount || totalPriceAfterDiscount} 
        onChange={(e) => setTotalPrice(e.target.value)}
        placeholder="Enter the total price" 
        required/>         
      </div>  
<div className="group-flex">
<div className="input-group">
        <label className='payment-label'>Payment Options :</label> 
          <ListGroup className="payment-options">

        <div className="all">           
            <ListGroupItem
            active={selectedOption === 'atm'}
            onClick={() => setSelectedOption('atm')}>
            <FaCreditCard className="payment-icon" /> ATM Card
            </ListGroupItem>
        </div>

        <div className="all">  
          <ListGroupItem
            active={selectedOption === 'upi'}
            onClick={() => setSelectedOption('upi')}>
            <FaMobileAlt className="payment-icon" /> UPI Options 
          </ListGroupItem>
        </div>         


        <div className="all">        
          <ListGroupItem
            active={selectedOption === 'payLater'}
            onClick={() => setSelectedOption('payLater')}>
            <FaHandHoldingUsd className="payment-icon" /> Book Now Pay Later 
           </ListGroupItem>
        </div>

         {/* Netbanking */}
         <div className="all">
            <ListGroupItem
              active={selectedOption === 'netBanking'}
              onClick={() => setSelectedOption('netBanking')}>
              <FaUniversity className="payment-icon" /> Net Banking
            </ListGroupItem>
          </div> 

          <div className="all">
            <ListGroupItem
              active={selectedOption === 'googlePay'}
              onClick={() => setSelectedOption('googlePay')}>
              <FaGooglePay className="payment-icon" /> Google Pay
            </ListGroupItem>
          </div>        
          </ListGroup>
         </div>

<div className="scrollspy-content">
        <div id="atm" className={selectedOption === 'atm' ? 'active' : ''}>

          {selectedOption === 'atm' && (
            <div>
              <p>Select ATM Card:</p>
              <div className="input-group">
                <label className='payment-label'>
                  <input
                    type="radio"
                    value="visa"
                    checked={selectedCardOption === 'visa'}
                    onChange={() => setSelectedCardOption('visa')} />

                < FaRegCreditCard className="card-icon" /> Visa
                </label>
                <label className='payment-label'>
                  <input
                    type="radio"
                    value="mastercard"
                    checked={selectedCardOption === 'mastercard'}
                    onChange={() => setSelectedCardOption('mastercard')}/>
                  <FaCcMastercard className="card-icon" /> MasterCard
                </label>

                <label className='payment-label'>
                  <input
                    type="radio"
                    value="amex"
                    checked={selectedCardOption === 'amex'}
                    onChange={() => setSelectedCardOption('amex')}/>
                  <FaCcAmex className="card-icon" /> American Express
                </label>
              </div>

              <div className="input-group">
                <label className='payment-label'>Enter Card Number:</label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}/>
            </div>
        </div>
      )}
</div>

<div id="upi" className={selectedOption === 'upi' ? 'active' : ''}>
          {selectedOption === 'upi' && (
            <div className="input-group">
              <label className='payment-label'>Enter UPI ID:</label>
             
              <input
              type="text"
              value={upiId}
              onChange={(e) => setUPIId(e.target.value)}
              placeholder="mobileNumber@UPI"/>

          <ul className="upi-instructions">
            <li> Enter your registered VPA</li>
            <li> Receive payment request on bank app</li>
            <li>Authorize payment request</li>
          </ul>

          {/* Add the "Or" option and the scan image */}
          <div className="or-option">
              <p>Or</p>  &nbsp;&nbsp;&nbsp;&nbsp;
              <img src="./images/payment/scan.png" height="100px" width="100px"
                alt="Scan QR Code"
                className="scan-image"
              />
              <p>Scan and Pay</p> 
            </div>

  <div className="card-images">
  <img src="./images/payment/Google-Symbol.png" alt="Google-Symbol" className="card-image" />
  <img src="./images/payment/hdfc.jpg" alt="hdfc" className="card-image" />
  <img src="./images/payment/state-bank.png" alt="State-bank" className="card-image" />
  <img src="./images/payment/googlepay.jpg" alt="Google Pay" className="card-image" />
  <img src="./images/payment/upi.png" alt="UPI" className="card-image" />
  <img src="./images/payment/axis.jpg" alt="axis" className="card-image" /> 
  
</div>   
</div> 

)}
</div> 

<div id="payLater" className={selectedOption === 'payLater' ? 'active' : ''}>
          {selectedOption === 'payLater' && (
            <div>
              <p>Benefits of Pay Later:</p>
              <ul className="benefits-list">
                <li> <img src="./images/payment/zero_interest.png" 
                alt="Book Now Pay Later"  
                className="payment-image"/>   
    
                <div className="benefits-icon" /> Starts at 0% Interest</li>
                <li><img src="./images/payment/credit_period.png" width="50px" height="50px"
                alt="Book Now Pay Later"
                className="payment-image"/>   
                <div className="benefits-icon" /> Pay in 15 days - 18 months</li>
                <li> <img src="./images/payment/no-document.png" width="20px" height="20px"
                alt="Book Now Pay Later"
                className="payment-image"/>   <div className="benefits-icon" /> No Paperwork</li>
              </ul>  

<p className="price-message">Book your stay before the prices go up!</p> 

<button className="pay-later-button" onClick={handlePayLater}>  
Book Now & Pay Later
</button>   
      
{showPayLaterMessage && (
              <div className="pay-later-message">
                Make Payment later. Thank you! 
              </div>
)}

</div>   
  )}
</div>

{/*netBanking  */}
       <div id="netBanking" className={selectedOption === 'netBanking' ? 'active' : ''}>
          {selectedOption === 'netBanking' && (
            <div>
              <p>Select Bank:</p>            
              <div className="bank-options">
                <label className='payment-label'>
                  <input
                    type="radio"
                    value="axisBank"
                    checked={selectedCardOption === 'axisBank'}
                    onChange={() => setSelectedCardOption('axisBank')}/>
                  <img src="./images/payment/axis.jpg" alt="Axis Bank" className="bank-icon" />
                </label>
                <label className='payment-label'>
                  <input
                    type="radio"
                    value="hdfcBank"
                    checked={selectedCardOption === 'hdfcBank'}
                    onChange={() => setSelectedCardOption('hdfcBank')}/>
                  <img src="./images/payment/hdfc.jpg" alt="HDFC Bank" className="bank-icon" />
                </label>
                <label className='payment-label'>
                  <input
                    type="radio"
                    value="iciciBank"
                    checked={selectedCardOption === 'iciciBank'}
                    onChange={() => setSelectedCardOption('iciciBank')}/>
                  <img src="./images/payment/ici.png" alt="ICICI Bank" className="bank-icon" />
                </label>
                <label className='payment-label'>
                  <input
                    type="radio"
                    value="sbiBank"
                    checked={selectedCardOption === 'sbiBank'}
                    onChange={() => setSelectedCardOption('sbiBank')}/>
                  <img src="./images/payment/state-bank.png" alt="State Bank of India" className="bank-icon" />
                </label>
              </div>
            </div>
)}
</div>
 
<div id="googlePay" className={selectedOption === 'googlePay' ? 'active' : ''}>
          {selectedOption === 'googlePay' && (
            <div className="input-group">
              <label className='payment-label'>Enter UPI ID:</label>

              <input
                type="text"
                value={upiId}
                onChange={(e) => setUPIId(e.target.value)}
                placeholder="userName@upi"/>

              <ul className="upi-instructions">
                <li> Enter your registered VPA</li>
                <li> Receive payment request on Google Pay app</li>
                <li>Authorize payment request</li>
              </ul>
            </div>
          )}
        </div>
</div>  
</div>
<button className="pay-button" onClick={handlePayment}> 
Pay Now  
</button>

{paymentSuccess && (
<div className="success-message">Your paymentof Rs {totalAmount} {totalPriceAfterDiscount} has been successful.Thank You.. For Choosing Grand Hotel..!
</div>
)}

<div className="terms-conditions">
  By completing this reservation you are accepting our Terms & Conditions:
  <ul>
    <hr />
    <li>Payment is due at the time of making the booking. Booking is not confirmed till the payment is received in advance.</li>
    <li>The hotel will send the payment link via email.</li>
    <li>Pets are not allowed at the Property.</li>
    <li>Check-In Timings - 2 PM</li>
    <li>Check-Out Timings - 12 Noon</li>
  </ul>
</div>   

<div className="card-images">
  <img src="./images/payment/by_visa.gif" alt="Visa Card" className="card-image" />
  <img src="./images/payment/masterr.jpg" alt="MasterCard" className="card-image" />
  <img src="./images/payment/American_Express.png" alt="American Express" className="card-image" />
  <img src="./images/payment/googlepay.jpg" alt="Google Pay" className="card-image" />
  <img src="./images/payment/upi.png" alt="UPI" className="card-image" />
  <img src="./images/payment/mastercardd.jpg" alt="mastercard" className="card-image" />
  <img src="./images/payment/diners-club.png" alt="diners-club" className="card-image" />
  <img src="./images/payment/Paytm_Logo.jpg" alt="JCB-Card" className="card-image" />  
</div>   
                 
</div>            
);  
};  

export default PaymentForm; 
























































































































































































































































