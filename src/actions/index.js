import * as actionTypes from '../constants/ActionTypes'


export const addTodo = ({title, description}) => ({type: actionTypes.ADD_TODO, title, description})
export const editTodo = ({id, title, description}) => ({type: actionTypes.EDIT_TODO, id, title, description})
export const deleteTodo = (id) => ({type: actionTypes.DELETE_TODO, id})
export const completeTodo = (id) => ({type: actionTypes.COMPLETE_TODO, id})
export const setVisibilityFilter = (filter) => ({type: actionTypes.SET_VISIBILITY_FILTER, filter})
export const setSortOrder = (sortOrder) => ({type: actionTypes.SET_SORT_ORDER, sortOrder: sortOrder})
