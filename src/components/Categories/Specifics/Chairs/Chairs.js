import React, {useContext,useState} from 'react';
import "./Chairs.css"
import productsData from '../../../../products.json';
import productDetails from '../../../../productDetails.json';
import CartContext from '../../../../context/CartContext';


const Chairs =({ id, image, title, price })=> {
  const [selectedChair, setSelectedChair] = useState(null);

  const selectChair = (chairId) => {
    setSelectedChair(chairId);
  };

  const closeModal = () => {
    setSelectedChair(null);
  };

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
            <img src={chair.image} alt={chair.name} className='chair-image'  onClick={()=>selectChair(chair.id)}/>
            <h3 className='chair-name'>{chair.name}</h3>
            <p className='price-tag'>Price: ${chair.price}</p>
            <div className='rating'>
              <p>{chair.rating}</p>
            </div>
              <button onClick={addToBasketHandler}>Add To Basket</button>
              <button>Save</button>
          </div>
        ))}
      </div>

      {selectedChair !== null && (
        <div className='modal-overlay' onClick={closeModal}>
          <div className='modal' onClick={(e) => e.stopPropagation()}>
            {productDetails
              .filter((chair) => chair.id === selectedChair)
              .map((chair) => (
                <div key={chair.id}>
                  <img src={chair.image} alt={chair.name} />
                  <p>Price: ${chair.price}</p>
                  <p>Description: {chair.description}</p>
                  {/* Render other relevant details */}
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Chairs;