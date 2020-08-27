import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  DELETE_ALL_TODOS,
  COMPLETE_TODO,
} from '../constants/ActionTypes';
import {todoList} from './initialState'

export default function todos(state = todoList, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          title: action.title,
          description: action.description,
          completed: false,
        }
      ]

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, title: action.title, description: action.description } :
          todo
      )

    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )

    case DELETE_ALL_TODOS:
      return []

    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, completed: !todo.completed } :
          todo
      )

    default:
      return state
  }
}