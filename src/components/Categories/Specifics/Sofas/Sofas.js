// import React from 'react'
// import { ShoppingBasket } from '@mui/icons-material'
// import "./Sofas.css"

// const Sofas = () => {
//   return (
//     <div className='sofas-container'>
//     <div className='sofa'>
//       <img src='https://neolivin.com/wp-content/uploads/2022/06/25-1-2-768x768-optimized.png' alt='' className='sofa-image'/>
//       <p className='sofa-text'>Aston Sofa</p>
//       <p className='sofa-text'>$ 624.76</p>
//       <ShoppingBasket/>
//     </div>
//     <div className='sofa'>
//       <img src='https://neolivin.com/wp-content/uploads/2022/08/92-768x768-optimized.png' alt='' className='sofa-image'/>   
//       <p className='sofa-text'>Tommy Sofa 1-Seater</p>
//       <p className='sofa-text'>$ 1,430</p>
//       <ShoppingBasket/>
//     </div>
//     <div className='sofa'>
//       <img src='https://neolivin.com/wp-content/uploads/2022/11/9-768x768-optimized.jpg' alt='' className='sofa-image'/>
//       <p className='sofa-text'>Franco sofa 3-seater</p>
//       <p className='sofa-text'>$ 1,300</p>
//       <ShoppingBasket/>
//     </div>
//     <div className='sofa'>
//       <img src='https://neolivin.com/wp-content/uploads/2022/11/71-768x768-optimized.png' alt='' className='sofa-image'/>
//       <p className='sofa-text'>Starex Sofa</p>
//       <p className='sofa-text'>$ 1,000</p>
//       <ShoppingBasket/>
//     </div>
//     <div className='sofa'>
//       <img src='https://neolivin.com/wp-content/uploads/2023/03/11-4-768x768-optimized.jpg' alt='' className='sofa-image'/>
//       <p className='sofa-text'>Dzire Sofa</p>
//       <p className='sofa-text'>$ 240</p>
//       <ShoppingBasket/>
//     </div>
//     <div className='sofa'>
//       <img src='https://neolivin.com/wp-content/uploads/2022/06/71-4-768x768-optimized.png' alt='' className='sofa-image'/>
//       <p className='sofa-text'>Ceni Sofa 3 Seater</p>
//       <p className='sofa-text'>$ 1,200</p>
//       <ShoppingBasket/>
//     </div>
//     <div className='sofa'>
//       <img src='https://neolivin.com/wp-content/uploads/2022/09/20-2-768x768-optimized.jpg' alt='' className='sofa-image'/>
//       <p className='sofa-text'>Sienta Sofa 3 -seater</p>
//       <p className='sofa-text'>$ 800</p>
//       <ShoppingBasket/>
//     </div>
//     <div className='sofa'>
//       <img src='https://neolivin.com/wp-content/uploads/2022/09/Untitled-design-84-768x768-optimized.png' alt='' className='sofa-image'/>
//       <p className='sofa-text'>Tucson Sofa 1 seater</p>
//       <p className='sofa-text'>$ 970</p>
//       <ShoppingBasket/>
//     </div>
//   </div>
  
//   )
// }

// export default Sofas


// Sofas.js

import React, {useContext} from 'react';
import productsData from '../../../../products.json';
import './Sofas.css'
import CartContext from '../../../../context/CartContext';

function Sofas({ id, image, title, price }) {
  // Filter the products based on the category "Sofas"
  const sofasData = productsData.filter((product) => product.category === 'Sofas');
  const cartContext = useContext(CartContext)
  const {addToCart} = cartContext;
  

  const addToBasketHandler =()=>{
    addToCart({item :{id, image, title, price }});
    
};

  return (

    <>
      <h2>Sofas</h2>
      <div className='sofas-container'>
        {sofasData.map((sofa) => (
          <div key={sofa.id} className='sofa'>
            <img src={sofa.image} alt={sofa.name} className='sofa-image'/>
            <h3 className='sofa-name'>{sofa.name}</h3>
            <p className='price-tag'>Price: {sofa.price}</p>
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

export default Sofas;

