  import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
  import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
  import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
  import {  BedOutlined, DiningOutlined, ExpandMore, KitchenOutlined, LivingOutlined,  LoginOutlined,  MapsHomeWorkOutlined, Save, Settings } from '@mui/icons-material';
  import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
  import { Link } from 'react-router-dom';
  import "./Header.css"
  import { auth } from '../../firebase';
  import { useContext} from "react";
  import CartContext from '../../context/CartContext';
  
  const Header = ({setSearchTerm, handleSearch}) => {
    const {  savedItems,cartItems, user } = useContext(CartContext);

    const handleAuthentication = () => {
      if (user) {
        auth.signOut();
      }
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
                      <Link to='sofas'>
                        <LivingOutlined/>
                        <p>Living Room</p>
                        <ArrowRightOutlinedIcon/>
                      </Link>     
                    </div>

                    <div className='room'>
                      <Link to="/beds">
                        <BedOutlined/>
                        <p>Bed Room</p>
                        <ArrowRightOutlinedIcon/>
                      </Link>  
                    </div>
                    <div className='room'>
                      <Link to="/tables">
                      <DiningOutlined/>
                      <p>Dining Room</p>
                      <ArrowRightOutlinedIcon/>
                      </Link>
                    </div>
                    <div className='room'>
                    <Link to="/tables">
                      <KitchenOutlined/>
                      <p>Kitchen</p>
                      <ArrowRightOutlinedIcon/>
                    </Link>   
                    </div>
                    <div className='room'>
                    <Link to="/tables">
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
                      <h4>Ideas</h4>
                    </Link>
                    </div>

                    <div className='component'>
                      <h4>Shop</h4>
                      <KeyboardArrowDownIcon className='drop-down'/>
                      <div className='drop-down-list-2'>
                        <div className='departments'>
                          <div className='rooms'>
                            <h4>Rooms</h4>
                            <Link to="/sofas">
                              <p>Living Room</p>
                            </Link>

                            <Link to="/chairs">
                              <p>Kitchen</p>
                            </Link>

                            <Link to="/beds">
                              <p>Bedroom</p>
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
                        </div>
                      </div>
                    </div>

                    <div className='component'>
                    <Link to="/collections">
                      <h4>Collections</h4>
                    </Link>
                    </div>
                </div>

                <div className="search_container">
          <div className="header_search">
            <input
              className="header_input"
              type="text"
              placeholder="Search..."
              onChange={handleSearch}
            />
          </div>
        </div>
                <Link to='/cart'>
                  <div className='shopping-basket'>
                    <ShoppingBasketIcon className='shopping-basket-icon'/> 
                    {cartItems?.length}
                  </div>
                </Link>
                
                <div className='profile-tag'>
                  <div className='profile-section'>
                    <img src='https://media.istockphoto.com/id/587805078/vector/profile-picture-vector-illustration.jpg?s=612x612&w=0&k=20&c=sUCdx-Likqe7eBEcbn1FT8ybOQQHXDgBKLsJc99MtCA=' alt='' className='profile-avatar'/>
                    <ExpandMore/>          
                    <div className='profile-overlay-container'>
                      <div className='settings'>
                        <p>Settings</p>
                        <Settings/>
                      </div>
                      <div className='logout'>
                        {!user ? (
                            <Link to='/login'>
                              <div>
                                <p>Login</p>
                                <LoginOutlined/>
                              </div>  
                            </Link>
                            
                          ) : (
                            <div>
                              <p>Log Out</p>
                              <LoginOutlined onClick={handleAuthentication}/>                       
                            </div>
                          )}                        
                      </div>
                      <Link to='/saved'>
                        <div className='saved'>
                          <p>Saved</p>
                          {savedItems?.length}
                          <Save/>
                        </div>
                      </Link>
                      
                    </div>
                  </div>
                </div>


            </div>
            
      
      </>
    )
  }

  export default Header;
