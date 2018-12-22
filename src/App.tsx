import React from 'react'
import { Root } from 'native-base'
import { Provider } from 'react-redux'
import { store } from './Redux'
import MainNavigation from './Navigation/MainNavigation'

interface AppProps {}

export default class App extends React.Component<AppProps> {
  render() {
    return (
      <Root>
        <Provider store={store}>
          <MainNavigation />
        </Provider>
      </Root>
    )
  }
}
