import React from 'react'
import { Link } from 'react-router-dom'

const UserContact = (props) => {
  console.log(props)
  const { username } = props
  return (
    <div onClick={()=>props.newConvo}>
      {/* {
        username
      } */}
      <Link to={`/profile/${username}`}>{username}</Link>
    </div>
  )
}

export default UserContact