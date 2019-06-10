import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect} from 'react-redux'

import Login from './Login'

import { logout } from '../../actions/user'

const Navbar = (props) => {
  console.log(props)
  return (
    <div className="navbar">
      <ul className="navbar__ul">
        <li className="navbar__li">
          <NavLink to="/">Logo</NavLink>
        </li>
      </ul>
      {props.loggedin
        ? <div className="loggedin-navbar">
            <ul className="loggedin-navbar__ul">
              <li className="loggedin-navbar__li"><NavLink to="/profile" activeClassName="targeted">Profile</NavLink></li>
              <li className="loggedin-navbar__li"><NavLink to="/messages" activeClassName="targeted">Messages</NavLink></li>
              <li className="loggedin-navbar__li"><NavLink to="/contacts" activeClassName="targeted">Contacts</NavLink></li>
              <li className="loggedin-navbar__li"><NavLink onClick={props.logout} to="/">Logout</NavLink></li>
            </ul>
          </div>
        : <Login 
            handleClickLogin={props.handleClickLogin} 
            handleClickPassword={props.handleClickPassword} 
            showPassword={props.showPassword}
          />
      }
    </div>
  )
}

const mapStateToProps = ({userReducer: {user}}) => {
  console.log(user)
  return {
    loggedin: !!user
  }
}

export default connect(mapStateToProps , { logout })(Navbar)
