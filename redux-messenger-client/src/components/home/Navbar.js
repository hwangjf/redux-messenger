import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from './Login'


const Navbar = (props) => {

  return (
    <div className="navbar">
      <ul className="navbar__ul">
        <li className="navbar__li">
          <NavLink to="/">Logo</NavLink>
        </li>
      </ul>
      {props.user
        ?
        <div className="loggedin-navbar">
          <ul className="loggedin-navbar__ul">
            <li className="loggedin-navbar__li"><NavLink to="/profile" activeClassName="targeted">Profile</NavLink></li>
            <li className="loggedin-navbar__li"><NavLink to="/messages" activeClassName="targeted">Messages</NavLink></li>
            <li className="loggedin-navbar__li"><NavLink to="/contacts" activeClassName="targeted">Contacts</NavLink></li>
            <li className="loggedin-navbar__li"><NavLink to="/">Logout</NavLink></li>
          </ul>
        </div>
        :
        <Login handleClickLogin={props.handleClickLogin} handleClickPassword={props.handleClickPassword} showPassword={props.showPassword}/>
      }
    </div>
  )
}

export default Navbar
