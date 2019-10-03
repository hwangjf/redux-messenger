import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'
import Message from '../messages/Message';
import { createMessage, messageReceived } from '../../actions/message'
import { ActionCableConsumer } from 'react-actioncable-provider'

class Chatbox extends Component {
  state = {
    text: '',
    mountConsumer: true
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentConvo && (prevProps.currentConvo.id !== this.props.currentConvo.id) ) {
      // unmount and remount consumer 
      this.setState({mountConsumer: false}, () =>this.setState({mountConsumer: true}))
    }
  }

  static getDerivedStateFromProps(props) {
    return {
      convoId: props.currentConvo && props.currentConvo.id
    }
  }

  handleChange = e => this.setState({[e.target.name]: e.target.value})

  handleSubmit = e => {
    e.preventDefault()

    this.props.createMessage(this.state.text, this.props.currentConvo.id)
    this.setState({text: ''})
  }

  renderConsumer = (id) => {
    // MUST USER MOUNT AND UNMOUNT LOGIC IN ORDER TO CONNECT TO THE NEW CHANNEL
    return <ActionCableConsumer
      // frontend channel connects to the NAME OF THE CHANNEL CLASS
      // can add params through ex
      // {{channel: 'classname', params: paramsValue(example of user ) }}
      channel={{ channel: 'MessageChannel', conversation_id: id }}
      onConnected={() => console.log('CONNNECTED', id)}
      onReceived={(arg) => {
        console.log('msg received', arg)
        
        this.props.messageReceived(arg)
      }}
      onDisconnected={() => console.log('DISCONNECT')}
    />
  }

  

  render() {
    return (
      <div>
        Chatbox

        {
          this.props.currentConvo && !!this.props.currentConvo.id && this.state.mountConsumer 
            ? this.renderConsumer(this.props.currentConvo.id)
            : null
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


        <div>
          Users in Chatroom
          {
            this.props.currentConvo && this.props.currentConvo.users.map(user => {
              return <div key={`user-${user.id}`}>{user.username}</div>
            })
          }
        </div>
        <div>
          Users NOT in chatroom - click to invite
          {
            this.props.currentConvo && this.props.users.filter(user => {
              return !this.props.currentConvo.users.map(u=>u.id).includes(user.id)
            }).map(user => {
              return <div key={user.id} onClick={()=>console.log('invite user funcitonality')}>{user.username}</div>
            })
          }
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  console.log(state)
  return {
    currentConvo: state.conversations.currentId && state.conversations.all.find(convo => convo.id === state.conversations.currentId),
    messages: state.conversations.currentId && state.conversations.all.find(convo => convo.id === state.conversations.currentId).messages,
    users: state.users
  }
}

export default connect(mapStateToProps, { createMessage, messageReceived })(Chatbox)