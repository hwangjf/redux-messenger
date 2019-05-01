import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchCurrentUser from './../actions/users'
import Adapter from '../../adapters/adapter';
import { Redirect } from 'react-router-dom'

const withAuth =  (WrappedComponent) => {
  class AuthorizedComponent extends Component {
    componentDidMount() {
      if (Adapter.loggedIn && !this.props.loggedIn) {
        // login
      }
    }

    render() {
      if (Adapter.loggedIn && this.props.loggedIn) {
        // has token and successfully logged in
        return <WrappedComponent />
      } else if (Adapter.loggedIn && (this.props.authenticatingUser || !this.props.loggedIn)) {
        // has token and attempting log in
        return <div>Loading</div>
      } else {
        // not logged in can redirect or do something else
        return <Redirect to="/signup" />
      }
    }
  }

  const mapStateToProps = () => {
    return null
  }
  // const mapDispatchToProps = { fetchCurrentUser }

  return connect(mapStateToProps, { fetchCurrentUser })(AuthorizedComponent)
} 

export default withAuth;