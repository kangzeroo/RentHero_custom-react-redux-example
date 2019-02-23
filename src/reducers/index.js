import { combineReducers } from 'redux'
import systemReducers from './system/system_reducers'

export default combineReducers({
  system: systemReducers,
})
