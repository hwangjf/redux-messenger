import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'
import Message from '../messages/Message';
import { createMessage, messageReceived } from '../../actions/message'
import { ActionCableConsumer } from 'react-actioncable-provider'

class Chatbox extends Component {
  state = {
    text: ''
  }

  handleChange = e => this.setState({[e.target.name]: e.target.value}, ()=>console.log(this.state))

  handleSubmit = e => {
    e.preventDefault()

    this.props.createMessage(this.state.text, this.props.currentConvo.id)
    this.setState({text: ''})
  }

  render() {
    console.log(this.props)
    return (
      <div>
        Chatbox
        
        {
          this.props.currentConvo && (
          <ActionCableConsumer
            // frontend channel connects to the NAME OF THE CHANNEL CLASS
            // can add params through ex
            // {{channel: 'classname', params: paramsValue(example of user ) }}
            channel={{ channel: 'MessageChannel', conversation_id: this.props.currentConvo.id}}
            onReceived={(arg) => {
              console.log('msg received', arg)

              this.props.messageReceived(arg)
              // this.props.createMessage(arg)
            }}
          />)
        }
        <h1>
          {
            this.props.currentConvo && this.props.currentConvo.title
          }
        </h1>

        {
          this.props.messages && this.props.messages.map(message => {
            return <Message key={uuid()} {...message} />
          })
        }

        <br/>
        <br/>
        Type Message box
        <br/>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="text" value={this.state.text} onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    currentConvo: state.conversations.current && state.conversations.all.find(convo => convo.id === state.conversations.current),
    messages: state.conversations.current && state.conversations.all.find(convo => convo.id === state.conversations.current).messages
  }
}

export default connect(mapStateToProps, { createMessage, messageReceived })(Chatbox)