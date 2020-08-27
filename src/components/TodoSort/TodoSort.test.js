import React from 'react'
import { mount } from 'enzyme'
import TodoSort from './TodoSort'

describe('TodoSort component', () => {
  let todosort
  it('should be defined', () => {
    expect(TodoSort).toBeDefined()
  })
  describe('Rendering', () => {
    beforeEach(() => {
      todosort = mount(<TodoSort />)
    })
  })
})
