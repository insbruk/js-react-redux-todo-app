import todos from './todos'
import {
  addTodo,
  editTodo,
  deleteTodo,
  completeTodo,
} from '../actions'
import * as types from '../constants/ActionTypes'

const todoList = [
  {
    id: 0,
    title: '#1 task',
    description: 'Add a task with title',
    completed: false
  }
]

describe('test reducers', () => {
  it('should handle initial state', () => {
    expect(todos(todoList, {})).toEqual([...todoList])
  })

  it(`should handle ${types.ADD_TODO}`, () => {
    expect(todos(todoList, addTodo({title: 'test', description: 'test'}))).toEqual([
      {
        id: 0,
        title: '#1 task',
        description: 'Add a task with title',
        completed: false
      },
      {
        id: 1,
        title: 'test',
        description: 'test',
        completed: false,
      }
    ])
  })

  it(`should handle ${types.EDIT_TODO}`, () => {
    expect(todos(todoList, editTodo({id: 0, title: 'test', description: 'test'}))).toEqual([
      {
        id: 0,
        title: 'test',
        description: 'test',
        completed: false,
      }
    ])
  })

  it(`should handle ${types.DELETE_TODO}`, () => {
    expect(todos(todoList, deleteTodo(0))).toEqual([])
  })

  it(`should handle ${types.COMPLETE_TODO}`, () => {
    expect(todos(todoList, completeTodo(0))).toEqual([
      {
        id: 0,
        title: '#1 task',
        description: 'Add a task with title',
        completed: true
      }
    ])
  })
})
