import React from 'react'
import "./NewArrivals.css"
import { ShoppingBasket } from '@mui/icons-material'

const NewArrivals = () => {
  return (
    <div>
      <h3 className='new-arrival-header'>New Arrivals</h3>
      <div className='new-arrivals-container'>
        <div className='new-arrival'>
            <img
            src='https://cdn.home-designing.com/wp-content/uploads/2017/06/small-round-wood-end-table-600x805.jpg'
            alt=''
            className='arrival-images'
            />
            <div className='arrival-overlay'>
              <p>Price: $ 500</p>
              <h4>Wood End Table</h4>
              <ShoppingBasket className='add-to-cart'/>
            </div>
        </div>
        <div className='new-arrival'>
            <img 
                src='https://secure.img1-cg.wfcdn.com/im/59036723/resize-h600-w600%5Ecompr-r85/1796/179652879/Hanks+6%27%27+Steel+Bed+Frame.jpg'
                alt=''
                className='arrival-images'
                />
               <div className='arrival-overlay'>
                <p>Price:$ 942</p>
                <h4>Hanks 6'' Steel Bed Frame</h4>
                <ShoppingBasket className='add-to-cart'/>
               </div> 
        </div>
        <div className='new-arrival'>
            <img 
                src='https://furniture123.co.uk/Images/BUNKAE00278144_1_Classic.jpg?v=10'
                alt=''
                className='arrival-images'
                />
                <div className='arrival-overlay'>
                  <p>Price:$ 750</p>
                  <h4>Round Marble Dining Table</h4>
                  <ShoppingBasket className='add-to-cart'/>
                </div>
        </div>
        <div className='new-arrival'>
            <img 
                src='https://image.made-in-china.com/155f0j00DMIGcCOEhhqP/Rubber-Wooden-Small-Size-Dining-Table-with-6-Chairs.jpg'
                alt=''
                className='arrival-images'
                />
                <div className='arrival-overlay'>
                  <p>Price:$ 480</p>
                  <h4> Wooden Small Size Dining Table</h4>
                  <ShoppingBasket className='add-to-cart'/>
                </div>
        </div>
        <div className='new-arrival'>
            <img 
                src='https://www.livinginashoebox.com/wp-content/uploads/2016/10/box-frame-drop-leaf-expandable-table-o.jpg'
                alt=''
                className='arrival-images'
                />
                <div className='arrival-overlay'>
                  <p>Price:$ 500</p>
                  <h4>Wooden Dining Table</h4>
                  <ShoppingBasket className='add-to-cart'/>
                </div>
        </div>
      </div>
    </div>
  )
}

export default NewArrivals
