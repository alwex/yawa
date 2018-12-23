import React from 'react'
import renderer from 'react-test-renderer'
import EmptyContent from '../EmptyContent'

describe('EmptyContent', () => {
  it('render correctly', () => {
    const component = renderer
      .create(<EmptyContent text="hello" iconName="account" iconType="MaterialCommunityIcons" />)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
