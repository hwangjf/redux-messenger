import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout, login } from '../../actions/users'

class Navbar extends React.Component {
  state = {
    username: '',
    password: '',
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = e => {
    e.preventDefault()
    debugger

    // this.props.handleClickClose('close')
    this.props.login(this.state)

    this.setState({
      username: '',
      password: ''
    })
    this.props.history.push('/conversations')
  }

  render() {
    console.log(this.props)
    return (
      <div className="navbar">
        <NavLink className="navbar__logo" to="/"></NavLink>
        {
          this.props.isLoggedIn
            ? <div>LOGOUT</div>
            : <div className="login">
                <form className="login__form" onSubmit={this.handleSubmit} >
                  <input className="login__form__input input" placeholder="username" name="username" value={this.state.username} onChange={this.handleChange} ></input>
                  <input className="login__form__input input" placeholder="password" name="password" value={this.state.password} onChange={this.handleChange} ></input>
                  <button className="login__form__btn">Login</button>
                </form>
              </div>
        }
      </div>
    )
  }
}

export default withRouter(connect(null, { login, logout })(Navbar))
