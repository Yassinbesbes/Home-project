import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './Navbar';
import Home from './Home'; // Import your Home component
import ProductPage from './ProductPage';

function App() {
return (
  <Router>
    <div>
    <AppNavbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductPage />} />

      </Routes>
    </div>
  </Router>
);
}

export default App;