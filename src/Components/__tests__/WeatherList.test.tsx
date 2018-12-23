import React from 'react'
import renderer from 'react-test-renderer'
import WeatherList from '../WeatherList'
import Location from '../../Types/Location'
import LocationType from '../../Types/LocationType'
import WeatherData from '../../Types/WeatherData'

describe('Loader', () => {
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

    const forecast1 = {
      dt: 1545609600,
      main: {
        temp: 20.06,
        temp_min: 20.06,
        temp_max: 20.06,
        pressure: 990.72,
        sea_level: 1030.52,
        grnd_level: 990.72,
        humidity: 73,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.59,
        deg: 67.5001,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2018-12-24 00:00:00',
    }

    const forecast2 = {
      dt: 1545620400,
      main: {
        temp: 20.84,
        temp_min: 20.84,
        temp_max: 20.84,
        pressure: 990.42,
        sea_level: 1030.05,
        grnd_level: 990.42,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '02d',
        },
      ],
      clouds: {
        all: 8,
      },
      wind: {
        speed: 1.83,
        deg: 93.0087,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2018-12-24 03:00:00',
    }

    const weatherData: WeatherData[] = [forecast1 as WeatherData, forecast2 as WeatherData]

    const component = renderer
      .create(<WeatherList onPress={() => {}} location={location1} forecasts={weatherData} />)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
