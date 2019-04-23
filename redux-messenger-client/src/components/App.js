import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Navbar from './navbar/Navbar.js'
import Home from './home/Home.js'
import Signup from './signup/Signup.js'
import '../sass/main.scss'
import { connect } from 'react-redux'

class App extends Component {
  state = {
    signup: false
  }

  componentDidMount() {

  }

  handleClickLogin = () => {

  }

  render() {
    return (
      <>
        <Navbar handleClickLogin={this.handleClickLogin}/>
        <div>
          <Route exact path="/" component={ Home } />
          <Route path="/signup" component={ Signup } />
        </div>
      </>
    );
  }
}

// function mapStateToProps() {
//
// }

// export default connect(null)(App)
export default App;
