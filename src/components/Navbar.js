import React from 'react'

const Navbar = () => {
    // setTimeout(() => {
    // props.history.push('/about')
    // }, 2000);

  return (
    <nav className='nav-wrapper red darken-3'>
        <div className="container">
            <a href="/" className='brand-logo'>PokeTimes</a>
            <ul className="right">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar