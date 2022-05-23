import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';
import AllCategories from './pages/allCat/AllCategories';
import Error from './pages/error/Error';
import BabyCare from './pages/allCat/cats/BabyCare';
import Electronics from './pages/allCat/cats/Electronics';
import Fashion from './pages/allCat/cats/Fashion';
import HomeKitchen from './pages/allCat/cats/HomeKitchen';
import Phones from './pages/allCat/cats/Phones';
import Others from './pages/allCat/cats/Others';

function App() {
  return (
    //BEM
    <BrowserRouter>
        <div className="app">
          <Header />
          <Routes>
          <Route path="/login" element={ <Login />} />
          <Route path="/" element={ <Home />} />
          <Route path="/checkout" element={ <Checkout />} />
          <Route path="/all-categories" element={ <AllCategories />} />
          <Route path="/baby-care" element={ <BabyCare />} />
          <Route path="/electronics" element={ <Electronics />} />
          <Route path="/fashions" element={ <Fashion />} />
          <Route path="/home-kitchen" element={ <HomeKitchen />} />
          <Route path="/phones-tablet" element={ <Phones />} />
          <Route path="/other-categories" element={ <Others />} />
          <Route path="*" element={ <Error />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
