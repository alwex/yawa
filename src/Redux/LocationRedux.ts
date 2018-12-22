import Location from '../Types/Location'
import { AnyAction } from 'redux'
import { createAction, createAsyncAction, getType } from 'typesafe-actions'

export const SEARCH_LOCATION_CHANGE = '@location/SEARCH_LOCATION_CHANGE'
export const FETCH_LOCATIONS_REQUEST = '@locations/FETCH_LOCATIONS_REQUEST'
export const FETCH_LOCATIONS_SUCCESS = '@locations/FETCH_LOCATIONS_SUCCESS'
export const FETCH_LOCATIONS_FAILURE = '@locations/FETCH_LOCATIONS_FAILURE'

const locationSearchAction = createAction(SEARCH_LOCATION_CHANGE, resolve => {
  return (name: string) => resolve(name)
})

const locationFetchActions = createAsyncAction(
  FETCH_LOCATIONS_REQUEST,
  FETCH_LOCATIONS_SUCCESS,
  FETCH_LOCATIONS_FAILURE
)<void, Location[], void>()

export const locationActions = {
  search: locationSearchAction,
  ...locationFetchActions,
}

export interface LocationState {
  fetching: boolean
  error: boolean
  locations: Location[]
}

const INITIAL_STATE:LocationState = {
  fetching: false,
  error: false,
  locations: [],
}

export const reducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case getType(locationActions.request): {
      return {
        ...state,
        fetching: true,
        error: false,
      }
    }
    case getType(locationActions.failure): {
      return {
        ...state,
        fetching: false,
        error: true,
      }
    }
    case getType(locationActions.success): {
      return {
        ...state,
        locations: action.payload,
        fetching: false,
        error: false,
      }
    }
  }
  return state
}
