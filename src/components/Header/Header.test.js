import React from 'react'
import { mount } from 'enzyme'
import Header from './Header'

describe('Header component', () => {
  let header
  it('should be defined', () => {
    expect(Header).toBeDefined()
  })
  describe('Rendering', () => {
    beforeEach(() => {
      header = mount(<Header />)
    })
    it('should have clickable links', () => {
      const links = header.find('.link')
      expect(links.at(0).simulate('click'))
    })
  })
})

