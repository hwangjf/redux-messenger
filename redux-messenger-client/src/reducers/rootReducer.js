import { combineReducers } from 'redux';

import usersReducers from './users'
import conversationsReducers from './conversations'

const rootReducer = combineReducers({
  ...usersReducers,
  ...conversationsReducers
})

export default rootReducer