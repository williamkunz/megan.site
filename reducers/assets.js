// json
import webJson from '../constants/web'
import graphicJson from '../constants/graphic'

const initialState = {
  web: webJson,
  graphic: graphicJson,
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state
  }
}