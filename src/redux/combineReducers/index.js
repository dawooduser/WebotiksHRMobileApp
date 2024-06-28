import { combineReducers } from 'redux'
import spinner from '../reducers/spinner'
import user from '../reducers/user'

const rootReducer = combineReducers({ spinner, user,  });

export default rootReducer