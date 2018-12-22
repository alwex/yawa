import { throttle, put, call } from 'redux-saga/effects'
import { SEARCH_LOCATION_CHANGE, locationActions } from '../Redux/LocationRedux'
import { AnyAction } from 'redux'
import { geocoder } from '../Services/GeocoderService'

export function* watchLocationInput() {
  yield throttle(500, SEARCH_LOCATION_CHANGE, fetchLocations)
}

function* fetchLocations(input: AnyAction) {
  const name:string = input.payload
  try {
    yield put(locationActions.request())
    let locations = []
    if (name.length > 2) {
      locations = yield call(geocoder.searchByName, name)
    }
    yield put(locationActions.success(locations))
  } catch (error) {
    yield put(locationActions.failure())
  }
}
