import React from 'react'
import { mount } from 'enzyme'
import Footer from './Footer'

describe('Footer component', () => {
  let footer
  it('should be defined', () => {
    expect(Footer).toBeDefined()
  })
  describe('Rendering', () => {
    beforeEach(() => {
      footer = mount(<Footer />)
    })
  })
})
