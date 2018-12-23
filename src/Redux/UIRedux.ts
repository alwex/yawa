import Location from '../Types/Location'
import { createAction, getType } from 'typesafe-actions'
import { AnyAction } from 'redux'
import WeatherData from '../Types/WeatherData'

export const UI_SELECT_CURRENT_LOCATION = '@ui/UI_SELECT_CURRENT_LOCATION'
export const UI_SELECT_CURRENT_FORECAST = '@ui/UI_SELECT_CURRENT_FORECAST'

const selectCurrentLocation = createAction(UI_SELECT_CURRENT_LOCATION, resolve => {
  return (location: Location) => resolve(location)
})

const selectCurrentForecast = createAction(UI_SELECT_CURRENT_FORECAST, resolve => {
  return (forecast: WeatherData) => resolve(forecast)
})

export const uiActions = {
  selectCurrentLocation: selectCurrentLocation,
  selectCurrentForecast: selectCurrentForecast,
}

export interface UIState {
  currentLocation?: Location
  currentForecast?: WeatherData
}

const INITIAL_STATE: UIState = {}

export const reducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case getType(uiActions.selectCurrentLocation): {
      return {
        ...state,
        currentLocation: action.payload,
      }
    }
    case getType(uiActions.selectCurrentForecast): {
      return {
        ...state,
        currentForecast: action.payload,
      }
    }
  }
  return state
}
