import { takeEvery, put, call, select } from 'redux-saga/effects'
import { FETCH_WEATHER_REQUEST, weatherActions } from '../Redux/WeatherRedux'
import { weather } from '../Services/WeatherService'
import { AppState } from '../Redux'
import WeatherData from '../Types/WeatherData'
import Location from '../Types/Location'
import { showMessage } from '../Lib/Helpers'

const currentLocationSelector = (state: AppState) => state.ui.currentLocation

export function* watchLoadWeather() {
  yield takeEvery(FETCH_WEATHER_REQUEST, fetchWeather)
}

function* fetchWeather() {
  try {
    const location: Location = yield select(currentLocationSelector)
    const weatherData: WeatherData[] = yield call(weather.findforLocation, location)
    yield put(weatherActions.success(weatherData))
  } catch (error) {
    showMessage('No connection available')
    yield put(weatherActions.failure())
  }
}
