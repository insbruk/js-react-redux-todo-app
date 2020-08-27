import React from 'react'
import { mount } from 'enzyme'
import App from './App'

describe('App component', () => {
  let app
  it('should be defined', () => {
    expect(App).toBeDefined()
  })
  describe('Rendering', () => {
    beforeEach(() => {
      app = mount(<App />)
    })
  })
})
