import { AnyAction } from 'redux'
import WeatherData from '../Types/WeatherData'

export interface WeatherState {
  fetching: boolean
  error: boolean
  weathers?: WeatherData
}

const INITIAL_STATE: WeatherState = {
  fetching: false,
  error: false,
}

export const reducer = (state = INITIAL_STATE, action: AnyAction) => {
  return state
}
