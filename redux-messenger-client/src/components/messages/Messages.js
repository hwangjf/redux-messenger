import React from 'react'

const Messages = (props) => {

  return (
    <div className="messages--container">

      <div className="messages">
        <div className="messages__header">
          <img className="messages__header__new-message-img" src="images/new-message.png" alt="add new message" />
          <span className="messages__header__content">Messages</span>
        </div>
        <div className="messages__search">
          <input className="messages__search__input input" placeholder="Search"></input>
        </div>
        <div className="messages__content">
          <img className="messages__content__img" src="" alt="contact-image" />
          <div></div>
          <div></div>
        </div>
        <div className="messages__content">
          <img className="messages__content__img" src="" alt="contact-image" />
          <div></div>
          <div></div>
        </div>
        <div className="messages__content">
          <img className="messages__content__img" src="" alt="contact-image" />
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="message">
        <div className="message__header">hi</div>
        <input className="message__input input" placeholder="Type a message..." ></input>
        <img className="message__send-arrow-img" src="images/message-arrow.png" alt="send" />
      </div>

    </div>
  )
}

export default Messages
