import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/layout/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
       <Header/>
          <main>
            <Routes>
              <Route path='/' element={<Home/>}/>
            </Routes>              
          </main>
       <Footer/>
    </div>
  );
}

export default App;
