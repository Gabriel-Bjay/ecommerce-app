import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import Home from './components/Home/Home';
// import Header from './components/layout/Header';
// import Footer from './components/Footer/Footer';
// import Login from "./components/Login/Login";
// import Categories from './components/Categories/Categories';
// import Ideas from "./components/ideas/Ideas";
import LivingRoom from './components/Categories/Livingroom/LivingRoom';
import Kitchen from './components/Categories/Kitchen/Kitchen';

function App() {
  return (
    <div className="App">
      <LivingRoom/>
      <Kitchen/>
       {/* <Header/>
          <main>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='login' element={<Login/>}/>
              <Route path='categories' element={<Categories/>}/>
              <Route path='ideas' element={<Ideas/>}/>
            </Routes>              
          </main>
       <Footer/> */}
    </div>
  );
}

export default App;
