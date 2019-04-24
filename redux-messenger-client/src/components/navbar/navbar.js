import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <div className="navbar">
      <ul className="navbar__ul">
        <li className="navbar__li">
          <Link to="/">Logo</Link>
        </li>
      </ul>
      <div className="navbar__li btn btn__medium" href=" " onClick={()=>props.handleClickLogin()}>Login</div>
    </div>
  )
}

export default Navbar
