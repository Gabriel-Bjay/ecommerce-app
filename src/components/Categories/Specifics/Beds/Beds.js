// import { ShoppingBasket } from '@mui/icons-material'
// import React from 'react'
// import "./Beds.css"

// const Beds = () => {
//   return (
//     <div className='beds-container'>
//       <div className='bed'>
//         <img src='https://neolivin.com/wp-content/uploads/2022/06/17-4-1-680x680-optimized.png' alt='' className='bed-image'/>
//         <p className='bed-text'>Brandi Single Bed Frame</p>
//         <p className='bed-text'>$ 1,000</p>
//         <ShoppingBasket/>
//       </div>
//       <div className='bed'>
//         <img src='https://neolivin.com/wp-content/uploads/2022/06/61-4-680x680-optimized.png' alt='' className='bed-image'/>   
//         <p className='bed-text'>Hayden Bed Frame</p>
//         <p className='bed-text'>$ 1,430</p>
//         <ShoppingBasket/>
//       </div>
//       <div className='bed'>
//         <img src='https://neolivin.com/wp-content/uploads/2022/10/8-680x680-optimized.png' alt='' className='bed-image'/>
//         <p className='bed-text'>Solven Bed Frame</p>
//         <p className='bed-text'>$ 1,300</p>
//         <ShoppingBasket/>
//       </div>
//       <div className='bed'>
//         <img src='https://neolivin.com/wp-content/uploads/2022/06/24-1-1-680x680-optimized.png' alt='' className='bed-image'/>
//         <p className='bed-text'>Crystal Bed Frame</p>
//         <p className='bed-text'>$ 1,000</p>
//         <ShoppingBasket/>
//       </div>
//       <div className='bed'>
//         <img src='https://neolivin.com/wp-content/uploads/2022/08/18334F4F-B3DA-42CF-B98F-48EEA783B986-680x680-optimized.jpeg' alt='' className='bed-image'/>
//         <p className='bed-text'>Neo Bed Frame</p>
//         <p className='bed-text'>$ 700</p>
//         <ShoppingBasket/>
//       </div>
//       <div className='bed'>
//         <img src='https://neolivin.com/wp-content/uploads/2022/06/1-1-4-680x680-optimized.png' alt='' className='bed-image'/>
//         <p className='bed-text'>Brandi Bed Frame</p>
//         <p className='bed-text'>$ 1,200</p>
//         <ShoppingBasket/>
//       </div>
//       <div className='bed'>
//         <img src='https://neolivin.com/wp-content/uploads/2022/06/R1Copy-of-HTH02655-600x600-1-optimized.jpg' alt='' className='bed-image'/>
//         <p className='bed-text'>HTH Bed Frame</p>
//         <p className='bed-text'>$ 800</p>
//         <ShoppingBasket/>
//       </div>
//       <div className='bed'>
//         <img src='https://neolivin.com/wp-content/uploads/2022/10/5-680x680-optimized.png' alt='' className='bed-image'/>
//         <p className='bed-text'>Solven Bed Frame</p>
//         <p className='bed-text'>$ 970</p>
//         <ShoppingBasket/>
//       </div>
//       <div className='bed'>
//         <img src='https://neolivin.com/wp-content/uploads/2023/03/45-680x680-optimized.jpg' alt='' className='bed-image'/>
//         <p className='bed-text'>Hadley Single Bed Frame</p>
//         <p className='bed-text'>$ 680</p>
//         <ShoppingBasket/>
//       </div>
//     </div>
//   )
// }

// export default Beds


import React, {useContext} from 'react';
import "./Beds.css"
import productsData from '../../../../products.json';
import { Save, ShoppingBasket } from '@mui/icons-material';
import CartContext from '../../../../context/CartContext';

function Beds({ id, image, title, price }) {
  // Filter the products based on the category "Sofas"
  const bedsData = productsData.filter((product) => product.category === 'Beds');
  const cartContext = useContext(CartContext)
  const {addToCart} = cartContext;

  const addToBasketHandler =()=>{
    addToCart({item :{id, image, title, price }});
};

  return (
    <>
    <h2>Beds</h2>
      <div className='beds-container'>
        {bedsData.map((bed) => (
          <div key={bed.id} className='bed'>
          
            <img src={bed.image} alt={bed.name} className='bed-image' />
            <h3 className='bed-name'>{bed.name}</h3>
            <p className='price-tag'>Price: ${bed.price}</p>
            <div className='rating'>
              <p>⭐⭐⭐⭐</p>
            </div>
              <button onClick={addToBasketHandler}>Add To Basket</button>
              <button>Save</button>
            {/* <div className='shop-save'>
              
            </div> */}
            
          </div>
        ))}
      </div>
    </>
  );
}


export default Beds;