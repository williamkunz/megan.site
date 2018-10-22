import { combineReducers } from 'redux'

import assets from './assets'
import carousel from './carousel'

const allReducers = combineReducers({
  assets,
  carousel,
})

export default (state, action) => allReducers(state, action)