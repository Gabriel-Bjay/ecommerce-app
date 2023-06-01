import React, { useContext} from 'react'
import CartContext from '../../context/CartContext'
// import { useNavigate } from 'react-router-dom'

const SavedItems = () => {
  const {savedItems} = useContext(CartContext)
  // const navigate = useNavigate();
  return (
    <div>
      <h2 className='saved-header'>Saved</h2>
      <div className='saved-items'>
      {savedItems.map((item) => (
              <div key={item.id} className='items-container'>
                <div >
                  <img src={item.image}
                    alt={item.name}
                    className='item-image'/>
                </div>
                <h4>{item.name}</h4>
                <p>Price :${item.price}</p>
                <p>Rating : {item.rating}</p>             
              </div>
              
            ))}
      </div>
    </div>
  )
}

export default SavedItems
