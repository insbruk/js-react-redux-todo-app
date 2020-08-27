import React from 'react'
import { mount } from 'enzyme'
import TodoAdd from './TodoAdd'

describe('TodoAdd component', () => {
  let todoadd
  it('should be defined', () => {
    expect(TodoAdd).toBeDefined()
  })
  describe('Rendering', () => {
    beforeEach(() => {
      todoadd = mount(<TodoAdd />)
    })
  })
})
