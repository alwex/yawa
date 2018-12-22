import Location from '../Types/Location'
import { createAction, getType } from 'typesafe-actions'
import { AnyAction } from 'redux'

export const UI_SELECT_CURRENT_LOCATION = '@ui/UI_SELECT_CURRENT_LOCATION'

const selectCurrentLocation = createAction(UI_SELECT_CURRENT_LOCATION, resolve => {
  return (location: Location) => resolve(location)
})

export const uiActions = {
  selectCurrentLocation: selectCurrentLocation,
}

export interface UIState {
  currentLocation?: Location
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
  }
  return state
}
