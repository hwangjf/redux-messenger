import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../actions/users'

const Navbar = (props) => {
  console.log('NAVVV', props)
  return (
    <div className="navbar">
      <NavLink className="navbar__logo" to="/"></NavLink>
      <div className="login">
        <form className="login__form">
          <input className="login__form__input input"></input>
          <input className="login__form__input input"></input>
          <button className="login__form__btn">Login</button>
        </form>
      </div>
    </div>
  )
}

export default connect(null, { logout })(Navbar)
