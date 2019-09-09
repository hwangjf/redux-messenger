import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { logout } from '../../actions/users'

const Navbar = (props) => {
  return (
    <div className="navbar">
      <ul className="navbar__ul">
        <li className="navbar__li">
          <NavLink to="/">Logo</NavLink>
        </li>
      </ul>
      {props.loggedIn
        ? <div className="loggedin-navbar">
            <ul className="loggedin-navbar__ul">
              <li className="loggedin-navbar__li"><NavLink to="/profile" activeClassName="targeted">Profile</NavLink></li>
              <li className="loggedin-navbar__li"><NavLink to="/messages" activeClassName="targeted">Messages</NavLink></li>
              <li className="loggedin-navbar__li"><NavLink to="/contacts" activeClassName="targeted">Contacts</NavLink></li>
              <li className="loggedin-navbar__li" onClick={props.logout}><NavLink to="/">Logout</NavLink></li>
            </ul>
          </div>
        : <div className="navbar__li btn btn__medium" href=" " onClick={() => props.handleClickLogin()}>Login</div>
      }
    </div>
  )
}

export default connect(null, { logout })(Navbar)
