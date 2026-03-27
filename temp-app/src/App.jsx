import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Shop from './pages/Shop';
import HowItWorks from './pages/HowItWorks';
import CartDrawer from './components/CartDrawer';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  const handleLoginStatus = (status) => {
    setIsLoggedIn(status);
    if (status) {
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      localStorage.removeItem('isLoggedIn');
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} />
        <CartDrawer />
        <Routes>
          <Route path="/" element={<Hero isLoggedIn={isLoggedIn} />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login setIsLoggedIn={handleLoginStatus} />} />
          <Route path="/signup" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Signup setIsLoggedIn={handleLoginStatus} />} />
          <Route 
            path="/dashboard" 
            element={isLoggedIn ? <Dashboard setIsLoggedIn={handleLoginStatus} /> : <Navigate to="/login" />} 
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
