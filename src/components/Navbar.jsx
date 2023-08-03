import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/my-profile">My profil</Link>
      </li>
    </ul>
  </nav>
  )
};
export default Navbar;