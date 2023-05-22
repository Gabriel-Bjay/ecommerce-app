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


import React from 'react';
import productsData from '../../../../products.json';

function Tables() {
  // Filter the products based on the category "Sofas"
  const tablesData = productsData.filter((product) => product.category === 'Tables');

  return (
    <div>
      <h2>Tables</h2>
      {tablesData.map((table) => (
        <div key={table.id}>
          <h3>{table.name}</h3>
          <img src={table.image} alt={table.name} />
          <p>Price: ${table.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Tables;