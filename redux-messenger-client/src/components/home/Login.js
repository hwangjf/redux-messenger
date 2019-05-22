import React from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions/users'

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = e => this.setState({[e.target.name]: e.target.value})

  handleSubmit = e => {
    e.preventDefault()

    this.props.login(this.state)
    this.setState({
      username: '',
      password: ''
    })
  }

  render() {
    // console.log(this.props)
    return (
      <div className="login__modal" onClick={(event)=> this.props.handleClickClose(event)}>
        <form className="form login__form" onSubmit={this.handleSubmit}>
          <div className="header login__header">Login</div>
          <div className="close" onClick={(event)=> this.props.handleClickClose(event)}>&#215;</div>
          <input
            className="input login__input"
            type="text"
            id="name"
            placeholder="Enter your username"
            onFocus={(event) => event.target.placeholder = ""}
            onBlur={(event) => event.target.placeholder = "Enter your username"}
            required
            name="username"
            onChange={this.handleChange}
            value={this.state.username}
          />
          
          <img 
            className="login__image--aria-eye" 
            src={
              this.props.showPassword 
                ? "images/aria-eye-show.png" 
                : "images/aria-eye-hide.png"
            } 
            alt="aria-eye" 
            onClick={()=>{ this.props.handleClickPassword()}}
          />
          <input
            className="input login__input"
            type={this.props.showPassword ? "text" : "password" }
            id="password"
            placeholder="Enter your password"
            onFocus={(event) => event.target.placeholder = ""}
            onBlur={(event) => event.target.placeholder = "Enter your password"}
            required
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <button className="btn btn__large">Login</button>
        </form>    
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { login })(Login)
