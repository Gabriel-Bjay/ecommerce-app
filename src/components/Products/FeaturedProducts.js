import React from 'react'
import "./FeaturedProducts.css"

const FeaturedProducts = () => {



  return (
    <div className='featured_products'>
      <div className='featured_products-left'>
        <img src='https://i.pinimg.com/564x/d0/3a/8f/d03a8f3090d72eb5b45ab4d637f7529e.jpg' 
        alt='Featured-Products'
        className='feature-image'/>
      </div>
      <div className='featured_products-right'>
        <h2>Featured Products</h2>


        <div className='scroll-bar'>
          <div className='products'>
            <img
             src='https://i.etsystatic.com/22643154/r/il/6dcb74/2876628365/il_570xN.2876628365_eb0d.jpg'
             alt=''
             width='200px'
             height= '200px'
             className='featured-image'/>
             <h4>Lounge chairs</h4>
          </div>
          <div className='products'>
            <img
             src='https://cdn.home-designing.com/wp-content/uploads/2020/06/Small-Mid-Century-Modern-Kitchen-Table-with-White-Top-and-Wood-Legs-600x600.jpg'
             alt=''
             width='200px'
             height= '200px'
             className='featured-image'/>
             <p>Dining Tables</p>
          </div>
          <div className='products'>
            <img
             src='https://i.pinimg.com/564x/e8/87/57/e88757cd5ad8610d5600294759713617.jpg'
             alt=''
             width='200px'
             height= '200px'
             className='featured-image'/>
             <p>Dining Chairs</p>
          </div>
          <div className='products'>
            <img
             src='https://www.livingspaces.com/globalassets/productassets/300000-399999/300000-309999/304000-304999/304900-304999/304952/304952_beige_polyester_accent_chair_signature_01.jpg?w=446&h=301&mode=pad'
             alt=''
             width='200px'
             height= '200px'
             className='featured-image'/>
             <p>Arm Chairs</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts
