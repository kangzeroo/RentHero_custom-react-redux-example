import {
  INCREMENT,
} from '../action_types'

export const incrementCounter = (dispatch) => (count) => {
  return dispatch({
    type: INCREMENT,
    payload: count,
  })
}
