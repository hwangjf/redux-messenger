import React from 'react'

const Messages = (props) => {

  return (
    <div className="messages">

      <div className="messages__messages">
        <div className="messages__messages__header">
          <img className="messages__messages__header__new-message" src="images/new-message.png" alt="add new message" />
          <span className="messages__messages__header__content">Messages</span>
        </div>
        <div className="messages__messages__search">
          <input className="messages__messages__search__input input" placeholder="Search"></input>
        </div>
        <div className="messages__messages__content">1</div>
        <div className="messages__messages__content">2</div>
        <div className="messages__messages__content">3</div>
      </div>

      <div className="messages__message">
        <div className="messages__message__header">hi</div>
        <input className="messages__message__input input" placeholder="Type a message..." ></input>
      </div>

    </div>
  )
}

export default Messages
