import { put, call } from 'redux-saga/effects'
import { fetchLocations } from '../LocationSaga'
import { locationActions } from '../../Redux/LocationRedux'
import { geocoder } from '../../Services/GeocoderService'
import Location from '../../Types/Location'
import LocationType from '../../Types/LocationType'

jest.mock('../../Lib/Helpers.ts')

describe('LocationSaga', () => {
  it('query the geocoder service on input change', () => {
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

    const searchText = 'dunedin'
    const saga = fetchLocations(locationActions.search(searchText))
    expect(saga.next().value).toEqual(put(locationActions.request()))
    expect(saga.next().value).toEqual(call(geocoder.searchByName, searchText))
    expect(saga.next([location1]).value).toEqual(put(locationActions.success([location1])))
  })

  it('handle network errors gracefully', () => {
    const searchText = 'dunedin'
    const saga = fetchLocations(locationActions.search(searchText))
    expect(saga.next().value).toEqual(put(locationActions.request()))
    expect(saga.next().value).toEqual(call(geocoder.searchByName, searchText))
    expect(saga.throw(new Error('error')).value).toEqual(put(locationActions.failure()))
  })
})
