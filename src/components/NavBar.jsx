import React from 'react'
import './NavBar.css';
function NavBar() {
  return (
    <>
    <nav className="nav">
      <div className="container">
        <h1 className="logo"><a href="/index.html">My Website</a></h1>
        <ul>
          <li><a href="/" className="current">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </div>
    </nav>
    
    

    </>
  )
}

export default NavBar