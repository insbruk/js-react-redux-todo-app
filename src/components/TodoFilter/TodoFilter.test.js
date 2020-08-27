import React from 'react'
import { mount } from 'enzyme'
import TodoFilter from './TodoFilter'

describe('TodoFilter component', () => {
  let todofilter
  it('should be defined', () => {
    expect(TodoFilter).toBeDefined()
  })
  describe('Rendering', () => {
    beforeEach(() => {
      todofilter = mount(<TodoFilter />)
    })
  })
})
