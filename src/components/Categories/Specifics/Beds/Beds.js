import React, { useState,useContext } from 'react';
import productsData from '../../../../products.json';
import productDetails from '../../../../productDetails.json';
import './Beds.css'
import CartContext from '../../../../context/CartContext';

const Beds = ({ id, image, title, price,rating }) => {
  const [selectedBed, setSelectedBed] = useState(null);


  const selectBed = (bedId) => {
    setSelectedBed(bedId);
  };

  const closeModal = () => {
    setSelectedBed(null);
  };

  
  // Filter the products based on the category "Beds"
  const bedsData = productsData.filter((product) => product.category === 'Beds');
  const cartContext = useContext(CartContext)
  const {addToCart} = cartContext;

  const addToBasketHandler = (bed) => {
    const { id, image, name, price, rating } = bed;
    addToCart({ id, image, name, price,rating });
  };
  
    
  return (
    <>
      <h2 className='category-header'>Beds</h2>
      <div className='beds-container'>
        {bedsData.map((bed) => (
          <div key={bed.id} className='bed'>
            <img
              src={bed.image}
              alt={bed.name}
              className='bed-image'
              onClick={() => selectBed(bed.id)}
            />
            <h3 className='bed-name'>{bed.name}</h3>
            <p className='price-tag'>Price: ${bed.price}</p>
            <div className='rating'>
              <p>{bed.rating}</p>
            </div>
            <button onClick={() => addToBasketHandler(bed)}>Add To Basket</button>
            <button>Save</button>
          </div>
        ))}
      </div>

      {selectedBed !== null && (
        <div className='modal-overlay' onClick={closeModal}>
          <div className='modal' onClick={(e) => e.stopPropagation()}>
            {productDetails
              .filter((bed) => bed.id === selectedBed)
              .map((bed) => (
                <div key={bed.id}>
                  <img src={bed.image} alt={bed.name} />
                  <p>Price: ${bed.price}</p>
                  <p>Description: {bed.description}</p>
                  <p>Rating: {bed.rating}</p>
                  {/* Render other relevant details */}
                </div>
              ))}
          </div>
        </div>
      )}
    </>

  );
};

export default Beds;
