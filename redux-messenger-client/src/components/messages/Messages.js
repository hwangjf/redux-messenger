import React, { Component } from 'react'

class Messages extends Component {

  state = {
    term: ''
  }

  handleChange = e => this.setState({[e.target.name]: e.target.value})

  render () {
    return (
      <div className="messages--container">
        <div className="messages">
          <div className="messages__header">
            <img className="messages__header__new-message-img" src="images/new-message.png" alt="add new message" />
            <span className="messages__header__content">Messages</span>
          </div>
          <div className="messages__search">
            <input 
              className="messages__search__input input" 
              placeholder="Search" 
              name="term"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>

          {/* need messages container */}
          {/* this section can iterate over and return the list of messages */}
          <div className="messages__content">
            <img className="messages__content__img" src="https://i.ytimg.com/vi/3ggIHfwkIWM/maxresdefault.jpg" alt="contact-imagetest" />
            <div className="messages__content__container">
              <div className="messages__content__container--sub">
                <div className="messages__content__name">Testing</div>
                <div className="messages__content__date">Date</div>
              </div>
              <div className="messages__content__message">Hello, how are you doing today?</div>
            </div>
          </div>
          <div className="messages__content">
            <img className="messages__content__img" src="https://i.ytimg.com/vi/3ggIHfwkIWM/maxresdefault.jpg" alt="contact-imagetest" />
            <div className="messages__content__container">
              <div className="messages__content__container--sub">
                <div className="messages__content__name">Testing</div>
                <div className="messages__content__date">Date</div>
              </div>
              <div className="messages__content__message">Look at this cute puppy! It's so fluffy, I'm going to die!</div>
            </div>
          </div>
          <div className="messages__content">
            <img className="messages__content__img" src="https://i.ytimg.com/vi/3ggIHfwkIWM/maxresdefault.jpg" alt="contact-imagetest" />
            <div className="messages__content__container">
              <div className="messages__content__container--sub">
                <div className="messages__content__name">Testing</div>
                <div className="messages__content__date">Date</div>
              </div>
              <div className="messages__content__message">I need to get a life...when am I going to find a job...jeez</div>
            </div>
          </div>
        </div>
  
        <div className="message">
          <div className="message__header">Name</div>
          <input className="message__input input" placeholder="Type a message..." ></input>
          <img className="message__send-arrow-img" src="images/message-arrow.png" alt="send" />
        </div>
  
      </div>
    )
  }
}

export default Messages
