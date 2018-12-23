import React from 'react'
import renderer from 'react-test-renderer'
import WeatherItem from '../WeatherItem'

describe('WeatherItem', () => {
  it('render correctly', () => {
    const component = renderer
      .create(
        <WeatherItem
          temp={15.2}
          humidity={60.5}
          onPress={() => {}}
          locationName="Dunedin"
          date="2018-12-25 05:05:06"
          description="few shower"
          iconCode="50d"
        />
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
