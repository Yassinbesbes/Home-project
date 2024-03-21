import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './Navbar';
import Home from './Home'; // Import your Home component

function App() {
return (
  <Router>
    <div>
    <AppNavbar />
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </div>
  </Router>
);
}

export default App;