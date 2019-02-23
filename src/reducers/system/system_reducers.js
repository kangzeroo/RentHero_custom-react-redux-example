import { store } from 'redux'
import {
  INCREMENT,
} from '../../actions/action_types'

const INITIAL_STATE = {
  count: 0
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      const newState = {
        ...state,
        count: state.count + action.payload
      }
      console.log(newState)
      return newState
    default:
      return state
  }
}
