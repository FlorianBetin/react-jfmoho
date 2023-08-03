import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import MyProfile from './components/MyProfile';
import Navbar from './components/Navbar';

import './style.css';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Routes>
      </div>
    </Router>
  );
}
