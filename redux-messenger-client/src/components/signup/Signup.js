import React from 'react'

const Signup = (props) => {
  return (
    <div className="signup">
      {props.login
      ?
      null
      :
      <form className="form signup__form">
        <div className="header signup__header">Signup</div>
        <input
          className="input signup__input"
          type="text"
          id="name"
          placeholder="Enter your name"
          onFocus={(event) => event.target.placeholder = ""}
          onBlur={(event) => event.target.placeholder = "Enter your name"}
          required>
        </input>
        {props.password
        ?
          <img className="signup__image--aria-eye" src="images/aria-eye-show.png" alt="aria-eye" onClick={()=>{props.handleClickPassword()}}/>
        :
          <img className="signup__image--aria-eye" src="images/aria-eye-hide.png" alt="aria-eye" onClick={()=>{props.handleClickPassword()}}/>
        }
        {props.password
        ?
          <input
            className="input signup__input"
            type="text"
            id="password"
            placeholder="Enter your password"
            onFocus={(event) => event.target.placeholder = ""}
            onBlur={(event) => event.target.placeholder = "Enter your password"}
            required>
          </input>
        :
          <input
            className="input signup__input"
            type="password"
            id="password"
            placeholder="Enter your password"
            onFocus={(event) => event.target.placeholder = ""}
            onBlur={(event) => event.target.placeholder = "Enter your password"}
            required>
          </input>
        }
        <button className="btn btn__large">Signup</button>
      </form>}
    </div>
  )
}

export default Signup
