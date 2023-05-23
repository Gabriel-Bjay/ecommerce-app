import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LoginIcon from '@mui/icons-material/Login';
import { BedOutlined, DiningOutlined, KitchenOutlined, LivingOutlined, MapsHomeWorkOutlined, Save } from '@mui/icons-material';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { Link } from 'react-router-dom';
import "./Header.css"
import { useState } from 'react';
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';


const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user] = useAuthState(auth);



  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Logout successful
        setIsLoggedIn(false); // Update the isLoggedIn state
      })
      .catch((error) => {
        // Handle any errors that occur during logout
        console.log("Logout error:", error);
      });
  };
  return (
    <>
      <div className='alert'>
        <h5 className='alert-1'>We currently do not support shipping or delivery. <strong>COMING SOON</strong></h5>
      </div>

          <div className='header-container'>
            <div className='logo-container'>
            <Link to="/">
              <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f0947d102336539.5f341d2eb6ca2.jpg' 
                    alt='Urban Living Logo' 
                    className='site-logo'/>
            </Link>
              
            </div>
            
              <div className='categories'>
                <p>Shop <br/>By <u>Categories</u></p>
                <div className='drop-down-list'>
                  <div className='room'>
                    <Link to='livingroom'>
                      <LivingOutlined/>
                      <p>Living Room</p>
                      <ArrowRightOutlinedIcon/>
                    </Link>     
                  </div>

                  <div className='room'>
                    <Link to="/bedroom">
                      <BedOutlined/>
                      <p>Bed Room</p>
                      <ArrowRightOutlinedIcon/>
                    </Link>  
                  </div>
                  <div className='room'>
                    <Link to="/diningroom">
                    <DiningOutlined/>
                    <p>Dining Room</p>
                    <ArrowRightOutlinedIcon/>
                    </Link>
                  </div>
                  <div className='room'>
                  <Link to="/kitchen">
                    <KitchenOutlined/>
                    <p>Kitchen</p>
                    <ArrowRightOutlinedIcon/>
                  </Link>   
                  </div>
                  <div className='room'>
                  <Link to="/office">
                    <MapsHomeWorkOutlined/>
                    <p>Office</p>
                    <ArrowRightOutlinedIcon/>
                  </Link>
                  </div>
                </div>
              </div>
              
              <div className='components'>
                  <div className='component'>
                  <Link to="ideas">
                    <AddToPhotosIcon className='icon'/>
                    <h6>Ideas</h6>
                  </Link>
                    <div className='component-drop-down'>
                    </div>
                  </div>

                  <div className='component'>
                    <h6>Shop</h6>
                    <KeyboardArrowDownIcon className='drop-down'/>
                    <div className='drop-down-list-2'>
                      <div className='departments'>
                        <div className='rooms'>
                          <h4>Rooms</h4>
                          <Link to="/livingroom">
                            <p>Living Room</p>
                          </Link>

                          <Link to="/kitchen">
                            <p>Kitchen</p>
                          </Link>

                          <Link to="/bedroom">
                            <p>Bedroom</p>
                          </Link> 
                          <Link to="/office">
                            <p>Office</p>
                          </Link>                                                  
                        </div>
                        <div className='categories'>
                          <h4>Categories</h4>
                          <Link to='/sofas'>
                            <p>Sofas</p>
                          </Link>
                          <Link to='/beds'>
                            <p>Beds</p>
                          </Link>
                          <Link to='/chairs'>
                            <p>Chairs</p>
                          </Link>
                          <Link to='/tables'>
                            <p>Tables</p>
                          </Link>
                        </div>
                        <div className='collections'>
                          <h4>Collections</h4>
                          <Link to='/japanese-collection'>
                            <p>Japanese,Minimalsim</p>
                          </Link>
                          <Link to='/modern-collection'>
                            <p>Modern,Industrial</p>
                          </Link>
                          <Link to='/valebeck-collection'>
                            <p>Valebeck, Modern</p>
                          </Link>  
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='component'>
                  <Link to="/collections">
                    <h6>Collections</h6>
                  </Link>
                  </div>
              </div>

              <div className='search_container'>
                <div className='header_search'>
                  <input className="header_input" type="text" 
                     placeholder="Search" />
                    <SearchIcon className="search_icon" 
                    />
                </div>
                <div className='search-drop'>
                  
                </div>
              </div>

              <div className='login-section'>
                {user ? (
                  <>
                    <LoginIcon onClick={handleLogout}/>
                    <p>Hello, <br/><em>{user.email}</em></p>
                  </>
                ) : (
                  <Link to='/login'>
                    <LoginIcon/>
                  </Link>
                )}
              </div>

              {/* <div className='login-section'>
                <Link to="/login">
                  <LoginIcon className='login-icon'/> 
                </Link>
                <p>Hello, <br/><em>Login/Register</em></p>
              </div> */}

              <div className='shopping-basket'>
                <ShoppingBasketIcon className='shopping-basket-icon'/>
                <Save className='saved-icon'/>
              </div>


          </div>
          
    
    </>
  )
}

export default Header;
