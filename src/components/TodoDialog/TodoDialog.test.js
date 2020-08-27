import React from 'react'
import { mount } from 'enzyme'
import TodoDialog from './TodoDialog'

describe('TodoDialog component', () => {
  let tododialog
  it('should be defined', () => {
    expect(TodoDialog).toBeDefined()
  })
  describe('Rendering', () => {
    beforeEach(() => {
      tododialog = mount(<TodoDialog />)
    })
  })
})
