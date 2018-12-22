import { fork } from 'redux-saga/effects'
import { networkEventsListenerSaga } from 'react-native-offline'
import { watchLocationInput } from './LocationSaga'

export default function* root() {
  yield fork(networkEventsListenerSaga, { timeout: 2000, checkConnectionInterval: 20000 })
  yield fork(watchLocationInput)
}
