import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchCurrentUser from './../actions'
import Adapter from '../../adapters/adapter';
import { Redirect } from 'react-router-dom'

const withAuth =  (WrappedComponent) => {
  class extends AuthorizedComponent {
    componentDidMount() {
      if (Adapter.loggedIn && !this.props.loggedIn) {
        // login
      }
    }

    render() {
      if (Adapter.loggedIn && this.props.loggedIn) {
        // has token and successfully logged in
        <WrappedComponent />
      } else if (Adapter.loggedIn && (this.props.authenticatingUser || !this.props.loggedIn)) {
        // has token and attempting log in
        return <div>Loading</div>
      } else {
        // not logged in can redirect or do something else
        <Redirect to="/signup" />
      }
    }
  }

  const mapDispatchToProps = { fetchCurrentUser }

  return connect(mapStateToProps, { fetchCurrentUser })(AuthorizedComponent)
} 

export default withAuth;