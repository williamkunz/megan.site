import { CHANGE_CURRENT_PAGE, CHANGE_MOVEMENT_DIR } from '../constants'

const initialState = {
  currentPage: 'print',
  movementDir: null,
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_CURRENT_PAGE: 
      return {
        ...state,
        currentPage: action.currentPage,
      }

    case CHANGE_MOVEMENT_DIR:
      return {
        ...state,
        movementDir: action.movementDir,
      }

    default:
      return state
  }
}