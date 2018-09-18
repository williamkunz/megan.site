import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from '../reducers'

export const initStore = initialState => {
  console.log(initialState)

  return createStore(
    reducers,
    initialState,
    composeWithDevTools(),
  )
}