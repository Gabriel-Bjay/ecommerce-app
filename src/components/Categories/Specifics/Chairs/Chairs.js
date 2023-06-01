import React, {useContext,useState} from 'react';
import "./Chairs.css"
import productsData from '../../../../products.json';
import productDetails from '../../../../productDetails.json';
import CartContext from '../../../../context/CartContext';


const Chairs =({ id, image, title, price,rating })=> {
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
  const {addToCart, setSavedItems} = cartContext;

  const addToBasketHandler =(chair)=>{
    const {id,image,name,price,rating} = chair
    addToCart({id, image, name, price,rating });
};

  const addToSavedHandler = (chair) =>{
    const { id, image, name, price, rating } = chair;
    setSavedItems({ id, image, name, price, rating });
  }
  return (
    <>
      <h2>Chairs</h2>
      <div className='chairs-container'>
        {chairsData.map((chair) => (
          <div key={chair.id} className='chair'>
            <img src={chair.image}
             alt={chair.name} 
             className='chair-image'
             onClick={()=>selectChair(chair.id)}/>
            <h3 className='chair-name'>{chair.name}</h3>
            <p className='price-tag'>Price: ${chair.price}</p>
            <div className='rating'>
              <p>{chair.rating}</p>
            </div>
              <button onClick={()=>addToBasketHandler(chair)}>Add To Basket</button>
              <button onClick={() =>addToSavedHandler(chair)}>Save</button>
              
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
                  <p>Rating: {chair.rating}</p>
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