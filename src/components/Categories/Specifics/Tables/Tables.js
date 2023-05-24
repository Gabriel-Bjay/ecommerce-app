// import React from 'react'
// import "./Tables.css"
// import { ShoppingBasket } from '@mui/icons-material'

// const Tables = () => {
//   return (
//     <div className='tables-container'>
//     <div className='table'>
//       <img src='https://neolivin.com/wp-content/uploads/2022/06/20-768x768-optimized.png' alt='' className='table-image'/>
//       <p className='table-text'>Hiace Coffee Table</p>
//       <p className='table-text'>$ 65.44</p>
//       <ShoppingBasket/>
//     </div>
//     <div className='table'>
//       <img src='https://neolivin.com/wp-content/uploads/2022/08/29-1-768x768-optimized.png' alt='' className='table-image'/>   
//       <p className='table-text'>Lefty TV Cabinet</p>
//       <p className='table-text'>$ 430</p>
//       <ShoppingBasket/>
//     </div>
//     <div className='table'>
//       <img src='https://neolivin.com/wp-content/uploads/2022/06/20-768x768-optimized.png' alt='' className='table-image'/>
//       <p className='table-text'>Flux Round Coffee Table</p>
//       <p className='table-text'>$ 64.84</p>
//       <ShoppingBasket/>
//     </div>
//     <div className='table'>
//       <img src='https://neolivin.com/wp-content/uploads/2022/09/Untitled-design-85-768x768-optimized.png' alt='' className='table-image'/>
//       <p className='table-text'>Nano Round Coffee Table</p>
//       <p className='table-text'>$ 96.86</p>
//       <ShoppingBasket/>
//     </div>
//     <div className='table'>
//       <img src='https://neolivin.com/wp-content/uploads/2022/06/13-2-4-768x768-optimized.png' alt='' className='table-image'/>
//       <p className='table-text'>Solven Tv Cabinet</p>
//       <p className='table-text'>$ 970</p>
//       <ShoppingBasket/>
//     </div>
//     <div className='table'>
//       <img src='https://neolivin.com/wp-content/uploads/2022/06/40-6-768x768-optimized.png' alt='' className='table-image'/>
//       <p className='table-text'>Ponto Tv Cabinet</p>
//       <p className='table-text'>$ 1,200</p>
//       <ShoppingBasket/>
//     </div>
//     <div className='table'>
//       <img src='https://neolivin.com/wp-content/uploads/2023/05/74-768x768-optimized.jpg' alt='' className='table-image'/>
//       <p className='table-text'>Loftus TV Cabinet</p>
//       <p className='table-text'>$ 800</p>
//       <ShoppingBasket/>
//     </div>
//     <div className='table'>
//       <img src='https://neolivin.com/wp-content/uploads/2022/06/31-7-768x768-optimized.png' alt='' className='table-image'/>
//       <p className='table-text'>Poet Nesting Coffee Table</p>
//       <p className='table-text'>$ 59.70</p>
//       <ShoppingBasket/>
//     </div>
//     <div className='table'>
//       <img src='https://neolivin.com/wp-content/uploads/2022/08/4-1-768x768-optimized.png' alt='' className='table-image'/>
//       <p className='table-text'>Breda Coffee Table</p>
//       <p className='table-text'>$ 63.80</p>
//       <ShoppingBasket/>
//     </div>
//   </div>
//   )
// }

// export default Tables


import React, {useContext} from 'react';
import productsData from '../../../../products.json';
import './Tables.css'
import CartContext from '../../../../context/CartContext';

function Tables({ id, image, title, price }) {
  // Filter the products based on the category "Sofas"
  const tablesData = productsData.filter((product) => product.category === 'Tables');
  const cartContext = useContext(CartContext)
  const {addToCart} = cartContext;

  const addToBasketHandler =()=>{
    addToCart({item :{id, image, title, price }});
    
};
  return (
    <>
      <h2>Tables</h2>
      <div className='tables-container'>
        {tablesData.map((table) => (
          <div key={table.id} className='table'>
            <img src={table.image} alt={table.name} className='table-image'/>
            <h3 className='table-name'>{table.name}</h3>
            <p className='price-tag'>Price: ${table.price}</p>
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

export default Tables;