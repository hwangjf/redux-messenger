import React, { Component } from 'react';
import '../sass/main.scss'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <div></div>
      </div>
    );
  }
}

function mapStateToProps() {

}

export default connect()(App)
