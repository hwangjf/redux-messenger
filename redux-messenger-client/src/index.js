import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { ActionCableProvider } from 'react-actioncable-provider'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import configureStore from './store'

const store = configureStore()

ReactDOM.render(
  <ActionCableProvider url={'ws://localhost:4000/cable'}>
    <Provider store={store} >
      <Router>
        <App />
      </Router>
    </Provider>
  </ActionCableProvider>,
  document.getElementById('root')
);
