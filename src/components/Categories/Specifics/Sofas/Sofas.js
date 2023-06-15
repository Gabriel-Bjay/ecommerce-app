import React, {useContext, useState} from 'react';
import productsData from '../../../../products.json';
import './Sofas.css'
import productDetails from '../../../../productDetails.json';
import CartContext from '../../../../context/CartContext';

function Sofas({ id,image,name,price,rating}) {
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
  const {addToCart, setSavedItems, isAuthenticated} = cartContext;

  const addToBasketHandler = (sofa) => {
    const { id, image, name, price, rating } = sofa;
    if (isAuthenticated) {
      addToCart({ id, image, name, price, rating });
    } else {
      // Handle the case when the user is not authenticated
      alert('Please log in to add items to the basket.');
    }
  };

  const addToSavedHandler =(sofa)=>{
    const {id,image,name,price,rating} = sofa
    if (isAuthenticated) {
      setSavedItems({ id, image, name, price, rating });
    } else {
      // Handle the case when the user is not authenticated
      alert('Please log in to save this item.');
    }
    };

  return (

    <>
      <h2>Sofas</h2>
      <div className='sofas-container'>
        {sofasData.map((sofa) => (
          <div key={sofa.id} className='sofa'>
            <img src={sofa.image} alt={sofa.name} className='sofa-image' onClick={()=>selectSofa(sofa.id)} />
            <h3 className='sofa-name'>{sofa.name}</h3>
            <p className='price-tag'>Price: ${sofa.price}</p>
            <div className='rating'>
              <p>{sofa.rating}</p>
            </div>
              <button onClick={()=>addToBasketHandler(sofa)}>Add To Basket</button>
              <button onClick={() =>addToSavedHandler(sofa)}>Save</button>

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
                  <p>Rating : {sofa.rating}</p>
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

