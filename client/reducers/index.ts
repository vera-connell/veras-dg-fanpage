import { combineReducers } from 'redux'
import songDisplay from './songDisplay'
import errorMessage from './errorMessage'

// import stuff from './stuff'

export default combineReducers({
  songDisplay,
  errorMessage,
})
