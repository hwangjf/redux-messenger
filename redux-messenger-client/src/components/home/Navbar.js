import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../actions/users'

// const Navbar = (props) => {
//   console.log('NAVVV', props)
//   return (
//     <div className="navbar">
//       <NavLink to="/">Logo</NavLink>
//       {props.loggedIn
//         ? <div className="loggedin-navbar">
//             <ul className="loggedin-navbar__ul">
//               <li className="loggedin-navbar__li"><NavLink to="/profile" activeClassName="targeted">Profile</NavLink></li>
//               <li className="loggedin-navbar__li"><NavLink to="/messages" activeClassName="targeted">Messages</NavLink></li>
//               <li className="loggedin-navbar__li"><NavLink to="/contacts" activeClassName="targeted">Contacts</NavLink></li>
//               <li className="loggedin-navbar__li" onClick={props.logout}><NavLink to="/">Logout</NavLink></li>
//             </ul>
//           </div>
//         : <div className="navbar__li btn btn__medium" href=" " onClick={() => props.handleClickLogin()}>Login</div>
//       }
//     </div>
//   )
// }

const Navbar = (props) => {
  console.log('NAVVV', props)
  return (
    <>
      <div className="navbar">
        <NavLink to="/">Logo</NavLink>
        <div className="login">
          <form className="login__form">
            <input className="login__form__input input"></input>
            <input className="login__form__input input"></input>
          </form>
        </div>
      </div>
    </>
  )
}

export default connect(null, { logout })(Navbar)
