import React, {useContext, useState} from 'react';
import productsData from '../../../../products.json';
import productDetails from '../../../../productDetails.json';
import './Tables.css'
import CartContext from '../../../../context/CartContext';

function Tables({ id, image, title, price,rating }) {
  const [selectedTable, setSelectedTable] = useState(null);

  const selectTable = (tableId) => {
    setSelectedTable(tableId);
  };

  const closeModal = () => {
    setSelectedTable(null);
  };
  // Filter the products based on the category "Tables"
  const tablesData = productsData.filter((product) => product.category === 'Tables');
  const cartContext = useContext(CartContext)
  const {addToCart} = cartContext;

  const addToBasketHandler =(table)=>{
    const {id,image,name,price,rating} = table
    addToCart({id,image,name,price,rating });
    
};
  return (
    <>
      <h2>Tables</h2>
      <div className='tables-container'>
        {tablesData.map((table) => (
          <div key={table.id} className='table'>
            <img src={table.image} alt={table.name} className='table-image' onClick={()=>selectTable(table.id)} />
            <h3 className='table-name'>{table.name}</h3>
            <p className='price-tag'>Price: ${table.price}</p>
            <div className='rating'>
              <p>{table.rating}</p>
            </div>
              <button onClick={()=>addToBasketHandler(table)}>Add To Basket</button>
              <button>Save</button>
          </div>
        ))}
      </div>

      {selectedTable !== null && (
        <div className='modal-overlay' onClick={closeModal}>
          <div className='modal' onClick={(e) => e.stopPropagation()}>
            {productDetails
              .filter((table) => table.id === selectedTable)
              .map((table) => (
                <div key={table.id}>
                  <img src={table.image} alt={table.name} />
                  <p>Price: ${table.price}</p>
                  <p>Description: {table.description}</p>
                  <p>Rating: {table.rating}</p>
                  {/* Render other relevant details */}
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Tables;