import { geocoder } from '../GeocoderService'
import Location from '../../Types/Location'
import LocationType from '../../Types/LocationType'

describe('GeocoderService', () => {
  beforeEach(() => {
    global.fetch.resetMocks()
  })

  it('returns an array of suggested location based on a search string', async () => {
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

    const responseBody = {
      count: 2,
      nextIndex: 2,
      startIndex: 0,
      totalResults: 2,
      results: [location1, location2],
    }

    const searchText = 'duned'
    global.fetch.mockResponse(() => Promise.resolve({ body: JSON.stringify(responseBody) }))
    const response: Location[] = await geocoder.searchByName(searchText)

    expect(global.fetch.mock.calls.length).toEqual(1)
    expect(global.fetch.mock.calls[0][0]).toEqual(
      `https://geocoder.com/q/${searchText}.js?key=geocoderapikey`
    )

    expect(response.length).toEqual(2)
    expect(response[0]).toEqual(location1)
    expect(response[1]).toEqual(location2)
  })

  it('bubble the exception top the parent on a network error', async () => {
    global.fetch.mockResponse(() => {
      throw new Error('connection failed')
    })

    try {
      await geocoder.searchByName('duned')
      // this code should never be reached
      expect(false).toBeTruthy()
    } catch (error) {
      expect(error.message).toEqual('connection failed')
    }
  })
})
