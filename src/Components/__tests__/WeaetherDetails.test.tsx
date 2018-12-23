import React from 'react'
import renderer from 'react-test-renderer'
import WeatherDetails from '../WeatherDetails'

describe('WeatherDetails', () => {
  it('render correctly', () => {
    const component = renderer
      .create(
        <WeatherDetails
          humidity={12}
          locationName="Dunedin"
          date="2018-12-25 08:00:00"
          description="light rain"
          iconCode="02d"
          pressure={50.25}
          temp={12.2}
          temp_max={15.5}
          temp_min={9.5}
          locationSuffix="South Island"
          wind={21.2}
        />
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
