import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar__ul">
        <li className="navbar__li">
          <Link to="/">Logo</Link>
        </li>
      </ul>
      <a className="navbar__li btn btn__medium" href=" ">Login</a>
    </div>
  )
}

export default Navbar
