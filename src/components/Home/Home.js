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
import Footer from '../Footer/Footer';

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
            <button>Tv Cabinets</button> 
            <button>Sofas</button> 
            <button>Coffee Tables</button> 
            <button>Side Tables</button> 
            <button>Lounge Chairs</button> 
            <button>Dining Tables</button> 
          </div>
          <div className='bottom-content'>
            <button>Dining Chairs</button> 
            <button>Bed Frames</button> 
            <button>Desks</button> 
            <button>Benches</button> 
            <button>Home Decor</button> 
          </div>
      </div>
    </section>
    <FeaturedProducts/>
    <Categories/>
    <NewArrivals/>
    <Collections/>
    <Brands/>
    <Reviews/>
    <Footer/>
    
      
    
      
    </div>  
  )
}

export default Home
