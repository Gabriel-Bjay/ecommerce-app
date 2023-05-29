import React from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import Cart from '../CheckOut/Cart'
import { useContext } from 'react'

const Payment = () => {
    const cartContext = useContext(CartContext)
    const {cartItems} = cartContext

  return (
    <div className='payment'>
        <div className='payment-container'>
            <h2>Payment Page</h2>
        </div>
    </div>
  )
}

export default Payment


// import React, {useState} from 'react'
// import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js'
// import axios from 'axios'

// const CARD_OPTIONS ={
//     iconStyle: "solid", 
//     style: {
//         base :{
//             iconColor : "#c4f0ff",
//             color: "#fff",
//             fontWeight: 500,
//             fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif ",
//             fontSize: "16px",
//             fontSmoothing: "antialiased",
//             ":-webkit-autofill" : {color : "#fce883"},
//             "::placeholder": {color : "#87bbfd"}
//         },
//         invalid:{
//             iconColor: "#ffc7ee",
//             color: "ffc7ee",
//         }
//     }
// }

// export default function Payment() {
//     const [success, setSuccess] = useState(false)
//     const  stripe = useStripe()
//     const elements = useElements()
//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         const {error, paymentMethod} = await stripe.createPaymentMethod({
//             type: "card",
//             card: elements.getElement(CardElement)
//         })
        
//         if (!error) {
//             try {
//                 const  {id} = paymentMethod
//                 const response = await axios.post("http://localhost:4000/payment", {
//                     amount: 1000,
//                     id
//                 })

//                 if (response.data.success) {
//                     console.log('Successful payment')
//                     setSuccess(true)
//                 }
//             } catch (error) {
//                 console.log("Error", error)
//             }
//         }else{
//             console.log(error.message)
//         }
//     }    

//   return (
//     <>
//      {
//         !success?
//         <form onSubmit={handleSubmit}>
//             <fieldset className='form-group'>
//                 <div className='form-row'>
//                     <CardElement options={CARD_OPTIONS}/>
//                 </div>
//             </fieldset>
//             <button>Pay</button>
//         </form>
//         :
//         <div>
//             <h2>Payment Successful</h2>
//         </div>
//      } 
//     </>
//   )
// }

