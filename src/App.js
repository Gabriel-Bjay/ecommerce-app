import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import Home from './components/Home/Home';
// import Header from './components/layout/Header';
// import Footer from './components/Footer/Footer';
// import Login from "./components/Login/Login";
// import Categories from './components/Categories/Categories';
// import Ideas from "./components/ideas/Ideas";
// import LivingRoom from './components/Categories/Departments/Livingroom/LivingRoom';
// import Kitchen from './components/Categories/Departments/Kitchen/Kitchen';
// import Diningroom from './components/Categories/Departments/Diningroom/Diningroom';
// import Bedroom from './components/Categories/Departments/Bedroom/Bedroom';
// import Office from './components/Categories/Departments/Kitchen/Office/Office';
// import Collections from './components/Collections/Collections';
import Sofas from './components/Categories/Specifics/Sofas/Sofas';


function App() {
  return (
    <div className="App">
    <Sofas/>
      {/* <Header/>
          <main>
            <Routes>
              <Route path='/' element={<Home/>}/>
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
            </Routes>              
          </main>
       <Footer/> */}
    </div>
  );
}

export default App;
