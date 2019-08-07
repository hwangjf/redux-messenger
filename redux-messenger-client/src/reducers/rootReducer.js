import { combineReducers } from 'redux';

import usersReducers from './users'

const rootReducer = combineReducers({
  ...usersReducers
})

export default rootReducer