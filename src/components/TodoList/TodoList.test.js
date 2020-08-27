import React from 'react'
import { mount } from 'enzyme'
import TodoList from './TodoList'

describe('TodoList component', () => {
  let todolist
  it('should be defined', () => {
    expect(TodoList).toBeDefined()
  })
  describe('Rendering', () => {
    beforeEach(() => {
      todolist = mount(<TodoList />)
    })
  })
})
