import React, {useContext, useState} from 'react'
import products from '../../../../products.json'
import './Diningroom.css'
import CartContext from '../../../../context/CartContext'

const Diningroom = () => {
    const diningData = products.filter((product) => product.category === 'Tables' && 'Chairs');
    const cartContext = useContext(CartContext)
    const {addToCart, setSavedItems} = cartContext;

    const addToBasketHandler =(table)=>{
        const {id,image,name,price,rating} = table
        addToCart({id,image,name,price,rating });
        
    };
      const addToSavedHandler = (table) =>{
        const { id, image, name, price, rating } = table;
        setSavedItems({ id, image, name, price, rating });
      }

      const [selectedTable, setSelectedTable] = useState(null);

        const selectitem = (tableId) => {
            setSelectedTable(tableId);
        };

        const closeModal = () => {
            setSelectedTable(null);
        };
    return (
        <div className='dining-room-container'>
             <div className='dining-header'> <h1>Dining Room</h1> </div> 
             <p>Create a stylish and comfortable dining space with our wide selection of dining room furniture. From sectional sofas to timeless end tables and coffee tables, you’ll find everything you need to make your dining room space both enjoyable and inviting.</p>  

             <div className='dining-container'>
             {diningData.map((item) => (
                <div key={item.id} className='item'>
                    <img src={item.image} alt={item.name} className='item-image' onClick={()=>selectitem(item.id)} />
                    <h3 className='item-name'>{item.name}</h3>
                    <p className='price-tag'>Price: ${item.price}</p>
                    <div className='rating'>
                    <p>{item.rating}</p>
                    </div>
                    <button onClick={()=>addToBasketHandler(item)}>Add To Basket</button>
                    <button onClick={() =>addToSavedHandler(item)}>Save</button> 
                </div>
                ))}
             </div>
        </div>
      )
}

export default Diningroom
