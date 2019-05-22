import React, { Component } from 'react'
import { connect } from 'react-redux'
import login from './../actions/users'
import { Adapter } from '../../adapters';
import { Redirect } from 'react-router-dom'

const withAuth =  (WrappedComponent) => {
  class AuthorizedComponent extends Component {
    componentDidMount() {
      if (Adapter.loggedIn && !this.props.loggedIn) {
        // auto login

      }
    }

    render() {
      if (Adapter.loggedIn && this.props.loggedIn) {
        // has token and successfully logged in
        return <WrappedComponent />
      } else if (Adapter.loggedIn && (this.props.authenticatingUser || !this.props.loggedIn)) {
        // has token and attempting log in
        // replace with loading spinner
        return <div>Loading</div>
      } else {
        // not logged in can redirect or do something else
        return <Redirect to="/" />
      }
    }
  }

  const mapStateToProps = (state) => {
    return state
  }
  // const mapDispatchToProps = { login }

  return connect(mapStateToProps, { login })(AuthorizedComponent)
} 

export default withAuth;