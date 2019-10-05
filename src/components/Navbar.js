import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
  <nav className="nav-wrapper grey darken-4">
    <div className="container">
      <Link to='/' className="brand-logo">CinemaVilage</Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to='/repertoires' className="logo">Repertoires</Link></li>
        <li><Link to='/' className="logo">Log in</Link></li>
        <li><Link to='/' className="logo">Register</Link></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar;