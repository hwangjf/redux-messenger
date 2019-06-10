import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login, autoLogin } from '../../actions/user'
import { Adapter } from '../../adapters';
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'

const withAuth =  (WrappedComponent) => {
  class AuthorizedComponent extends Component {
    componentDidMount() {
      if (Adapter.isLoggedIn() && !this.props.isLoggedIn) {
        // auto login
        this.props.autoLogin()
      }
    }

    render() {
      console.log(this.props)
      console.log(Adapter.isLoggedIn && (this.props.isLoading || !this.props.loggedIn))
      if (Adapter.isLoggedIn() && this.props.loggedIn) {
        // has token and successfully logged in
        return <WrappedComponent />
      } else if (Adapter.isLoggedIn() && (this.props.isLoading || !this.props.loggedIn)) {
        // has token and attempting log in
        // replace with loading spinner
        return <div>Loading</div>
      } else {
        // not logged in can redirect or do something else
        debugger
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
  // const mapDispatchToProps = { login }

  return withRouter(connect(mapStateToProps, { autoLogin })(AuthorizedComponent))
} 

export default withAuth;