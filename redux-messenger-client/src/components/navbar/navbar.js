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
      {props.user
        ?
        <div className="loggedin-navbar">
          <ul className="loggedin-navbar__ul">
            <li className="loggedin-navbar__li"><Link to="/profile">Profile</Link></li>
            <li className="loggedin-navbar__li"><Link to="/messages">Messages</Link></li>
            <li className="loggedin-navbar__li"><Link to="/contacts">Contacts</Link></li>
            <li className="loggedin-navbar__li"><Link to="/">Logout</Link></li>
          </ul>
        </div>
        :
        <div className="navbar__li btn btn__medium" href=" " onClick={()=>props.handleClickLogin()}>Login</div>
      }
    </div>
  )
}

export default Navbar
