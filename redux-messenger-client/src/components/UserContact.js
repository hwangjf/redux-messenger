import React from 'react'

const UserContact = (props) => {
  console.log(props)
  const { username } = props
  return (
    <div onClick={()=>props.newConvo}>
      {
        username
      }
    </div>
  )
}

export default UserContact