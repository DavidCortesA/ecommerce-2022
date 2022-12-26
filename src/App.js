import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Header />
      <Routes>
        <Route path='/ecommerce-2022' element={<Home />}/>
        <Route path='/ecommerce-2022/product/:id' element={<ProductDetails />}/>
      </Routes>
      <Sidebar />
      <Footer />
    </Router>
  </div>;
};

export default App;
