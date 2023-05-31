import React, { useContext } from 'react'
import './Payment.css'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'
import Cart from '../CheckOut/Cart'

const Payment = () => {
    const cartContext = useContext(CartContext)
    const {cartItems}  = cartContext;


  return (
    <div className='payment'>
      <div className='payment-container'>
        <h1>CheckOut <Link to={'/cart'}>{cartItems?.length} items</Link></h1>
        <div className='payment-section'>
          <div className='payment-items'>
              {cartItems.map((item) => (
                <Cart key={item.id}
                 item={item}
                 id={item.id}
                 title={item.name}
                 image={item.image}
                 price={item.price}
                 rating={item.rating} />
              ))}
          </div>          
        </div>
        <div className='payment-section'>
          <div className='payment-method'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment-details'>
            {/* Stripe Code Will Go Here */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment


// import React from 'react'
// import "./Payment.css"
// import { loadStripe } from '@stripe/stripe-js';


// const Payment = () => {
//   const stripePromise = loadStripe('pk_test_51N1As3DRIsEHj72wieVYAegm39q9x0vV55rklaY9Yf9cV0zyKx7aXGZdeEu1iFs8V4Yxg06uojL8xQ4dASCnuSdb00GhlNGjJN');
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const stripe = await stripePromise;
    
//     const response = await fetch('http://localhost:5000/create-payment-intent ', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         amount: 1000, // Replace with the actual payment amount
//         currency: 'usd' // Replace with the desired currency
//       })
//     });
//     const {clientSecret} =await response.json();

//     const result = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: {
//           // Collect card details from the form
//           number: document.getElementById('cardNumber').value,
//           exp_month: document.getElementById('expiryDate').value.slice(0, 2),
//           exp_year: document.getElementById('expiryDate').value.slice(3),
//           cvc: document.getElementById('cvv').value
//         }
//       }
//     });

//     if (result.error) {
//       console.log(result.error.message);
//     } else {
//       console.log('Payment succeeded:', result.paymentIntent);
//     }
//   };


//   return (
//     <div className='payment'>
//         <div className='payment-container'>
//             <h2>Payment Page</h2>
//             <form className='payment-form'>
//               <div>
//                 <label htmlFor='email'>Email</label>
//                 <input type='email' id='email' placeholder='Enter Email'/>
//               </div>
//               <div>
//                 <label htmlFor="cardNumber">Card Number</label>
//                 <input
//                   type="password"
//                   id="cardNumber"
//                   placeholder='**** **** **** ****'
//                 />
//               </div>
//               <div className='row-form'>
//                   <label htmlFor="expiryDate">Expiry Date</label>
//                   <input type="text" id="expiryDate" placeholder='mm / yy'/>

//                   <label htmlFor="cvv">CVV</label>
//                   <input type="text" id="cvv" placeholder='***' />    
//               </div>
//               <button type="submit" onClick={handleSubmit}>Make Payment</button>        
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Payment;