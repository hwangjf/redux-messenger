import React from 'react'
import { connect } from 'react-redux'
import { signup } from '../../actions/users'

class Signup extends React.Component {

  state = {
    username: '',
    password: ''
  }

  handleChange = e => this.setState({[e.target.name]: e.target.value})

  handleSubmit = e => {
    e.preventDefault()

    this.props.signup(this.state)
    this.setState({
      username: '',
      password: ''
    })
  }

  render() {
    return (
      <div className="signup">
        <form className="form signup__form" onSubmit={this.handleSubmit}>
          <div className="header signup__header">Signup</div>
          <input
            className="input signup__input"
            type="text"
            id="name"
            placeholder="Enter your name"
            required
            value={this.state.username}
            name="username"
            onChange={this.handleChange}
          >
          </input>
          <img
            className="signup__image--aria-eye"
            src={
              this.props.showPassword
                ? "images/aria-eye-show.png"
                : "images/aria-eye-hide.png"
            }
            alt="aria-eye"
            onClick={() => { this.props.handleClickPassword() }}
          />
          <input
            className="input signup__input"
            type={this.props.showPassword ? "text" : "password" }
            id="password"
            placeholder="Enter your password"
            required
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <button type="submit" className="btn btn__large">Signup</button>
        </form>
      </div>
    )
}
}

export default connect(null, { signup } )(Signup)
