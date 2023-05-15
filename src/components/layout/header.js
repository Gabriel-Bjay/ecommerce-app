import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LoginIcon from '@mui/icons-material/Login';

// import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
  return (
    <>
      <div className='alert'>
        <h5 className='alert-1'>We currently do not support shipping or delivery. <strong>COMING SOON</strong></h5>
      </div>

          <div className='header-container'>
            <div className='logo-container'>
              <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f0947d102336539.5f341d2eb6ca2.jpg' 
                  alt='Urban Living Logo' 
                  className='site-logo'/>
            </div>
            
              <div className='categories'>
                <p>Shop By <u>Categories</u></p>
              </div>
              
              <div className='components'>
                  <div className='component'>
                    <AddToPhotosIcon className='icon'/>
                    <h6>Ideas</h6>
                    <KeyboardArrowDownIcon className='drop-down'/>
                  </div>

                  <div className='component'>
                    <h6>Shop</h6>
                    <KeyboardArrowDownIcon className='drop-down'/>
                  </div>

                  <div className='component'>
                    <h6>Collection</h6>
                    <KeyboardArrowDownIcon className='drop-down'/>
                  </div>
              </div>

              <div className='header_search'>
                <input className="header_input" type="text" />
                <SearchIcon className="search_icon" />
              </div>

              <div className='login'>
                <LoginIcon className='login-icon'/>
                <p>Hello, <em>Login/Register</em></p>
              </div>

              <div className='shopping-basket'>
                <ShoppingBasketIcon className='shopping-basket-icon'/>
              </div>

          </div>
          
    
    </>
  )
}

export default Header;
