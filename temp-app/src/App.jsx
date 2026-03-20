import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route 
            path="/dashboard" 
            element={isLoggedIn ? <Dashboard setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/login" />} 
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
