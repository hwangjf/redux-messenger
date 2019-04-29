import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__header">Share your moments with family and friends</div>
        <Link className="btn btn__large" to="/signup">Sign up today!</Link>
      </div>
    </div>
  )
}

export default Home
