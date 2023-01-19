import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductListing from './components/home-page/ProductListing';
import ReduxPractice from './components/redux-practice/ReduxPractice';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path="/" element={<ProductListing />} />
            <Route path="/redux" element={<ReduxPractice />} />
          </Routes>
        </div>
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
