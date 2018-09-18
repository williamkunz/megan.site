import { combineReducers } from 'redux'

import carousel from './carousel'

const allReducers = combineReducers({
  carousel,
})

export default (state, action) => allReducers(state, action)