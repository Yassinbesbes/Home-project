import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './Navbar';
import Home from './Home'; // Import your Home component
import ProductPage from './ProductPage';
import Store from './Store'
import Contact from './Contactus';
import Aboutus from './Aboutus';

function App() {
return (
  <Router>
    <div>
      <AppNavbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/Contactus" element={<Contact />} />
        <Route path="/Aboutus" element={<Aboutus/>} />

      </Routes>
    </div>
  </Router>
);
}

export default App;