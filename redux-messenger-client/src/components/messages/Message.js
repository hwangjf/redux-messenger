import React from 'react'

const Message = props => {
  return (
    <div>
      <h3>{props.user.username} <span>{props.timestamp}</span></h3>
      
      <div>{props.text}</div>
    </div>
  )
}

export default Message;