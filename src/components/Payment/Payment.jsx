import React, { useContext, useEffect, useState } from 'react'
import axios from '../../axios'
import './Payment.css'
import CartContext from '../../context/CartContext'
import { Link, useNavigate } from 'react-router-dom'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

const Payment = () => {
    const cartContext = useContext(CartContext)
    const {cartItems}  = cartContext;
    const [succeeded, setSucceeded]= useState(false);
    const [disabled, setDisabled]= useState(true);
    const [processing, setProcessing]= useState("");
    const [error, setError]= useState(null);
    const [clientSecret, setClientSecret]= useState("");
    const [total, setTotal] = useState(0); 
    const stripe = useStripe();
    const elements = useElements();
    const navigate =useNavigate();



    useEffect(()=>{
      const calculateTotal = () => {
        let sum = 0;
        cartItems.forEach((item) => {
          sum += item.price;
        });
        setTotal(sum);
      };
  
      // Call the function to calculate the total
      calculateTotal();

      const getClientSecret = async () => {
        const response = await axios({
            method: 'post',
            url: `/payments/create?total=${total * 100} `
        });
        setClientSecret(response.data.clientSecret) 
      }; 
      getClientSecret();     
    }, [total,cartItems])

    console.log("The Secret is =>", clientSecret)

    const handleSubmit = async(e) =>{
      e.preventDefault();
      setProcessing(true)

      const payload = await stripe.confirmCardPayment(clientSecret, {payment_method:
         {card: elements.getElement(CardElement)}
      }).then(({paymentIntent}) =>{
        setSucceeded(true)
        setError(null)
        setProcessing(false)
        navigate("/")
      })
    };

    const handleChange = (e) =>{
        setDisabled(e.empty);
        setError(e.error? 'e.error.message' : "")
    }
  return (
    <div className='payment'>
      <div className='payment-container'>
        <h1>CheckOut <Link to={'/cart'}>{cartItems?.length} items</Link></h1>
        <div className='payment-section'>
          <div className='payment-items'>
          {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3 className="cart-item-title">{item.name}</h3>
                  <p className="cart-item-price">${item.price}</p>
                  <p className="cart-item-rating">Rating: {item.rating}</p>
                </div>
              </div>
            ))}

          </div>          
        </div>
        <div className='payment-section'>
          <div className='payment-method'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment-details'>
            {/* Stripe Code Will Go Here */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange}/>
              <div className='payment-price-container'>
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
