import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import SignUp from './Components/SignUp/SignUp';
import Cart from './Components/Cart/Cart';
import Home from './Components/Home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import ProductDetails from './Components/ProductDetails/ProductDetails';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route index path='/signup' element={<SignUp/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/productdetails' element={<ProductDetails/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
