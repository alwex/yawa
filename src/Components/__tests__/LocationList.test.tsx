import React from 'react'
import renderer from 'react-test-renderer'
import LocationList from '../LocationList'
import Location from '../../Types/Location'
import LocationType from '../../Types/LocationType'

describe('LocationList', () => {
  it('render correctly', () => {
    const location1: Location = {
      alternative_names: 'Dunedin',
      boundingbox: [-77.4369278, 37.2065392, -77.4369278, 37.2065392],
      display_name: 'Dunedin, Petersburg, Virginia',
      lon: -77.4369278,
      lat: 37.2065392,
      name: 'Dunedin',
      name_suffix: 'Petersburg, Virginia',
      type: LocationType.city,
    }

    const location2: Location = {
      alternative_names: 'Dunedin',
      boundingbox: [-5.3451748, 55.5609028, -5.3451748, 55.5609028],
      display_name: 'Dunedin, North Ayrshire, Scotland',
      lon: -5.3451748,
      lat: 55.5609028,
      name: 'Dunedin',
      name_suffix: 'North Ayrshire, Scotland',
      type: LocationType.county,
    }

    const locations = [location1, location2]

    const component = renderer
      .create(<LocationList locations={locations} onLocationPress={() => {}} />)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
