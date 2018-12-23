import React from 'react'
import renderer from 'react-test-renderer'
import SearchLocationInput from '../SearchLocationInput'

describe('SearchLocationInput', () => {
  it('render correctly', () => {
    const component = renderer.create(<SearchLocationInput searchLocations={() => {}} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
