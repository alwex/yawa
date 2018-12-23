import React from 'react'
import renderer from 'react-test-renderer'
import ErrorContent from '../ErrorContent'

describe('ErrorContent', () => {
  it('render correctly', () => {
    const component = renderer.create(<ErrorContent onRetry={() => {}} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
