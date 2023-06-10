import React from 'react'
import "./Home.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Categories from '../Categories/Categories';
import NewArrivals from '../Arrivals/NewArrivals';
import Collections from '../Collections/Collections';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
    <section>
      <div className='home'>
          <img src='https://www.innovationsofabeds.com.au/wp-content/uploads/2015/02/SPLITBACK-FREJ-SOFA-EIK-CHAIR-521-MIXED-DANCE-GREY-1.jpg'
              alt=''
              className='home-image'/>
          <div className='home-container'>    
            <div className='insights'>
              <h4 className='home-head'>Aesthetic Home Furniture & Lifestyle</h4>
              <h1 className='home-subhead'>Make Your <u>dream space</u> a reality</h1>

              <div className='redirect-btns'>
              <Link to='/ideas'>
                  <div className='redirect'>
                    <AddToPhotosIcon className='icon'/>
                    <h6>Ideas</h6>
                    <ArrowForwardIcon className='icon'/>
                  </div>
              </Link>
              <Link to='/categories'>
                  <div className='redirect'>
                      <StorefrontIcon className='icon'/>
                      <h6>Shop Now</h6>
                      <ArrowForwardIcon className='icon'/>
                  </div>
              </Link>   
              </div>
            </div> 
          </div>
        </div>
    </section>
    
    <section>
      <div className='home-content'>
          
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
          
          
          <Link to='/chairs'>
            <button>Dining Chairs</button> 
          </Link>
          <Link to='/beds'>
            <button>Bed Frames</button>  
          </Link>  
          
      </div>
    </section>
    <Categories/>
    <NewArrivals/>
    <Collections/>
    
     
      
    
      
    </div>  
  )
}

export default Home
