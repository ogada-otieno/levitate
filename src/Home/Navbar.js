import React from 'react'

function Navbar() {
  return (
    <nav className="navbar">
      <div>
      <ul className="navbar-list">
      <li className="navbar-item"><a href="#">Home</a></li>
      </ul>
      </div>
        <div className='rightitems'>
          <ul className='navbar-list'>
          <li className="navbar-item"><a href="#">Login</a></li>
        <li className="navbar-item"><a href="#">Signup</a></li>
        <li className="navbar-item"><a href="#">Profile</a></li>
          </ul> 

        <form className="navbar-search-form">
        <input className="navbar-search-input" type="text" placeholder="Search..." />
        <button className="navbar-search-button" type="submit">Search</button>
      </form>
        </div>
        
      
    </nav>
  )
}

export default Navbar

