import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'

import { ActionCableConsumer } from 'react-actioncable-provider'

import UserContact from './UserContact'

import { createConversation, getConversations } from '../actions/conversation'

class Conversation extends Component {

  state = {
    title: ''
  }

  componentDidMount() {
    this.props.getConversations()
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    
    // TODO: REFACTOR AWAY FETCH
    this.props.createConversation(this.state.title)
  }

  newConvo = (userId) => (e) => {
    console.log(userId)
    this.props.createConversation('hello')
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Conversations</h1>

        <ActionCableConsumer 
          // frontend channel connects to the NAME OF THE CHANNEL CLASS
          // can add params through ex
          // {{channel: 'classname', params: paramsValue(example of user ) }}
          channel={{channel: 'ConversationChannel'}}
          onReceived={(arg)=>{
            console.log('msg received', arg)
          }}
        />

        <div >
          {this.props.users.map(user => {
            return <UserContact key={uuid()} {...user} newConvo={this.newConvo(user.id)} />
          })}
        </div>

        <form onSubmit={this.handleSubmit} >
          <input 
            type="text" 
            value={this.state.text} 
            onChange={this.handleChange} 
            name="text"
          />
        </form>

        <button onClick={this.getAllUsers}>New Conversation</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    user: state.user,
    users: state.users.filter(user => user.id !== state.user.id)
  }
}


export default connect(mapStateToProps, { createConversation, getConversations })(Conversation)