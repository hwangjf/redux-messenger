import React from 'react'

const Login = (props) => {
  return (
    <div className="login__modal" onClick={(event)=>props.handleClickClose(event)}>
      <form className="form login__form">
        <div className="close" onClick={(event)=>props.handleClickClose(event)}>&#215;</div>
        <input
          className="input login__input"
          type="text"
          id="name"
          placeholder="Enter your name"
          onFocus={(event) => event.target.placeholder = ""}
          onBlur={(event) => event.target.placeholder = "Enter your name"}
          required>
        </input>
        {props.password
        ?
          <img className="login__image--aria-eye" src="images/aria-eye-show.png" alt="aria-eye" onClick={()=>{props.handleClickPassword()}}/>
        :
          <img className="login__image--aria-eye" src="images/aria-eye-hide.png" alt="aria-eye" onClick={()=>{props.handleClickPassword()}}/>
        }
        {props.password
        ?
          <input
            className="input login__input"
            type="text"
            id="password"
            placeholder="Enter your password"
            onFocus={(event) => event.target.placeholder = ""}
            onBlur={(event) => event.target.placeholder = "Enter your password"}
            required>
          </input>
        :
          <input
            className="input login__input"
            type="password"
            id="password"
            placeholder="Enter your password"
            onFocus={(event) => event.target.placeholder = ""}
            onBlur={(event) => event.target.placeholder = "Enter your password"}
            required>
          </input>
        }
        <button className="btn btn__medium btn__medium--right">Login</button>
      </form>    </div>
  )
}

export default Login
