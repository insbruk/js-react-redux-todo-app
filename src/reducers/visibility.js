import {
  SET_VISIBILITY_FILTER,
  SET_SORT_BY_FIELD,
  SET_SORT_ORDER,
} from '../constants/ActionTypes'
import {visibilitySettings} from './initialState';

const visibility = (state = visibilitySettings, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        filter: action.filter
      }

    case SET_SORT_BY_FIELD:
      return {
        ...state,
        sortBy: action.sortBy
      }

    case SET_SORT_ORDER:
      return {
        ...state,
        sortOrder: action.sortOrder
      }

    default:
      return state
  }
}

export default visibility