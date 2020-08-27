import * as actionTypes from '../constants/ActionTypes'
import * as actions from './index'
import {SHOW_ALL} from '../constants/FilterTypes'
import {SORT_ASC} from '../constants/SortTypes'


describe('test action creators', () => {
  it(`addTodo should create ${actionTypes.ADD_TODO} action`, () => {
    expect(actions.addTodo({title: 'Task 1', description: 'to do home work'})).toEqual({
      type: actionTypes.ADD_TODO,
      title: 'Task 1',
      description: 'to do home work',
    })
  })
  it(`editTodo should create ${actionTypes.EDIT_TODO} action`, () => {
    expect(actions.editTodo({title: 'Task 1', description: 'skip home work'})).toEqual({
      type: actionTypes.EDIT_TODO,
      title: 'Task 1',
      description: 'skip home work',
    })
  })
  it(`deleteTodo should create ${actionTypes.DELETE_TODO} action`, () => {
    expect(actions.deleteTodo(0)).toEqual({
      type: actionTypes.DELETE_TODO,
      id: 0
    })
  })
  it(`completeTodo should create ${actionTypes.COMPLETE_TODO} action`, () => {
    expect(actions.completeTodo(0)).toEqual({
      type: actionTypes.COMPLETE_TODO,
      id: 0
    })
  })
  it(`setVisibilityFilter should create ${actionTypes.SET_VISIBILITY_FILTER} action`, () => {
    expect(actions.setVisibilityFilter(SHOW_ALL)).toEqual({
      type: actionTypes.SET_VISIBILITY_FILTER,
      filter: SHOW_ALL
    })
  })
  it(`setSortOrder should create ${actionTypes.SET_SORT_ORDER} action`, () => {
    expect(actions.setSortOrder(SORT_ASC)).toEqual({
      type: actionTypes.SET_SORT_ORDER,
      sortOrder: SORT_ASC,
    })
  })
})