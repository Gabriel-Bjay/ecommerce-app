import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext  from '../../context/CartContext';
import './Cart.css'

function Cart({ id, image, name, price,rating }) {
  const { cartItems,setCartItems, removeFromCart, increase, decrease } = useContext(CartContext);

  const navigate = useNavigate();

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, [setCartItems]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleDecreaseQuantity = (item) =>{
    const { id, image, name, price,rating } = item
    decrease({ id, image, name, price,rating });
  }

  const handleIncreaseQuantity = (item) =>{
    const { id, image, name, price,rating } = item
    increase({ id, image, name, price,rating });
  }

  const handleRemoveFromCart = (item) =>{
    const { id, image, name, price,rating } = item
    removeFromCart({ id, image, name, price,rating });
    }

    const calculateTotalPrice = () => {
      const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      return totalPrice.toFixed(0); // Round off to two decimal places
    };

    // const checkOut = () =>{
    //     fetch('/create-checkout-session', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type' : 'application/json'
    //       },
    //       body: JSON.stringify({
    //         items: [cartItems]
    //       })
    //     }).then(res =>{
    //       if(res.ok) return res.json()
    //       return res.json().then(json => Promise.reject(json))
    //     }).then(({ url }) =>{
    //       console.log(url)
    //       window.location = url;
    //     }).catch(e =>{
    //         console.error(e.error)
    //     })
    // }
  
  return (
    <>
    <h2 className='cart-header'>Cart</h2>
    
      <div className='cart-container'>
        {cartItems.length === 0 ? (
          <p className='cart-p'>Hello You Have Not Yet Added Any Items To Cart</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className='items-container'>
                <div >
                  <img src={item.image}
                    alt={item.name}
                    className='item-image'/>
                </div>
                <h4>{item.name}</h4>
                <p>Price :${item.price}</p>
                <p>Rating : {item.rating}</p>
                <div className='quantity'>
                  <button onClick={() => handleDecreaseQuantity(item)} className='btn'> - </button>
                  <p>{item.quantity}</p>
                  <button onClick={() => handleIncreaseQuantity(item)} className='btn'> + </button>
                </div>
                {/* <p>Total : {item.total * item.quantity}</p> */}
                <button onClick={() => handleRemoveFromCart(item)}>Remove From Cart</button>
              </div>
              
            ))}
            {cartItems.length > 0 && (
              <div className='total-count'>
                <p><strong>Total Price</strong>: $<strong>{calculateTotalPrice()}</strong></p>
                <button onClick={() => navigate('/payment')}>Proceed To Checkout</button>
              </div>
            )}
          </div>
          
        )}
      </div>  

      
    </>
  );
}

export default Cart;