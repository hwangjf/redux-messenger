import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = props => {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__header">Share your moments with family and friends</div>
        <NavLink className="btn btn__large" to="/signup">Sign up today!</NavLink>
      </div>
    </div>
  )
}

export default Home
