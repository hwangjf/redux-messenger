import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login, autoLogin } from '../../actions/user'
import { Adapter } from '../../adapters';
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'

const withAuth = (WrappedComponent) => {
  class AuthorizedComponent extends Component {
    componentDidMount() {
      if (Adapter.isLoggedIn() && !this.props.isLoggedIn) {
        this.props.autoLogin()
      }
    }

    render() {
      if (Adapter.isLoggedIn() && this.props.isLoggedIn) {
        // has token and successfully logged in
        return <WrappedComponent />
      } else if (Adapter.isLoggedIn() && (this.props.isLoading || !this.props.isLoggedIn)) {
        // has token and attempting log in
        // TODO:replace with loading spinner
        return <div>Loading</div>
      } else {
        // not logged in can redirect or do something else
        return <Redirect to="/" />
      }
    }
  }

  const mapStateToProps = (state) => {
    console.log(state)
    return {
      isLoggedIn: state.userReducer.isLoggedIn,
      isLoading: state.userReducer.authenticatingUser
    }
  }

  return withRouter(connect(mapStateToProps, { autoLogin })(AuthorizedComponent))
} 

export default withAuth;