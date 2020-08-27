import {
  SET_VISIBILITY_FILTER,
  SET_SORT_BY_FIELD,
  SET_SORT_ORDER,
} from '../constants/ActionTypes'
import {visibilitySettings} from './initialState';

const visibility = (state = visibilitySettings, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      state.filter = action.filter
      return state

    case SET_SORT_BY_FIELD:
      state.sortBy = action.sortBy
      return state

    case SET_SORT_ORDER:
      state.sortOrder = action.sortOrder
      return state

    default:
      return state
  }
}

export default visibility