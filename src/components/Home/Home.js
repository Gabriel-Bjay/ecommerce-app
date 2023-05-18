import React from 'react'
import "./Home.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import StorefrontIcon from '@mui/icons-material/Storefront';
import FeaturedProducts from '../Products/FeaturedProducts';
import Categories from '../Categories/Categories';
import NewArrivals from '../Arrivals/NewArrivals';
import Collections from '../Collections/Collections';
import Brands from '../Brands/Brands';
import Reviews from "../Reviews/Reviews"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
    <section>
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
    </section>
    
    <section>
      <div className='home-content'>
          <div className='top-content'>
          <Link to='/tables'>
            <button>Tv Cabinets</button> 
          </Link>
          <Link to='/sofas'>
            <button>Sofas</button>
          </Link>
          <Link to='/tables'>
            <button>Coffee Tables</button> 
          </Link>
          <Link to ='/tables'>
            <button>Side Tables</button> 
          </Link>
          <Link to='/chairs'>
            <button>Lounge Chairs</button> 
          </Link>
          <Link to='/tables'>
            <button>Dining Tables</button> 
          </Link>    
          </div>
          <div className='bottom-content'>
          <Link to='/chairs'>
            <button>Dining Chairs</button> 
          </Link>
          <Link to='/beds'>
            <button>Bed Frames</button>  
          </Link>  
          </div>
      </div>
    </section>
    <FeaturedProducts/>
    <Categories/>
    <NewArrivals/>
    <Collections/>
    <Brands/>
    <Reviews/> 
      
    
      
    </div>  
  )
}

export default Home
