import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './homepage/homepage';
import Navbar from './navbar/navbar';
import ProductDetails from './product-details/product-details';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar is outside the Routes, so it is rendered on every page */}
        <Navbar />

        {/* Routes to handle different routes/pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product-details/:imageCategory" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
