import React from 'react'
import "./Home.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import StorefrontIcon from '@mui/icons-material/Storefront';

const Home = () => {
  return (
    <div className='home'>
      <div className='home-container'>
        <img src='https://www.innovationsofabeds.com.au/wp-content/uploads/2015/02/SPLITBACK-FREJ-SOFA-EIK-CHAIR-521-MIXED-DANCE-GREY-1.jpg'
          alt=''
          className='home-image'/>
        <div className='insights'>
          <h4>Aesthetic Home Furniture & Lifestyle</h4>
          <h1>Make Your <u>dream space</u> a reality</h1>

          <div>
              <div className='redirect'>
                <AddToPhotosIcon className='icon'/>
                <h6>Ideas</h6>
                <ArrowForwardIcon className='icon'/>
              </div>
              <div className='redirect'>
                  <StorefrontIcon className='icon'/>
                  <h6>Shop Now</h6>
                  <ArrowForwardIcon className='icon'/>
              </div>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Home
