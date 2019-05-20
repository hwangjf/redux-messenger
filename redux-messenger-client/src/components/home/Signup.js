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
  }

  render() {
    console.log(this.props)
    return (
      <div className="signup">
        {this.props.login
          ? null
          : <form className="form signup__form" onSubmit={this.handleSubmit} >
              <div className="header signup__header">Signup</div>
              <input
                className="input signup__input"
                type="text"
                id="name"
                placeholder="Enter your name"
                onFocus={(event) => event.target.placeholder = ""}
                onBlur={(event) => event.target.placeholder = "Enter your name"}
                required
                value={this.state.username}
                name="username"
                onChange={this.handleChange}
              >
              </input>
              {this.props.showPassword
              ? <img className="signup__image--aria-eye" src="images/aria-eye-show.png" alt="aria-eye" onClick={()=>{this.props.handleClickPassword()}}/>
              : <img className="signup__image--aria-eye" src="images/aria-eye-hide.png" alt="aria-eye" onClick={()=>{this.props.handleClickPassword()}}/>
              }
            {this.props.showPassword
            ? <input
                className="input signup__input"
                type="text"
                id="password"
                placeholder="Enter your password"
                onFocus={(event) => event.target.placeholder = ""}
                onBlur={(event) => event.target.placeholder = "Enter your password"}
                required
                value={this.state.password}
                name="password"
                onChange={this.handleChange}
              >
              </input>
            : <input
                className="input signup__input"
                type="password"
                id="password"
                placeholder="Enter your password"
                onFocus={(event) => event.target.placeholder = ""}
                onBlur={(event) => event.target.placeholder = "Enter your password"}
                required
                value={this.state.password}
                name="password"
                onChange={this.handleChange}
              >
              </input>
            }
          <button type="submit" className="btn btn__large">Signup</button>
        </form>}
      </div>
    )
}  
}

export default connect(null, { signup } )(Signup)
