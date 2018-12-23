import { AnyAction } from 'redux'
import WeatherData from '../Types/WeatherData'
import { createAsyncAction, getType } from 'typesafe-actions'
import Location from '../Types/Location'
import {
  FETCH_LOCATIONS_FAILURE,
  FETCH_LOCATIONS_REQUEST,
  FETCH_LOCATIONS_SUCCESS,
  locationActions,
} from './LocationRedux'
import WeatherResponse from '../Types/WeatherResponse'

export const FETCH_WEATHER_REQUEST = '@weather/FETCH_WEATHER_REQUEST'
export const FETCH_WEATHER_SUCCESS = '@weather/FETCH_WEATHER_SUCCESS'
export const FETCH_WEATHER_FAILURE = '@weather/FETCH_WEATHER_FAILURE'

const weatherFetchActions = createAsyncAction(
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE
)<void, WeatherData[], void>()

export const weatherActions = {
  ...weatherFetchActions,
}

export interface WeatherState {
  fetching: boolean
  error: boolean
  forecasts: WeatherData[]
}

const INITIAL_STATE: WeatherState = {
  fetching: false,
  error: false,
  forecasts: [],
}

export const reducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case getType(weatherActions.request): {
      return {
        ...state,
        forecasts: [],
        fetching: true,
        error: false,
      }
    }
    case getType(weatherActions.failure): {
      return {
        ...state,
        forecasts: [],
        fetching: false,
        error: true,
      }
    }
    case getType(weatherActions.success): {
      return {
        ...state,
        forecasts: action.payload,
        fetching: false,
        error: false,
      }
    }
  }
  return state
}
