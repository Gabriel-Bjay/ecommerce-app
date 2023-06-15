import './App.css';
import { Route, Routes,  useNavigate  } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/layout/Header';
import Footer from './components/Footer/Footer';
import Login from "./components/Login/Login";
import Categories from './components/Categories/Categories';
import Ideas from "./components/ideas/Ideas";
import LivingRoom from './components/Categories/Departments/Livingroom/LivingRoom';
import Kitchen from './components/Categories/Departments/Kitchen/Kitchen';
import Diningroom from './components/Categories/Departments/Diningroom/Diningroom';
import Bedroom from './components/Categories/Departments/Bedroom/Bedroom';
import Office from './components/Categories/Departments/Kitchen/Office/Office';
import Collections from './components/Collections/Collections';
import Beds from './components/Categories/Specifics/Beds/Beds';
import Chairs from './components/Categories/Specifics/Chairs/Chairs';
import Sofas from './components/Categories/Specifics/Sofas/Sofas';
import Tables from './components/Categories/Specifics/Tables/Tables';
import Japanese from './components/Collections/Packs/Japanese/Japanese';
import Modern from './components/Collections/Packs/Modern/Modern';
import Valebeck from './components/Collections/Packs/Valebeck/Valebeck';
import Cart from './components/CheckOut/Cart';
import Payment from './components/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import SavedItems from './components/SavedItems/SavedItems';
import SearchItems from './components/layout/SearchItems';
import data from './products.json'  
import { useState, useContext, useEffect } from 'react';
import CartContext from './context/CartContext';
import { auth } from './firebase';

const promise = loadStripe('pk_test_51N1As3DRIsEHj72wieVYAegm39q9x0vV55rklaY9Yf9cV0zyKx7aXGZdeEu1iFs8V4Yxg06uojL8xQ4dASCnuSdb00GhlNGjJN');

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate()

  const handleSearch = (event) => {
    const searchTerm = event.target.value; // Retrieve the search term from the event object
    // Filter the data based on the search term
    const filteredData = data.filter((val) => {
      if (searchTerm === '') {
        return val;
      } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      }
    });
    navigate('/search-item', { state: { filteredData } });
    console.log(filteredData)
    setFilteredData(filteredData);
    setSearchTerm(searchTerm);

    if (searchTerm === '') {
      navigate('/');
    }

  };

  const cartContext = useContext(CartContext)
  const {setUser,dispatch} = cartContext

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User is -> ", authUser);
  
      if (authUser) {
        setUser(authUser);
        // Set isAuthenticated to true
        dispatch({ type: "SET_AUTHENTICATION", payload: true });
      } else {
        setUser(null);
        // Set isAuthenticated to false
        dispatch({ type: "SET_AUTHENTICATION", payload: false });
      }
    });
  }, []);
  
  
    
  return (
    
    <div className="App">
    
          <Header setSearchTerm={setSearchTerm} handleSearch={handleSearch}/>
          <main>
            <Routes>
              <Route path='' element={<Home/>}/>
              <Route path='login' element={<Login/>}/>
              <Route path='categories' element={<Categories/>}/>
              <Route path='ideas' element={<Ideas/>}/>
              <Route path='livingroom' element={<LivingRoom/>}/>
              <Route path='bedroom' element={<Bedroom/>}/>
              <Route path='kitchen' element={<Kitchen/>}/>
              <Route path='diningroom' element={<Diningroom/>}/>
              <Route path='office' element={<Office/>}/>
              <Route path='categories' element={<Categories/>}/>
              <Route path='collections' element={<Collections/>}/>
              <Route path='beds' element={<Beds/>}/>
              <Route path='chairs' element={<Chairs/>}/>
              <Route path='sofas' element={<Sofas/>}/>
              <Route path='tables' element={<Tables/>}/>
              <Route path='japanese-collection' element={<Japanese/>}/>
              <Route path='modern-collection' element={<Modern/>}/>
              <Route path='valebeck-collection' element={<Valebeck/>}/>
              <Route path='cart' element={<Cart/>}/>
              <Route path='saved' element={<SavedItems/>}/>
             
              <Route
                  path="search-item"
                  element={<SearchItems searchData={filteredData} />}/>
              <Route
                path="/payment"
                element={
                  <Elements stripe={promise}>
                    <Payment />
                  </Elements>
                }
              />
              <Route path='saved' element={<SavedItems/>}/>
            </Routes>              
          </main>
       <Footer/>
    </div>
  );
}

export default App;
