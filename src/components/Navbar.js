import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav-wrapper red darken-3'>
      <div className="container">
        <NavLink to="/" className='brand-logo'>PokeTimes</NavLink>
        <ul className="right">
          <li><NavLink to="/">Home</NavLink></li>
          <li><Link to="/about">About</Link></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)