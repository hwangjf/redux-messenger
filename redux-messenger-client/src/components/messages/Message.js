import React from 'react'

const Message = props => {
  console.log(props)
  return (
    <div>
      <h3>{props.user.username}: </h3><span>{props.text}</span>
    </div>
  )
}

export default Message;