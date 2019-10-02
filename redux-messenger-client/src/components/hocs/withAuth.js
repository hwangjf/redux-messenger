import React, { Component } from 'react'
import { connect } from 'react-redux'
import { autoLogin } from '../../actions/user'
import Adapter from '../../adapters/Adapter';
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import ClipLoader from 'react-spinners/ClipLoader';

const withAuth = (WrappedComponent) => {
  class AuthorizedComponent extends Component {
    componentDidMount() {
      if (Adapter.hasToken() && !this.props.isLoggedIn) {
        // this.props.autoLogin()
      }
    }

    render() {
      if (Adapter.hasToken() && this.props.isLoggedIn) {
        // has token and successfully logged in
        return <WrappedComponent {...this.props} />
      } else if (Adapter.hasToken() && !this.props.isLoggedIn) {
        // has token and attempting log in
        return <ClipLoader />
      } else {
        // not logged in can redirect or do something else
        return <Redirect to="/" />
      }
    }

    // componentWillUnmount() {
    //   console.log('hi')
    //   localStorage.setItem('is','done')
    // }
  }

  const mapStateToProps = (state) => {
    return {
      isLoggedIn: !!state.user
    }
  }

  return connect(mapStateToProps, { autoLogin })(AuthorizedComponent)
} 

export default withAuth;