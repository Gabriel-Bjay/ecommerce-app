import React, {useContext, useState} from 'react';
import productsData from '../../../../products.json';
import './Sofas.css'
import productDetails from '../../../../productDetails.json';
import CartContext from '../../../../context/CartContext';

function Sofas({ id, image, title, price }) {
    const [selectedSofa, setSelectedSofa] = useState(null);

  const selectSofa = (sofaId) => {
    setSelectedSofa(sofaId);
  };

  const closeModal = () => {
    setSelectedSofa(null);
  };
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
            <img src={sofa.image} alt={sofa.name} className='sofa-image' onClick={()=>selectSofa(sofa.id)} />
            <h3 className='sofa-name'>{sofa.name}</h3>
            <p className='price-tag'>Price: {sofa.price}</p>
            <div className='rating'>
              <p>{sofa.rating}</p>
            </div>
              <button onClick={addToBasketHandler}>Add To Basket</button>
              <button>Save</button>
          </div>
        ))}
      </div>

      {selectedSofa !== null && (
        <div className='modal-overlay' onClick={closeModal}>
          <div className='modal' onClick={(e) => e.stopPropagation()}>
            {productDetails
              .filter((sofa) => sofa.id === selectedSofa)
              .map((sofa) => (
                <div key={sofa.id}>
                  <img src={sofa.image} alt={sofa.name} />
                  <p>Price: ${sofa.price}</p>
                  <p>Description: {sofa.description}</p>
                  {/* Render other relevant details */}
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Sofas;

