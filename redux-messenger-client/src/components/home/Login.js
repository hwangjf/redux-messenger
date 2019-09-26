import React from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions/user'

import { withRouter } from 'react-router'

class Login extends React.Component {
  state = {
    username: '',
    password: '',
  }

  handleChange = e => this.setState({[e.target.name]: e.target.value})

  handleSubmit = e => {
    e.preventDefault()

    this.props.handleClickClose('close')
    this.props.login(this.state)
    this.setState({
      username: '',
      password: ''
    })
    this.props.history.push('/conversations')
  }

  render(props) {
    return (
      <div className="login">
        <form className="login__form" onSubmit={this.handleSubmit}>
          <input
            className="input login__input"
            type="text"
            placeholder="Username"
            required
            name="username"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <input
            className="input login__input login__input__password"
            type={this.props.showPassword ? "text" : "password" }
            placeholder="Password"
            required
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <img
          className="login__image--aria-eye"
          src={this.props.showPassword
            ? "images/aria-eye-show.png"
            : "images/aria-eye-hide.png"
          }
          alt="aria-eye"
          onClick={()=>{this.props.handleClickPassword()}}
          />
        <button className="btn btn__medium">Login</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return state
}

export default withRouter(connect(mapStateToProps, { login })(Login))