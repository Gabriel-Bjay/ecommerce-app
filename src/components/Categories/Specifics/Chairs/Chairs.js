// import { ShoppingBasket } from '@mui/icons-material'
// import "./Chairs.css"

// import React from 'react'

// const Chairs = () => {
//   return (
//     <div className='chairs-container'>
//       <div className='chair'>
//         <img src='https://neolivin.com/wp-content/uploads/2022/06/12-4-1-768x768-optimized.png' alt='' className='chair-image'/>
//         <p className='chair-text'>Morocco Chair (Set of 2)</p>
//         <p className='chair-text'>$ 46.48</p>
//         <ShoppingBasket/>
//       </div>
//       <div className='chair'>
//         <img src='https://neolivin.com/wp-content/uploads/2022/06/84-3-768x768-optimized.png' alt='' className='chair-image'/>   
//         <p className='chair-text'>Beverly Chairs</p>
//         <p className='chair-text'>$ 43.40</p>
//         <ShoppingBasket/>
//       </div>
//       <div className='chair'>
//         <img src='https://neolivin.com/wp-content/uploads/2022/06/1-2-2-768x768-optimized.png' alt='' className='chair-image'/>
//         <p className='chair-text'>Naida Chair</p>
//         <p className='chair-text'>$ 56.53</p>
//         <ShoppingBasket/>
//       </div>
//       <div className='chair'>
//         <img src='https://neolivin.com/wp-content/uploads/2022/06/Product-Image-for-Website-JPG-4-600x600-1-optimized.png' alt='' className='chair-image'/>
//         <p className='chair-text'>Neo Chair</p>
//         <p className='chair-text'>$ 83.43</p>
//         <ShoppingBasket/>
//       </div>
//       <div className='chair'>
//         <img src='https://neolivin.com/wp-content/uploads/2022/06/38-2-2-680x680-optimized.png' alt='' className='chair-image'/>
//         <p className='chair-text'>Hetty Counter Stool</p>
//         <p className='chair-text'>$ 65.47</p>
//         <ShoppingBasket/>
//       </div>
//       <div className='chair'>
//         <img src='https://neolivin.com/wp-content/uploads/2022/06/44-1-3-e1660561056595-768x768-optimized.png' alt='' className='chair-image'/>
//         <p className='chair-text'>Harry Chair (Set Of Two)</p>
//         <p className='chair-text'>$ 65.64</p>
//         <ShoppingBasket/>
//       </div>
//       <div className='chair'>
//         <img src='https://neolivin.com/wp-content/uploads/2022/06/26-680x680-optimized.png' alt='' className='chair-image'/>
//         <p className='chair-text'>Vezel Lounge Chair</p>
//         <p className='chair-text'>$ 60.59</p>
//         <ShoppingBasket/>
//       </div>
//       <div className='chair'>
//         <img src='https://neolivin.com/wp-content/uploads/2022/08/87-768x768-optimized.png' alt='' className='chair-image'/>
//         <p className='chair-text'>Lavin Chair</p>
//         <p className='chair-text'>$ 45.70</p>
//         <ShoppingBasket/>
//       </div>
//       <div className='chair'>
//         <img src='https://neolivin.com/wp-content/uploads/2022/06/40-2-2-768x768-optimized.png' alt='' className='chair-image'/>
//         <p className='chair-text'>Samuel Chair(Set of 2)</p>
//         <p className='chair-text'>$ 67.80</p>
//         <ShoppingBasket/>
//       </div>
//     </div>
//   )
// }

// export default Chairs



import React, {useContext} from 'react';
import "./Chairs.css"
import productsData from '../../../../products.json';
import CartContext from '../../../../context/CartContext';


function Chairs({ id, image, title, price }) {
  // Filter the products based on the category "chairs"
  const chairsData = productsData.filter((product) => product.category === 'Chairs');
  const cartContext = useContext(CartContext)
  const {addToCart} = cartContext;

  const addToBasketHandler =()=>{
    addToCart({item :{id, image, title, price }});
    
};
  return (
    <>
      <h2>Chairs</h2>
      <div className='chairs-container'>
        {chairsData.map((chair) => (
          <div key={chair.id} className='chair'>
            <img src={chair.image} alt={chair.name} className='chair-image' />
            <h3 className='chair-name'>{chair.name}</h3>
            <p className='price-tag'>Price: ${chair.price}</p>
            <div className='rating'>
              <p>⭐⭐⭐⭐</p>
            </div>
              <button onClick={addToBasketHandler}>Add To Basket</button>
              <button>Save</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Chairs;