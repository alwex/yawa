import React from 'react'
import renderer from 'react-test-renderer'
import Loader from '../Loader'

describe('Loader', () => {
  it('render correctly', () => {
    const component = renderer.create(<Loader />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
