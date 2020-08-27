import React from 'react'
import { mount } from 'enzyme'
import TodoItem from './TodoItem'

describe('TodoItem component', () => {
  let todoitem
  it('should be defined', () => {
    expect(TodoItem).toBeDefined()
  })
  describe('Rendering', () => {
    beforeEach(() => {
      todoitem = mount(<TodoItem />)
    })
  })
})
