import { combineReducers } from 'redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { reducer as networkReducer } from 'react-native-offline'
import createSagaMiddleware from 'redux-saga'
import {UIState, reducer as UIReducer} from './UIRedux'
import { LocationState, reducer as locationReducer } from './LocationRedux'
import { WeatherState, reducer as weatherReducer } from './WeatherRedux'
import rootSaga from '../Sagas'

export interface AppState {
  network: any
  ui: UIState
  locations: LocationState
  weather: WeatherState
}

const reducers = combineReducers({
  network: networkReducer,
  ui: UIReducer,
  locations: locationReducer,
  weather: weatherReducer,
})

const enhancers = []
const middlewares = []

const sagaMiddleware = createSagaMiddleware()
middlewares.push(sagaMiddleware)

enhancers.push(applyMiddleware(...middlewares))
if (__DEV__ && window && window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}

export const store = createStore(reducers, compose(...enhancers))
const sagaManager = sagaMiddleware.run(rootSaga)
