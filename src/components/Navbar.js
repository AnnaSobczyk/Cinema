import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
  <nav className="nav-wrapper grey darken-4">
    <div className="container">
      <Link to='/' className="brand-logo">CinemaVillage</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to='/repertoires' className="logo">Repertoires</Link></li>
        <li><Link to='/login' className="logo">Sign in</Link></li>
        <li><Link to='/register' className="logo">Register</Link></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar;