import { translateIcon } from '../Helpers'

describe('Helpers', () => {
  it('correctly map openweathermap icons to materialcommunity icons', () => {
    expect(translateIcon('01d')).toEqual('weather-sunny')
    expect(translateIcon('02d')).toEqual('weather-partlycloudy')
    expect(translateIcon('03d')).toEqual('weather-cloudy')
    expect(translateIcon('04d')).toEqual('weather-cloudy')
    expect(translateIcon('09d')).toEqual('weather-pouring')
    expect(translateIcon('10d')).toEqual('weather-rainy')
    expect(translateIcon('11d')).toEqual('weather-lightning')
    expect(translateIcon('13d')).toEqual('weather-snowy')
    expect(translateIcon('50d')).toEqual('weather-fog')

    expect(translateIcon('01n')).toEqual('weather-night')
    expect(translateIcon('02n')).toEqual('weather-partlycloudy')
    expect(translateIcon('03n')).toEqual('weather-cloudy')
    expect(translateIcon('04n')).toEqual('weather-cloudy')
    expect(translateIcon('09n')).toEqual('weather-pouring')
    expect(translateIcon('10n')).toEqual('weather-rainy')
    expect(translateIcon('11n')).toEqual('weather-lightning')
    expect(translateIcon('13n')).toEqual('weather-snowy')
    expect(translateIcon('50n')).toEqual('weather-fog')

    expect(translateIcon('unknown')).toEqual('weather-sunny')
  })
})
