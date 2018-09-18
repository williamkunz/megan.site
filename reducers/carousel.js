import { CHANGE_CURRENT_PAGE } from 'constants'

const initialState = {
  currentPage: 'print',
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_CURRENT_PAGE: 
      return {
        ...state,
        currentPage: action.currentPage,
      }

    default:
      return state
  }
}