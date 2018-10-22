// json
import digitalJson from '../constants/digital'
import printJson from '../constants/print'

const initialState = {
  digital: digitalJson,
  print: printJson,
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state
  }
}